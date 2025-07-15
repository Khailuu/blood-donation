
using BloodDonation.Domain.Common.DTO;

namespace BloodDonation.Application.Abstraction.Authentication;

public interface IMailService
{
    bool SendCreateUserEmail(CreateUserEmailBody emailBody, string userEmail);
    bool SendDonationStatusEmail(string userEmail, string userName, string status);
}