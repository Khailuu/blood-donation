using BloodDonation.Application.Abstraction.Messaging;

namespace BloodDonation.Application.BlogPosts.UpdateBlogPostComment;

public class UpdateBlogPostCommentCommand : ICommand<UpdateBlogPostCommentResponse>
{
    public Guid BlogPostCommentId { get; set; }
    public string Content { get; set; }
}