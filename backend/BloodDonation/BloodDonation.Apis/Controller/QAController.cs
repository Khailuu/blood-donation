using BloodDonation.Apis.Extensions;
using BloodDonation.Application.Q_A.CreateQaAnswer;
using BloodDonation.Application.Q_A.CreateQaQuestion;
using BloodDonation.Application.Q_A.DeleteQa;
using BloodDonation.Application.Q_A.DeleteQaAnswer;
using BloodDonation.Application.Q_A.GetQa;
using BloodDonation.Application.Q_A.UpdateQaAnswer;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BloodDonation.Apis.Controller;

[Route("api/")]
[ApiController]
public class QAController : ControllerBase
{
    private readonly ISender _mediator;

    public QAController(ISender mediator)
    {
        _mediator = mediator;
    }
    
    [Authorize(Roles = "Member")]
    [HttpPost("q&a/create-q&a-question")]
    public async Task<IResult> CreateBlogPost([FromBody] CreateQaQuestionCommand request, CancellationToken cancellationToken)
    {
        var command = new CreateQaQuestionCommand
        {
            Content = request.Content,
        };

        var result = await _mediator.Send(command, cancellationToken);;
        return result.MatchOk();
    }
    
    [HttpGet("q&a/get-q&a")]
    public async Task<IResult> GetBlogPosts([FromQuery] int pageNumber, [FromQuery] int pageSize, CancellationToken cancellationToken)
    {
        var query = new GetQaQuery()
        {
            PageNumber = pageNumber,
            PageSize = pageSize
        };

        var result = await _mediator.Send(query, cancellationToken);
        return result.MatchOk();
    }
    
    [Authorize]
    [HttpDelete("q&a/delete/{id:guid}")]
    public async Task<IResult> DeleteQA(Guid id, CancellationToken cancellationToken)
    {
        var command = new DeleteQaCommand()
        {
            Id = id
        };

        var result = await _mediator.Send(command, cancellationToken);
        return result.MatchOk();
    }
    
    [Authorize(Roles = "Admin")]
    [HttpPost("q&a/comment")]
    public async Task<IResult> CreateBlogPostComment([FromBody] CreateQaAnswerCommand request, CancellationToken cancellationToken)
    {
        var command = new CreateQaAnswerCommand()
        {
            QuesttionId = request.QuesttionId,
            Content = request.Content
        };

        var result = await _mediator.Send(command, cancellationToken);
        return result.MatchOk();
    }
    [Authorize(Roles = "Admin")]
    [HttpPut("q&a/comment/update/")]
    public async Task<IResult> UpdateQaAnswer([FromBody] UpdateQaAnswerCommand request, CancellationToken cancellationToken)
    {
        var command = new UpdateQaAnswerCommand()
        {
            Id = request.Id,
            Content = request.Content
        };

        var result = await _mediator.Send(command, cancellationToken);
        return result.MatchOk();
    }
    [Authorize(Roles = "Admin")]
    [HttpDelete("q&a/comment/delete/{commentId:guid}")]
    public async Task<IResult> DeleteQaAnswer(Guid commentId, CancellationToken cancellationToken)
    {
        var command = new DeleteQaAnswerCommand()
        {
            Id = commentId
        };

        var result = await _mediator.Send(command, cancellationToken);
        return result.MatchOk();
    }
}