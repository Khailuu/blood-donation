using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Bloods;
using BloodDonation.Domain.Common;

namespace BloodDonation.Application.Bloods.CreateBloodType;

public class CreateBloodTypeCommandHandler(IDbContext context) : ICommandHandler<CreateBloodTypeCommand>
{
    public async Task<Result> Handle(CreateBloodTypeCommand command, CancellationToken cancellationToken)
    {
        var bloodType = new BloodType()
        {
            BloodTypeId = Guid.NewGuid(),
            Name = command.Name,
            Description = command.Description
        };
        context.BloodTypes.Add(bloodType);
        await context.SaveChangesAsync(cancellationToken);
        return Result.Success();
    }
}