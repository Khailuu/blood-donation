using BloodDonation.Application.BlogPosts.CreateBlogPost;
using BloodDonation.Apis.Requests;
using BloodDonation.Apis.Extensions;
using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.BlogPosts.DeleteBlogPost;
using BloodDonation.Application.BlogPosts.GetBlogPost;
using BloodDonation.Application.BlogPosts.UpdateBlogPost;
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
    [Authorize]
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
    [Authorize]
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

    [Authorize]
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
}