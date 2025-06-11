namespace BloodDonation.Application.Users.Login;

public class TokenResponse
{
    public string AccessToken { get; init; }
    public string RefreshToken { get; init; }
}