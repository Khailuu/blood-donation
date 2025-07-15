
using Microsoft.EntityFrameworkCore;

using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Users.Errors;

namespace BloodDonation.Application.Users.GetCurrentUser
{
    public class GetCurrentUserQueryHandler(IDbContext context, IUserContext userContext) : IQueryHandler<GetCurrentUserQuery, GetCurrentUserResponse>
    {
        public async Task<Result<GetCurrentUserResponse>> Handle(GetCurrentUserQuery request, CancellationToken cancellationToken)
        {
            var currentUserId = userContext.UserId;

            var user = await context.Users
                .Include(u => u.BloodType)
                .Include(u => u.DonorInformation)
                .FirstOrDefaultAsync(p => p.UserId == currentUserId, cancellationToken);

            if (user == null)
                return Result.Failure<GetCurrentUserResponse>(UserErrors.NotFound(currentUserId));

            var response = new GetCurrentUserResponse
            {
                ImageUrl = user.ImageUrl,
                FullName = user.Name,
                Email = user.Email,
                Role = user.Role.ToString(),
                BloodTypeName = user.BloodType != null ? user.BloodType.Name : null,
                DateOfBirth = user.DateOfBirth,
                Phone = user.Phone,
                Address = user.Address,
                Gender = user.Gender,
                IsDonor = user.IsDonor,
                LastDonationDate = user.LastDonationDate,
                Status = user.Status,
                DonorInformation = user.DonorInformation == null ? null : new DonorInformation
                {
                    Weight = user.DonorInformation.Weight,
                    Height = user.DonorInformation.Height,
                    MedicalStatus = user.DonorInformation.MedicalStatus.ToString() ?? "Unknown",
                    LastChecked = user.DonorInformation.LastChecked
                }
            };

            return response;
        }

    }
}
