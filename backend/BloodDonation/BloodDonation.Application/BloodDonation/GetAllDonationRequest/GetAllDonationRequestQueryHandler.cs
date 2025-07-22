using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.BloodDonation.GetDonationRequestToApprove;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Donations;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.BloodDonation.GetAllDonationRequest;

public class GetAllDonationRequestQueryHandler(IDbContext context)
    : IQueryHandler<GetAllDonationRequestQuery, Page<GetAllDonationRequestResponse>>
{
    public async Task<Result<Page<GetAllDonationRequestResponse>>> Handle(GetAllDonationRequestQuery request, CancellationToken cancellationToken)
    {
        var query = context.DonationRequests
            .Include(r => r.User)
            .Include(r => r.BloodType)
            .OrderByDescending(r => r.RequestTime);

        var totalCount = await query.CountAsync(cancellationToken);

        var result = await query
            .Select(r => new GetAllDonationRequestResponse
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
        
        return new Page<GetAllDonationRequestResponse>(
            result,
            totalCount,
            request.PageNumber,
            request.PageSize);    }
}