using FluentValidation;

namespace BloodDonation.Application.BlogPosts.CreateBlogPostComment;

public class CreateBlogPostCommentCommandValidator : AbstractValidator<CreateBlogPostCommentCommand>
{
    public CreateBlogPostCommentCommandValidator()
    {
        RuleFor(x => x.PostId)
            .NotEmpty().WithMessage("PostId is required.");

        RuleFor(x => x.Content)
            .NotEmpty().WithMessage("Content is required.");
    }
}