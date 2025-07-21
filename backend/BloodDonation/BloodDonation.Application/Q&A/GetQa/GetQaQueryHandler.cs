using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Abstraction.Query;
using BloodDonation.Domain.Common;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.Q_A.GetQa;

public class GetQaQueryHandler(IDbContext context) : IQueryHandler<GetQaQuery, Page<GetQaResponse>>
{
    public async Task<Result<Page<GetQaResponse>>> Handle(GetQaQuery request,
        CancellationToken cancellationToken)
    {
        var query = context.QaQuestions
            .AsNoTracking()
            .Include(q => q.Comments);

        var totalCount = await query.CountAsync(cancellationToken);

        var result = await query
            .ApplyPagination(request.PageNumber, request.PageSize)
            .Select(q => new GetQaResponse
            {
                QuestionId = q.QuestionId,
                UserId = q.UserId,
                Content = q.Content,
                Comments = q.Comments.Select(c=> new QaAnswerResponse
                {
                 AnswerId   = c.AnswerId,
                 UserId = c.UserId,
                 Content = c.Content,
                }).ToList(),
            }).ToListAsync(cancellationToken);
        
        var page = new Page<GetQaResponse>(result, totalCount,request.PageNumber, request.PageSize);
        return Result.Success(page);
    }
}