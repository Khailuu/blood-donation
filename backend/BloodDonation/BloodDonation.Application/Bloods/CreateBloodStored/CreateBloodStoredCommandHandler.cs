using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Bloods;
using BloodDonation.Domain.Bloods.Errors;
using BloodDonation.Domain.Common;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.Bloods.CreateBloodStored;

public class CreateBloodStoredCommandHandler(IDbContext context) : ICommandHandler<CreateBloodStoredCommand, CreateBloodStoredResponse>
{
    public async Task<Result<CreateBloodStoredResponse>> Handle(CreateBloodStoredCommand command,
        CancellationToken cancellationToken)
    {
        var bloodType = await context.BloodTypes
            .FirstOrDefaultAsync(b => b.Name == command.BloodTypeName, cancellationToken);

        if (bloodType == null)
        {
            return Result.Failure<CreateBloodStoredResponse>(BloodErrors.NotFound);
        }

        var bloodStored = new BloodStored()
        {
            StoredId = Guid.NewGuid(),
            BloodTypeId = bloodType.BloodTypeId,
            Quantity = command.Quantity,
            LastUpdated = DateTime.UtcNow,
        };

        context.BloodStored.Add(bloodStored);
        await context.SaveChangesAsync(cancellationToken);

        return new CreateBloodStoredResponse
        {
            StoredId = bloodStored.StoredId,
            BloodTypeId = bloodType.BloodTypeId,
            BloodTypeName = bloodType.Name,
            Quantity = bloodStored.Quantity,
            LastUpdated = bloodStored.LastUpdated,
        };
    }
}