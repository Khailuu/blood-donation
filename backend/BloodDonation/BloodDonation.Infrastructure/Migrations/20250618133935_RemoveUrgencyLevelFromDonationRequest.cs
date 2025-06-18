using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BloodDonation.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class RemoveUrgencyLevelFromDonationRequest : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UrgencyLevel",
                schema: "dbo",
                table: "DonationRequests");

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000001"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 18, 13, 39, 34, 998, DateTimeKind.Utc).AddTicks(7460));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000002"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 18, 13, 39, 34, 998, DateTimeKind.Utc).AddTicks(7460));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000003"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 18, 13, 39, 34, 998, DateTimeKind.Utc).AddTicks(7460));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000004"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 18, 13, 39, 34, 998, DateTimeKind.Utc).AddTicks(7460));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000005"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 18, 13, 39, 34, 998, DateTimeKind.Utc).AddTicks(7460));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000006"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 18, 13, 39, 34, 998, DateTimeKind.Utc).AddTicks(7470));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000007"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 18, 13, 39, 34, 998, DateTimeKind.Utc).AddTicks(7470));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000008"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 18, 13, 39, 34, 998, DateTimeKind.Utc).AddTicks(7470));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UrgencyLevel",
                schema: "dbo",
                table: "DonationRequests",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000001"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 18, 13, 13, 37, 553, DateTimeKind.Utc).AddTicks(7520));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000002"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 18, 13, 13, 37, 553, DateTimeKind.Utc).AddTicks(7520));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000003"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 18, 13, 13, 37, 553, DateTimeKind.Utc).AddTicks(7530));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000004"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 18, 13, 13, 37, 553, DateTimeKind.Utc).AddTicks(7530));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000005"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 18, 13, 13, 37, 553, DateTimeKind.Utc).AddTicks(7530));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000006"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 18, 13, 13, 37, 553, DateTimeKind.Utc).AddTicks(7530));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000007"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 18, 13, 13, 37, 553, DateTimeKind.Utc).AddTicks(7530));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000008"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 18, 13, 13, 37, 553, DateTimeKind.Utc).AddTicks(7530));
        }
    }
}
