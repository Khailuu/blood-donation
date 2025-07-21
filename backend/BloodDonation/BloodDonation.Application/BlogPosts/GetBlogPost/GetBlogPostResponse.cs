public class GetBlogPostResponse
{
    public Guid PostId { get; set; }
    public Guid UserId { get; set; }
    public string Title { get; set; } = default!;
    public string Content { get; set; } = default!;
    public DateTime PublishedDate { get; set; }
    public string? ImageUrl { get; set; }

    public List<BlogPostCommentResponse> Comments { get; set; } = new();
    public List<BlogPostLikeResponse> Likes { get; set; } = new();
}

public class BlogPostCommentResponse
{
    public Guid BlogPostCommentId { get; set; }
    public Guid UserId { get; set; }
    public string Content { get; set; } = default!;
    public DateTime CommentedAt { get; set; }
}

public class BlogPostLikeResponse
{
    public Guid BlogPostLikeId { get; set; }
    public Guid UserId { get; set; }
    public DateTime LikedAt { get; set; }
}