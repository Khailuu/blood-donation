using BloodDonation.Domain.Q_A;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BloodDonation.Infrastructure.Configurations;

public class QaQuestionConfiguration : IEntityTypeConfiguration<QaQuestions>
{
    public void Configure(EntityTypeBuilder<QaQuestions> builder)
    {
        builder.HasKey(x => x.QuestionId);
        builder.Property(x => x.Content)
            .IsRequired();
        
        builder.HasOne(p => p.User)
            .WithMany(u => u.QaQuestions)
            .HasForeignKey(p => p.UserId)
            .OnDelete(DeleteBehavior.Cascade);
        
        builder.HasMany(p => p.Comments)
            .WithOne(c => c.Question)
            .HasForeignKey(c => c.QuesttionId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
