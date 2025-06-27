using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Domain.Donations;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.BloodDonation.CreateDonationMatch;

public class AutoMatchDonorsForRequestHandler(IDbContext context)
{
    public async Task<List<DonationMatch>> MatchDonorsAsync(DonationRequest request, CancellationToken cancellationToken)
    {
        var componentType = request.ComponentType;
        var bloodTypeId = request.BloodTypeId;

        var compatibleDonors = await context.Users
            .Where(u => u.IsDonor == true && u.BloodTypeId != null)
            .Join(context.BloodCompatibility,
                user => new { From = user.BloodTypeId!.Value, ComponentType = componentType },
                comp => new { From = comp.FromBloodTypeId, comp.ComponentType },
                (user, comp) => new { user, comp })
            .Where(x => x.comp.ToBloodTypeId == bloodTypeId)
            .Select(x => x.user)
            .ToListAsync(cancellationToken);

        var matches = compatibleDonors.Select(donor => new DonationMatch
        {
            MatchId = Guid.NewGuid(),
            RequestId = request.RequestId,
            DonorId = donor.UserId,
            MatchedTime = DateTime.UtcNow,
            Status = DonationMatchStatus.Pending
        }).ToList();

        context.DonationMatches.AddRange(matches);
        await context.SaveChangesAsync(cancellationToken);

        return matches;
    }
}