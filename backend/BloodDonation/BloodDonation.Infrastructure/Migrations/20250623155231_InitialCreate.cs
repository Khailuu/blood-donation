using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BloodDonation.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "public");

            migrationBuilder.CreateTable(
                name: "BloodTypes",
                schema: "public",
                columns: table => new
                {
                    BloodTypeId = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "character varying(10)", maxLength: 10, nullable: false),
                    Description = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BloodTypes", x => x.BloodTypeId);
                });

            migrationBuilder.CreateTable(
                name: "HealthQuestions",
                schema: "public",
                columns: table => new
                {
                    QuestionId = table.Column<Guid>(type: "uuid", nullable: false),
                    Content = table.Column<string>(type: "text", nullable: false),
                    IsRequired = table.Column<bool>(type: "boolean", nullable: false),
                    QuestionType = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HealthQuestions", x => x.QuestionId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                schema: "public",
                columns: table => new
                {
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false),
                    Password = table.Column<string>(type: "text", nullable: false),
                    BloodType = table.Column<string>(type: "character varying(10)", maxLength: 10, nullable: true),
                    DateOfBirth = table.Column<DateOnly>(type: "date", nullable: false),
                    Gender = table.Column<string>(type: "text", nullable: false),
                    Address = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false),
                    Phone = table.Column<string>(type: "character varying(20)", maxLength: 20, nullable: false),
                    Role = table.Column<string>(type: "text", nullable: false),
                    IsDonor = table.Column<bool>(type: "boolean", nullable: true, defaultValue: false),
                    LastDonationDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    Status = table.Column<string>(type: "text", nullable: false, defaultValue: "Active"),
                    IsVerified = table.Column<bool>(type: "boolean", nullable: false, defaultValue: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "BloodCompatibility",
                schema: "public",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    FromBloodTypeId = table.Column<Guid>(type: "uuid", nullable: false),
                    ToBloodTypeId = table.Column<Guid>(type: "uuid", nullable: false),
                    ComponentType = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BloodCompatibility", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BloodCompatibility_BloodTypes_FromBloodTypeId",
                        column: x => x.FromBloodTypeId,
                        principalSchema: "public",
                        principalTable: "BloodTypes",
                        principalColumn: "BloodTypeId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_BloodCompatibility_BloodTypes_ToBloodTypeId",
                        column: x => x.ToBloodTypeId,
                        principalSchema: "public",
                        principalTable: "BloodTypes",
                        principalColumn: "BloodTypeId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "BloodStored",
                schema: "public",
                columns: table => new
                {
                    StoredId = table.Column<Guid>(type: "uuid", nullable: false),
                    BloodTypeId = table.Column<Guid>(type: "uuid", nullable: false),
                    Quantity = table.Column<int>(type: "integer", nullable: false),
                    LastUpdated = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BloodStored", x => x.StoredId);
                    table.ForeignKey(
                        name: "FK_BloodStored_BloodTypes_BloodTypeId",
                        column: x => x.BloodTypeId,
                        principalSchema: "public",
                        principalTable: "BloodTypes",
                        principalColumn: "BloodTypeId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "BlogPosts",
                schema: "public",
                columns: table => new
                {
                    PostId = table.Column<Guid>(type: "uuid", nullable: false),
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    Title = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Content = table.Column<string>(type: "text", nullable: false),
                    PublishedDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BlogPosts", x => x.PostId);
                    table.ForeignKey(
                        name: "FK_BlogPosts_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "public",
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DonationRequests",
                schema: "public",
                columns: table => new
                {
                    RequestId = table.Column<Guid>(type: "uuid", nullable: false),
                    BloodTypeId = table.Column<Guid>(type: "uuid", nullable: false),
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    AmountBlood = table.Column<int>(type: "integer", nullable: false),
                    ComponentType = table.Column<string>(type: "text", nullable: false),
                    RequestTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Deadline = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    IsEmergency = table.Column<bool>(type: "boolean", nullable: false, defaultValue: false),
                    EmergencyContactName = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: true),
                    EmergencyContactPhone = table.Column<string>(type: "character varying(20)", maxLength: 20, nullable: true),
                    Status = table.Column<string>(type: "text", nullable: false, defaultValue: "Pending"),
                    Note = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DonationRequests", x => x.RequestId);
                    table.ForeignKey(
                        name: "FK_DonationRequests_BloodTypes_BloodTypeId",
                        column: x => x.BloodTypeId,
                        principalSchema: "public",
                        principalTable: "BloodTypes",
                        principalColumn: "BloodTypeId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DonationRequests_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "public",
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DonorInformation",
                schema: "public",
                columns: table => new
                {
                    DonorInfoId = table.Column<Guid>(type: "uuid", nullable: false),
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    Weight = table.Column<decimal>(type: "numeric", nullable: false),
                    Height = table.Column<decimal>(type: "numeric", nullable: false),
                    MedicalStatus = table.Column<string>(type: "text", nullable: false),
                    LastChecked = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DonorInformation", x => x.DonorInfoId);
                    table.ForeignKey(
                        name: "FK_DonorInformation_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "public",
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "HealthForms",
                schema: "public",
                columns: table => new
                {
                    FormId = table.Column<Guid>(type: "uuid", nullable: false),
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
                    Status = table.Column<string>(type: "text", nullable: false, defaultValue: "Pending"),
                    ApprovedBy = table.Column<Guid>(type: "uuid", nullable: true),
                    ApprovedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    ApprovedByStaffName = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HealthForms", x => x.FormId);
                    table.ForeignKey(
                        name: "FK_HealthForms_Users_ApprovedBy",
                        column: x => x.ApprovedBy,
                        principalSchema: "public",
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_HealthForms_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "public",
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "RefreshTokens",
                schema: "public",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Token = table.Column<string>(type: "text", nullable: false),
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    Expires = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RefreshTokens", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RefreshTokens_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "public",
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DonationMatches",
                schema: "public",
                columns: table => new
                {
                    MatchId = table.Column<Guid>(type: "uuid", nullable: false),
                    RequestId = table.Column<Guid>(type: "uuid", nullable: false),
                    DonorId = table.Column<Guid>(type: "uuid", nullable: false),
                    MatchedTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    ConfirmedTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    Status = table.Column<string>(type: "text", nullable: false, defaultValue: "Pending")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DonationMatches", x => x.MatchId);
                    table.ForeignKey(
                        name: "FK_DonationMatches_DonationRequests_RequestId",
                        column: x => x.RequestId,
                        principalSchema: "public",
                        principalTable: "DonationRequests",
                        principalColumn: "RequestId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DonationMatches_Users_DonorId",
                        column: x => x.DonorId,
                        principalSchema: "public",
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DonationsHistory",
                schema: "public",
                columns: table => new
                {
                    DonationId = table.Column<Guid>(type: "uuid", nullable: false),
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    RequestId = table.Column<Guid>(type: "uuid", nullable: false),
                    Date = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Status = table.Column<string>(type: "text", nullable: false, defaultValue: "Completed"),
                    ConfirmedBy = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DonationsHistory", x => x.DonationId);
                    table.ForeignKey(
                        name: "FK_DonationsHistory_DonationRequests_RequestId",
                        column: x => x.RequestId,
                        principalSchema: "public",
                        principalTable: "DonationRequests",
                        principalColumn: "RequestId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DonationsHistory_Users_ConfirmedBy",
                        column: x => x.ConfirmedBy,
                        principalSchema: "public",
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DonationsHistory_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "public",
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "HealthAnswers",
                schema: "public",
                columns: table => new
                {
                    AnswerId = table.Column<Guid>(type: "uuid", nullable: false),
                    FormId = table.Column<Guid>(type: "uuid", nullable: false),
                    QuestionId = table.Column<Guid>(type: "uuid", nullable: false),
                    Answer = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HealthAnswers", x => x.AnswerId);
                    table.ForeignKey(
                        name: "FK_HealthAnswers_HealthForms_FormId",
                        column: x => x.FormId,
                        principalSchema: "public",
                        principalTable: "HealthForms",
                        principalColumn: "FormId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_HealthAnswers_HealthQuestions_QuestionId",
                        column: x => x.QuestionId,
                        principalSchema: "public",
                        principalTable: "HealthQuestions",
                        principalColumn: "QuestionId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                schema: "public",
                table: "BloodTypes",
                columns: new[] { "BloodTypeId", "Description", "Name" },
                values: new object[,]
                {
                    { new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), "A negative blood type", "A-" },
                    { new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), "AB negative blood type", "AB-" },
                    { new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), "A positive blood type", "A+" },
                    { new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), "O negative blood type (universal donor)", "O-" },
                    { new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), "B negative blood type", "B-" },
                    { new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), "B positive blood type", "B+" },
                    { new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), "O positive blood type (most common)", "O+" },
                    { new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), "AB positive blood type (universal plasma donor)", "AB+" }
                });

            migrationBuilder.InsertData(
                schema: "public",
                table: "BloodCompatibility",
                columns: new[] { "Id", "ComponentType", "FromBloodTypeId", "ToBloodTypeId" },
                values: new object[,]
                {
                    { new Guid("0143669c-abca-42f4-88a9-0733f7aee9c8"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("032a33dd-e0ed-4050-91df-3cf548866ff6"), "Platelet", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("06e6a27c-1eb5-47ba-be7c-96519f382ab0"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("07b3926c-44a8-4780-965b-4883d5f54768"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("0b3dacdb-1812-424b-aea8-5e62055c70d2"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("0b6d85a1-b255-496b-aa36-7493517e300b"), "RBC", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("11f99f5c-734e-4324-9a0e-5d86d5adf16f"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("12cbc025-7008-41f8-a39a-da33bc08e5be"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("147db7fd-5079-4e1d-88df-475d7db5ee09"), "Plasma", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("14814993-1466-4650-8406-3e14960c57bd"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("177adc66-7ab7-4e62-87ab-a905ab4d2125"), "Plasma", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("19dba2b7-c8fa-43f6-b880-fd3e62a8ba9a"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("19efe4a7-173e-4439-967a-f6086cd4e84b"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("1b5b08e2-7d88-4a2d-8804-a3f12d7a0709"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("1b70a1ea-90ce-408f-9d50-7255397c205a"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("1bb4b9f7-b271-4e93-9037-0dd912275578"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("214a2e3f-84fc-45d3-b1d6-1f17b924b0c5"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("23434f53-3438-43a6-b7f2-29692d1659c2"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("23eb6435-8d2f-4fe7-a172-c02a5733035f"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("25ada933-8bbe-4f64-9eb5-7f637f1e932a"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("2623e70e-8a24-434c-879e-6cc6504acf3f"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("26555595-b130-47e4-93ec-f1b27c2d71bc"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("28730e1b-0d41-4acd-b433-f7e0908a9732"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("29cfdd3b-b359-49b8-97f1-efe69ec0c59a"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("2bc8c38b-680a-4f80-a5b0-ce17a7775fd4"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("2c1d53ce-0f78-40a3-a699-6bd7d82c1080"), "Plasma", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("342d423d-cb11-4dc5-929b-ff8f21ec1665"), "RBC", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("399d212d-4068-4ed1-9611-0661069934fc"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("3a7f2900-3728-4896-b517-d9a5f0239a25"), "Plasma", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("3ad33361-a211-4b5c-922c-c56d0e745241"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("3d6fb2cb-87e2-4014-b027-a41fc04ca42b"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("425bc66f-1dff-4c25-b4e4-8fa84f47b1f5"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("42c39bbe-7b3b-4374-90b1-26051ddea3c6"), "RBC", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("487e5d18-51ae-49db-a39e-cc97c10d1757"), "Platelet", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("4cc1de37-e5e3-438b-a3b4-9aebe8798cd7"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("4cf2306a-9ad7-42f7-9a8d-e563def23844"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("4fce4eb6-e35f-4b5a-a8bf-90a6feab6319"), "RBC", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("54e64ea1-e85c-48b3-ba83-29deddde61bf"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("58f15792-0aa9-43ee-8b9d-05ec95326fea"), "Plasma", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("598511ca-dd27-4806-b7d9-a3c07530e3e5"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("5cdebdb7-ba1f-4800-9d4b-f83f5959d798"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("5f83c17d-c539-4c93-9a7e-f085302f4401"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("6153f860-7671-4dad-ade2-b1668c8a5f3e"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("64c5d9b3-e375-4e5a-977e-c2374cfc0249"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("6593a1dc-dfd2-47c8-a0f1-915b0dccda3b"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("66d9f0ca-bff2-4175-9282-d6b92d398c45"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("6af8ad7d-fa04-4d33-97b3-78052212be18"), "Platelet", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("716568ac-8cb7-4d9a-b8b5-584559630c21"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("71b241c8-13ed-467f-aa85-0b102fca8ecc"), "Whole", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("7430fa81-e54b-43f6-9283-fe9bf149a787"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("743d9d05-dd6a-4386-9e79-00f4721f51ad"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("760cfc76-0ac4-42ec-879d-511652c0ec0e"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("7a0a56dd-3046-4923-bf2b-b04abf9b8b4c"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("7e94b171-9da8-4163-8294-0528b07f1e91"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("7fa0732c-4fc6-4c03-a339-0ddbcfb3430f"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("7ffa4363-b2a3-4ad8-b4e6-b547ff292847"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("8089dfc3-da97-45ae-af7b-0349a5c7a9fb"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("811a4009-f506-451d-adf1-172ebe63a518"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("8528bf70-5594-48d8-a563-1ce23123b574"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("87b13eb4-362d-4130-aa4e-10682e194fa1"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("8a157305-06a4-48c2-a51c-7ac1fd342ca2"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("8af83553-6628-40f1-ad35-a87b67c32a6a"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("8d27d795-6f25-4588-be3e-b26ad2f3016b"), "Whole", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("908be492-4bcb-4ce1-b9f6-f0d5cc97d201"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("91b63fda-cd41-4554-a89f-0fe8b7e03c90"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("95c10f40-e824-4e06-a3b1-042f017e58ae"), "Plasma", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("973203d0-12b7-4e36-9d15-2a50a0f9032a"), "Whole", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("9a533f13-5a27-46e8-97bc-4d66ff964ef8"), "Whole", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("9d9989fd-cce2-41d8-992d-cae1ec8ab45d"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("9e6fca26-8f65-4c7f-a9b2-1d41e289100b"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("9f810a58-5a82-4e48-8f36-91307ee059cb"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("9fa6a4c0-5eea-47be-a9de-c18b823623a8"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("a2604894-c810-4dc1-8a8f-81415023e7b6"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("a2fe224a-65f8-4bbc-bc58-4cb6fff0d88a"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("a441eca1-eb3e-4aa4-9882-af8f71336d27"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("a626db3a-47b4-4124-84f6-776c2996d4db"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("a68a85bc-32d8-4066-93d1-ca1f07d2a685"), "Whole", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("ac117b18-5996-40a9-b127-ff490e6ddb71"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("b1700bc6-8d11-42c9-b9d2-32189c488a22"), "Platelet", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("b1851d69-5969-4607-b099-e1fba8e36053"), "RBC", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("b2dc704b-6bcc-42dc-88c1-2664e2bd8caf"), "Plasma", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("b3fc0bc7-ed68-444a-a8c1-972fddc8e16a"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("b54e208f-c69f-4237-b078-5fdbe271f0c4"), "RBC", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("b8abcbbf-7f59-4fa2-bb10-3209e39ffd7e"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("ba018e8f-268c-44f3-a933-b3a6cf42423f"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("bdb78245-baf1-4894-b588-e7d4b5ee14fe"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("bfb5a458-4ccb-41b5-8510-dad69dfc415a"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("c0006037-a56f-40c6-882e-31297a723ea1"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("c08dfd88-010f-4864-8125-f1dfb65be495"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("c1878fd2-6d4a-4ddf-ac53-f28468d61e3d"), "Platelet", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("c3dca1d0-3cb9-4153-b6ea-2bae32e210ca"), "Platelet", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("c5f1756f-3a4f-4295-a762-3b8845ec2ff4"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("c5f361f0-ffeb-4ae8-802e-0bb11a499612"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("c7dbf3eb-d2d0-4e09-8469-02018eca3e40"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("cc915b57-8013-4ebf-8984-952843f0686d"), "Platelet", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("cf449132-0308-4e34-ae4d-d319ac0ae007"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("dbdedb0c-cec4-4b09-ad34-8e2d2d4d1845"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("dea381a3-e161-47b3-bb67-8d3b7e7a1ff1"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("e2ec21a0-68b0-4ca0-9103-1ab4b050cb1f"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("e86f8c20-e9f4-4a68-9cc7-38a484707bc0"), "Whole", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("e87a730d-89fe-420b-91f5-154dfd40fb7f"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("ec968b44-0db5-4c73-84bc-f3f30fc85f24"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("ede158bc-05bc-4db6-a43c-8ccdf5c6a779"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("ef799c71-e41f-4fd0-9858-9f12e2a8f4a1"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("f61c960b-abdf-4648-b781-9c9193109fca"), "RBC", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("f984ce9f-7809-4816-adde-a41bb7da91b9"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("fb74fae0-da0d-4dcd-9ea3-ee5c2ae78b7f"), "Whole", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("fe80804e-72d7-457f-bb77-e66c217f79e8"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") }
                });

            migrationBuilder.InsertData(
                schema: "public",
                table: "BloodStored",
                columns: new[] { "StoredId", "BloodTypeId", "LastUpdated", "Quantity" },
                values: new object[,]
                {
                    { new Guid("10000000-0000-0000-0000-000000000001"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new DateTime(2025, 6, 23, 15, 52, 31, 239, DateTimeKind.Utc).AddTicks(5503), 0 },
                    { new Guid("10000000-0000-0000-0000-000000000002"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new DateTime(2025, 6, 23, 15, 52, 31, 239, DateTimeKind.Utc).AddTicks(5507), 0 },
                    { new Guid("10000000-0000-0000-0000-000000000003"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new DateTime(2025, 6, 23, 15, 52, 31, 239, DateTimeKind.Utc).AddTicks(5513), 0 },
                    { new Guid("10000000-0000-0000-0000-000000000004"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new DateTime(2025, 6, 23, 15, 52, 31, 239, DateTimeKind.Utc).AddTicks(5515), 0 },
                    { new Guid("10000000-0000-0000-0000-000000000005"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new DateTime(2025, 6, 23, 15, 52, 31, 239, DateTimeKind.Utc).AddTicks(5516), 0 },
                    { new Guid("10000000-0000-0000-0000-000000000006"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new DateTime(2025, 6, 23, 15, 52, 31, 239, DateTimeKind.Utc).AddTicks(5518), 0 },
                    { new Guid("10000000-0000-0000-0000-000000000007"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new DateTime(2025, 6, 23, 15, 52, 31, 239, DateTimeKind.Utc).AddTicks(5519), 0 },
                    { new Guid("10000000-0000-0000-0000-000000000008"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new DateTime(2025, 6, 23, 15, 52, 31, 239, DateTimeKind.Utc).AddTicks(5521), 0 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_BlogPosts_UserId",
                schema: "public",
                table: "BlogPosts",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_BloodCompatibility_FromBloodTypeId",
                schema: "public",
                table: "BloodCompatibility",
                column: "FromBloodTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_BloodCompatibility_ToBloodTypeId",
                schema: "public",
                table: "BloodCompatibility",
                column: "ToBloodTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_BloodStored_BloodTypeId",
                schema: "public",
                table: "BloodStored",
                column: "BloodTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_BloodTypes_Name",
                schema: "public",
                table: "BloodTypes",
                column: "Name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_DonationMatches_DonorId",
                schema: "public",
                table: "DonationMatches",
                column: "DonorId");

            migrationBuilder.CreateIndex(
                name: "IX_DonationMatches_RequestId",
                schema: "public",
                table: "DonationMatches",
                column: "RequestId");

            migrationBuilder.CreateIndex(
                name: "IX_DonationRequests_BloodTypeId",
                schema: "public",
                table: "DonationRequests",
                column: "BloodTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_DonationRequests_UserId",
                schema: "public",
                table: "DonationRequests",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_DonationsHistory_ConfirmedBy",
                schema: "public",
                table: "DonationsHistory",
                column: "ConfirmedBy");

            migrationBuilder.CreateIndex(
                name: "IX_DonationsHistory_RequestId",
                schema: "public",
                table: "DonationsHistory",
                column: "RequestId");

            migrationBuilder.CreateIndex(
                name: "IX_DonationsHistory_UserId",
                schema: "public",
                table: "DonationsHistory",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_DonorInformation_UserId",
                schema: "public",
                table: "DonorInformation",
                column: "UserId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_HealthAnswers_FormId",
                schema: "public",
                table: "HealthAnswers",
                column: "FormId");

            migrationBuilder.CreateIndex(
                name: "IX_HealthAnswers_QuestionId",
                schema: "public",
                table: "HealthAnswers",
                column: "QuestionId");

            migrationBuilder.CreateIndex(
                name: "IX_HealthForms_ApprovedBy",
                schema: "public",
                table: "HealthForms",
                column: "ApprovedBy");

            migrationBuilder.CreateIndex(
                name: "IX_HealthForms_UserId",
                schema: "public",
                table: "HealthForms",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_RefreshTokens_Token",
                schema: "public",
                table: "RefreshTokens",
                column: "Token",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_RefreshTokens_UserId",
                schema: "public",
                table: "RefreshTokens",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_Email",
                schema: "public",
                table: "Users",
                column: "Email",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BlogPosts",
                schema: "public");

            migrationBuilder.DropTable(
                name: "BloodCompatibility",
                schema: "public");

            migrationBuilder.DropTable(
                name: "BloodStored",
                schema: "public");

            migrationBuilder.DropTable(
                name: "DonationMatches",
                schema: "public");

            migrationBuilder.DropTable(
                name: "DonationsHistory",
                schema: "public");

            migrationBuilder.DropTable(
                name: "DonorInformation",
                schema: "public");

            migrationBuilder.DropTable(
                name: "HealthAnswers",
                schema: "public");

            migrationBuilder.DropTable(
                name: "RefreshTokens",
                schema: "public");

            migrationBuilder.DropTable(
                name: "DonationRequests",
                schema: "public");

            migrationBuilder.DropTable(
                name: "HealthForms",
                schema: "public");

            migrationBuilder.DropTable(
                name: "HealthQuestions",
                schema: "public");

            migrationBuilder.DropTable(
                name: "BloodTypes",
                schema: "public");

            migrationBuilder.DropTable(
                name: "Users",
                schema: "public");
        }
    }
}
