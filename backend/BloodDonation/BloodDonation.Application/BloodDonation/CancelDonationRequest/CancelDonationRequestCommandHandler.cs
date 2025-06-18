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
            .FirstOrDefaultAsync(x => x.RequestId == request.RequestId, cancellationToken);

        if (donationRequest == null)
            return Result.Failure(DonationRequestErrors.RequestNotFound);

        if (donationRequest.Status != DonationRequestStatus.Pending)
            return Result.Failure(DonationRequestErrors.RequestConfrimed);

        donationRequest.Status = DonationRequestStatus.Cancelled;
        await context.SaveChangesAsync(cancellationToken);

        return Result.Success();
    }
    
}