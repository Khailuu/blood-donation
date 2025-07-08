using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Abstraction.Query;
using BloodDonation.Domain.Common;

namespace BloodDonation.Application.Users.GetCurrentUserBlogPost.GetCurrentBlogPost;

public class GetCurrentBlogPostQuery : IPageableQuery, IQuery<Page<GetCurrentBlogPostResponse>>
{
    public int PageNumber { get; init; }
    public int PageSize { get; init; }
}