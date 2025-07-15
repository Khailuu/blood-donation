using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Common;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.Bloods.GetBloodStoredNoPaging;

public class GetBloodStoredNoPagingQueryHandler(IDbContext context)
    : IQueryHandler<GetBloodStoredNoPagingQuery, List<GetBloodStoredNoPagingResponse>>
{
    public async Task<Result<List<GetBloodStoredNoPagingResponse>>> Handle(GetBloodStoredNoPagingQuery request,
        CancellationToken cancellationToken)
    {
        var query = context.BloodStored;

        var result = await query
            .OrderBy(x => x.BloodType.Name)
            .Select(x => new GetBloodStoredNoPagingResponse
            {
                StoredId = x.StoredId,
                BloodTypeId = x.BloodTypeId,
                BloodTypeName = x.BloodType.Name,
                Quantity = x.Quantity,
                LastUpdated = x.LastUpdated
            })
            .ToListAsync(cancellationToken);

        return result;
    }
}