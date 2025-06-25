namespace BloodDonation.Application.BloodDonation.GetDonationHistory;

public class GetDonationHistoryResponse
{
    public Guid DonationId { get; set; }
    public Guid RequestId { get; set; }
    public string? RequestNote { get; set; }
    public DateTime Date { get; set; }
    public string Status { get; set; } = default!;
    public Guid ConfirmedBy { get; set; }
}