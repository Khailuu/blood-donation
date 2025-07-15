using BloodDonation.Application.Abstraction.Messaging;

namespace BloodDonation.Application.Q_A.CreateQaQuestion;

public class CreateQaQuestionCommand : ICommand
{
    public string? Content { get; set; }
}