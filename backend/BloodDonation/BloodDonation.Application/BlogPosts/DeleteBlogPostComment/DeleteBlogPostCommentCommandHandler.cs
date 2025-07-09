using BloodDonation.Application.Abstraction.Data; using BloodDonation.Application.Abstraction.Messaging; using BloodDonation.Application.Abstraction.Authentication; using BloodDonation.Domain.BlogPost.Errors; using BloodDonation.Domain.Common; using Microsoft.EntityFrameworkCore;
namespace BloodDonation.Application.BlogPosts.DeleteBlogPostComment;

public class DeleteBlogPostCommentCommandHandler(IDbContext context, IUserContext userContext)
    : ICommandHandler<DeleteBlogPostCommentCommand, DeleteBlogPostCommentResponse>
{
    public async Task<Result<DeleteBlogPostCommentResponse>> Handle(DeleteBlogPostCommentCommand command,
        CancellationToken cancellationToken)
    {
        var userId = userContext.UserId;
        var comment = await context.BlogPostComments
            .FirstOrDefaultAsync(c => c.BlogPostCommentId == command.BlogPostCommentId && c.UserId == userId,
                cancellationToken);

        if (comment == null)
        {
            return Result.Failure<DeleteBlogPostCommentResponse>(BlogPostErrors.NotFound);
        }

        context.BlogPostComments.Remove(comment);
        await context.SaveChangesAsync(cancellationToken);

        return new DeleteBlogPostCommentResponse
        {
            Content = comment.Content
        };
    }
}