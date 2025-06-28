using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Users.Login;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Users;
using BloodDonation.Domain.Users.Errors;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.Users.ForgetPassword;

public sealed class ForgetPasswordCommandHandler(
    IDbContext context,
    ITokenProvider tokenProvider,
    IEmailSender emailSender
) : ICommandHandler<ForgetPasswordCommand, TokenForgetPasswordResponse>
{
    public async Task<Result<TokenForgetPasswordResponse>> Handle(ForgetPasswordCommand command, CancellationToken cancellationToken)
    {
        var user = await context.Users.SingleOrDefaultAsync(u => u.Email.ToLower() == command.Email.ToLower(), cancellationToken);
        if (user == null)
            return Result.Failure<TokenForgetPasswordResponse>(UserErrors.NotFoundByEmail);

        // Tạo token reset mật khẩu
        var resetToken = tokenProvider.GeneratePasswordResetToken();

        // TODO: Lưu token vào DB kèm userId và thời hạn (bạn cần tạo bảng hoặc entity PasswordResetTokens)

        // Tạo link reset mật khẩu (ví dụ)
        var resetLink = $"https://192.168.1.89:5000/reset-password?token={Uri.EscapeDataString(resetToken)}";

        // Gửi email
        var emailBody = $"Click <a href='{resetLink}'>here</a> to reset your password.";
        await emailSender.SendEmailAsync(user.Email, "Reset your password", emailBody);

        // Trả về thành công (có thể trả về token hoặc message)
        return Result.Success(new TokenForgetPasswordResponse
        {
            ReSetToken = resetToken,
            Role = user.Role
        });
    }
}