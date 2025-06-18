using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Abstraction.Query;
using BloodDonation.Domain.Common;

namespace BloodDonation.Application.BloodDonation.GetDonationRequestToApprove;

public class GetDonationRequestToApproveQuery : IPageableQuery, IQuery<Page<GetDonationRequestToApproveResponse>>
{
    public int PageNumber { get; init; }
    public int PageSize { get; init; }
}