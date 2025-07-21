using BloodDonation.Domain.Common;

namespace BloodDonation.Domain.Q_A.Errors;

public class QaErrors
{
    public static Error QaNotFound(Guid questionId) =>
        Error.NotFound(
            "Q&A.NotFound",
            $"No Q&A found with ID '{questionId}'."
        );
    public static Error NoPermissionToDelete(Guid userId) =>
        Error.NotFound(
            "Permission.denied",
            $"No permission to delete this Q&A with ID '{userId}'."
        );
}