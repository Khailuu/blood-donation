using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Users.Login;

namespace BloodDonation.Application.Users.ForgetPassword;

public sealed class ForgetPasswordCommand : ICommand<TokenForgetPasswordResponse> // hoặc một response phù hợp
{
    public string Email { get; init; }
}