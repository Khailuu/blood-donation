using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.BloodDonation.CreateDonationMatch;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Donations;
using BloodDonation.Domain.Users.Errors;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.BloodDonation.CreateDonationRequestForStaff;

public class CreateDonationRequestForStaffCommandHandler(IDbContext context, IUserContext userContext)
    : ICommandHandler<CreateDonationRequestForStaffCommand, CreateDonationRequestForStaffResponse>
{
    public async Task<Result<CreateDonationRequestForStaffResponse>> Handle(CreateDonationRequestForStaffCommand request, CancellationToken cancellationToken)
    {
        var user = await context.Users.FirstOrDefaultAsync(u => u.UserId == request.UserId, cancellationToken);

        if (user == null)
            return Result.Failure<CreateDonationRequestForStaffResponse>(UserErrors.NotFound(request.UserId));

        var donationRequest = new DonationRequest
        {
            RequestId = Guid.NewGuid(),
            UserId = request.UserId,
            BloodTypeId = request.BloodTypeId,
            AmountBlood = request.AmountBlood,
            ComponentType = request.ComponentType,
            RequestTime = DateTime.UtcNow,
            Deadline = request.Deadline,
            IsEmergency = true,
            EmergencyContactName = request.EmergencyContactName,
            EmergencyContactPhone = request.EmergencyContactPhone,
            Note = request.Note,
            Status = DonationRequestStatus.Pending
        };

        context.DonationRequests.Add(donationRequest);
        await context.SaveChangesAsync(cancellationToken);

        var bloodStored = await context.BloodStored
            .FirstOrDefaultAsync(b => b.BloodTypeId == request.BloodTypeId, cancellationToken);

        if (bloodStored == null || bloodStored.Quantity < request.AmountBlood)
        {
            var matcher = new AutoMatchDonorsForRequestHandler(context);
            await matcher.MatchDonorsAsync(donationRequest, cancellationToken);
        }

        return Result.Success(new CreateDonationRequestForStaffResponse
        {
            RequestId = donationRequest.RequestId,
            UserId = request.UserId,
            Message = "Donation request (from staff) created successfully."
        });
    }
}