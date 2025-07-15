using BloodDonation.Application.Abstraction.Messaging;
using BloodDonation.Application.Abstraction.Query;
using BloodDonation.Domain.Common;

namespace BloodDonation.Application.Users.GetCurrentUserBlogPost.GetCurrentBlogPostComment;

public class GetCurrentBlogPostCommentQuery : IPageableQuery, IQuery<Page<GetCurrentBlogPostCommentResponse>>
{
    public int PageNumber { get; init; }
    public int PageSize { get; init; }
}