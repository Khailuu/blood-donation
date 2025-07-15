using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Q_A;
using BloodDonation.Domain.Users.Errors;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.Q_A.CreateQaQuestion;

public class CreateQaQuestionCommandHandler(
    IDbContext context,
    IUserContext userContext
) : ICommandHandler<CreateQaQuestionCommand>
{
    public async Task<Result> Handle(CreateQaQuestionCommand command,
        CancellationToken cancellationToken)
    {
        var userId = userContext.UserId;
        var userExists = await context.Users.AnyAsync(u => u.UserId == userId, cancellationToken);
        if (!userExists)
        {
            return Result.Failure(UserErrors.NotFound(userId));
        }

        var question = new QaQuestions
        {
            QuestionId = Guid.NewGuid(),
            UserId = userId,
            Content = command.Content
        };
        
        context.QaQuestions.Add(question);
        await context.SaveChangesAsync(cancellationToken);
        return Result.Success();
    }

}