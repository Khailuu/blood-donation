using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Users.Errors;

namespace BloodDonation.Application.Users.ChangePassword
{
    public class ChangePasswordCommandHandler(IDbContext context, IUserContext userContext,
         IPasswordHasher passwordHasher
         ) : ICommandHandler<ChangePasswordCommand>
    {
        public async Task<Result> Handle(ChangePasswordCommand command, CancellationToken cancellationToken)
        {
            var user = await context.Users.FindAsync(new object[] { userContext.UserId }, cancellationToken);

            // Kiểm tra mật khẩu hiện tại
            if (!passwordHasher.Verify(command.CurrentPassword, user.Password))
            {
                return Result.Failure<ChangePasswordCommand>(UserErrors.InvalidCurrentPassword);
            }

            if (command.CurrentPassword == command.NewPassword)
            {
                return Result.Failure<ChangePasswordCommand>(UserErrors.SamePassword);
            }

            // Cập nhật mật khẩu mới
            user.Password = passwordHasher.Hash(command.NewPassword);

            await context.SaveChangesAsync(cancellationToken);


            return Result.Success();
        }
    }
}
