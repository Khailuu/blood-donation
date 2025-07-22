using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Users.UpdateUser;
using BloodDonation.Domain.Users;

namespace BloodDonation.Application.Users.UpdateCurrentUser;

public sealed class UpdateCurrentUserCommand : ICommand<UpdateUserResponse>
{
    public string? FullName { get; set; }
    public string? Email { get; set; }
    public DateOnly? DateOfBirth { get; set; }
    public UserGender? Gender { get; set; }
    public string? Address { get; set; }
    public string? Phone { get; set; }
    public Guid? BloodTypeId { get; set; }
    public string? ImageUrl { get; set; }
}