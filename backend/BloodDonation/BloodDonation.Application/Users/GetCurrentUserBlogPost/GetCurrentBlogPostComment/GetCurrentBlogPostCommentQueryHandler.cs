using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Abstraction.Query;
using BloodDonation.Domain.Common;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.Users.GetCurrentUserBlogPost.GetCurrentBlogPostComment;

public sealed class GetCurrentBlogPostCommentQueryHandler(
    IDbContext context,
    IUserContext userContext
) : IQueryHandler<GetCurrentBlogPostCommentQuery, Page<GetCurrentBlogPostCommentResponse>>
{
    public async Task<Result<Page<GetCurrentBlogPostCommentResponse>>> Handle(GetCurrentBlogPostCommentQuery request, CancellationToken cancellationToken)
    {
        var userId = userContext.UserId;

        var query = context.BlogPostComments
            .AsNoTracking()
            .Where(c => c.UserId == userId)
            .OrderByDescending(c => c.CommentedAt);

        var totalCount = await query.CountAsync(cancellationToken);

        var items = await query
            .ApplyPagination(request.PageNumber, request.PageSize)
            .Select(c => new GetCurrentBlogPostCommentResponse
            {
                BlogPostCommentId = c.BlogPostCommentId,
                PostId = c.PostId,
                UserId = c.UserId,
                Content = c.Content,
                CommentedAt = c.CommentedAt
            })
            .ToListAsync(cancellationToken);

        var page = new Page<GetCurrentBlogPostCommentResponse>(
            items,
            totalCount,
            request.PageNumber,
            request.PageSize);

        return Result.Success(page);
    }
}