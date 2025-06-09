

namespace BloodDonation.Application.Users.GetCurrentUser
{
    public sealed record GetCurrentUserResponse
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public string Rank { get; set; }
        public string DepartmentName { get; set; }
        public List<string> ProjectsName { get; set; }
    }
}
