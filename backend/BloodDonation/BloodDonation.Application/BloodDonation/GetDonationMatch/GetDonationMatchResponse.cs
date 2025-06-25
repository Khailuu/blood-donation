namespace BloodDonation.Application.BloodDonation.GetDonationMatch;

public class GetDonationMatchResponse
{
    public Guid MatchId { get; set; }
    public Guid RequestId { get; set; }
    public string? RequestNote { get; set; }
    public DateTime MatchedTime { get; set; }
    public DateTime? ConfirmedTime { get; set; }
    public string Status { get; set; } = default!;
}