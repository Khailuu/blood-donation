using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Domain.BlogPost;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.BlogPost.Errors;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.BlogPosts.CreateBlogPostComment;

public class CreateBlogPostCommentCommandHandler(
    IDbContext context,
    IUserContext userContext
) : ICommandHandler<CreateBlogPostCommentCommand, CreateBlogPostCommentResponse>
{
    public async Task<Result<CreateBlogPostCommentResponse>> Handle(CreateBlogPostCommentCommand command, CancellationToken cancellationToken)
    {
        var userId = userContext.UserId;
        
        var postExists = await context.BlogPosts.AnyAsync(p => p.PostId == command.PostId, cancellationToken);
        if (!postExists)
        {
            return Result.Failure<CreateBlogPostCommentResponse>(
                BlogPostErrors.BlogPostNotFound(command.PostId));
        }

        var comment = new BlogPostComment
        {
            BlogPostCommentId = Guid.NewGuid(),
            PostId = command.PostId,
            UserId = userId,
            Content = command.Content,
            CommentedAt = DateTime.UtcNow
        };

        context.BlogPostComments.Add(comment);
        await context.SaveChangesAsync(cancellationToken);

        var response = new CreateBlogPostCommentResponse
        {
            BlogPostCommentId = comment.BlogPostCommentId,
            PostId = comment.PostId,
            UserId = comment.UserId,
            Content = comment.Content,
            CommentedAt = comment.CommentedAt
        };

        return response;
    }
}
