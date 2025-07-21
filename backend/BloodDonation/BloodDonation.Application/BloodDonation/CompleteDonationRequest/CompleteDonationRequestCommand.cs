using BloodDonation.Application.Abstraction.Messaging;

namespace BloodDonation.Application.BloodDonation.CompleteDonationRequest;

public class CompleteDonationRequestCommand : ICommand
{
    public Guid RequestId { get; set; }
    public int AmountBlood { get; set; }
}