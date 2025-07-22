using System.Text.RegularExpressions;
using BloodDonation.Application.Abstraction.Authentication;

namespace BloodDonation.Infrastructure.Services;

public class TemplateRenderer : ITemplateRenderer
{
    public string Render(string template, IDictionary<string, string> values)
    {
        if (string.IsNullOrWhiteSpace(template) || values == null)
            return template;

        return Regex.Replace(template, @"\{\{(\w+)\}\}", match =>
        {
            var key = match.Groups[1].Value;
            return values.TryGetValue(key, out var value) ? value : match.Value;
        });
    }
}