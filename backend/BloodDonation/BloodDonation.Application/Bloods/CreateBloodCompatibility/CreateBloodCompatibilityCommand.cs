using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Bloods;

namespace BloodDonation.Application.Bloods.CreateBloodCompatibility;

public class CreateBloodCompatibilityCommand : ICommand<CreateBloodCompatibilityResponse>
{
    public string FromBloodType { get; set; }
    public string ToBloodType { get; set; }
    public BloodComponentType ComponentType { get; set; }
}