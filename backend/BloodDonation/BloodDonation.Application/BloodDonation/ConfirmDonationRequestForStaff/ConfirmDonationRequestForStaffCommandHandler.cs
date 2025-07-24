using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.BloodDonation.CreateDonationMatch;
using BloodDonation.Domain.Bloods.Errors;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Donations;
using BloodDonation.Domain.Donations.Errors;
using BloodDonation.Domain.Donations.Events;
using BloodDonation.Domain.Users.Errors;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.BloodDonation.ConfirmDonationRequestForStaff;

public class ConfirmDonationRequestForStaffCommandHandler(IDbContext context, IUserContext userContext)
    : ICommandHandler<ConfirmDonationRequestForStaffCommand>
{
    public async Task<Result> Handle(ConfirmDonationRequestForStaffCommand requestForStaff,
        CancellationToken cancellationToken)
    {
        var donationRequest = await context.DonationRequests
            .Include(x => x.User)
            .FirstOrDefaultAsync(x => x.RequestId == requestForStaff.RequestId, cancellationToken);

        if (donationRequest == null)
            return Result.Failure(DonationRequestErrors.RequestNotFound);

        if (donationRequest.Status != DonationRequestStatus.Pending)
            return Result.Failure(DonationRequestErrors.RequestConfrimed);

        donationRequest.Status = DonationRequestStatus.Scheduled;

        var user = await context.Users.FirstOrDefaultAsync(u => u.UserId == donationRequest.UserId, cancellationToken);
        if (user is null) return Result.Failure(UserErrors.NotFound(user.UserId));

        donationRequest.Raise(new DonationRequestStatusChangedDomainEvent(
            donationRequest.RequestId,
            donationRequest.UserId,
            user.Email,
            user.Name ?? "User",
            donationRequest.Status.ToString()
        ));

        await context.SaveChangesAsync(cancellationToken);
        return Result.Success();
    }
}