using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BloodDonation.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class UpdateBloodTypeConfig : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FromBloodType",
                schema: "dbo",
                table: "BloodCompatibility");

            migrationBuilder.DropColumn(
                name: "ToBloodType",
                schema: "dbo",
                table: "BloodCompatibility");

            migrationBuilder.AddColumn<Guid>(
                name: "FromBloodTypeId",
                schema: "dbo",
                table: "BloodCompatibility",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "ToBloodTypeId",
                schema: "dbo",
                table: "BloodCompatibility",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000001"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 13, 10, 33, 4, 677, DateTimeKind.Utc).AddTicks(7913));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000002"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 13, 10, 33, 4, 677, DateTimeKind.Utc).AddTicks(7933));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000003"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 13, 10, 33, 4, 677, DateTimeKind.Utc).AddTicks(7935));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000004"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 13, 10, 33, 4, 677, DateTimeKind.Utc).AddTicks(7937));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000005"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 13, 10, 33, 4, 677, DateTimeKind.Utc).AddTicks(7938));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000006"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 13, 10, 33, 4, 677, DateTimeKind.Utc).AddTicks(7940));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000007"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 13, 10, 33, 4, 677, DateTimeKind.Utc).AddTicks(7941));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000008"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 13, 10, 33, 4, 677, DateTimeKind.Utc).AddTicks(7943));

            migrationBuilder.CreateIndex(
                name: "IX_BloodCompatibility_FromBloodTypeId",
                schema: "dbo",
                table: "BloodCompatibility",
                column: "FromBloodTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_BloodCompatibility_ToBloodTypeId",
                schema: "dbo",
                table: "BloodCompatibility",
                column: "ToBloodTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_BloodCompatibility_BloodTypes_FromBloodTypeId",
                schema: "dbo",
                table: "BloodCompatibility",
                column: "FromBloodTypeId",
                principalSchema: "dbo",
                principalTable: "BloodTypes",
                principalColumn: "BloodTypeId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_BloodCompatibility_BloodTypes_ToBloodTypeId",
                schema: "dbo",
                table: "BloodCompatibility",
                column: "ToBloodTypeId",
                principalSchema: "dbo",
                principalTable: "BloodTypes",
                principalColumn: "BloodTypeId",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BloodCompatibility_BloodTypes_FromBloodTypeId",
                schema: "dbo",
                table: "BloodCompatibility");

            migrationBuilder.DropForeignKey(
                name: "FK_BloodCompatibility_BloodTypes_ToBloodTypeId",
                schema: "dbo",
                table: "BloodCompatibility");

            migrationBuilder.DropIndex(
                name: "IX_BloodCompatibility_FromBloodTypeId",
                schema: "dbo",
                table: "BloodCompatibility");

            migrationBuilder.DropIndex(
                name: "IX_BloodCompatibility_ToBloodTypeId",
                schema: "dbo",
                table: "BloodCompatibility");

            migrationBuilder.DropColumn(
                name: "FromBloodTypeId",
                schema: "dbo",
                table: "BloodCompatibility");

            migrationBuilder.DropColumn(
                name: "ToBloodTypeId",
                schema: "dbo",
                table: "BloodCompatibility");

            migrationBuilder.AddColumn<string>(
                name: "FromBloodType",
                schema: "dbo",
                table: "BloodCompatibility",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ToBloodType",
                schema: "dbo",
                table: "BloodCompatibility",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000001"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 11, 17, 13, 11, 75, DateTimeKind.Utc).AddTicks(7650));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000002"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 11, 17, 13, 11, 75, DateTimeKind.Utc).AddTicks(7650));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000003"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 11, 17, 13, 11, 75, DateTimeKind.Utc).AddTicks(7660));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000004"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 11, 17, 13, 11, 75, DateTimeKind.Utc).AddTicks(7660));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000005"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 11, 17, 13, 11, 75, DateTimeKind.Utc).AddTicks(7660));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000006"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 11, 17, 13, 11, 75, DateTimeKind.Utc).AddTicks(7660));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000007"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 11, 17, 13, 11, 75, DateTimeKind.Utc).AddTicks(7660));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000008"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 11, 17, 13, 11, 75, DateTimeKind.Utc).AddTicks(7660));
        }
    }
}
