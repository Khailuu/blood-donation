using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Abstraction.Query;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.QuestionForm;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.QuestionForm.GetHealthFormForStaff;

public class GetHealthFormForStaffQueryHandler(IDbContext context) : IQueryHandler<GetHealthFormForStaffQuery, Page<GetHealthFormForStaffResponse>>
{
    public async Task<Result<Page<GetHealthFormForStaffResponse>>> Handle(GetHealthFormForStaffQuery request, CancellationToken cancellationToken)
    {
        var query = context.HealthForms.AsNoTracking();

        var totalCount = await query.CountAsync(cancellationToken);

        var items = await query
            .OrderByDescending(hf => hf.CreatedAt)
            .ApplyPagination(request.PageNumber, request.PageSize)
            .Select(hf => new GetHealthFormForStaffResponse
            {
                FormId = hf.FormId,
                UserId = hf.UserId,
                CreatedAt = hf.CreatedAt,
                Status = hf.Status,
                ApprovedByStaffName = hf.ApprovedByStaffName
            })
            .ToListAsync(cancellationToken);

        var page = new Page<GetHealthFormForStaffResponse>(
            items,
            totalCount,
            request.PageNumber,
            request.PageSize);

        return Result.Success(page);
    }
}