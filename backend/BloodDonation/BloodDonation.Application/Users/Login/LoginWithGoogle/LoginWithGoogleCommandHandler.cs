﻿using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Users;
using BloodDonation.Domain.Users.Errors;
using Google.Apis.Auth;
using Microsoft.EntityFrameworkCore;


namespace BloodDonation.Application.Users.Login.LoginWithGoogle;

public sealed class LoginWithGoogleCommandHandler(
    IDbContext context,
    ITokenProvider tokenProvider,
    IPayload payload
) : ICommandHandler<LoginWithGoogleCommand, LoginWithGoogleResponse>
{
    public async Task<Result<LoginWithGoogleResponse>> Handle(LoginWithGoogleCommand command, CancellationToken cancellationToken)
    {
        GoogleJsonWebSignature.Payload googlePayload;
        try
        {
            var settings = new GoogleJsonWebSignature.ValidationSettings()
            {
                Audience = new[] { payload.GoogleClientId }
            };
            googlePayload = await GoogleJsonWebSignature.ValidateAsync(command.IdToken, settings);
        }
        catch (Exception)
        {
            return Result.Failure<LoginWithGoogleResponse>(UserErrors.InvalidGoogleToken);
        }

        // Tìm user theo email
        var email = googlePayload.Email?.Trim().ToLower();
        if (email is null)
            return Result.Failure<LoginWithGoogleResponse>(UserErrors.InvalidGoogleToken);

        var user = await context.Users.Include(u => u.RefreshTokens)
            .SingleOrDefaultAsync(u => u.Email.ToLower() == email, cancellationToken);

        if (user is null)
        {
            // Tạo user mới
            user = new User
            {
                UserId = Guid.NewGuid(),
                Email = email,
                Name = googlePayload.Name ?? email,
                Role = UserRole.Member, // hoặc role mặc định
                Status = UserStatus.Active,
                // Nếu có các trường bắt buộc khác, set mặc định hoặc null
                Password = null, // hoặc tạo password ngẫu nhiên nếu cần
                IsVerified = true,
                RefreshTokens = new List<RefreshToken>()
            };

            context.Users.Add(user);
            await context.SaveChangesAsync(cancellationToken);
        }
        else
        {
            if (user.Status == UserStatus.InActive)
                return Result.Failure<LoginWithGoogleResponse>(UserErrors.InActive);
        }

        // Tạo access token
        string accessToken = tokenProvider.Create(user);

        // Tạo refresh token mới
        var refreshToken = new RefreshToken
        {
            Id = Guid.NewGuid(),
            UserId = user.UserId,
            Token = tokenProvider.GenerateRefreshToken(),
            Expires = DateTime.UtcNow.AddDays(1)
        };

        // Xóa refresh token cũ
        context.RefreshTokens.RemoveRange(user.RefreshTokens);
        context.RefreshTokens.Add(refreshToken);

        await context.SaveChangesAsync(cancellationToken);

        return new LoginWithGoogleResponse
        {
            AccessToken = accessToken,
            RefreshToken = refreshToken.Token,
            Name = user.Name,
            Email = user.Email,
            Role = user.Role.ToString()
        };
    }
}
