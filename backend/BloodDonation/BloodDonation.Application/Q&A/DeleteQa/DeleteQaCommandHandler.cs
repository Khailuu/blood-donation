using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Q_A.Errors;
using BloodDonation.Domain.Users;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.Q_A.DeleteQa;

public class DeleteQaCommandHandler(IDbContext context, IUserContext userContext) : ICommandHandler<DeleteQaCommand>
{
    public async Task<Result> Handle(DeleteQaCommand request, CancellationToken cancellationToken)
    {
        var userId = userContext.UserId;
        var userRole = userContext.Role;
        
        var qA = await context.QaQuestions
            .FirstOrDefaultAsync(q => q.QuestionId == request.Id, cancellationToken);

        if (qA == null)
        {
            return Result.Failure(QaErrors.QaNotFound(request.Id));;
        }

        var isAdmin = userRole == UserRole.Admin;

        if (!isAdmin && qA.UserId != userId)
        {
            return Result.Failure(QaErrors.NoPermissionToDelete(userId));
        }
        
        context.QaQuestions.Remove(qA);
        await context.SaveChangesAsync(cancellationToken);
        return Result.Success();
    }
    
}