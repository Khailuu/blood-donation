using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Common;

namespace BloodDonation.Application.Users.VerifyUser;

public record VerifyUserCommand(string Token) : ICommand
{
    
}