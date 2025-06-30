
using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Users.Errors;
using ClaimRequest.Application.Users.ActivateUser;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.Users.ActivateUser;

public class ActivateUserCommandHandler(
    IDbContext context,
    IPasswordHasher passwordHasher) : ICommandHandler<ActivateUserCommand, ActivateUserCommandResponse>
{
    public async Task<Result<ActivateUserCommandResponse>> Handle(ActivateUserCommand command,
        CancellationToken cancellationToken)
    {
        var user = await context.Users.FirstOrDefaultAsync(u => u.Email == command.Email, cancellationToken);
        if (user == null)
        {
            return Result.Failure<ActivateUserCommandResponse>(UserErrors.NotFoundByEmail);
        }

        if (!user.IsVerified)
        {
            user.IsVerified = true;
            user.Password = passwordHasher.Hash(command.NewPassword);
        }
        
        await context.SaveChangesAsync(cancellationToken);
        return Result.Success(new ActivateUserCommandResponse()
        {
            Email = command.Email
        });
    }
}