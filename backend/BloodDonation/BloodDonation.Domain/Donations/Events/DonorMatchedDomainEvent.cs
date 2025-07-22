using BloodDonation.Domain.Common;

namespace BloodDonation.Domain.Donations.Events;

public sealed record DonorMatchedDomainEvent(
    Guid MatchId,
    Guid DonorId,
    string DonorEmail,
    string DonorName,
    string ConfirmEndpoint
) : IDomainEvent;
