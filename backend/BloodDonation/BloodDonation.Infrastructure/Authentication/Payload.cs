using Microsoft.Extensions.Configuration;
using BloodDonation.Application.Abstraction.Authentication;

namespace BloodDonation.Infrastructure.Authentication;

public class Payload(IConfiguration configuration) : IPayload
{
    public string GoogleClientId => configuration["Google:ClientId"] ?? throw new InvalidOperationException("Google:ClientId is not configured");
}