using BloodDonation.Application.Abstraction.Messaging;

namespace BloodDonation.Application.BloodDonation.ConfirmDonationRequest;

public class ConfirmDonationRequestCommand : ICommand
{
    public Guid RequestId { get; set; }
}