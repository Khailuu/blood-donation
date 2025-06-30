using BloodDonation.Application.Abstraction.Messaging;

namespace BloodDonation.Application.Users.Login.LoginWithGoogle;

public sealed class LoginWithGoogleCommand : ICommand<LoginWithGoogleResponse>
{
    public string IdToken { get; init; } = null!;
}