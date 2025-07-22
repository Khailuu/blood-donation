using BloodDonation.Domain.BlogPost;
using BloodDonation.Domain.Bloods;
using BloodDonation.Domain.Common;
using BloodDonation.Domain.Donations;
using BloodDonation.Domain.Q_A;
using BloodDonation.Domain.QuestionForm;

namespace BloodDonation.Domain.Users;

public class User : Entity
{
    public Guid UserId { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public Guid? BloodTypeId { get; set; }             
    public DateOnly DateOfBirth { get; set; }
    public UserGender Gender { get; set; }
    public string Address { get; set; }
    public string Phone { get; set; }
    public UserRole Role { get; set; }
    public bool? IsDonor { get; set; }
    public DateTime? LastDonationDate { get; set; }
    public UserStatus Status { get; set; }
    public string? ImageUrl { get; set; }
    public bool IsVerified { get; set; }
    
    // Các navigation property
    public BloodType? BloodType { get; set; }         

    public ICollection<RefreshToken> RefreshTokens { get; set; } = new List<RefreshToken>();
    public ICollection<DonationRequest> DonationRequests { get; set; } = new List<DonationRequest>();

    public ICollection<DonationMatch> DonationMatches { get; set; } = new List<DonationMatch>();

    public ICollection<DonationHistory> DonationHistories { get; set; } = new List<DonationHistory>();

    public ICollection<DonationHistory> ConfirmedDonations { get; set; } = new List<DonationHistory>();

    public ICollection<BlogPost.BlogPost> BlogPosts { get; set; } = new List<BlogPost.BlogPost>();

    public DonorInformation? DonorInformation { get; set; }
    public Patient? Patient { get; set; }
    public ICollection<HealthForm> HealthForms { get; set; } = new List<HealthForm>();
    
    public ICollection<BlogPostLike> BlogPostLikes { get; set; } = new List<BlogPostLike>();
    public ICollection<BlogPostComment> BlogPostComments { get; set; } = new List<BlogPostComment>();

    public ICollection<QaQuestions> QaQuestions { get; set; } = new List<QaQuestions>();
    public ICollection<QaAnswer> QaAnswer { get; set; } = new List<QaAnswer>();
 

}