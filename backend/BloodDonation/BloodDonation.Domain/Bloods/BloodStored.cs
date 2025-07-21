using BloodDonation.Domain.Common;

namespace BloodDonation.Domain.Bloods;

public class BloodStored : Entity
{
    public Guid StoredId { get; set; }
    public Guid BloodTypeId { get; set; }
    public int Quantity { get; set; }
    public DateTime LastUpdated { get; set; }
    
    public BloodType BloodType { get; set; } = default!;
}