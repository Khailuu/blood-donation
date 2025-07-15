namespace BloodDonation.Domain.Donations;

public enum DonationRequestStatus
{
    Pending = 1,
    Scheduled = 2,
    // WaitingForDonorToConfirm = 3,
    Completed = 4,
    Cancelled = 5
}