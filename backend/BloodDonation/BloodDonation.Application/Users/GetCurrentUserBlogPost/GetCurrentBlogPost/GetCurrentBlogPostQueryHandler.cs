using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Abstraction.Query;
using BloodDonation.Domain.Common;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.Users.GetCurrentUserBlogPost.GetCurrentBlogPost;

public sealed class GetCurrentBlogPostQueryHandler(
    IDbContext context,
    IUserContext userContext
) : IQueryHandler<GetCurrentBlogPostQuery, Page<GetCurrentBlogPostResponse>>
{
    public async Task<Result<Page<GetCurrentBlogPostResponse>>> Handle(GetCurrentBlogPostQuery request, CancellationToken cancellationToken)
    {
        var userId = userContext.UserId;

        var query = context.BlogPosts
            .AsNoTracking()
            .Where(bp => bp.UserId == userId)
            .OrderByDescending(bp => bp.PublishedDate);

        var totalCount = await query.CountAsync(cancellationToken);

        var items = await query
            .ApplyPagination(request.PageNumber, request.PageSize)
            .Select(bp => new GetCurrentBlogPostResponse
            {
                PostId = bp.PostId,
                UserId = bp.UserId,
                Title = bp.Title,
                Content = bp.Content,
                PublishedDate = bp.PublishedDate,
                ImageUrl = bp.ImageUrl
            })
            .ToListAsync(cancellationToken);

        var page = new Page<GetCurrentBlogPostResponse>(
            items,
            totalCount,
            request.PageNumber,
            request.PageSize);

        return Result.Success(page);
    }
}