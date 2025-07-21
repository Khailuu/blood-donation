using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Abstraction.Query;
using BloodDonation.Domain.Common;

namespace BloodDonation.Application.Users.GetPatients;

public class GetPatientQuery: IPageableQuery, IQuery<Page<GetPatientResponse>>
{
    public int PageNumber { get; init; }
    public int PageSize { get; init; }
}