using BloodDonation.Application.Abstraction.Messaging;

namespace BloodDonation.Application.BlogPosts.DeleteBlogPostForAdmin;

public class DeleteBlogPostForAdminCommand : ICommand<DeleteBlogPostForAdminResponse>
{
    public Guid PostId { get; set; }
}