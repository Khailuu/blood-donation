using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Abstraction.Authentication; 
using BloodDonation.Domain.BlogPost; 
using BloodDonation.Domain.Common; 
using BloodDonation.Domain.BlogPost.Errors;
using Microsoft.EntityFrameworkCore;
namespace BloodDonation.Application.BlogPosts.CreateBlogPostLike;

public class CreateBlogPostLikeCommandHandler(IDbContext context, IUserContext userContext)
    : ICommandHandler<CreateBlogPostLikeCommand, CreateBlogPostLikeResponse>
{
    public async Task<Result<CreateBlogPostLikeResponse>> Handle(CreateBlogPostLikeCommand command,
        CancellationToken cancellationToken)
    {
        var userId = userContext.UserId;

        // Check if blog post exists
        var postExists = await context.BlogPosts.AnyAsync(p => p.PostId == command.PostId, cancellationToken);
        if (!postExists)
        {
            return Result.Failure<CreateBlogPostLikeResponse>(
                BlogPostErrors.BlogPostNotFound(command.PostId));
        }

        // Check if user already liked this post
        var alreadyLiked = await context.BlogPostLikes
            .AnyAsync(l => l.PostId == command.PostId && l.UserId == userId, cancellationToken);
        if (alreadyLiked)
        {
            return Result.Failure<CreateBlogPostLikeResponse>(
                BlogPostErrors.AlreadyLiked);
        }

        var like = new BlogPostLike
        {
            BlogPostLikeId = Guid.NewGuid(),
            PostId = command.PostId,
            UserId = userId,
            LikedAt = DateTime.UtcNow
        };

        context.BlogPostLikes.Add(like);
        await context.SaveChangesAsync(cancellationToken);

        var response = new CreateBlogPostLikeResponse
        {
            BlogPostLikeId = like.BlogPostLikeId,
            PostId = like.PostId,
            UserId = like.UserId,
            LikedAt = like.LikedAt
        };

        return response;
    }
}