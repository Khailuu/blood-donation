using BloodDonation.Application.Abstraction.Messaging;

namespace BloodDonation.Application.BloodDonation.CancelDonationRequest;

public class CancelDonationRequestCommand : ICommand
{
    public Guid RequestId { get; set; }
}