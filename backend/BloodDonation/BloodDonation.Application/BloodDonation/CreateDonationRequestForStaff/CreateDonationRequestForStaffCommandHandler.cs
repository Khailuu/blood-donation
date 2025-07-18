using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.BloodDonation.CreateDonationMatch;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Donations;
using BloodDonation.Domain.Users;
using BloodDonation.Domain.Users.Errors;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.BloodDonation.CreateDonationRequestForStaff;

public class CreateDonationRequestForStaffCommandHandler(IDbContext context, IUserContext userContext, ITokenProvider tokenProvider)
    : ICommandHandler<CreateDonationRequestForStaffCommand, CreateDonationRequestForStaffResponse>
{
    public async Task<Result<CreateDonationRequestForStaffResponse>> Handle(CreateDonationRequestForStaffCommand request, CancellationToken cancellationToken)
    {
        var user = await context.Users
            .Include(u => u.BloodType)
            .FirstOrDefaultAsync(u => u.UserId == request.UserId, cancellationToken);

        if (user == null)
            return Result.Failure<CreateDonationRequestForStaffResponse>(UserErrors.NotFound(request.UserId));

        var donationRequest = new DonationRequest
        {
            RequestId = Guid.NewGuid(),
            UserId = request.UserId,
            BloodTypeId = request.BloodTypeId,
            AmountBlood = request.AmountBlood,
            ComponentType = request.ComponentType,
            RequestTime = request.Date,
            Deadline = request.Deadline,
            IsEmergency = true,
            EmergencyContactName = request.EmergencyContactName,
            EmergencyContactPhone = request.EmergencyContactPhone,
            Note = request.Note,
            Status = DonationRequestStatus.Pending
        };
        
        context.DonationRequests.Add(donationRequest);

        var patient = new Patient
        {
            Id = Guid.NewGuid(),
            UserId = request.UserId,
            PatientName = request.EmergencyContactName,
            PatientPhone = request.EmergencyContactPhone,
            PatientEmail = user.Email,
            PatientBloodType = user.BloodType.Name,
            Notes = request.Note,
        };
        
        context.Patients.Add(patient);
        await context.SaveChangesAsync(cancellationToken);

        var bloodStored = await context.BloodStored
            .FirstOrDefaultAsync(b => b.BloodTypeId == request.BloodTypeId, cancellationToken);

        if (bloodStored == null || bloodStored.Quantity < request.AmountBlood)
        {
            var matcher = new AutoMatchDonorsForRequestHandler(context, tokenProvider);
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