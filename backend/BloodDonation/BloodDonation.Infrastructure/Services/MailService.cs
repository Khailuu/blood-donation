using System.Net;
using System.Net.Mail;
using BloodDonation.Domain.Common.DTO;
using BloodDonation.Infrastructure.Shared;
using MailKit;
using Microsoft.Extensions.Options;
using IMailService = BloodDonation.Application.Abstraction.Authentication.IMailService;

namespace BloodDonation.Infrastructure.Services;

public class MailService : IMailService
{
    private readonly MailSettings _mailSettings;
    private readonly ClientSettings _clientSettings;

    public MailService(
        IOptions<MailSettings> mailSettingsOptions, 
        IOptions<ClientSettings> clientSettingsOptions)
    {
        _clientSettings = clientSettingsOptions.Value;
        _mailSettings = mailSettingsOptions.Value;
    }

    public bool SendCreateUserEmail(CreateUserEmailBody emailBody, string userEmail)
    {
        try
        {   
            var currentYear = DateTime.Now.Year;
            var clientUrl = _clientSettings.ClientUrl;
            Console.WriteLine(emailBody);
            Console.WriteLine(clientUrl);
            string fromEmail = _mailSettings.SmtpUsername;
            string toEmail = userEmail;

            string subject = emailBody.Header;
            string htmlBody = emailBody.Content;
            string body = htmlBody
                .Replace("{{content}}", emailBody.MainContent)
                .Replace("{{header}}", "VERIFY ACCOUNT")
                .Replace("{{username}}", emailBody.User.Name)
                .Replace("{{button_link}}", clientUrl + emailBody.VerifyEndpoint)
                .Replace("{{button_text}}", emailBody.ButtonName)
                .Replace("{{sender_title}}", "Admin")
                .Replace("{{year}}", currentYear.ToString());
            MailMessage mail = new MailMessage();
            mail.From = new MailAddress(fromEmail);
            mail.To.Add(toEmail);
            mail.Subject = subject;
            mail.Body = body;
            mail.IsBodyHtml = true;

            string smtpServer = _mailSettings.SmtpServer;
            int smtpPort = _mailSettings.SmtpPort;

            // Configure SMTP Client
            SmtpClient smtp = new SmtpClient(smtpServer, smtpPort)
            {
                Credentials = new NetworkCredential(fromEmail, _mailSettings.SmtpPassword),
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false
            };

            // Send the email
            smtp.Send(mail);
            Console.WriteLine("Email Sent Successfully!");
            return true;
        }
        catch (Exception ex)
        {
            Console.WriteLine("Error sending email: " + ex.Message);
            return false;
        }
    }

   
}