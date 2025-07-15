using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Abstraction.Query;
using BloodDonation.Domain.Common;

namespace BloodDonation.Application.Q_A.GetQa;

public class GetQaQuery : IPageableQuery ,IQuery<Page<GetQaResponse>>
{
    public int PageNumber { get; init; }
    public int PageSize { get; init; }
}