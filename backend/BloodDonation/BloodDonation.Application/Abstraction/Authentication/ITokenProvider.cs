using BloodDonation.Domain.Users;

namespace BloodDonation.Application.Abstraction.Authentication;

public interface ITokenProvider
{
    string Create(User user);
    string GenerateRefreshToken();
    string GeneratePasswordResetToken();
    string CreateDonationMatchConfirmToken(Guid matchId, TimeSpan? lifetime = null);
    Guid? ValidateDonationMatchConfirmToken(string token);

}
