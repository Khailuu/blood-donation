using BloodDonation.Domain.Common;

namespace BloodDonation.Domain.Donations.Events;

public sealed record DonationRequestStatusChangedDomainEvent(
    Guid RequestId,
    Guid UserId,
    string UserEmail,
    string UserName,
    string NewStatus
) : IDomainEvent;
