using BloodDonation.Domain.Common;
using BloodDonation.Domain.Users;

namespace BloodDonation.Domain.BlogPost;

public class BlogPostLike : Entity
{
    public Guid BlogPostLikeId { get; set; } = Guid.NewGuid();

    public Guid PostId { get; set; }
    public Guid UserId { get; set; }

    public DateTime LikedAt { get; set; } = DateTime.UtcNow;

    // Navigation
    public BlogPost? Post { get; set; }
    public User? User { get; set; }
}