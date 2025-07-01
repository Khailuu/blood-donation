using BloodDonation.Application.Abstraction.Authentication;
using BloodDonation.Application.Abstraction.Data;
using BloodDonation.Domain.Common.DTO;
using BloodDonation.Domain.Users.Events;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace BloodDonation.Application.Users.CreateUser
{
    public class CreateUserCommandEventHandler(
        IMailService mailService, 
        IDbContext context, 
        IUserContext userContext) : INotificationHandler<UserCreatedDomainEvent>
    {
        public async Task Handle(UserCreatedDomainEvent notification, CancellationToken cancellationToken)
        {
            var user = await context.Users.FirstOrDefaultAsync(u => u.UserId == notification.UserId, cancellationToken);
            if (user == null)
            {
                return;
            }

            var emailTemplate = await context.EmailTemplates.FirstOrDefaultAsync(e => e.Id == 1, cancellationToken);
            if (emailTemplate == null)
            {
                return;
            }
            var senderName = await context.Users
                .Where(u => u.UserId == userContext.UserId)
                .Select(u => u.Name) 
                .FirstOrDefaultAsync();
            // Thay thế nội dung trong template với dữ liệu thực tế
            string ContentBody = emailTemplate.Content;
                // .Replace("{{header}}", "VERIFY ACCOUNT")
                // .Replace("{{username}}", user.FullName)
                // .Replace("{{button_link}}", $"https://example.com/verify")
                // .Replace("{{button_text}}", "Verify Now")
                // .Replace("{{sender_name}}", senderName)
                // .Replace("{{sender_title}}", "Admin")
                // .Replace("{{year}}", currentYear.ToString());

            var emailBody = new CreateUserEmailBody
            {
                Content = ContentBody, // Nội dung ngắn gọn của email
                Header = emailTemplate.Header,   // Tiêu đề email
                VerifyEndpoint = $"/verify?email={user.Email}", 
                ButtonName = "Verify Now",
                MainContent = emailTemplate.MainContent,
                User = user
            };

            mailService.SendCreateUserEmail(emailBody, user.Email);
        }
    }
}
