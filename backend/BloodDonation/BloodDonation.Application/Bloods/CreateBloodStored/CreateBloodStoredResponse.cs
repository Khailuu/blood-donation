using BloodDonation.Domain.Bloods;

namespace BloodDonation.Application.Bloods.CreateBloodStored;

public class CreateBloodStoredResponse
{
    public Guid StoredId { get; set; }
    public Guid BloodTypeId { get; set; }
    public int Quantity { get; set; }
    public DateTime LastUpdated { get; set; }
    public string BloodTypeName { get; set; }
}