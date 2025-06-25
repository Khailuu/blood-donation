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
    
    public static readonly Error InvalidStatus = Error.Problem(
        "Request.InvalidStatus",
        "Invalid status");
    
    public static readonly Error NotDonor = Error.Problem(
        "NotDonorToConfirm",
        "You are not authorized to confirm this request");
    
    public static readonly Error CannotCancel = Error.Problem(
        "CannotCancel",
        "Cannot cancel this request");
}