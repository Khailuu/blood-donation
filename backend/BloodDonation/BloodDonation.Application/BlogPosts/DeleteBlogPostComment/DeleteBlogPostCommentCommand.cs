using BloodDonation.Application.Abstraction.Messaging;

namespace BloodDonation.Application.BlogPosts.DeleteBlogPostComment;

public class DeleteBlogPostCommentCommand : ICommand<DeleteBlogPostCommentResponse>
{
    public Guid BlogPostCommentId { get; set; }
}