using BloodDonation.Domain.Common;

namespace BloodDonation.Domain.Donations.Errors;

public class DonationRequestErrors
{
    public static readonly Error RequestNotFound = Error.NotFound(
        "Request.NotFound",
        "Donation request not found.");
    
    public static readonly Error RequestConfrimed = Error.Conflict(
        "Request.existed",
        "Request has already been processed");
}