using BloodDonation.Domain.BlogPost;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BloodDonation.Infrastructure.Configurations;

public class BlogPostLikeConfiguration : IEntityTypeConfiguration<BlogPostLike>
{
    public void Configure(EntityTypeBuilder<BlogPostLike> builder)
    {
        builder.HasKey(x => x.BlogPostLikeId);

        builder.Property(x => x.LikedAt)
            .IsRequired();

        builder.HasOne(x => x.Post)
            .WithMany(p => p.Likes)
            .HasForeignKey(x => x.PostId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(x => x.User)
            .WithMany(u => u.BlogPostLikes)
            .HasForeignKey(x => x.UserId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasIndex(x => new { x.UserId, x.PostId }).IsUnique(); // user chỉ like 1 lần
    }
}