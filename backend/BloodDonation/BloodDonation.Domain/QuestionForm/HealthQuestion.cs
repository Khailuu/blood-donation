using BloodDonation.Domain.Common;

namespace BloodDonation.Domain.QuestionForm;

public class HealthQuestion : Entity
{
    public Guid QuestionId { get; set; }
    public string Content { get; set; } = null!;
    public bool IsRequired { get; set; }
    public QuestionType QuestionType { get; set; }

    // Navigation
    public ICollection<HealthAnswer> Answers { get; set; } = new List<HealthAnswer>();
}
