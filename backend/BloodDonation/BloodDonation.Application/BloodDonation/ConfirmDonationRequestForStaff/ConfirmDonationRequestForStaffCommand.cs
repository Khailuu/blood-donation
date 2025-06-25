using BloodDonation.Application.Abstraction.Messaging;

namespace BloodDonation.Application.BloodDonation.ConfirmDonationRequestForStaff;

public class ConfirmDonationRequestForStaffCommand : ICommand
{
    public Guid RequestId { get; set; }
}