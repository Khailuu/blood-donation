using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Domain.BlogPost; 
using BloodDonation.Domain.Common; 
using BloodDonation.Domain.BlogPost.Errors;
using Microsoft.EntityFrameworkCore;
namespace BloodDonation.Application.BlogPosts.DeleteBlogPostForAdmin;

public class DeleteBlogPostForAdminCommandHandler(IDbContext context)
    : ICommandHandler<DeleteBlogPostForAdminCommand, DeleteBlogPostForAdminResponse>
{
    public async Task<Result<DeleteBlogPostForAdminResponse>> Handle(DeleteBlogPostForAdminCommand command, CancellationToken cancellationToken)
    {
        var blogPost =
            await context.BlogPosts.FirstOrDefaultAsync(bp => bp.PostId == command.PostId, cancellationToken);
        if (blogPost == null)
        {
            return Result.Failure<DeleteBlogPostForAdminResponse>(BlogPostErrors.NotFound);
        }

        context.BlogPosts.Remove(blogPost);
        await context.SaveChangesAsync(cancellationToken);

        return new DeleteBlogPostForAdminResponse
        {
            Title = blogPost.Title,
            Content = blogPost.Content
        };
    }
}