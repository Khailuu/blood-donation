namespace BloodDonation.Application.BloodDonation.CreateDonationRequestForStaff;

public class CreateDonationRequestForStaffResponse
{
    public Guid RequestId { get; set; }
    public Guid UserId { get; set; }
    public string Message { get; set; } = string.Empty;
}