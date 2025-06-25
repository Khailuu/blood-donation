using BloodDonation.Apis.Extensions;
using BloodDonation.Application.BloodDonation.CancelDonationRequest;
using BloodDonation.Application.BloodDonation.ConfirmDonationMatch;
using BloodDonation.Application.BloodDonation.ConfirmDonationRequestForStaff;
using BloodDonation.Application.BloodDonation.CreateDonationMatch;
using BloodDonation.Application.BloodDonation.CreateDonationRequestForStaff;
using BloodDonation.Application.BloodDonation.GetDonationRequestToApprove;
using BloodDonation.Application.BloodDonation.GetDonationRequestToCancel;
using BloodDonation.Domain.Common;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BloodDonation.Apis.Controller;

[Route("api/")]
[ApiController]
public class BloodDonationController : ControllerBase
{
    private readonly ISender _mediator;

    public BloodDonationController(ISender mediator)
    {
        _mediator = mediator;
    }
    
    // [Authorize]
    [HttpPost("blood-donation/create-requestForStaff")]
    public async Task<IResult> CreateDonationRequest([FromBody] CreateDonationRequestForStaffCommand forStaffCommand, CancellationToken cancellationToken)
    {
        Result<CreateDonationRequestForStaffResponse> result = await _mediator.Send(forStaffCommand, cancellationToken);
        return result.MatchCreated(id => $"/blood-donation/requestForStaff/{id}");
    }

    // [Authorize(Roles = "Staff")]
    // [HttpPost("blood-donation/create-match")]
    // public async Task<IResult> CreateDonationMatch([FromBody] CreateDonationMatchCommand command, CancellationToken cancellationToken)
    // {
    //     Result<CreateDonationMatchResponse> result = await _mediator.Send(command, cancellationToken);
    //     return result.MatchCreated(id => $"/blood-donation/match/{id}");
    // }

    [Authorize]
    [HttpPut("blood-donation/confirm-match")]
    public async Task<IResult> ConfirmDonationMatch([FromBody] ConfirmDonationMatchCommand command, CancellationToken cancellationToken)
    {
        Result result = await _mediator.Send(command, cancellationToken);
        return result.MatchOk();
    }
    
    [Authorize(Roles = "Staff")]
    [HttpGet("blood-donation/get-requests-to-approve")]
    public async Task<IResult> GetRequestsToApprove([FromQuery] int pageNumber, [FromQuery] int pageSize, CancellationToken cancellationToken)
    {
        var query = new GetDonationRequestToApproveQuery { PageNumber = pageNumber, PageSize = pageSize };
        var result = await _mediator.Send(query, cancellationToken);
        return result.MatchOk();
    }

    [Authorize(Roles = "Staff")]
    [HttpGet("blood-donation/get-requests-to-cancel")]
    public async Task<IResult> GetRequestsToCancel([FromQuery] int pageNumber, [FromQuery] int pageSize, CancellationToken cancellationToken)
    {
        var query = new GetDonationRequestToCancelQuery { PageNumber = pageNumber, PageSize = pageSize };
        var result = await _mediator.Send(query, cancellationToken);
        return result.MatchOk();
    }

    [Authorize(Roles = "Staff")]
    [HttpPut("blood-donation/confirm-requestForStaff")]
    public async Task<IResult> ConfirmDonationRequest([FromBody] ConfirmDonationRequestForStaffCommand forStaffCommand, CancellationToken cancellationToken)
    {
        var result = await _mediator.Send(forStaffCommand, cancellationToken);
        return result.MatchOk();
    }

    [Authorize(Roles = "Staff")]
    [HttpPut("blood-donation/cancel-request")]
    public async Task<IResult> CancelDonationRequest([FromBody] CancelDonationRequestCommand command, CancellationToken cancellationToken)
    {
        var result = await _mediator.Send(command, cancellationToken);
        return result.MatchOk();
    }
    
}