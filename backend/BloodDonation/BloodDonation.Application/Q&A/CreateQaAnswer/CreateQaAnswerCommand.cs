using BloodDonation.Application.Abstraction.Messaging;

namespace BloodDonation.Application.Q_A.CreateQaAnswer;

public class CreateQaAnswerCommand : ICommand
{
    public Guid QuesttionId { get; set; }
    public string? Content { get; set; } 
}