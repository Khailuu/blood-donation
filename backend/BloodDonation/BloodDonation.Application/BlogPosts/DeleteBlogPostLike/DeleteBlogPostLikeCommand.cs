using BloodDonation.Application.Abstraction.Messaging;

namespace BloodDonation.Application.BlogPosts.DeleteBlogPostLike;

public class DeleteBlogPostLikeCommand : ICommand<DeleteBlogPostLikeResponse>
{
    public Guid BlogPostLikeId { get; set; }
}