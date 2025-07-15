
using BloodDonation.Domain.Common;

namespace BloodDonation.Domain.EmailTemplates;

public class EmailTemplate : Entity
{
    public int Id { get; set; }
    public string Content { get; set; }
    public string Header { get; set; }
    public string MainContent { get; set; }
}