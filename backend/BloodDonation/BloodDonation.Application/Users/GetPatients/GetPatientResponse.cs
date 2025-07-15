namespace BloodDonation.Application.Users.GetPatients;

public class GetPatientResponse
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public string? PatientName { get; set; }
    public string? PatientPhone { get; set; }
    public string? PatientEmail { get; set; }
    public string? PatientBloodType { get; set; }
    public string? Notes { get; set; }
}