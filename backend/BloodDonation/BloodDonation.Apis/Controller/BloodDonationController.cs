using BloodDonation.Apis.Extensions;
using BloodDonation.Application.BloodDonation.CancelDonationMatch;
using BloodDonation.Application.BloodDonation.CancelDonationRequest;
using BloodDonation.Application.BloodDonation.CompleteDonationRequest;
using BloodDonation.Application.BloodDonation.ConfirmDonationMatch;
using BloodDonation.Application.BloodDonation.ConfirmDonationRequestForStaff;
using BloodDonation.Application.BloodDonation.CreateDonationMatch;
using BloodDonation.Application.BloodDonation.CreateDonationRequestForDonor;
using BloodDonation.Application.BloodDonation.CreateDonationRequestForStaff;
using BloodDonation.Application.BloodDonation.GetAllDonationRequest;
using BloodDonation.Application.BloodDonation.GetDonationHistory;
using BloodDonation.Application.BloodDonation.GetDonationMatch;
using BloodDonation.Application.BloodDonation.GetDonationRequestToApprove;
using BloodDonation.Application.BloodDonation.GetDonationRequestToCancel;
using BloodDonation.Application.BloodDonation.GetDonationRequestToComplete;
using BloodDonation.Application.BloodDonation.UpdateFailedDonationRequest;
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
    
    [Authorize]
    [HttpPost("blood-donation/create-request-for-staff")]
    public async Task<IResult> CreateDonationRequestForStaff([FromBody] CreateDonationRequestForStaffCommand forStaffCommand, CancellationToken cancellationToken)
    {
        Result<CreateDonationRequestForStaffResponse> result = await _mediator.Send(forStaffCommand, cancellationToken);
        return result.MatchCreated(id => $"/blood-donation/requestForStaff/{id}");
    }
    
    [Authorize]
    [HttpPost("blood-donation/create-request-for-donor")]
    public async Task<IResult> CreateDonationRequestForDonor([FromBody] CreateDonationRequestForDonorCommand forStaffCommand, CancellationToken cancellationToken)
    {
        Result<CreateDonationRequestForDonorResponse> result = await _mediator.Send(forStaffCommand, cancellationToken);
        return result.MatchCreated(id => $"/blood-donation/requestForDonor/{id}");
    }
    
    [Authorize]
    [HttpPut("blood-donation/confirm-match")]
    public async Task<IResult> ConfirmDonationMatch([FromBody] ConfirmDonationMatchCommand command, CancellationToken cancellationToken)
    {
        Result result = await _mediator.Send(command, cancellationToken);
        return result.MatchOk();
    }
    
    [Authorize]
    [HttpPut("blood-donation/cancel-match")]
    public async Task<IResult> CancelDonationMatch([FromBody] CancelDonationMatchCommand command, CancellationToken cancellationToken)
    {
        Result result = await _mediator.Send(command, cancellationToken);
        return result.MatchOk();
    }
    
    [Authorize]
    [HttpGet("blood-donation/get-all-requests")]
    public async Task<IResult> GetAllRequests([FromQuery] int pageNumber, [FromQuery] int pageSize, CancellationToken cancellationToken)
    {
        var query = new GetAllDonationRequestQuery { PageNumber = pageNumber, PageSize = pageSize };
        var result = await _mediator.Send(query, cancellationToken);
        return result.MatchOk();
    }
    
    [Authorize]
    [HttpGet("blood-donation/get-requests-to-approve")]
    public async Task<IResult> GetRequestsToApprove([FromQuery] int pageNumber, [FromQuery] int pageSize, CancellationToken cancellationToken)
    {
        var query = new GetDonationRequestToApproveQuery { PageNumber = pageNumber, PageSize = pageSize };
        var result = await _mediator.Send(query, cancellationToken);
        return result.MatchOk();
    }
    
    [Authorize]
    [HttpGet("blood-donation/get-requests-to-complete")]
    public async Task<IResult> GetRequestsToComplete([FromQuery] int pageNumber, [FromQuery] int pageSize, CancellationToken cancellationToken)
    {
        var query = new GetDonationRequestToCompleteQuery { PageNumber = pageNumber, PageSize = pageSize };
        var result = await _mediator.Send(query, cancellationToken);
        return result.MatchOk();
    }

    [Authorize]
    [HttpGet("blood-donation/get-requests-to-cancel")]
    public async Task<IResult> GetRequestsToCancel([FromQuery] int pageNumber, [FromQuery] int pageSize, CancellationToken cancellationToken)
    {
        var query = new GetDonationRequestToCancelQuery { PageNumber = pageNumber, PageSize = pageSize };
        var result = await _mediator.Send(query, cancellationToken);
        return result.MatchOk();
    }

    [Authorize(Roles = "Staff")]
    [HttpPut("blood-donation/confirm-request-for-staff")]
    public async Task<IResult> ConfirmDonationRequestForStaff([FromBody] ConfirmDonationRequestForStaffCommand forStaffCommand, CancellationToken cancellationToken)
    {
        var result = await _mediator.Send(forStaffCommand, cancellationToken);
        return result.MatchOk();
    }
    
    [Authorize(Roles = "Staff")]
    [HttpPut("blood-donation/complete-request-for-staff")]
    public async Task<IResult> CompleteDonationRequest([FromBody] CompleteDonationRequestCommand forStaffCommand, CancellationToken cancellationToken)
    {
        var result = await _mediator.Send(forStaffCommand, cancellationToken);
        return result.MatchOk();
    }

    [Authorize]
    [HttpPut("blood-donation/cancel-request")]
    public async Task<IResult> CancelDonationRequest([FromBody] CancelDonationRequestCommand command, CancellationToken cancellationToken)
    {
        var result = await _mediator.Send(command, cancellationToken);
        return result.MatchOk();
    }
    
    [Authorize]
    [HttpPut("blood-donation/fail-request")]
    public async Task<IResult> UpdateFailedDonationRequest([FromBody] UpdateFailedDonationRequestCommand command, CancellationToken cancellationToken)
    {
        var result = await _mediator.Send(command, cancellationToken);
        return result.MatchOk();
    }
    
    [Authorize]
    [HttpGet("blood-donation/get-donation-history")]
    public async Task<IResult> GetDonationHistory([FromQuery] int pageNumber, [FromQuery] int pageSize, CancellationToken cancellationToken)
    {
        var query = new GetDonationHistoryQuery { PageNumber = pageNumber, PageSize = pageSize };
        var result = await _mediator.Send(query, cancellationToken);
        return result.MatchOk();
    }
    
    [Authorize]
    [HttpGet("blood-donation/get-donation-match")]
    public async Task<IResult> GetDonationMatch([FromQuery] int pageNumber, [FromQuery] int pageSize, CancellationToken cancellationToken)
    {
        var query = new GetDonationMatchQuery { PageNumber = pageNumber, PageSize = pageSize };
        var result = await _mediator.Send(query, cancellationToken);
        return result.MatchOk();
    }
    
    
    
  
    
}