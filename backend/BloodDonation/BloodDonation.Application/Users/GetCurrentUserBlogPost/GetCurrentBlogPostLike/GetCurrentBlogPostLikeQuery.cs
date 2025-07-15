using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Abstraction.Query;
using BloodDonation.Domain.Common;

namespace BloodDonation.Application.Users.GetCurrentUserBlogPost.GetCurrentBlogPostLike;

public class GetCurrentBlogPostLikeQuery : IPageableQuery, IQuery<Page<GetCurrentBlogPostLikeResponse>>
{
    public int PageNumber { get; init; }
    public int PageSize { get; init; }
}