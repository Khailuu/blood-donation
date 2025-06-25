namespace BloodDonation.Application.BloodDonation.GetDonationRequestToCancel;

public class GetDonationRequestToCancelResponse
{
    public Guid RequestId { get; set; }
    public string? RequesterName { get; set; } 
    public string? BloodType { get; set; } 
    public int AmountBlood { get; set; }
    public string? ComponentType { get; set; }
    public DateTime RequestTime { get; set; }
    public bool IsEmergency { get; set; }
    public string? Note { get; set; }
}