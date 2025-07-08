namespace BloodDonation.Application.Users.GetCurrentUserBlogPost.GetCurrentBlogPostLike;

public class GetCurrentBlogPostLikeResponse
{
    public Guid BlogPostLikeId { get; set; }

    public Guid PostId { get; set; }
    public Guid UserId { get; set; }

    public DateTime LikedAt { get; set; }
}