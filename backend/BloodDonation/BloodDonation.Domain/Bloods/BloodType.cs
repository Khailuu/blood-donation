using System.Text.Json.Serialization;
using BloodDonation.Domain.Common;

namespace BloodDonation.Domain.Bloods;

public class BloodType : Entity
{
    public Guid BloodTypeId { get; set; }
    public string? Name { get; set; }
    public string Description { get; set; }
    
    [JsonIgnore]
    public ICollection<BloodCompatibility> CompatibleFrom { get; set; } = new List<BloodCompatibility>();
    [JsonIgnore]
    public ICollection<BloodCompatibility> CompatibleTo { get; set; } = new List<BloodCompatibility>();
}