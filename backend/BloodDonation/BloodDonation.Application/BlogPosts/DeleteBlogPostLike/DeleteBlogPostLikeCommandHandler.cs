using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Domain.BlogPost.Errors;
using BloodDonation.Domain.Common; 
using Microsoft.EntityFrameworkCore;
namespace BloodDonation.Application.BlogPosts.DeleteBlogPostLike;

public class DeleteBlogPostLikeCommandHandler(IDbContext context, IUserContext userContext)
    : ICommandHandler<DeleteBlogPostLikeCommand, DeleteBlogPostLikeResponse>
{
    public async Task<Result<DeleteBlogPostLikeResponse>> Handle(DeleteBlogPostLikeCommand command,
        CancellationToken cancellationToken)
    {
        var userId = userContext.UserId;
        var like = await context.BlogPostLikes
            .FirstOrDefaultAsync(l => l.BlogPostLikeId == command.BlogPostLikeId && l.UserId == userId,
                cancellationToken);

        if (like == null)
        {
            return Result.Failure<DeleteBlogPostLikeResponse>(BlogPostErrors.NotFound);
        }

        context.BlogPostLikes.Remove(like);
        await context.SaveChangesAsync(cancellationToken);

        return new DeleteBlogPostLikeResponse
        {
            BlogPostLikeId = like.BlogPostLikeId
        };
    }
}