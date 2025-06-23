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
                table: "BloodStored",
                columns: new[] { "StoredId", "BloodTypeId", "LastUpdated", "Quantity" },
                values: new object[,]
                {
                    { new Guid("10000000-0000-0000-0000-000000000001"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new DateTime(2025, 6, 23, 4, 29, 49, 88, DateTimeKind.Utc).AddTicks(5060), 0 },
                    { new Guid("10000000-0000-0000-0000-000000000002"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new DateTime(2025, 6, 23, 4, 29, 49, 88, DateTimeKind.Utc).AddTicks(5060), 0 },
                    { new Guid("10000000-0000-0000-0000-000000000003"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new DateTime(2025, 6, 23, 4, 29, 49, 88, DateTimeKind.Utc).AddTicks(5060), 0 },
                    { new Guid("10000000-0000-0000-0000-000000000004"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new DateTime(2025, 6, 23, 4, 29, 49, 88, DateTimeKind.Utc).AddTicks(5060), 0 },
                    { new Guid("10000000-0000-0000-0000-000000000005"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new DateTime(2025, 6, 23, 4, 29, 49, 88, DateTimeKind.Utc).AddTicks(5060), 0 },
                    { new Guid("10000000-0000-0000-0000-000000000006"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new DateTime(2025, 6, 23, 4, 29, 49, 88, DateTimeKind.Utc).AddTicks(5070), 0 },
                    { new Guid("10000000-0000-0000-0000-000000000007"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new DateTime(2025, 6, 23, 4, 29, 49, 88, DateTimeKind.Utc).AddTicks(5070), 0 },
                    { new Guid("10000000-0000-0000-0000-000000000008"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new DateTime(2025, 6, 23, 4, 29, 49, 88, DateTimeKind.Utc).AddTicks(5070), 0 }
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
