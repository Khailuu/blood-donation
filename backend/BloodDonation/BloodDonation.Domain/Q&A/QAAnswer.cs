using BloodDonation.Domain.Users;

namespace BloodDonation.Domain.Q_A;

public class QaAnswer
{
    public Guid AnswerId { get; set; } = Guid.NewGuid();
    public Guid QuesttionId { get; set; }
    public Guid UserId { get; set; }
    public string? Content { get; set; } 
    
    public QaQuestions? Question { get; set; }
    public User? User { get; set; }
}