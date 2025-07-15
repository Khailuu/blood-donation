using BloodDonation.Apis.Extensions;
using BloodDonation.Apis.Requests;
using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.BlogPosts.DeleteBlogPostForAdmin;
using BloodDonation.Application.Bloods.GetBloodStoredNoPaging;
using BloodDonation.Application.Users.GetUser;
using BloodDonation.Application.Users.UpdateUser;
using BloodDonation.Domain.Common;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BloodDonation.Apis.Controller;

[Route("api/")]
[ApiController]
public class AdminController : ControllerBase
{
    private readonly ISender _mediator;
    private readonly IImageUploader _imageUploader;


    public AdminController(ISender mediator, IImageUploader imageUploader)
    {
        _mediator = mediator;
        _imageUploader = imageUploader;
    }

    [Authorize(Roles = "Admin")]
    [HttpPut("admin/update-user")]
    public async Task<IResult> UpdateByAdmin([FromBody] UpdateUserRequest request, CancellationToken cancellationToken)
    {
        var command = new UpdateUserCommand
        {
            UserId = request.UserId,
            FullName = request.FullName,
            Email = request.Email,
            Role = request.Role,
            Status = request.Status,
            BloodTypeId = request.BloodTypeId,
            IsDonor = request.IsDonor,
            DateOfBirth = request.DateOfBirth,
            Gender = request.Gender,
            Address = request.Address,
            Phone = request.Phone
        };

        var result = await _mediator.Send(command, cancellationToken);
        return result.MatchOk();
    }
    
    [Authorize(Roles = "Admin")]
    [HttpGet("admin/get-users")]
    public async Task<IResult> GetUsers([FromQuery] int pageNumber, [FromQuery] int pageSize, CancellationToken cancellation)
    {
        Result<Page<GetUsersResponse>> result = await _mediator.Send(new GetUsersQuery
        {
            PageNumber = pageNumber,
            PageSize = pageSize,
        }, cancellation);
        return result.MatchOk();
    }
    
    [HttpGet("admin/get-blood-stored-no-paging")]
    public async Task<IResult> GetBloodStored(CancellationToken cancellation)
    {
        var query = new GetBloodStoredNoPagingQuery();
        var result = await _mediator.Send(query, cancellation);
        return result.MatchOk();
    }
    [Authorize(Roles = "Admin")]
    [HttpDelete("admin/delete-blogpost/{postId:guid}")]
    public async Task<IResult> DeleteBlogPostForAdmin(Guid postId, CancellationToken cancellationToken)
    {
        var command = new DeleteBlogPostForAdminCommand()
        {
            PostId = postId
        };

        var result = await _mediator.Send(command, cancellationToken);
        return result.MatchOk();
    }
}