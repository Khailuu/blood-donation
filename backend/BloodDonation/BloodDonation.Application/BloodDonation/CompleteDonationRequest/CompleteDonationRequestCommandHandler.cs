using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Bloods.Errors;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Donations;
using BloodDonation.Domain.Donations.Errors;
using BloodDonation.Domain.Donations.Events;
using BloodDonation.Domain.Users.Errors;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.BloodDonation.CompleteDonationRequest;

public class CompleteDonationRequestCommandHandler(IDbContext context, IUserContext userContext)
    : ICommandHandler<CompleteDonationRequestCommand>
{
    public async Task<Result> Handle(CompleteDonationRequestCommand request, CancellationToken cancellationToken)
    {
        var donationRequest = await context.DonationRequests
            .FirstOrDefaultAsync(r => r.RequestId == request.RequestId, cancellationToken);

        if (donationRequest == null)
            return Result.Failure(DonationRequestErrors.RequestNotFound);

        if (donationRequest.Status != DonationRequestStatus.Scheduled)
            return Result.Failure(DonationRequestErrors.InvalidStatus);

        // if (donationRequest.UserId != userContext.UserId)
        //     return Result.Failure(DonationRequestErrors.NotDonor);

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

        donationRequest.Status = DonationRequestStatus.Completed;
        
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