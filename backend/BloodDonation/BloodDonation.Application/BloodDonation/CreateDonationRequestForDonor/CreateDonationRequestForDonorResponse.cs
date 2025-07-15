namespace BloodDonation.Application.BloodDonation.CreateDonationRequestForDonor;

public class CreateDonationRequestForDonorResponse
{
    public Guid RequestId { get; set; }
    public Guid UserId { get; set; }
    public string Email { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
}