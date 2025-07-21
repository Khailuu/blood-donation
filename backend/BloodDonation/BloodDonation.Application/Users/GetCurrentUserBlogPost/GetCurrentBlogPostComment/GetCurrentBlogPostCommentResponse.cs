namespace BloodDonation.Application.Users.GetCurrentUserBlogPost.GetCurrentBlogPostComment;

public class GetCurrentBlogPostCommentResponse
{
    public Guid BlogPostCommentId { get; set; } 
    public Guid PostId { get; set; }
    public Guid UserId { get; set; }

    public string Content { get; set; }
    public DateTime CommentedAt { get; set; }
}