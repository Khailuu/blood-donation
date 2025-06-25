using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Donations;
using BloodDonation.Domain.Donations.Errors;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.BloodDonation.CancelDonationRequest;

public class CancelDonationRequestCommandHandler(IDbContext context, IUserContext userContext) : ICommandHandler<CancelDonationRequestCommand>
{
    public async Task<Result> Handle(CancelDonationRequestCommand request, CancellationToken cancellationToken)
    {
        var donationRequest = await context.DonationRequests
            .FirstOrDefaultAsync(r => r.RequestId == request.RequestId, cancellationToken);

        if (donationRequest == null)
            return Result.Failure(DonationRequestErrors.RequestNotFound);

        if (donationRequest.UserId != userContext.UserId)
            return Result.Failure(DonationRequestErrors.NotDonor);

        if (donationRequest.Status != DonationRequestStatus.Pending && 
            donationRequest.Status != DonationRequestStatus.WaitingForDonorToConfirm)
            return Result.Failure(DonationRequestErrors.CannotCancel);

        donationRequest.Status = DonationRequestStatus.Cancelled;
        await context.SaveChangesAsync(cancellationToken);

        return Result.Success();
    }
    
}