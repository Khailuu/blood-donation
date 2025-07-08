namespace BloodDonation.Application.BlogPosts.UpdateBlogPostComment;

public class UpdateBlogPostCommentResponse
{
    public Guid BlogPostCommentId { get; set; }
    
    public Guid UserId { get; set; }

    public string Content { get; set; }
    public DateTime CommentedAt { get; set; }
}