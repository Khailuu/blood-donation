using BloodDonation.Application.Abstraction.Messaging;

namespace BloodDonation.Application.BloodDonation.ConfirmDonationRequestForDonor;

public class ConfirmDonationRequestForDonorCommand : ICommand
{
    public Guid RequestId { get; set; }

}