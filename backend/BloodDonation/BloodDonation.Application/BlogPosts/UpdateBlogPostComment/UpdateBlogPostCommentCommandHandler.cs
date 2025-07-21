using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging; 
using BloodDonation.Application.Abstraction.Authentication; 
using BloodDonation.Domain.BlogPost; 
using BloodDonation.Domain.BlogPost.Errors;
using BloodDonation.Domain.Common; 
using Microsoft.EntityFrameworkCore;
namespace BloodDonation.Application.BlogPosts.UpdateBlogPostComment;
public class UpdateBlogPostCommentCommandHandler( IDbContext context, IUserContext userContext )
    : ICommandHandler<UpdateBlogPostCommentCommand, UpdateBlogPostCommentResponse> 
{ 
    public async Task<Result<UpdateBlogPostCommentResponse> > Handle(UpdateBlogPostCommentCommand command, CancellationToken cancellationToken) 
    { 
        var userId = userContext.UserId;
        // Find the comment by BlogPostCommentId and UserId to ensure user owns the comment
        var comment = await context.BlogPostComments
            .FirstOrDefaultAsync(c => c.BlogPostCommentId == command.BlogPostCommentId && c.UserId == userId, cancellationToken);

        if (comment == null)
        {
            return Result.Failure<UpdateBlogPostCommentResponse>(BlogPostErrors.NotFound);
        }

        // Update content and update commented date
        comment.Content = command.Content ?? comment.Content;
        comment.CommentedAt = DateTime.UtcNow;

        await context.SaveChangesAsync(cancellationToken);

        return new UpdateBlogPostCommentResponse
        {
            BlogPostCommentId = comment.BlogPostCommentId,
            UserId = comment.UserId,
            Content = comment.Content,
            CommentedAt = comment.CommentedAt
        };
    }
}