using BloodDonation.Apis.Extensions;
using BloodDonation.Apis.Requests;
using BloodDonation.Application.EmailTemplates.GetEmailTemplate;
using BloodDonation.Application.EmailTemplates.UpdateEmailTemplate;
using BloodDonation.Domain.Common;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BloodDonation.Apis.Controller;

[Route("api/")]
[ApiController]
public class EmailController
{
    private readonly ISender _mediator;

    public EmailController(ISender mediator)
    {
        _mediator = mediator;
    }

    [Authorize]
    [HttpGet("email/get")]
    public async Task<IResult> GetEmailTemplate(CancellationToken cancellation)
    {
        Result<List<GetEmailTemplateResponse>> result = await _mediator.Send(new GetEmailTemplateQuery(), cancellation);
        return result.MatchOk();
    }
    
    [Authorize(Roles = "Admin")]
    [HttpPut("email/update-email")]
    public async Task<IResult> UpdateProject([FromBody] UpdateEmailRequest request,
        CancellationToken cancellationToken)
    {
        var command = new UpdateEmailTemplateCommand
        {
            Id = request.Id,
            Content = request.Content,
            Header = request.Header,
            MainContent = request.MainContent
        };
        Result result = await _mediator.Send(command, cancellationToken);

        return result.MatchOk();
    }
}