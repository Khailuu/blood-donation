using BloodDonation.Application.Abstraction.Messaging;

namespace BloodDonation.Application.BloodDonation.UpdateFailedDonationRequest;

public class UpdateFailedDonationRequestCommand : ICommand
{
    public Guid RequestId { get; set; }
    public string? Reason { get; set; }
}