using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Common;

namespace BloodDonation.Application.Bloods.CreateBloodCompatibility;

public class CreateBloodCompatibilityCommandHandler(IDbContext context) : ICommandHandler<CreateBloodCompatibilityCommand, CreateBloodCompatibilityResponse>
{
    public async Task<Result<CreateBloodCompatibilityResponse>> Handle(CreateBloodCompatibilityCommand request,
        CancellationToken cancellationToken)
    {
        return null;
    }
}