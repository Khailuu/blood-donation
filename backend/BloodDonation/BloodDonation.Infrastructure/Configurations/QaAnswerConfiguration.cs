using BloodDonation.Domain.Q_A;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BloodDonation.Infrastructure.Configurations;

public class QaAnswerConfiguration : IEntityTypeConfiguration<QaAnswer>
{
    public void Configure(EntityTypeBuilder<QaAnswer> builder)
    {
        builder.HasKey(q => q.AnswerId);

        builder.Property(q => q.Content)
            .IsRequired();

        builder.HasOne(q => q.Question)
            .WithMany(p => p.Comments)
            .HasForeignKey(q => q.QuesttionId)
            .OnDelete(DeleteBehavior.Cascade);
        
        builder.HasOne(q=> q.User)
            .WithMany(u=> u.QaAnswer)
            .HasForeignKey(q=> q.UserId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}