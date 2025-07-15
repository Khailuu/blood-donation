using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Domain.Common.DTO;
using BloodDonation.Domain.Donations.Events;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.BloodDonation.EventHandler;

public class DonorMatchedDomainEventHandler(
    IMailService mailService,
    IDbContext context,
    ITemplateRenderer templateRenderer
) : INotificationHandler<DonorMatchedDomainEvent>
{
    public async Task Handle(DonorMatchedDomainEvent notification, CancellationToken cancellationToken)
    {
        var emailTemplate = await context.EmailTemplates.FirstOrDefaultAsync(e => e.Id == 4, cancellationToken);
        if (emailTemplate == null) return;

        var htmlBody = templateRenderer.Render(emailTemplate.Content, new Dictionary<string, string>
        {
            { "header", "Urgent Blood Request" },
            { "username", notification.DonorName },
            { "content", "You’ve been matched to help save a life. Please confirm if you can donate." },
            { "button_text", "Confirm Donation" },
            { "website_link", notification.ConfirmEndpoint },
            { "year", DateTime.UtcNow.Year.ToString() }
        });

        var emailBody = new CreateUserEmailBody
        {
            Content = htmlBody,
            Header = emailTemplate.Header,
            VerifyEndpoint = "", 
            ButtonName = "Confirm Donation",
            MainContent = emailTemplate.MainContent,
            User = new() { Name = notification.DonorName }
        };

        try
        {
            mailService.SendCreateUserEmail(emailBody, notification.DonorEmail);
            Console.WriteLine($"📨 Sent match email to {notification.DonorEmail}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"❌ Failed to send match email to {notification.DonorEmail}: {ex.Message}");
        }
    }
}
