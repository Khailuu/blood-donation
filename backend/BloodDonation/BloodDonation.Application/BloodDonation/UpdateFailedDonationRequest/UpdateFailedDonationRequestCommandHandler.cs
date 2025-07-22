using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.BloodDonation.CancelDonationRequest;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Donations;
using BloodDonation.Domain.Donations.Errors;
using BloodDonation.Domain.Donations.Events;
using BloodDonation.Domain.Users.Errors;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.BloodDonation.UpdateFailedDonationRequest;

public class UpdateFailedDonationRequestCommandHandler(IDbContext context, IUserContext userContext) : ICommandHandler<UpdateFailedDonationRequestCommand>
{
    public async Task<Result> Handle(UpdateFailedDonationRequestCommand request, CancellationToken cancellationToken)
    {
        var donationRequest = await context.DonationRequests
            .FirstOrDefaultAsync(r => r.RequestId == request.RequestId, cancellationToken);

        if (donationRequest == null)
            return Result.Failure(DonationRequestErrors.RequestNotFound);

        // if (donationRequest.UserId != userContext.UserId)
        //     return Result.Failure(DonationRequestErrors.NotDonor);

        // if (donationRequest.Status != DonationRequestStatus.Pending && 
        //     donationRequest.Status != DonationRequestStatus.Scheduled)
        //     return Result.Failure(DonationRequestErrors.CannotCancel);

        donationRequest.Status = DonationRequestStatus.Failed;
        donationRequest.Note = request.Reason;
        
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