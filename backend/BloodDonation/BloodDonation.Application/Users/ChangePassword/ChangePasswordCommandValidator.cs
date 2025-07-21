using FluentValidation;

namespace BloodDonation.Application.Users.ChangePassword
{
    public class ChangePasswordCommandValidator : AbstractValidator<ChangePasswordCommand>
    {
        public ChangePasswordCommandValidator()
        {
            RuleFor(command => command.CurrentPassword).NotNull().NotEmpty();
            RuleFor(command => command.NewPassword).NotNull().NotEmpty();
        }
    }
}
