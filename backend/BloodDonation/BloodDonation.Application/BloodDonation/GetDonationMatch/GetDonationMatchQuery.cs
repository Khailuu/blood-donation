using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Abstraction.Query;
using BloodDonation.Domain.Common;

namespace BloodDonation.Application.BloodDonation.GetDonationMatch;

public class GetDonationMatchQuery : IPageableQuery, IQuery<Page<GetDonationMatchResponse>>
{
    public int PageNumber { get; init; }
    public int PageSize { get; init; }
}