using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Bloods;

namespace BloodDonation.Application.BloodDonation.CreateDonationRequestForStaff;

public class CreateDonationRequestForStaffCommand : ICommand<CreateDonationRequestForStaffResponse>
{
    public Guid UserId { get; set; }
    public Guid BloodTypeId { get; set; }
    public int AmountBlood { get; set; }
    public BloodComponentType ComponentType { get; set; }
    public DateTime? Deadline { get; set; }
    // public bool IsEmergency { get; set; }
    public string? EmergencyContactName { get; set; }
    public string? EmergencyContactPhone { get; set; }
    public string? Note { get; set; }
}