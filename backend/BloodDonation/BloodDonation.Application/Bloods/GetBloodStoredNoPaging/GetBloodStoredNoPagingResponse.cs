namespace BloodDonation.Application.Bloods.GetBloodStoredNoPaging;

public class GetBloodStoredNoPagingResponse
{
    public Guid StoredId { get; set; }
    public Guid BloodTypeId { get; set; }
    public string BloodTypeName { get; set; } = default!;
    public int Quantity { get; set; }
    public DateTime LastUpdated { get; set; }
}