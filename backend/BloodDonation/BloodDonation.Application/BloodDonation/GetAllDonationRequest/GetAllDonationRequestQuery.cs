using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Abstraction.Query;
using BloodDonation.Application.BloodDonation.GetDonationRequestToApprove;
using BloodDonation.Domain.Common;

namespace BloodDonation.Application.BloodDonation.GetAllDonationRequest;

public class GetAllDonationRequestQuery : IPageableQuery, IQuery<Page<GetAllDonationRequestResponse>>
{
    public int PageNumber { get; init; }
    public int PageSize { get; init; }
}