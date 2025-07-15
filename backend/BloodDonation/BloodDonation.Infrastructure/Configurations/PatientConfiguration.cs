using BloodDonation.Domain.Users;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BloodDonation.Infrastructure.Configurations;

public class PatientConfiguration : IEntityTypeConfiguration<Patient>
{
    public void Configure(EntityTypeBuilder<Patient> builder)
    {
        builder.HasKey(p => p.UserId);
        
        builder.Property(p => p.PatientName).IsRequired();
        builder.Property(p => p.PatientPhone).IsRequired();
        builder.Property(p => p.PatientEmail).IsRequired();
        builder.Property(p => p.PatientBloodType).IsRequired();
        
        builder.HasOne(p => p.User)
            .WithOne(u => u.Patient)
            .HasForeignKey<Patient>(p => p.UserId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}