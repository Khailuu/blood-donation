using BloodDonation.Domain.Donations;
using BloodDonation.Domain.Users;

namespace BloodDonation.Application.BloodDonation.UpdateDonationHistory;

public class UpdateDonationHistoryCommand
{
    public Guid DonationId { get; set; }
    public DateTime Date { get; set; }
    public DonationHistoryStatus Status { get; set; }
    public Guid ConfirmedBy { get; set; }
    
    
}