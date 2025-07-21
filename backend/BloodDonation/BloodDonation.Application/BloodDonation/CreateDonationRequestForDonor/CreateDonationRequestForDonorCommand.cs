using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Bloods;

namespace BloodDonation.Application.BloodDonation.CreateDonationRequestForDonor;

public class CreateDonationRequestForDonorCommand : ICommand<CreateDonationRequestForDonorResponse>
{ 
    public int AmountBlood { get; set; }
    public BloodComponentType ComponentType { get; set; }
    public DateTime Date { get; set; }
    public string? Phone { get; set; }
    public string? Note { get; set; }
}