namespace BloodDonation.Application.BlogPosts.CreateBlogPostLike;

public class CreateBlogPostLikeResponse
{
    public Guid BlogPostLikeId { get; set; }

    public Guid PostId { get; set; }
    public Guid UserId { get; set; }

    public DateTime LikedAt { get; set; }
}