
using Microsoft.EntityFrameworkCore;

using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Common;

namespace BloodDonation.Application.Users.GetCurrentUser
{
    public class GetCurrentUserQueryHandler(IDbContext context, IUserContext userContext) : IQueryHandler<GetCurrentUserQuery, GetCurrentUserResponse>
    {
        public async Task<Result<GetCurrentUserResponse>> Handle(GetCurrentUserQuery request, CancellationToken cancellationToken)
        {
            var currentUserId = userContext.UserId;

            var currentUser = await context.Users.Where(p => p.UserId == currentUserId).Select(p => new GetCurrentUserResponse{
                FullName = p.Name,
                Email = p.Email,
                Role = p.Role.ToString(),
            }).FirstOrDefaultAsync();   

            return currentUser;
        }
    }
}
