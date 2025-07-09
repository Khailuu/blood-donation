using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Domain.Common.DTO;
using BloodDonation.Domain.Donations.Events;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.BloodDonation.EventHandler;

public class DonationRequestStatusChangedEventHandler(
    IMailService mailService,
    IDbContext context,
    ITemplateRenderer templateRenderer
) : INotificationHandler<DonationRequestStatusChangedDomainEvent>
{
    public async Task Handle(DonationRequestStatusChangedDomainEvent notification, CancellationToken cancellationToken)
    {
        var emailTemplate = await context.EmailTemplates.FirstOrDefaultAsync(e => e.Id == 3, cancellationToken);
        if (emailTemplate == null) return;

        var contentBody = templateRenderer.Render(emailTemplate.Content, new Dictionary<string, string>
        {
            { "header", "Donation Request Update" },
            { "username", notification.UserName },
            { "content", $"Your donation request status has been updated to <strong>{notification.NewStatus}</strong>." },
            { "year", DateTime.UtcNow.Year.ToString() },
            { "website_link", "https://blood-donation-dvon.vercel.app/" },
            { "button_text", "View Request" }
        });

        var emailBody = new CreateUserEmailBody
        {
            Content = contentBody,
            Header = emailTemplate.Header,
            VerifyEndpoint = "https://blood-donation-dvon.vercel.app/", 
            ButtonName = "View Request",
            MainContent = emailTemplate.MainContent,
            User = new() { Name = notification.UserName } 
        };

        try
        {
            mailService.SendCreateUserEmail(emailBody, notification.UserEmail);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"❌ Failed to send status email: {ex.Message}");
        }
    }
}

