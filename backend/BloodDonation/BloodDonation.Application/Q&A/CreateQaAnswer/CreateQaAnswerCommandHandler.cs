using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.BlogPosts.CreateBlogPostComment;
using BloodDonation.Domain.BlogPost.Errors;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Q_A;
using BloodDonation.Domain.Q_A.Errors;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.Q_A.CreateQaAnswer;

public class CreateQaAnswerCommandHandler(
    IDbContext context,
    IUserContext userContext) : ICommandHandler<CreateQaAnswerCommand>
{
    public async Task<Result> Handle(CreateQaAnswerCommand command,
        CancellationToken cancellationToken)
    {
        var userId = userContext.UserId;
        var exists = await context.QaQuestions.AnyAsync(p => p.QuestionId == command.QuesttionId, cancellationToken);
        if (!exists)
        {
            return Result.Failure(QaErrors.QaNotFound(command.QuesttionId));
        }

        var comment = new QaAnswer
        {
            AnswerId = Guid.NewGuid(),
            QuesttionId = command.QuesttionId,
            UserId = userId,
            Content = command.Content
        };
        
        context.QaAnswers.Add(comment);
        await context.SaveChangesAsync(cancellationToken);
        return Result.Success();
    }
}