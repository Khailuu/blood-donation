FROM mcr.microsoft.com/dotnet/runtime-deps:8.0 AS base
WORKDIR /app
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src

COPY ["BloodDonation.Apis/BloodDonation.Apis.csproj", "BloodDonation.Apis/"]
COPY ["BloodDonation.Application/BloodDonation.Application.csproj", "BloodDonation.Application/"]
COPY ["BloodDonation.Domain/BloodDonation.Domain.csproj", "BloodDonation.Domain/"]
COPY ["BloodDonation.Infrastructure/BloodDonation.Infrastructure.csproj", "BloodDonation.Infrastructure/"]

RUN dotnet restore "BloodDonation.Apis/BloodDonation.Apis.csproj"

COPY . .


WORKDIR "/src/BloodDonation.Apis"
RUN dotnet publish "BloodDonation.Apis.csproj" -c $BUILD_CONFIGURATION -o /app/publish -r linux-x64 --self-contained true /p:PublishSingleFile=true

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
COPY ./wwwroot ./wwwroot
ENTRYPOINT ["./BloodDonation.Apis"]
