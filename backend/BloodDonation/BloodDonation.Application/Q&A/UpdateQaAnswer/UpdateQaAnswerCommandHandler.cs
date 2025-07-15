using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Q_A;
using BloodDonation.Domain.Q_A.Errors;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.Q_A.UpdateQaAnswer;

public class UpdateQaAnswerCommandHandler(IDbContext context) : ICommandHandler<UpdateQaAnswerCommand>
{
    public async Task<Result> Handle(UpdateQaAnswerCommand command, CancellationToken cancellationToken)
    {
        var comment = await context.QaAnswers.FirstOrDefaultAsync(q=> q.AnswerId == command.Id, cancellationToken);

        if (comment == null)
        {
            return Result.Failure(QaErrors.QaNotFound(comment.AnswerId));;
        }
        comment.Content = command.Content ?? comment.Content;
        await context.SaveChangesAsync(cancellationToken);
        return Result.Success();
    }
}