﻿using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Abstraction.Query;
using BloodDonation.Domain.Common;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.BlogPosts.GetBlogPost;

public class GetBlogPostQueryHandler(IDbContext context) : IQueryHandler<GetBlogPostQuery, Page<GetBlogPostResponse>>
{
    public async Task<Result<Page<GetBlogPostResponse>>> Handle(GetBlogPostQuery request, CancellationToken cancellationToken)
    {
        var query = context.BlogPosts
            .AsNoTracking()
            .Include(bp => bp.Comments)
            .Include(bp => bp.Likes);

        var totalCount = await query.CountAsync(cancellationToken);

        var items = await query
            .OrderByDescending(bp => bp.PublishedDate)
            .ApplyPagination(request.PageNumber, request.PageSize)
            .Select(bp => new GetBlogPostResponse
            {
                PostId = bp.PostId,
                UserId = bp.UserId,
                Title = bp.Title,
                Content = bp.Content,
                PublishedDate = bp.PublishedDate,
                ImageUrl = bp.ImageUrl,
                Comments = bp.Comments.Select(c => new BlogPostCommentResponse
                {
                    BlogPostCommentId = c.BlogPostCommentId,
                    UserId = c.UserId,
                    Content = c.Content,
                    CommentedAt = c.CommentedAt
                }).ToList(),
                Likes = bp.Likes.Select(l => new BlogPostLikeResponse
                {
                    BlogPostLikeId = l.BlogPostLikeId,
                    UserId = l.UserId,
                    LikedAt = l.LikedAt
                }).ToList()
            })
            .ToListAsync(cancellationToken);

        var page = new Page<GetBlogPostResponse>(
            items,
            totalCount,
            request.PageNumber,
            request.PageSize);

        return Result.Success(page);
    }

}