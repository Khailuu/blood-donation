namespace BloodDonation.Application.Q_A.GetQa;

public class GetQaResponse
{
    public Guid QuestionId { get; set; }
    public Guid UserId { get; set; }
    public string? Content { get; set; }
    
    public List<QaAnswerResponse>? Comments { get; set; }
}

public class QaAnswerResponse
{
    public Guid AnswerId { get; set; }
    public Guid UserId { get; set; }
    public Guid QuestionId { get; set; }
    public string? Content { get; set; }
}