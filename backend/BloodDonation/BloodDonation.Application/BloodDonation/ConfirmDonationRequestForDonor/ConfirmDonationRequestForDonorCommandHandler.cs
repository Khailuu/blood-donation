using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Bloods.Errors;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Donations;
using BloodDonation.Domain.Donations.Errors;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.BloodDonation.ConfirmDonationRequestForDonor;

public class ConfirmDonationRequestForDonorCommandHandler(IDbContext context, IUserContext userContext)
    : ICommandHandler<ConfirmDonationRequestForDonorCommand>
{
    public async Task<Result> Handle(ConfirmDonationRequestForDonorCommand request, CancellationToken cancellationToken)
    {
        var donationRequest = await context.DonationRequests
            .FirstOrDefaultAsync(r => r.RequestId == request.RequestId, cancellationToken);

        if (donationRequest == null)
            return Result.Failure(DonationRequestErrors.RequestNotFound);

        if (donationRequest.Status != DonationRequestStatus.WaitingForDonorToConfirm)
            return Result.Failure(DonationRequestErrors.InvalidStatus);

        if (donationRequest.UserId != userContext.UserId)
            return Result.Failure(DonationRequestErrors.NotDonor);

        var bloodStored = await context.BloodStored
            .FirstOrDefaultAsync(b => b.BloodTypeId == donationRequest.BloodTypeId, cancellationToken);

        if (bloodStored == null)
            return Result.Failure(BloodErrors.BloodTypeNotFound);

        bloodStored.Quantity += donationRequest.AmountBlood;
        bloodStored.LastUpdated = DateTime.UtcNow;

        context.DonationsHistory.Add(new DonationHistory
        {
            DonationId = Guid.NewGuid(),
            UserId = donationRequest.UserId,
            RequestId = donationRequest.RequestId,
            Date = DateTime.UtcNow,
            Status = DonationHistoryStatus.Completed,
            ConfirmedBy = userContext.UserId
        });

        donationRequest.Status = DonationRequestStatus.Fulfilled;

        await context.SaveChangesAsync(cancellationToken);
        return Result.Success();
    }
}