using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Donations;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.BloodDonation.GetDonationRequestToApprove;

public class GetDonationRequestToApproveQueryHandler(IDbContext context)
    : IQueryHandler<GetDonationRequestToApproveQuery, Page<GetDonationRequestToApproveResponse>>
{
    public async Task<Result<Page<GetDonationRequestToApproveResponse>>> Handle(GetDonationRequestToApproveQuery request, CancellationToken cancellationToken)
    {
        var query = context.DonationRequests
            .Include(r => r.User)
            .Include(r => r.BloodType)
            .Where(r => r.Status == DonationRequestStatus.Pending)
            .OrderByDescending(r => r.RequestTime);

        var totalCount = await query.CountAsync(cancellationToken);

        var result = await query
            .Select(r => new GetDonationRequestToApproveResponse
            {
                RequestId = r.RequestId,
                UserId = r.UserId,
                Email = r.User.Email,
                RequesterName = r.User != null ? r.User.Name : "N/A",
                BloodType = r.BloodType != null ? r.BloodType.Name : "Unknown",
                AmountBlood = r.AmountBlood,
                ComponentType = r.ComponentType.ToString(),
                RequestTime = r.RequestTime,
                IsEmergency = r.IsEmergency,
                Status = r.Status.ToString(),
                Note = r.Note
            })
            .ToListAsync(cancellationToken);
        
        return new Page<GetDonationRequestToApproveResponse>(
            result,
            totalCount,
            request.PageNumber,
            request.PageSize);    }
}