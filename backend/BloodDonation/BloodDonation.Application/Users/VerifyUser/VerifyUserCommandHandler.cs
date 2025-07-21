using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Users.Errors;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.Users.VerifyUser;

public class VerifyUserCommandHandler(IDbContext context)
    : ICommandHandler<VerifyUserCommand>
{
    public async Task<Result> Handle(VerifyUserCommand command, CancellationToken cancellationToken)
    {
        var email = VerifyTokenHelper.Decode(command.Token);

        var user = await context.Users.FirstOrDefaultAsync(u => u.Email == email, cancellationToken);
        if (user == null)
            return Result.Failure(UserErrors.NotFoundByEmail);;

        if (!user.IsVerified)
        {
            user.IsVerified = true;
            await context.SaveChangesAsync(cancellationToken);
        }

        return Result.Success();
    }
}