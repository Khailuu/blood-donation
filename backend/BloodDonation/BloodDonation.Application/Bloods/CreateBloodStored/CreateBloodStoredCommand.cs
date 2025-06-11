using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Bloods;

namespace BloodDonation.Application.Bloods.CreateBloodStored;

public class CreateBloodStoredCommand : ICommand<CreateBloodStoredResponse>
{
    public int Quantity { get; set; }
    public string BloodTypeName { get; set; }
}