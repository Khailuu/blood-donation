using BloodDonation.Domain.Common;

namespace BloodDonation.Domain.Users.Events;

public sealed record UserCreatedDomainEvent(Guid UserId) : IDomainEvent;





