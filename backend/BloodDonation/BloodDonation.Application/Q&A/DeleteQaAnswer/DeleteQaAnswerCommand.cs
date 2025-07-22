using BloodDonation.Application.Abstraction.Messaging;

namespace BloodDonation.Application.Q_A.DeleteQaAnswer;

public class DeleteQaAnswerCommand : ICommand
{
    public Guid Id { get; set; }
}