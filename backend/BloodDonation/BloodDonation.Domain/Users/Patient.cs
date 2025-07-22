namespace BloodDonation.Domain.Users;

public class Patient
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public string? PatientName { get; set; }
    public string? PatientPhone { get; set; }
    public string? PatientEmail { get; set; }
    public string? PatientBloodType { get; set; }
    public string? Notes { get; set; }
    
    public User? User { get; set; }

}