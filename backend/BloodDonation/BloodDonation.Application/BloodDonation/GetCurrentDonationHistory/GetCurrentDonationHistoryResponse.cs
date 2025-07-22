

using BloodDonation.Domain.Users;

namespace BloodDonation.Application.BloodDonation.GetCurrentDonationHistory
{
    public sealed record GetCurrentDonationHistoryResponse
    {
        public Guid UserId { get; set; }
        public string? Name { get; set; }
        public List<DonationHistoryResponse>? DonationHistories { get; set; } 
    }

    public class DonationHistoryResponse
    {
        public Guid DonationId { get; set; }
        public Guid RequestId { get; set; }
        public Guid UserId { get; set; }
        public string? RequestNote { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; } = default!;
        public Guid ConfirmedBy { get; set; }
    }
}
