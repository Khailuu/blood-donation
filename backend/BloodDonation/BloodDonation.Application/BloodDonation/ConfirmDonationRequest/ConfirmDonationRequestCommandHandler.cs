using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.BloodDonation.CreateDonationMatch;
using BloodDonation.Domain.Bloods.Errors;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Donations;
using BloodDonation.Domain.Donations.Errors;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.BloodDonation.ConfirmDonationRequest;

public class ConfirmDonationRequestCommandHandler(IDbContext context, IUserContext userContext) : ICommandHandler<ConfirmDonationRequestCommand>
{
    public async Task<Result> Handle(ConfirmDonationRequestCommand request, CancellationToken cancellationToken)
    {
         var donationRequest = await context.DonationRequests
            .Include(x => x.User)
            .FirstOrDefaultAsync(x => x.RequestId == request.RequestId, cancellationToken);

        if (donationRequest == null)
            return Result.Failure(DonationRequestErrors.RequestNotFound);

        if (donationRequest.Status != DonationRequestStatus.Pending)
            return Result.Failure(DonationRequestErrors.RequestConfrimed);

        if (donationRequest.User?.IsDonor == true)
        {
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
        }
        else
        {
            var bloodStored = await context.BloodStored
                .FirstOrDefaultAsync(b => b.BloodTypeId == donationRequest.BloodTypeId, cancellationToken);

            var available = bloodStored?.Quantity ?? 0;

            if (available >= donationRequest.AmountBlood)
            {
                bloodStored!.Quantity -= donationRequest.AmountBlood;
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
            }
            else if (donationRequest.IsEmergency && available > 0)
            {
                bloodStored!.Quantity = 0;
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

                var matcher = new AutoMatchDonorsForRequestHandler(context);
                await matcher.MatchDonorsAsync(donationRequest, cancellationToken);
            }
            else
            {
                var matcher = new AutoMatchDonorsForRequestHandler(context);
                await matcher.MatchDonorsAsync(donationRequest, cancellationToken);
            }
        }

        await context.SaveChangesAsync(cancellationToken);
        return Result.Success();
    }

}