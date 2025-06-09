using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BloodDonation.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class Init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "dbo");

            migrationBuilder.CreateTable(
                name: "BloodCompatibility",
                schema: "dbo",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FromBloodType = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    ToBloodType = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    ComponentType = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BloodCompatibility", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BloodTypes",
                schema: "dbo",
                columns: table => new
                {
                    BloodTypeId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BloodTypes", x => x.BloodTypeId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                schema: "dbo",
                columns: table => new
                {
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BloodType = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    DateOfBirth = table.Column<DateOnly>(type: "date", nullable: false),
                    Gender = table.Column<int>(type: "int", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Role = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsDonor = table.Column<bool>(type: "bit", nullable: true, defaultValue: false),
                    LastDonationDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false, defaultValue: "Active")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "BloodStored",
                schema: "dbo",
                columns: table => new
                {
                    StoredId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    BloodTypeId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Quantity = table.Column<int>(type: "int", nullable: false),
                    LastUpdated = table.Column<DateTime>(type: "datetime2", nullable: false),
                    BloodTypeId1 = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BloodStored", x => x.StoredId);
                    table.ForeignKey(
                        name: "FK_BloodStored_BloodTypes_BloodTypeId",
                        column: x => x.BloodTypeId,
                        principalSchema: "dbo",
                        principalTable: "BloodTypes",
                        principalColumn: "BloodTypeId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BloodStored_BloodTypes_BloodTypeId1",
                        column: x => x.BloodTypeId1,
                        principalSchema: "dbo",
                        principalTable: "BloodTypes",
                        principalColumn: "BloodTypeId");
                });

            migrationBuilder.CreateTable(
                name: "BlogPosts",
                schema: "dbo",
                columns: table => new
                {
                    PostId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    Content = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PublishedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserId2 = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BlogPosts", x => x.PostId);
                    table.ForeignKey(
                        name: "FK_BlogPosts_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "dbo",
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BlogPosts_Users_UserId2",
                        column: x => x.UserId2,
                        principalSchema: "dbo",
                        principalTable: "Users",
                        principalColumn: "UserId");
                });

            migrationBuilder.CreateTable(
                name: "DonationRequests",
                schema: "dbo",
                columns: table => new
                {
                    RequestId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    BloodTypeId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    AmountNeeded = table.Column<int>(type: "int", nullable: false),
                    RequestTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Deadline = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IsEmergency = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    UrgencyLevel = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EmergencyContactName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    EmergencyContactPhone = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false, defaultValue: "Pending"),
                    Note = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    UserId2 = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    BloodTypeId1 = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DonationRequests", x => x.RequestId);
                    table.ForeignKey(
                        name: "FK_DonationRequests_BloodTypes_BloodTypeId",
                        column: x => x.BloodTypeId,
                        principalSchema: "dbo",
                        principalTable: "BloodTypes",
                        principalColumn: "BloodTypeId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DonationRequests_BloodTypes_BloodTypeId1",
                        column: x => x.BloodTypeId1,
                        principalSchema: "dbo",
                        principalTable: "BloodTypes",
                        principalColumn: "BloodTypeId");
                    table.ForeignKey(
                        name: "FK_DonationRequests_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "dbo",
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DonationRequests_Users_UserId2",
                        column: x => x.UserId2,
                        principalSchema: "dbo",
                        principalTable: "Users",
                        principalColumn: "UserId");
                });

            migrationBuilder.CreateTable(
                name: "DonorInformation",
                schema: "dbo",
                columns: table => new
                {
                    DonorInfoId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Weight = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Height = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    MedicalStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastChecked = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserId2 = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DonorInformation", x => x.DonorInfoId);
                    table.ForeignKey(
                        name: "FK_DonorInformation_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "dbo",
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DonorInformation_Users_UserId2",
                        column: x => x.UserId2,
                        principalSchema: "dbo",
                        principalTable: "Users",
                        principalColumn: "UserId");
                });

            migrationBuilder.CreateTable(
                name: "DonationMatches",
                schema: "dbo",
                columns: table => new
                {
                    MatchId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    RequestId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DonorId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    MatchedTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ConfirmedTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false, defaultValue: "Pending"),
                    RequestId1 = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    DonorUserId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DonationMatches", x => x.MatchId);
                    table.ForeignKey(
                        name: "FK_DonationMatches_DonationRequests_RequestId",
                        column: x => x.RequestId,
                        principalSchema: "dbo",
                        principalTable: "DonationRequests",
                        principalColumn: "RequestId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DonationMatches_DonationRequests_RequestId1",
                        column: x => x.RequestId1,
                        principalSchema: "dbo",
                        principalTable: "DonationRequests",
                        principalColumn: "RequestId");
                    table.ForeignKey(
                        name: "FK_DonationMatches_Users_DonorId",
                        column: x => x.DonorId,
                        principalSchema: "dbo",
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DonationMatches_Users_DonorUserId",
                        column: x => x.DonorUserId,
                        principalSchema: "dbo",
                        principalTable: "Users",
                        principalColumn: "UserId");
                });

            migrationBuilder.CreateTable(
                name: "DonationsHistory",
                schema: "dbo",
                columns: table => new
                {
                    DonationId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    RequestId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false, defaultValue: "Completed"),
                    ConfirmedBy = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DonorUserId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    RequestId1 = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    ConfirmedByUserUserId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DonationsHistory", x => x.DonationId);
                    table.ForeignKey(
                        name: "FK_DonationsHistory_DonationRequests_RequestId",
                        column: x => x.RequestId,
                        principalSchema: "dbo",
                        principalTable: "DonationRequests",
                        principalColumn: "RequestId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DonationsHistory_DonationRequests_RequestId1",
                        column: x => x.RequestId1,
                        principalSchema: "dbo",
                        principalTable: "DonationRequests",
                        principalColumn: "RequestId");
                    table.ForeignKey(
                        name: "FK_DonationsHistory_Users_ConfirmedBy",
                        column: x => x.ConfirmedBy,
                        principalSchema: "dbo",
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DonationsHistory_Users_ConfirmedByUserUserId",
                        column: x => x.ConfirmedByUserUserId,
                        principalSchema: "dbo",
                        principalTable: "Users",
                        principalColumn: "UserId");
                    table.ForeignKey(
                        name: "FK_DonationsHistory_Users_DonorUserId",
                        column: x => x.DonorUserId,
                        principalSchema: "dbo",
                        principalTable: "Users",
                        principalColumn: "UserId");
                    table.ForeignKey(
                        name: "FK_DonationsHistory_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "dbo",
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BlogPosts_UserId",
                schema: "dbo",
                table: "BlogPosts",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_BlogPosts_UserId2",
                schema: "dbo",
                table: "BlogPosts",
                column: "UserId2");

            migrationBuilder.CreateIndex(
                name: "IX_BloodStored_BloodTypeId",
                schema: "dbo",
                table: "BloodStored",
                column: "BloodTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_BloodStored_BloodTypeId1",
                schema: "dbo",
                table: "BloodStored",
                column: "BloodTypeId1");

            migrationBuilder.CreateIndex(
                name: "IX_BloodTypes_Name",
                schema: "dbo",
                table: "BloodTypes",
                column: "Name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_DonationMatches_DonorId",
                schema: "dbo",
                table: "DonationMatches",
                column: "DonorId");

            migrationBuilder.CreateIndex(
                name: "IX_DonationMatches_DonorUserId",
                schema: "dbo",
                table: "DonationMatches",
                column: "DonorUserId");

            migrationBuilder.CreateIndex(
                name: "IX_DonationMatches_RequestId",
                schema: "dbo",
                table: "DonationMatches",
                column: "RequestId");

            migrationBuilder.CreateIndex(
                name: "IX_DonationMatches_RequestId1",
                schema: "dbo",
                table: "DonationMatches",
                column: "RequestId1");

            migrationBuilder.CreateIndex(
                name: "IX_DonationRequests_BloodTypeId",
                schema: "dbo",
                table: "DonationRequests",
                column: "BloodTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_DonationRequests_BloodTypeId1",
                schema: "dbo",
                table: "DonationRequests",
                column: "BloodTypeId1");

            migrationBuilder.CreateIndex(
                name: "IX_DonationRequests_UserId",
                schema: "dbo",
                table: "DonationRequests",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_DonationRequests_UserId2",
                schema: "dbo",
                table: "DonationRequests",
                column: "UserId2");

            migrationBuilder.CreateIndex(
                name: "IX_DonationsHistory_ConfirmedBy",
                schema: "dbo",
                table: "DonationsHistory",
                column: "ConfirmedBy");

            migrationBuilder.CreateIndex(
                name: "IX_DonationsHistory_ConfirmedByUserUserId",
                schema: "dbo",
                table: "DonationsHistory",
                column: "ConfirmedByUserUserId");

            migrationBuilder.CreateIndex(
                name: "IX_DonationsHistory_DonorUserId",
                schema: "dbo",
                table: "DonationsHistory",
                column: "DonorUserId");

            migrationBuilder.CreateIndex(
                name: "IX_DonationsHistory_RequestId",
                schema: "dbo",
                table: "DonationsHistory",
                column: "RequestId");

            migrationBuilder.CreateIndex(
                name: "IX_DonationsHistory_RequestId1",
                schema: "dbo",
                table: "DonationsHistory",
                column: "RequestId1");

            migrationBuilder.CreateIndex(
                name: "IX_DonationsHistory_UserId",
                schema: "dbo",
                table: "DonationsHistory",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_DonorInformation_UserId",
                schema: "dbo",
                table: "DonorInformation",
                column: "UserId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_DonorInformation_UserId2",
                schema: "dbo",
                table: "DonorInformation",
                column: "UserId2");

            migrationBuilder.CreateIndex(
                name: "IX_Users_Email",
                schema: "dbo",
                table: "Users",
                column: "Email",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BlogPosts",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "BloodCompatibility",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "BloodStored",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "DonationMatches",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "DonationsHistory",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "DonorInformation",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "DonationRequests",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "BloodTypes",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "Users",
                schema: "dbo");
        }
    }
}
