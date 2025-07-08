using BloodDonation.Application.Abstraction.Messaging;

namespace BloodDonation.Application.BlogPosts.CreateBlogPostLike;

public class CreateBlogPostLikeCommand : ICommand<CreateBlogPostLikeResponse>
{
    public Guid PostId { get; set; }
}