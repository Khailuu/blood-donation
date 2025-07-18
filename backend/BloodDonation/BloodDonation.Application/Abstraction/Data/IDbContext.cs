
using BloodDonation.Domain.BlogPost;
using BloodDonation.Domain.Bloods;
using BloodDonation.Domain.Donations;
using BloodDonation.Domain.EmailTemplates;
using BloodDonation.Domain.Q_A;
using BloodDonation.Domain.QuestionForm;
using BloodDonation.Domain.Users;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.Abstraction.Data;

public interface IDbContext
{
    DbSet<User> Users { get; set; }
    DbSet<RefreshToken> RefreshTokens { get; set; }
    DbSet<DonorInformation> DonorInformation { get; set; }
    DbSet<BloodType> BloodTypes { get; set; }
    DbSet<BloodStored> BloodStored { get; set; }
    DbSet<BloodCompatibility> BloodCompatibility { get; set; }
    DbSet<DonationRequest> DonationRequests { get; set; }
    DbSet<DonationMatch> DonationMatches { get; set; }
    DbSet<DonationHistory> DonationsHistory { get; set; }
    DbSet<BlogPost> BlogPosts { get; set; }
    DbSet<HealthForm> HealthForms { get; set; }
    DbSet<HealthQuestion> HealthQuestions { get; set; }
    DbSet<HealthAnswer> HealthAnswers { get; set; }
    DbSet<EmailTemplate> EmailTemplates { get; set; }
    DbSet<BlogPostLike> BlogPostLikes { get; set; }
    DbSet<BlogPostComment> BlogPostComments { get; set; }
    DbSet<Patient> Patients { get; set; }
    DbSet<QaQuestions> QaQuestions { get; set; }
    DbSet<QaAnswer> QaAnswers { get; set; }
    
    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}