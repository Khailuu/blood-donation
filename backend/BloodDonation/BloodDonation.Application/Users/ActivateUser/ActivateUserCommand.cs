
using BloodDonation.Application.Abstraction.Messaging;
using ClaimRequest.Application.Users.ActivateUser;

namespace BloodDonation.Application.Users.ActivateUser;

public class ActivateUserCommand : ICommand<ActivateUserCommandResponse>
{
    public string Email { get; set; } = null!;
    public string NewPassword { get; set; } = null!;
}