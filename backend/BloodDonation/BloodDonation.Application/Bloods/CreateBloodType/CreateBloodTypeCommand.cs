using BloodDonation.Application.Abstraction.Messaging;

namespace BloodDonation.Application.Bloods.CreateBloodType;

public class CreateBloodTypeCommand : ICommand
{
    public string? Name { get; set; }
    public string? Description { get; set; }
}