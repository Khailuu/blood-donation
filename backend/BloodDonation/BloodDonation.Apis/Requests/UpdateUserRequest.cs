using BloodDonation.Domain.Bloods;
using BloodDonation.Domain.Users;

namespace BloodDonation.Apis.Requests;

public class UpdateUserRequest
{
    public Guid UserId { get; set; }
    public string? FullName { get; set; }
    public string? Email { get; set; }
    public UserRole? Role { get; set; }
    public UserStatus? Status { get; set; }
    public Guid? BloodTypeId { get; set; }
    public DateOnly? DateOfBirth { get; set; }
    public UserGender? Gender { get; set; }
    public string? Address { get; set; }
    public string? Phone { get; set; }
    public bool? IsDonor { get; set; }
}

public class BloodType
{
    public Guid BloodTypeId { get; set; }
}