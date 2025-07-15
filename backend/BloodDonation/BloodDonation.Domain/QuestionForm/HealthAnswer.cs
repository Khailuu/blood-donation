using BloodDonation.Domain.Common;

namespace BloodDonation.Domain.QuestionForm;

public class HealthAnswer : Entity
{
    public Guid AnswerId { get; set; }
    public Guid FormId { get; set; }
    public Guid QuestionId { get; set; }
    public string Answer { get; set; } = null!;

    // Navigation
    public HealthForm Form { get; set; } = null!;
    public HealthQuestion Question { get; set; } = null!;
}
