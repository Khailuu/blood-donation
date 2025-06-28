using BloodDonation.Domain.Users;

namespace BloodDonation.Application.Users.ForgetPassword;

public class TokenForgetPasswordResponse
{
    public string ReSetToken { get; init; }
    public UserRole Role { get; set; }
}