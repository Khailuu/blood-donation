using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Users.UpdateUser;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Users.Errors;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.Users.UpdateCurrentUser;

public sealed class UpdateCurrentUserCommandHandler(
    IDbContext context,
    IUserContext userContext)
    : ICommandHandler<UpdateCurrentUserCommand, UpdateUserResponse>
{
    public async Task<Result<UpdateUserResponse>> Handle(UpdateCurrentUserCommand request, CancellationToken cancellationToken)
    {
        var userId = userContext.UserId;

        var user = await context.Users
            .Include(u => u.BloodType)
            .FirstOrDefaultAsync(u => u.UserId == userId, cancellationToken);

        if (user == null)
        {
            return Result.Failure<UpdateUserResponse>(UserErrors.NotFound(userId));
        }

        user.Name = request.FullName ?? user.Name;
        user.Email = request.Email ?? user.Email;
        user.DateOfBirth = request.DateOfBirth ?? user.DateOfBirth;
        user.Gender = request.Gender ?? user.Gender;
        user.Address = request.Address ?? user.Address;
        user.Phone = request.Phone ?? user.Phone;
        user.ImageUrl = request.ImageUrl ?? user.ImageUrl;

        if (request.BloodTypeId.HasValue)
        {
            var bloodType = await context.BloodTypes
                .FirstOrDefaultAsync(b => b.BloodTypeId == request.BloodTypeId.Value, cancellationToken);
            if (bloodType != null)
            {
                user.BloodType = bloodType;
            }
        }

        await context.SaveChangesAsync(cancellationToken);

        return Result.Success(new UpdateUserResponse(user));
    }
}