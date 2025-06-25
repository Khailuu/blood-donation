using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Common;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.BloodDonation.GetDonationHistory;

public class GetDonationHistoryQueryHandler(IDbContext context)
    : IQueryHandler<GetDonationHistoryQuery, Page<GetDonationHistoryResponse>>
{
    public async Task<Result<Page<GetDonationHistoryResponse>>> Handle(GetDonationHistoryQuery request, CancellationToken cancellationToken)
    {
        var query = context.DonationsHistory
            .Include(h => h.Request)
            .OrderByDescending(h => h.Date);

        var totalCount = await query.CountAsync(cancellationToken);

        var result = await query
            .Skip((request.PageNumber - 1) * request.PageSize)
            .Take(request.PageSize)
            .Select(h => new GetDonationHistoryResponse
            {
                DonationId = h.DonationId,
                RequestId = h.RequestId,
                RequestNote = h.Request != null ? h.Request.Note : null,
                Date = h.Date,
                Status = h.Status.ToString(),
                ConfirmedBy = h.ConfirmedBy
            })
            .ToListAsync(cancellationToken);

        return new Page<GetDonationHistoryResponse>(result, totalCount, request.PageNumber, request.PageSize);
    }
}