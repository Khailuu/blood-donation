using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Users.GetCurrentUser;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Users.Errors;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.BloodDonation.GetCurrentDonationHistory
{
    public class GetCurrentDonationHistoryQueryHandler(IDbContext context, IUserContext userContext) : IQueryHandler<GetCurrentDonationHistoryQuery, GetCurrentDonationHistoryResponse>
    {
        public async Task<Result<GetCurrentDonationHistoryResponse>> Handle(GetCurrentDonationHistoryQuery request, CancellationToken cancellationToken)
        {
            var currentUserId = userContext.UserId;

            var user = await context.Users
                .Include(u => u.DonationHistories)
                .ThenInclude(h => h.Request)
                .FirstOrDefaultAsync(u => u.UserId == currentUserId, cancellationToken);

            if (user == null)
                return Result.Failure<GetCurrentDonationHistoryResponse>(UserErrors.NotFound(currentUserId));

            var response = new GetCurrentDonationHistoryResponse
            {
                UserId = user.UserId,
                Name = user.Name,
                DonationHistories = user.DonationHistories?
                    .Select(h => new DonationHistoryResponse
                    {
                        RequestId = h.RequestId,
                        RequestNote = h.Request?.Note,
                        Date = h.Date,
                        Status = h.Status.ToString(),
                        ConfirmedBy = h.ConfirmedBy
                    }).ToList() ?? new List<DonationHistoryResponse>()
            };
            
            return response;
        }

    }
}
