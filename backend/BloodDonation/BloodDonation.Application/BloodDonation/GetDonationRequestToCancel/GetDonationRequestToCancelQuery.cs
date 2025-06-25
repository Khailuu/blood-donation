using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Abstraction.Query;
using BloodDonation.Domain.Common;

namespace BloodDonation.Application.BloodDonation.GetDonationRequestToCancel;

public class GetDonationRequestToCancelQuery : IPageableQuery, IQuery<Page<GetDonationRequestToCancelResponse>>
{
    public int PageNumber { get; init; }
    public int PageSize { get; init; }
}