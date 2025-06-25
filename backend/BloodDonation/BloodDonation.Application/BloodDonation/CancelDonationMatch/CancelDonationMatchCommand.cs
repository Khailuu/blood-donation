using BloodDonation.Application.Abstraction.Messaging;

namespace BloodDonation.Application.BloodDonation.CancelDonationMatch;

public class CancelDonationMatchCommand : ICommand
{
  public Guid MatchId { get; set; }
}