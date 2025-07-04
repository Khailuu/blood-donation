using BloodDonation.Domain.Users;
using Microsoft.AspNetCore.Http;

namespace BloodDonation.Apis.Requests;

public class UpdateCurrentUserRequest
{
    public string? FullName { get; set; }
    public string? Email { get; set; }
    public DateOnly? DateOfBirth { get; set; }
    public UserGender? Gender { get; set; }
    public string? Address { get; set; }
    public string? Phone { get; set; }
    public Guid? BloodTypeId { get; set; }
    public IFormFile? Image { get; set; } // <-- ảnh từ FE

}