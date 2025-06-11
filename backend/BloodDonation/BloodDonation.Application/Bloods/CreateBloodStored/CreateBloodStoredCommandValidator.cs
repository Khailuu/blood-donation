using FluentValidation;

namespace BloodDonation.Application.Bloods.CreateBloodStored;

public class CreateBloodStoredCommandValidator : AbstractValidator<CreateBloodStoredCommand>
{
    public CreateBloodStoredCommandValidator()
    {
        RuleFor(x => x.BloodTypeName)
            .NotEmpty().WithMessage("BloodType name is required");
        
        RuleFor(x => x.Quantity)
            .GreaterThan(0).WithMessage("Quantity must be greater than 0");
    }
}