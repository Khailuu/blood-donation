using BloodDonation.Application.Abstraction.Messaging;

namespace BloodDonation.Application.BlogPosts.CreateBlogPostComment;

public class CreateBlogPostCommentCommand : ICommand<CreateBlogPostCommentResponse>
{
    public Guid PostId { get; set; }
    public string Content { get; set; }
}