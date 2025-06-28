using BloodDonation.Application.Abstraction.Messaging;

namespace BloodDonation.Application.Users.ResetPassword;

public sealed class ResetPasswordCommand : ICommand<ResetPasswordResponse>
{
    public string Token { get; init; }
    public string NewPassword { get; init; }
}