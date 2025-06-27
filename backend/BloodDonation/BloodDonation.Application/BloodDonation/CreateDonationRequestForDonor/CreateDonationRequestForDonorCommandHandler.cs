using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Bloods.Errors;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Donations;
using BloodDonation.Domain.Users.Errors;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.BloodDonation.CreateDonationRequestForDonor;

public class CreateDonationRequestForDonorCommandHandler(IDbContext context, IUserContext userContext)
    : ICommandHandler<CreateDonationRequestForDonorCommand, CreateDonationRequestForDonorResponse>
{
    public async Task<Result<CreateDonationRequestForDonorResponse>> Handle(CreateDonationRequestForDonorCommand request, CancellationToken cancellationToken)
    {
        var user = await context.Users.FirstOrDefaultAsync(u => u.UserId == userContext.UserId, cancellationToken);

        if (user == null || user.IsDonor == false || user.BloodType == null)
            return Result.Failure<CreateDonationRequestForDonorResponse>(UserErrors.NotFound(userContext.UserId));

        var bloodType = await context.BloodTypes.FirstOrDefaultAsync(b => b.Name == user.BloodType.Name, cancellationToken);
        if (bloodType == null)
            return Result.Failure<CreateDonationRequestForDonorResponse>(BloodErrors.BloodTypeNotFound);

        var donationRequest = new DonationRequest
        {
            RequestId = Guid.NewGuid(),
            UserId = user.UserId,
            BloodTypeId = bloodType.BloodTypeId,
            AmountBlood = request.AmountBlood,
            RequestTime = DateTime.UtcNow,
            Note = request.Note,
            Status = DonationRequestStatus.Pending
        };

        context.DonationRequests.Add(donationRequest);
        await context.SaveChangesAsync(cancellationToken);

        return Result.Success(new CreateDonationRequestForDonorResponse
        {
            RequestId = donationRequest.RequestId,
            Message = "Donation request (from donor) created successfully."
        });
    }
}