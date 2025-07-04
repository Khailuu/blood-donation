using BloodDonation.Domain.Donations;

namespace BloodDonation.Application.BloodDonation.GetDonationRequestToApprove;

public class GetDonationRequestToApproveResponse
{
    public Guid RequestId { get; set; }
    public Guid UserId { get; set; }
    public string? Email { get; set; }
    public string? RequesterName { get; set; } 
    public string? BloodType { get; set; } 
    public int AmountBlood { get; set; }
    public string? ComponentType { get; set; } 
    public DateTime RequestTime { get; set; }
    public bool IsEmergency { get; set; }
    public string? Status { get; set; }
    public string? Note { get; set; }
}