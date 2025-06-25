using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Abstraction.Query;
using BloodDonation.Domain.Common;

namespace BloodDonation.Application.BloodDonation.GetDonationHistory;

public class GetDonationHistoryQuery() : IPageableQuery, IQuery<Page<GetDonationHistoryResponse>>
{
    public int PageNumber { get; init; }
    public int PageSize { get; init; }
}
