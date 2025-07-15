using BloodDonation.Domain.Common;
using BloodDonation.Domain.Users;

namespace BloodDonation.Domain.BlogPost;

public class BlogPost : Entity
{
    public Guid PostId { get; set; }
    public Guid UserId { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
    public DateTime PublishedDate { get; set; }
    public string? ImageUrl { get; set; }
    
    public User? User { get; set; }
    public ICollection<BlogPostLike> Likes { get; set; } = new List<BlogPostLike>();
    public ICollection<BlogPostComment> Comments { get; set; } = new List<BlogPostComment>();


}