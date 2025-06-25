using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Common;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.BloodDonation.GetDonationMatch;

public class GetDonationMatchQueryHandler(IDbContext context)
    : IQueryHandler<GetDonationMatchQuery, Page<GetDonationMatchResponse>>
{
    public async Task<Result<Page<GetDonationMatchResponse>>> Handle(GetDonationMatchQuery request, CancellationToken cancellationToken)
    {
        var query = context.DonationMatches
            .Include(m => m.Request)
            .OrderByDescending(m => m.MatchedTime);

        var totalCount = await query.CountAsync(cancellationToken);

        var result = await query
            .Skip((request.PageNumber - 1) * request.PageSize)
            .Take(request.PageSize)
            .Select(m => new GetDonationMatchResponse
            {
                MatchId = m.MatchId,
                RequestId = m.RequestId,
                RequestNote = m.Request != null ? m.Request.Note : null,
                MatchedTime = m.MatchedTime,
                ConfirmedTime = m.ConfirmedTime,
                Status = m.Status.ToString()
            })
            .ToListAsync(cancellationToken);

        return new Page<GetDonationMatchResponse>(result, totalCount, request.PageNumber, request.PageSize);
    }
}