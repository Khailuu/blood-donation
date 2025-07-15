using BloodDonation.Application.Abstraction.Messaging;

namespace BloodDonation.Application.Q_A.UpdateQaAnswer;

public class UpdateQaAnswerCommand : ICommand
{
    public Guid Id { get; set; }
    public string? Content { get; set; }
}