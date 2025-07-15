using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Abstraction.Query;
using BloodDonation.Domain.Common;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.Users.GetPatients;

public class GetPatientQueryHandler(IDbContext context) : IQueryHandler<GetPatientQuery, Page<GetPatientResponse>>
{
    public async Task<Result<Page<GetPatientResponse>>> Handle(GetPatientQuery request,
        CancellationToken cancellationToken)
    {
        var query = context.Patients;
        var totalCount = await query.CountAsync(cancellationToken);

        var result = await query
            .ApplyPagination(request.PageNumber, request.PageSize)
            .Select(p => new GetPatientResponse
            {
                Id = p.Id,
                UserId = p.UserId,
                PatientName = p.PatientName,
                PatientPhone = p.PatientPhone,
                PatientEmail = p.PatientEmail,
                PatientBloodType = p.PatientBloodType,
                Notes = p.Notes,
            }).ToListAsync(cancellationToken);
            
        return new Page<GetPatientResponse>(
            result,
            totalCount,
            request.PageNumber,
            request.PageSize);
    }
    
}