namespace BloodDonation.Domain.Donations;

public enum DonationRequestStatus
{
    Pending = 1,
    Scheduled = 2,
    Failed = 3,
    Completed = 4,
    Cancelled = 5
}