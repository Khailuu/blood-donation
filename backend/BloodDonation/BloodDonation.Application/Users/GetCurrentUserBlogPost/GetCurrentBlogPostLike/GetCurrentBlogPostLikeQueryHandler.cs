using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Abstraction.Query;
using BloodDonation.Domain.Common;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.Users.GetCurrentUserBlogPost.GetCurrentBlogPostLike;

public sealed class GetCurrentBlogPostLikeQueryHandler(
    IDbContext context,
    IUserContext userContext
) : IQueryHandler<GetCurrentBlogPostLikeQuery, Page<GetCurrentBlogPostLikeResponse>>
{
    public async Task<Result<Page<GetCurrentBlogPostLikeResponse>>> Handle(GetCurrentBlogPostLikeQuery request, CancellationToken cancellationToken)
    {
        var userId = userContext.UserId;

        var query = context.BlogPostLikes
            .AsNoTracking()
            .Where(l => l.UserId == userId)
            .OrderByDescending(l => l.LikedAt);

        var totalCount = await query.CountAsync(cancellationToken);

        var items = await query
            .ApplyPagination(request.PageNumber, request.PageSize)
            .Select(l => new GetCurrentBlogPostLikeResponse
            {
                BlogPostLikeId = l.BlogPostLikeId,
                PostId = l.PostId,
                UserId = l.UserId,
                LikedAt = l.LikedAt
            })
            .ToListAsync(cancellationToken);

        var page = new Page<GetCurrentBlogPostLikeResponse>(
            items,
            totalCount,
            request.PageNumber,
            request.PageSize);

        return Result.Success(page);
    }
}