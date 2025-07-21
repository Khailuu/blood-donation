using BloodDonation.Domain.Common;
using BloodDonation.Domain.Users;

namespace BloodDonation.Domain.BlogPost;

public class BlogPostComment : Entity
{
    public Guid BlogPostCommentId { get; set; } = Guid.NewGuid();

    public Guid PostId { get; set; }
    public Guid UserId { get; set; }

    public string Content { get; set; } = string.Empty;
    public DateTime CommentedAt { get; set; } = DateTime.UtcNow;

    // Navigation
    public BlogPost? Post { get; set; }
    public User? User { get; set; }
}