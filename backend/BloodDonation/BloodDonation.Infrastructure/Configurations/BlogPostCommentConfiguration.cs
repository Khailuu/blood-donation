using BloodDonation.Domain.BlogPost;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BloodDonation.Infrastructure.Configurations;

public class BlogPostCommentConfiguration : IEntityTypeConfiguration<BlogPostComment>
{
    public void Configure(EntityTypeBuilder<BlogPostComment> builder)
    {
        builder.HasKey(x => x.BlogPostCommentId);

        builder.Property(x => x.Content)
            .IsRequired()
            .HasMaxLength(1000);

        builder.Property(x => x.CommentedAt)
            .IsRequired();

        builder.HasOne(x => x.Post)
            .WithMany(p => p.Comments)
            .HasForeignKey(x => x.PostId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(x => x.User)
            .WithMany(u => u.BlogPostComments)
            .HasForeignKey(x => x.UserId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}