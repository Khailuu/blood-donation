using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Domain.Users;
using Microsoft.AspNetCore.Http;

namespace BloodDonation.Infrastructure.Authentication;

public class UserContext : IUserContext
{
    private readonly IHttpContextAccessor _httpContextAccessor;

    public UserContext(IHttpContextAccessor httpContextAccessor)
    {
        _httpContextAccessor = httpContextAccessor;
    }

    public Guid UserId =>
        _httpContextAccessor
            .HttpContext?
            .User
            .GetUserId() ??
        throw new ApplicationException("User context is unavailable");

    public UserRole Role =>
        _httpContextAccessor
            .HttpContext?
            .User
            .GetUserRole() ??
        throw new ApplicationException("User role is unavailable");
}