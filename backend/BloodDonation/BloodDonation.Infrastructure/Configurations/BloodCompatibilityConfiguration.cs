using BloodDonation.Domain.Bloods;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BloodDonation.Infrastructure.Configurations;

public class BloodCompatibilityConfiguration : IEntityTypeConfiguration<BloodCompatibility>
{
    public void Configure(EntityTypeBuilder<BloodCompatibility> builder)
    {
        builder.HasKey(x => x.Id);

        builder.HasOne(x => x.FromBloodType)
            .WithMany()
            .HasForeignKey(x => x.FromBloodTypeId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(x => x.ToBloodType)
            .WithMany()
            .HasForeignKey(x => x.ToBloodTypeId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.Property(x => x.ComponentType)
            .HasConversion<string>()
            .IsRequired();
        
        var list = new List<BloodCompatibility>();

        var map = new Dictionary<string, Guid>
        {
            { "A+", Guid.Parse("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
            { "A-", Guid.Parse("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
            { "B+", Guid.Parse("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
            { "B-", Guid.Parse("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
            { "AB+", Guid.Parse("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
            { "AB-", Guid.Parse("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
            { "O+", Guid.Parse("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
            { "O-", Guid.Parse("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
        };

        var rbcCompatibility = new Dictionary<string, string[]>
        {
            ["O-"] = new[] { "O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+" },
            ["O+"] = new[] { "O+", "A+", "B+", "AB+" },
            ["A-"] = new[] { "A-", "A+", "AB-", "AB+" },
            ["A+"] = new[] { "A+", "AB+" },
            ["B-"] = new[] { "B-", "B+", "AB-", "AB+" },
            ["B+"] = new[] { "B+", "AB+" },
            ["AB-"] = new[] { "AB-", "AB+" },
            ["AB+"] = new[] { "AB+" },
        };

        var plasmaCompatibility = new Dictionary<string, string[]>
        {
            ["AB+"] = new[] { "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-" },
            ["AB-"] = new[] { "A-", "B-", "AB-", "O-" },
            ["A+"] = new[] { "A+", "A-", "O+", "O-" },
            ["A-"] = new[] { "A-", "O-" },
            ["B+"] = new[] { "B+", "B-", "O+", "O-" },
            ["B-"] = new[] { "B-", "O-" },
            ["O+"] = new[] { "O+", "O-" },
            ["O-"] = new[] { "O-" },
        };

        foreach (var from in rbcCompatibility)
        foreach (var to in from.Value)
            list.Add(new BloodCompatibility
            {
                Id = Guid.NewGuid(),
                FromBloodTypeId = map[from.Key],
                ToBloodTypeId = map[to],
                ComponentType = BloodComponentType.RBC
            });

        foreach (var from in rbcCompatibility)
        foreach (var to in from.Value)
            list.Add(new BloodCompatibility
            {
                Id = Guid.NewGuid(),
                FromBloodTypeId = map[from.Key],
                ToBloodTypeId = map[to],
                ComponentType = BloodComponentType.Whole
            });

        foreach (var from in plasmaCompatibility)
        foreach (var to in from.Value)
            list.Add(new BloodCompatibility
            {
                Id = Guid.NewGuid(),
                FromBloodTypeId = map[from.Key],
                ToBloodTypeId = map[to],
                ComponentType = BloodComponentType.Plasma
            });

        // Platelet = giống RBC
        foreach (var from in rbcCompatibility)
        foreach (var to in from.Value)
            list.Add(new BloodCompatibility
            {
                Id = Guid.NewGuid(),
                FromBloodTypeId = map[from.Key],
                ToBloodTypeId = map[to],
                ComponentType = BloodComponentType.Platelet
            });

        builder.HasData(list);
    }
    
    
}