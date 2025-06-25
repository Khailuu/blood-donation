using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Donations;
using BloodDonation.Domain.Donations.Errors;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.BloodDonation.CancelDonationMatch;

public class CancelDonationMatchCommandHandler(IDbContext context, IUserContext userContext)
    : ICommandHandler<CancelDonationMatchCommand>
{
    public async Task<Result> Handle(CancelDonationMatchCommand request, CancellationToken cancellationToken)
    {
        var match = await context.DonationMatches
            .FirstOrDefaultAsync(m => m.MatchId == request.MatchId, cancellationToken);

        if (match == null)
            return Result.Failure(DonationMatchErrors.MatchNotFound);

        if (match.DonorId != userContext.UserId)
            return Result.Failure(DonationMatchErrors.NotDonor);

        if (match.Status != DonationMatchStatus.Pending)
            return Result.Failure(DonationRequestErrors.CannotCancel);

        match.Status = DonationMatchStatus.Cancelled;
        match.ConfirmedTime = DateTime.UtcNow;

        await context.SaveChangesAsync(cancellationToken);
        return Result.Success();
    }
}