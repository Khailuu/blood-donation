using BloodDonation.Domain.Bloods;

namespace BloodDonation.Application.Bloods.CreateBloodCompatibility;

public class CreateBloodCompatibilityResponse
{
    public Guid Id { get; set; }
    public string FromBloodType { get; set; }
    public string ToBloodType { get; set; }
    public BloodComponentType ComponentType { get; set; }
}