using BloodDonation.Apis.Extensions;
using BloodDonation.Application.QuestionForm.GetHealthFormForStaff;
using BloodDonation.Application.QuestionForm.GetUserHealthFormDetail;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;

namespace BloodDonation.Apis.Controller;

[Route("api/")]
[ApiController]
public class HealthFormController : ControllerBase
{
    private readonly ISender _mediator;

    public HealthFormController(ISender mediator)
    {
        _mediator = mediator;
    }

    [Authorize(Roles = "Staff")]
    [HttpGet("healthform/get-healthforms-for-staff")]
    public async Task<IResult> GetHealthFormsForStaff([FromQuery] int pageNumber, [FromQuery] int pageSize, CancellationToken cancellationToken)
    {
        var query = new GetHealthFormForStaffQuery()
        {
            PageNumber = pageNumber,
            PageSize = pageSize
        };

        var result = await _mediator.Send(query, cancellationToken);
        return result.MatchOk();
    }
    
    [Authorize(Roles = "Staff")]
    [HttpGet("healthform/{formId:guid}")]
    public async Task<IResult> GetUserHealthFormDetail(Guid formId,[FromQuery] int pageNumber, [FromQuery] int pageSize, CancellationToken cancellationToken)
    {
        var query = new GetUserHealthFormDetailQuery()
        {
            FormId = formId,
            PageNumber = pageNumber,
            PageSize = pageSize
        };

        var result = await _mediator.Send(query, cancellationToken);
        return result.MatchOk();
    }
}