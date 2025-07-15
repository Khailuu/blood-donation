using BloodDonation.Domain.Users;

namespace BloodDonation.Application.Abstraction.Authentication;

public interface IUserContext
{
    Guid UserId { get; }
    UserRole Role { get; }
}