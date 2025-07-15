using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Q_A.Errors;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.Q_A.DeleteQaAnswer;

public class DeleteQaAnswerCommandHandler(IDbContext context) : ICommandHandler<DeleteQaAnswerCommand>
{
    public async Task<Result> Handle(DeleteQaAnswerCommand command, CancellationToken cancellationToken)
    {
        var qA = await context.QaAnswers.FirstOrDefaultAsync(q=> q.AnswerId == command.Id, cancellationToken);

       context.QaAnswers.Remove(qA);
       await context.SaveChangesAsync(cancellationToken);
       return Result.Success();
    }
}