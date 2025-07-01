using System.Text.Json.Serialization;
using BloodDonation.Apis.Extensions;
using BloodDonation.Application;
using BloodDonation.Infrastructure;
using HealthChecks.UI.Client;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Serilog;

namespace BloodDonation.Apis;

public class Program
{
    public static void Main(string[] args)
    {
        WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
        
        builder.Configuration.AddEnvironmentVariables();

        builder.Host.UseSerilog((ctx, services, loggerConfig) =>
        {
            loggerConfig
                .MinimumLevel.Information()
                .Enrich.FromLogContext()
                .WriteTo.Console(); 
        });
        
        builder.Services.AddSwaggerGenWithAuth(); 

        builder.Services
            .AddApplication()
            .AddPresentation()
            .AddInfrastructure(builder.Configuration);
        
        builder.Services
            .AddControllers()
            .AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
            });
        
        var app = builder.Build();

        app.UseSwaggerWithUi(); // custom extension
        // app.ApplyMigrations();  

        app.MapHealthChecks("/health", new HealthCheckOptions
        {
            ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse
        });

        app.UseCors("AllowLocalAndProdFE");
        app.UseRequestContextLogging();
        app.UseSerilogRequestLogging();
        app.UseExceptionHandler();
        app.UseHttpsRedirection();
        app.UseAuthentication();
        app.UseAuthorization();
        app.ApplyMigrations();  // chạy EF Core migration khi khởi động
        app.MapControllers();

        app.Run();
    }
}