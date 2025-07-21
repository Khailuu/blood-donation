using Microsoft.AspNetCore.Http;

namespace BloodDonation.Apis.Requests;

public class UpdateBlogPostRequest
{
    public string? Title { get; set; } 
    public string? Content { get; set; }
    public IFormFile? Image { get; set; } // <-- ảnh từ FE

}