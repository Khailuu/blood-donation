using BloodDonation.Apis.Infrastructure;
using Microsoft.Extensions.DependencyInjection;

namespace BloodDonation.Apis;

public static class DependencyInjection
{
    public static IServiceCollection AddPresentation(this IServiceCollection services)
    {
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();

        services.AddControllers();

        services.AddExceptionHandler<GlobalExceptionHandler>();
        services.AddProblemDetails();
        services.AddCors(options =>
        {
            options.AddPolicy("AllowLocalAndProdFE", policy =>
                policy.WithOrigins("http://localhost:3000", "https://blood-donation-dvon.vercel.app")
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials());
        });
        return services;
    }
}