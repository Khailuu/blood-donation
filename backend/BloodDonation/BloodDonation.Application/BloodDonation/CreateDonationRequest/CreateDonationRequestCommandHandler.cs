using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.BloodDonation.CreateDonationMatch;
using BloodDonation.Application.Users.UpdateUser;
using BloodDonation.Domain.Bloods;
using BloodDonation.Domain.Bloods.Errors;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Donations;
using BloodDonation.Domain.Users.Errors;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.BloodDonation.CreateDonationRequest;

public class CreateDonationRequestCommandHandler(IDbContext context, IUserContext userContext) : ICommandHandler<CreateDonationRequestCommand,CreateDonationRequestResponse>
{
    public async Task<Result<CreateDonationRequestResponse>> Handle(CreateDonationRequestCommand request,
        CancellationToken cancellationToken)
    {
        var userId = userContext.UserId;
        var user = await context.Users.FirstOrDefaultAsync(u => u.UserId == request.UserId, cancellationToken);
        if (user == null)
        {
            return Result.Failure<CreateDonationRequestResponse>(UserErrors.NotFound(request.UserId));
        }

        var donationRequest = new DonationRequest
        {
            RequestId = Guid.NewGuid(),
            UserId = userId,
            BloodTypeId = request.BloodTypeId,
            AmountBlood = request.AmountBlood,
            ComponentType = request.ComponentType,
            RequestTime = DateTime.UtcNow,
            Deadline = request.Deadline,
            IsEmergency = request.IsEmergency,
            EmergencyContactName = request.EmergencyContactName,
            EmergencyContactPhone = request.EmergencyContactPhone,
            Note = request.Note,
            Status = DonationRequestStatus.Pending
        };

        context.DonationRequests.Add(donationRequest);
        await context.SaveChangesAsync(cancellationToken);
        
        return Result.Success(new CreateDonationRequestResponse
        {
            RequestId = donationRequest.RequestId,
            Message = "Donation request created successfully."
        });
    }
}