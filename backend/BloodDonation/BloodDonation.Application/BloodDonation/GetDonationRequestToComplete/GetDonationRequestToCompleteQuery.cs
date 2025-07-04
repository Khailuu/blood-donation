using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Abstraction.Query;
using BloodDonation.Application.BloodDonation.GetDonationRequestToApprove;
using BloodDonation.Domain.Common;

namespace BloodDonation.Application.BloodDonation.GetDonationRequestToComplete;

public class GetDonationRequestToCompleteQuery : IPageableQuery, IQuery<Page<GetDonationRequestToCompleteResponse>>
{
    public int PageNumber { get; init; }
    public int PageSize { get; init; }
}