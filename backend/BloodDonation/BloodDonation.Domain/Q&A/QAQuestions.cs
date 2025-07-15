using BloodDonation.Domain.Users;

namespace BloodDonation.Domain.Q_A;

public class QaQuestions
{
    public Guid QuestionId { get; set; }
    public Guid UserId { get; set; }
    public string? Content { get; set; }
    
    
    public User? User { get; set; }
    public ICollection<QaAnswer> Comments { get; set; } = new List<QaAnswer>();

   
}