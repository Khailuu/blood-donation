namespace BloodDonation.Application.Users.GetCurrentUserBlogPost.GetCurrentBlogPost;

public class GetCurrentBlogPostResponse
{
    public Guid PostId { get; set; }
    public Guid UserId { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
    public DateTime PublishedDate { get; set; }
    public string? ImageUrl { get; set; }
}