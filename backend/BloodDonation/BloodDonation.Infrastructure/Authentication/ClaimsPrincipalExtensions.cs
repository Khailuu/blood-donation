using System.Security.Claims;
using BloodDonation.Domain.Users;

namespace BloodDonation.Infrastructure.Authentication;

internal static class ClaimsPrincipalExtensions
{
    public static Guid GetUserId(this ClaimsPrincipal? principal)
    {
        string? userId = principal?.FindFirstValue(ClaimTypes.NameIdentifier);

        return Guid.TryParse(userId, out Guid parsedUserId) ?
            parsedUserId :
            throw new ApplicationException("User id is unavailable");
    }

    public static UserRole GetUserRole(this ClaimsPrincipal? principal)
    {
        string? role = principal?.FindFirstValue(ClaimTypes.Role);
        
        return Enum.TryParse<UserRole>(role, true, out var parsedRole)
            ? parsedRole
            : throw new ApplicationException("User role is unavailable or invalid");
    }
}
// using System.Security.Claims;
//
// namespace BloodDonation.Infrastructure.Authentication;
//
// internal static class ClaimsPrincipalExtensions
// {
//     public static Guid GetUserId(this ClaimsPrincipal? principal)
//     {
//         string? userId =
//             principal?.FindFirstValue(ClaimTypes.NameIdentifier) ??
//             principal?.FindFirstValue("sub") ??
//             principal?.FindFirstValue("uid");
//
//         return Guid.TryParse(userId, out Guid parsedUserId)
//             ? parsedUserId
//             : throw new ApplicationException("User id is unavailable");
//     }
// }
