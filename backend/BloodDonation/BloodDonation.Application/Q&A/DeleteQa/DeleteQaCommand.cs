using BloodDonation.Application.Abstraction.Messaging;

namespace BloodDonation.Application.Q_A.DeleteQa;

public class DeleteQaCommand : ICommand
{
    public Guid Id { get; set; }
}