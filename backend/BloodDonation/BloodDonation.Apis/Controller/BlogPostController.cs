using BloodDonation.Application.BlogPosts.CreateBlogPost;
using BloodDonation.Apis.Requests;
using BloodDonation.Apis.Extensions;
using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.BlogPosts.CreateBlogPostComment;
using BloodDonation.Application.BlogPosts.CreateBlogPostLike;
using BloodDonation.Application.BlogPosts.DeleteBlogPost;
using BloodDonation.Application.BlogPosts.DeleteBlogPostComment;
using BloodDonation.Application.BlogPosts.DeleteBlogPostLike;
using BloodDonation.Application.BlogPosts.GetBlogPost;
using BloodDonation.Application.BlogPosts.UpdateBlogPost;
using BloodDonation.Application.BlogPosts.UpdateBlogPostComment;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BloodDonation.Apis.Controller;

[Route("api/")]
[ApiController]
public class BlogPostController : ControllerBase
{
    private readonly ISender _mediator;
    private readonly IImageUploader _imageUploader;
    
    public BlogPostController(ISender mediator, IImageUploader imageUploader)
    {
        _mediator = mediator;
        _imageUploader = imageUploader;

    }
    [Authorize(Roles = "Member")]
    [HttpPost("blogpost/create-blogpost")]
    public async Task<IResult> CreateBlogPost([FromForm] CreateBlogPostRequest request, CancellationToken cancellationToken)
    {
        string? imageUrl = null;
        if (request.Image != null)
        {
            using var stream = request.Image.OpenReadStream();
            imageUrl = await _imageUploader.UploadImageAsync(stream, request.Image.FileName, "blog-images");
        }

        var command = new CreateBlogPostCommand
        {
            Title = request.Title,
            Content = request.Content,
            ImageUrl = imageUrl
        };

        var result = await _mediator.Send(command, cancellationToken);;
        return result.MatchCreated(id => $"/blogpost/{id}");
    }
    [HttpGet("blogpost/get-blogpost")]
    public async Task<IResult> GetBlogPosts([FromQuery] int pageNumber, [FromQuery] int pageSize, CancellationToken cancellationToken)
    {
        var query = new GetBlogPostQuery()
        {
            PageNumber = pageNumber,
            PageSize = pageSize
        };

        var result = await _mediator.Send(query, cancellationToken);
        return result.MatchOk();
    }
    [Authorize(Roles = "Member")]
    [HttpPut("blogpost/update/{id:guid}")]
    public async Task<IResult> UpdateBlogPost(Guid id, [FromForm] UpdateBlogPostRequest request, CancellationToken cancellationToken)
    {
        string? imageUrl = null;
        if (request.Image != null)
        {
            using var stream = request.Image.OpenReadStream();
            imageUrl = await _imageUploader.UploadImageAsync(stream, request.Image.FileName, "blog-images");
        }

        var command = new UpdateBlogPostCommand()
        {
            PostId = id,
            Title = request.Title,
            Content = request.Content,
            ImageUrl = imageUrl // truyền ảnh mới nếu có
        };

        var result = await _mediator.Send(command, cancellationToken);
        return result.MatchOk();
    }

    [Authorize(Roles = "Member")]
    [HttpDelete("blogpost/delete/{id:guid}")]
    public async Task<IResult> DeleteBlogPost(Guid id, CancellationToken cancellationToken)
    {
        var command = new DeleteBlogPostCommand()
        {
            PostId = id
        };

        var result = await _mediator.Send(command, cancellationToken);
        return result.MatchOk();
    }
    [Authorize(Roles = "Member")]
    [HttpPost("blogpost/{postId:guid}/comment")]
    public async Task<IResult> CreateBlogPostComment(Guid postId, [FromBody] CreateBlogPostCommentRequest request, CancellationToken cancellationToken)
    {
        var command = new CreateBlogPostCommentCommand()
        {
            PostId = postId,
            Content = request.Content
        };

        var result = await _mediator.Send(command, cancellationToken);
        return result.MatchCreated(id => $"/blogpost/comment/{id}");
    }
    [Authorize(Roles = "Member")]
    [HttpPut("blogpost/comment/update/{commentId:guid}")]
    public async Task<IResult> UpdateBlogPostComment(Guid commentId, [FromBody] UpdateBlogPostCommentRequest request, CancellationToken cancellationToken)
    {
        var command = new UpdateBlogPostCommentCommand()
        {
            BlogPostCommentId = commentId,
            Content = request.Content
        };

        var result = await _mediator.Send(command, cancellationToken);
        return result.MatchOk();
    }
    [Authorize(Roles = "Member")]
    [HttpDelete("blogpost/comment/delete/{commentId:guid}")]
    public async Task<IResult> DeleteBlogPostComment(Guid commentId, CancellationToken cancellationToken)
    {
        var command = new DeleteBlogPostCommentCommand()
        {
            BlogPostCommentId = commentId
        };

        var result = await _mediator.Send(command, cancellationToken);
        return result.MatchOk();
    }
    [Authorize(Roles = "Member")]
    [HttpPost("blogpost/{postId:guid}/like")]
    public async Task<IResult> CreateBlogPostLike(Guid postId, CancellationToken cancellationToken)
    {
        var command = new CreateBlogPostLikeCommand()
        {
            PostId = postId
        };

        var result = await _mediator.Send(command, cancellationToken);
        return result.MatchCreated(id => $"/blogpost/like/{id}");
    }
    [Authorize]
    [HttpDelete("blogpost/like/delete/{likeId:guid}")]
    public async Task<IResult> DeleteBlogPostLike(Guid likeId, CancellationToken cancellationToken)
    {
        var command = new DeleteBlogPostLikeCommand()
        {
            BlogPostLikeId = likeId
        };

        var result = await _mediator.Send(command, cancellationToken);
        return result.MatchOk();
    }


}