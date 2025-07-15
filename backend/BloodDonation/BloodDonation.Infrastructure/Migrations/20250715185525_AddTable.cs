using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BloodDonation.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Patient_Users_UserId",
                schema: "public",
                table: "Patient");

            migrationBuilder.DropForeignKey(
                name: "FK_QaAnswer_QaQuestions_QuesttionId",
                schema: "public",
                table: "QaAnswer");

            migrationBuilder.DropForeignKey(
                name: "FK_QaAnswer_Users_UserId",
                schema: "public",
                table: "QaAnswer");

            migrationBuilder.DropPrimaryKey(
                name: "PK_QaAnswer",
                schema: "public",
                table: "QaAnswer");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Patient",
                schema: "public",
                table: "Patient");

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("01500cf3-d334-43d8-a527-a40fa8ca747d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("01ca1737-524a-4d4a-8984-83197ee0112d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("02bd1164-051c-4cf3-84a2-6de68d9049b4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("03cd5f4d-c6ae-4019-969b-0128cc2e39c1"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("07513971-a5d4-4ca8-ada7-3ca3da6a067f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("0be84a82-42b8-4c2f-b24b-44898e5b6469"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("11167eed-5114-4ccf-aef7-6d7e5b16f09d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("11e99270-0727-4531-bfa1-efbac333f6cf"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("13065b52-86db-4225-bc18-aeb82fba6dee"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("13a04d2d-cad1-41ed-9d3c-d9d5fca8eb1c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("170684e4-4be2-4e98-abc0-092644bcfad1"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("17536745-b490-42ee-9ad1-23c6dfb3b239"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("18d44578-cab0-42ed-8b74-a90717aefc0e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1c629d74-b381-47bf-906b-46e3cf250bb6"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1e1faf90-8025-44de-8647-3a843d24ff89"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("21562d6f-7b48-452a-920d-db6b0e33d932"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("21a54321-ed9c-46af-862f-fed42eecf258"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("24ae0dc9-fee7-4d08-a921-231358338869"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("28fc219e-acbe-485f-afa2-0b3fe089c707"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2c15c0ea-b96f-4c93-84b1-648ad64be31b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2c53e2d5-f797-42bb-9ed5-b0b007758358"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2e8d4ab4-3f9f-4411-ae82-6080a54bc664"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("307481c4-f020-4564-b220-f8df86879e7c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("358af5c8-5c9f-419b-af07-98601e42319a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("35dc8906-2653-40ec-a172-33adea10a7a6"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3b7d5a02-d15e-4494-9285-c2ecc6a17ba1"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3bb59672-19d8-4c8b-8479-b016af8fbc0d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3bf4c440-f5a5-4df9-9459-cad01e13cdf2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("40fef3d7-fca1-486a-bcaf-06fc2e982c07"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4770f651-2338-4c3c-915d-ec9b2693bc1e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("47bc57af-ac1c-4b24-8e70-a230533062b2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("48b85461-df4e-4491-8403-7d710c6c0bf1"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4bc556fd-b374-4030-927e-e891e2d06722"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4bd15292-79ae-44be-8268-164ebc309c32"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4f1a716d-4fbd-4834-ba67-911d1fc7030d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4f756b14-2f73-4b18-817d-101aeec28f1c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4fc33783-a1ca-480e-a10e-3dedb478d1a9"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("506bb221-9d1b-44dd-957a-ea146f420f05"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5131d1b6-b33a-48d2-bdaa-05876f61b68b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("53213a6c-bbd0-4475-afad-939bf6be0157"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("57163f79-fbdc-49f8-9651-ccc2c332179a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5a04b058-b787-4eaf-8c77-0bd4f75b6089"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5b062b76-498e-4030-b874-81ffd9355c17"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5e168d9e-a6f6-4729-a784-140d69c9be57"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5fd8a1c0-0405-4803-b7db-59f2551fdb1c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("60be3cd1-ae55-49c4-a84c-c6458db62dd8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("611efa3e-5735-4e6e-baba-9531b2f790c4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6305f9b7-5486-493c-8691-34496aa00a72"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("63a2a190-c7cf-427e-a897-817bf713bf37"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6be3ef4d-0207-40fc-bc19-eb071ac82efa"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6d80b1ff-fb08-45db-9c9d-c59640a6bb5e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6f4063e2-a0c9-4abb-ad96-1761d3805952"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("73e5a094-0e1f-4947-a64d-09a158ae1ebc"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("74aa73f9-4d7c-4706-8d5d-a292f350410b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("761f97d2-9fb0-42b1-922e-2f30b0ba0853"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7e84c243-700a-4127-a0d3-1ebce94232a4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("823d957c-351e-4e9d-b658-550e362a01f2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("84fbdd50-56ae-41c1-8be8-cd0115677885"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("85c2b5ef-f86b-405a-806b-fb02e42ec5d9"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("89624fe4-ccf2-49c7-8271-c8f6a3b22d99"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8b3dce24-8359-4c62-98c0-6a6149375bb8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8b5e9e5b-fbc7-4d47-abef-3a8ca01f2f76"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8f356237-1c65-4c06-84d9-5999c2f7f175"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8fc7c468-0ebd-4bf9-8198-a2ea05197ca6"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("95d29e06-b8ec-4910-9eaf-e7b9f1a8ec17"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("98be2cc6-bc7a-4ac3-9d42-e48cbbdb3726"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("99b4f9da-5278-463b-9e6d-65c33436666c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9bf026a5-ce9a-4f3c-aa28-9e71fdc4d43a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a0892593-4520-462e-bb96-2a9cc63423cd"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a134b466-cf4b-48e6-b8b3-a37f4b1f0def"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a15cba5b-6a26-4be3-a4f6-917f79f3529d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a562d2cb-4883-4cd1-ba22-0e9145669a5d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a7811b1c-3d4e-46ae-8b10-56d071252946"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a8a4c584-727b-4877-b38a-3d1a4c5f1682"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ac687ef5-4192-477e-9254-83a1b6f1d14f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ae030b25-9813-4679-9043-6ae75343c831"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b03bc6ba-27c1-4c93-b373-255b8133240e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b29dec9d-f18f-4c8d-848c-92e276401a3d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b2dafb35-27a0-4ed4-811a-25963b3d38b8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b416f712-18b0-45ac-8194-0884df2b4dc5"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b44027ba-fc4e-4db5-9523-3ffe06c9a98e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b8f17bf8-1a2d-413a-a5dd-5e6f0a15d7e8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ba5e07d8-9128-4666-b068-9a4d2e637f03"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("bbb8a567-3cf4-49b4-8bfc-517a5a68d3de"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("be089f51-acc4-4643-938b-c46fc4ea6b30"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c3725478-6007-4d84-876a-f8de2999ac3d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c72e6f53-638c-4e72-aee0-206b596cfecb"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c7d9ddf0-43dd-4278-ae94-ee9e2204304a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("cc7d01ec-12f7-4ea0-974d-c14cc51a77ea"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("cf40291a-261d-4a27-9dac-03c162ec8fd9"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("cfd30bbe-6332-4a25-8c90-d8db402a1728"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d0ec3692-3d8d-4188-96ed-821b8e9f378d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d1532a4b-300f-462f-b991-e61850ba8087"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d2b00869-cc11-4a30-921c-1fa9ac8af9a9"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d59fd085-e8bc-4135-936a-8bbf7b9a00a5"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d5e03273-7f96-4833-bb16-a5a357c50da0"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d878e81d-1945-4fb2-9d50-ffc180e23bd8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("de95888f-9886-4d51-9c37-a71a26ead9c7"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("dfe4ae7b-3b76-4676-a861-10e8a1c84595"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e2751f19-1ee1-490b-acde-372956bde82e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ebb59c82-36ef-4426-bdaa-599df3bed9ce"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ebd25b93-8bb9-4a97-9f08-7b0b3b1daafd"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f02079a7-0006-47ea-94af-5a6b88b5be73"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f1bfa218-bb02-494a-aca7-44526fe88f75"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f65e32b7-f13c-4e67-8d81-a06f4ac3eb74"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f7bbc21a-69b1-48f8-8e1f-51b7e7e917b9"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("fbc3f2ca-56c0-40c4-b248-3a0243f5a4fd"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("fcb72082-2e7e-47ab-8e8e-37378e2dfd46"));

            migrationBuilder.RenameTable(
                name: "QaAnswer",
                schema: "public",
                newName: "QaAnswers",
                newSchema: "public");

            migrationBuilder.RenameTable(
                name: "Patient",
                schema: "public",
                newName: "Patients",
                newSchema: "public");

            migrationBuilder.RenameIndex(
                name: "IX_QaAnswer_UserId",
                schema: "public",
                table: "QaAnswers",
                newName: "IX_QaAnswers_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_QaAnswer_QuesttionId",
                schema: "public",
                table: "QaAnswers",
                newName: "IX_QaAnswers_QuesttionId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_QaAnswers",
                schema: "public",
                table: "QaAnswers",
                column: "AnswerId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Patients",
                schema: "public",
                table: "Patients",
                column: "UserId");

            migrationBuilder.InsertData(
                schema: "public",
                table: "BloodCompatibility",
                columns: new[] { "Id", "ComponentType", "FromBloodTypeId", "ToBloodTypeId" },
                values: new object[,]
                {
                    { new Guid("028f1bb2-843b-4174-b7eb-baaac86612a2"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("048f12ee-3836-487b-9019-278e4c02445b"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("05175aeb-2caf-4834-a3f9-682379f0b4bf"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("05b4303f-5cc5-4141-8e67-eff205a04dcb"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("05dddacf-34bd-4544-90d4-0c796d57560f"), "Plasma", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("07411d4a-3c4d-492c-a1b3-f269528d4f2a"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("09f7ab01-e442-4640-8661-466c425133f4"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("0b3d4469-aedc-45fb-9cfd-35e3d3c733c2"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("0b6364cb-5a84-46a3-97e6-a9d9b640d28d"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("0c75d8b3-5671-4101-993e-f6bf25ac2ad3"), "Whole", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("0ccbaa02-e491-4692-8aec-b7652bca3eb9"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("12535230-3e4c-4171-a940-0b5d95d3a2b3"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("1441faf6-383e-46f6-9e58-665b2917c99a"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("17b9a9c7-78c0-43f4-b9f1-a2a67b4d4c26"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("185e18d1-6225-4eca-aa0d-c34103f54da2"), "Plasma", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("197101e4-2d86-48cf-9bcb-23fd386d33ad"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("218fe1c9-6bb2-4eb0-94f8-aa09856c52b3"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("2279f09b-9c8a-45ba-b85b-e76473b5b3b4"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("25b461e8-6e20-4b80-802f-8b14a507b738"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("2d18eca2-0ba8-4651-87fc-ac87b6d26464"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("33e6f85d-a476-4ea3-958e-5d42e955cfff"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("35f6cda4-eed7-4868-b1d5-66db3dcdecea"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("3819ad6e-075d-450a-a1f1-e5ef8b20aec3"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("3e98b71f-78a2-4ad8-8689-d414826b745d"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("43d2aa71-597a-4dc7-b716-a30a4debcc93"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("4a426902-b3f4-42f0-84c5-d5a8fcf736c3"), "Plasma", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("4d28fece-baeb-4d39-a7d1-c6f2cda99b70"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("507db8ca-edbc-4b39-9ea2-9a021a3bf1a9"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("5091c9d7-fcc4-4f8b-9b62-372cc0e3a979"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("5236eaae-ba9e-4742-8102-35984e4f0a26"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("525bc9df-bdf3-42ec-ae42-71b46da13a3b"), "Platelet", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("53054f78-f880-47e7-aad1-e9df537885e8"), "Platelet", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("531ae509-7085-42d8-bf80-a239b57b4f56"), "Platelet", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("5373f9e4-6606-4f15-8fc9-3a4a0c2280a3"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("54345af2-97c7-4315-8b21-ca5941edf887"), "RBC", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("58385a0c-0f36-45c2-9583-31dd2962cfca"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("584dbfb3-6ae5-4f96-ae99-f2697bffdfd7"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("5e7e29a3-770c-4176-a7bc-6e053db76f9b"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("621fa3be-b930-4941-bb63-98f1c3ea90f4"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("67d126f4-cfe0-4c18-aeee-529e028b8f41"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("6a06c628-b312-4aea-8d3b-2653452ce927"), "Whole", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("6a0b2ce7-41b2-44d6-9c3e-09524658ab1c"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("6ac72b3c-b4e9-447a-9939-03bdff080b20"), "RBC", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("6ad465a4-1559-4365-b160-9724861fc0aa"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("713d23a8-df8a-44f3-ba92-4eb36aadfd97"), "Plasma", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("77ff1bb4-6348-4e1d-8271-e521117a471e"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("79796b93-2ff8-4013-80ab-d8da9cb2440a"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("7b906ecb-ee26-484f-beac-0ac109fa590b"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("7c1b2d8e-133d-4b9e-8b80-c77ed26c5b89"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("7c8d78c4-a6f9-4146-9140-5aa42e1cf00c"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("7f58aa85-42ff-4af1-aad6-0af66d481353"), "RBC", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("80192b3f-0df8-4adb-99a9-714b07a69a1d"), "Platelet", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("81b2a2d0-0f3c-4738-b813-02d07230849f"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("86ca625d-0f60-4f03-8a84-a625d0de445d"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("884a77e8-1e8f-4add-a471-d73c7e49b808"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("89909a56-904a-4fde-8404-131a436159d3"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("8af8c3cb-7061-4365-af57-ec6be5b09c1f"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("8cf9fb33-6202-4899-b1aa-3681af21a84a"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("8e2dd8c0-1b98-445f-9a69-db044e0ff470"), "Plasma", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("8ec309fb-a347-4f18-9d48-4903b0e6f9c9"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("8f4b70ab-6f87-4470-a36a-e9b1f1819b2b"), "Whole", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("92566af7-04a9-49be-a5b0-207e96f77fed"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("9616bdeb-e645-4236-a1e2-ae37eca0da77"), "Whole", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("97e535d1-9f4d-4e22-8d85-7e5f0396673d"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("9ba974a9-4a18-4495-9de2-ad1a3e84cdc8"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("9f0c9655-d172-49fc-baf0-cc507149a0e7"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("a3291eab-5e7c-4587-9e60-4b156734103a"), "Plasma", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("a9b513da-8a35-4444-9d1c-07fc7f1631c5"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("ac154c81-0e99-4f3b-bf4c-eb76e0e328a6"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("b02663d0-e4f1-46bf-aa2b-fe329ea71d0f"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("b06d5f9e-9176-4f31-a67c-85383604e518"), "RBC", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("b378bfb8-7991-49b0-aa55-42950b92161f"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("b4a87c72-3d38-4dbc-b3d8-9b8993979268"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("b6d9643e-816e-4750-bd05-75790f2931b7"), "Whole", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("b7aa1e07-219c-4014-b905-066aef675ebf"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("b93ada2e-64f9-49df-9fe5-1953608584ff"), "RBC", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("b961ee9d-b768-4bda-a355-aee6bb878fa8"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("bbc4d3f9-b20c-4cc8-addb-f0668ec766fb"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("bbeea3ea-3774-427b-abd6-91710829c44b"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("bdc3bc28-7b38-4040-9d3d-940d97298120"), "Platelet", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("c27420d3-6fcf-445b-be7c-dd38fdae4020"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("c672b42a-6734-4ea9-951d-f1e1f958dfc2"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("c6910ce0-0128-49c6-8837-a68c6d69a20b"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("c71a088b-9b57-40f7-a34e-63566d6ada85"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("ca15e2ad-7443-4b50-af49-eade7b6d28a4"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("d0223813-fa5e-4971-a666-fc7cfaec8964"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("d51a1655-2965-4c8e-bb6c-36d522e56475"), "Plasma", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("d6fc45a1-249d-4f7d-b19a-eaa6d8ce5c6f"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("d93bb1d8-4652-48d3-baaf-9e725332f969"), "Platelet", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("da8b71b0-f67e-476e-96b0-312282cd76f5"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("dcde7712-792f-4458-b5a3-202f0c3466bd"), "RBC", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("e4b9e4fb-a907-4b8a-b785-8f9ec06ae251"), "RBC", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("e4ff82e0-c35c-4fe2-9ae1-6f2d052e02f5"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("e9287c1d-22cb-430b-bcfc-ddd9d15458d0"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("ea78c1f0-6eaf-42a4-a0f0-9ce5772da323"), "Whole", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("eaff94a7-9901-4ffc-84d8-fab26b24d09a"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("ebf85fdb-78e4-415e-a1d6-7e1e09641185"), "Platelet", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("ecdc823c-2bd3-4024-a72c-bc6915c7a484"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("ed0df265-f33f-4301-baa0-9214d65246ee"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("eeafb775-27fe-425b-b897-e92cfce6603b"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("f134993f-8064-4114-b42a-1af964db77b4"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("f1cceaec-4891-4d13-bb0d-2aea708717d2"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("f79408ae-4887-47b3-8d74-5f2e5dcbc5e1"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("f7c5e27d-6da2-483c-ab78-474ee2ef7217"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("f9edd806-8e1d-4f14-a73a-9a3ba39b6322"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("faa43d63-188d-464f-ade6-ce759bdd676a"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("fbb6081a-939c-49ba-86b0-9b930e6b7bf9"), "Whole", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("ff860804-8449-49fa-9b5f-bb4d142dddf4"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") }
                });

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000001"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 15, 18, 55, 25, 285, DateTimeKind.Utc).AddTicks(5820));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000002"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 15, 18, 55, 25, 285, DateTimeKind.Utc).AddTicks(5830));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000003"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 15, 18, 55, 25, 285, DateTimeKind.Utc).AddTicks(5830));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000004"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 15, 18, 55, 25, 285, DateTimeKind.Utc).AddTicks(5830));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000005"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 15, 18, 55, 25, 285, DateTimeKind.Utc).AddTicks(5830));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000006"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 15, 18, 55, 25, 285, DateTimeKind.Utc).AddTicks(5830));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000007"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 15, 18, 55, 25, 285, DateTimeKind.Utc).AddTicks(5830));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000008"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 15, 18, 55, 25, 285, DateTimeKind.Utc).AddTicks(5830));

            migrationBuilder.AddForeignKey(
                name: "FK_Patients_Users_UserId",
                schema: "public",
                table: "Patients",
                column: "UserId",
                principalSchema: "public",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_QaAnswers_QaQuestions_QuesttionId",
                schema: "public",
                table: "QaAnswers",
                column: "QuesttionId",
                principalSchema: "public",
                principalTable: "QaQuestions",
                principalColumn: "QuestionId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_QaAnswers_Users_UserId",
                schema: "public",
                table: "QaAnswers",
                column: "UserId",
                principalSchema: "public",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Patients_Users_UserId",
                schema: "public",
                table: "Patients");

            migrationBuilder.DropForeignKey(
                name: "FK_QaAnswers_QaQuestions_QuesttionId",
                schema: "public",
                table: "QaAnswers");

            migrationBuilder.DropForeignKey(
                name: "FK_QaAnswers_Users_UserId",
                schema: "public",
                table: "QaAnswers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_QaAnswers",
                schema: "public",
                table: "QaAnswers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Patients",
                schema: "public",
                table: "Patients");

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("028f1bb2-843b-4174-b7eb-baaac86612a2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("048f12ee-3836-487b-9019-278e4c02445b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("05175aeb-2caf-4834-a3f9-682379f0b4bf"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("05b4303f-5cc5-4141-8e67-eff205a04dcb"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("05dddacf-34bd-4544-90d4-0c796d57560f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("07411d4a-3c4d-492c-a1b3-f269528d4f2a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("09f7ab01-e442-4640-8661-466c425133f4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("0b3d4469-aedc-45fb-9cfd-35e3d3c733c2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("0b6364cb-5a84-46a3-97e6-a9d9b640d28d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("0c75d8b3-5671-4101-993e-f6bf25ac2ad3"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("0ccbaa02-e491-4692-8aec-b7652bca3eb9"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("12535230-3e4c-4171-a940-0b5d95d3a2b3"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1441faf6-383e-46f6-9e58-665b2917c99a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("17b9a9c7-78c0-43f4-b9f1-a2a67b4d4c26"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("185e18d1-6225-4eca-aa0d-c34103f54da2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("197101e4-2d86-48cf-9bcb-23fd386d33ad"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("218fe1c9-6bb2-4eb0-94f8-aa09856c52b3"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2279f09b-9c8a-45ba-b85b-e76473b5b3b4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("25b461e8-6e20-4b80-802f-8b14a507b738"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2d18eca2-0ba8-4651-87fc-ac87b6d26464"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("33e6f85d-a476-4ea3-958e-5d42e955cfff"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("35f6cda4-eed7-4868-b1d5-66db3dcdecea"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3819ad6e-075d-450a-a1f1-e5ef8b20aec3"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3e98b71f-78a2-4ad8-8689-d414826b745d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("43d2aa71-597a-4dc7-b716-a30a4debcc93"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4a426902-b3f4-42f0-84c5-d5a8fcf736c3"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4d28fece-baeb-4d39-a7d1-c6f2cda99b70"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("507db8ca-edbc-4b39-9ea2-9a021a3bf1a9"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5091c9d7-fcc4-4f8b-9b62-372cc0e3a979"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5236eaae-ba9e-4742-8102-35984e4f0a26"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("525bc9df-bdf3-42ec-ae42-71b46da13a3b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("53054f78-f880-47e7-aad1-e9df537885e8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("531ae509-7085-42d8-bf80-a239b57b4f56"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5373f9e4-6606-4f15-8fc9-3a4a0c2280a3"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("54345af2-97c7-4315-8b21-ca5941edf887"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("58385a0c-0f36-45c2-9583-31dd2962cfca"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("584dbfb3-6ae5-4f96-ae99-f2697bffdfd7"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5e7e29a3-770c-4176-a7bc-6e053db76f9b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("621fa3be-b930-4941-bb63-98f1c3ea90f4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("67d126f4-cfe0-4c18-aeee-529e028b8f41"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6a06c628-b312-4aea-8d3b-2653452ce927"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6a0b2ce7-41b2-44d6-9c3e-09524658ab1c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6ac72b3c-b4e9-447a-9939-03bdff080b20"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6ad465a4-1559-4365-b160-9724861fc0aa"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("713d23a8-df8a-44f3-ba92-4eb36aadfd97"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("77ff1bb4-6348-4e1d-8271-e521117a471e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("79796b93-2ff8-4013-80ab-d8da9cb2440a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7b906ecb-ee26-484f-beac-0ac109fa590b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7c1b2d8e-133d-4b9e-8b80-c77ed26c5b89"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7c8d78c4-a6f9-4146-9140-5aa42e1cf00c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7f58aa85-42ff-4af1-aad6-0af66d481353"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("80192b3f-0df8-4adb-99a9-714b07a69a1d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("81b2a2d0-0f3c-4738-b813-02d07230849f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("86ca625d-0f60-4f03-8a84-a625d0de445d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("884a77e8-1e8f-4add-a471-d73c7e49b808"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("89909a56-904a-4fde-8404-131a436159d3"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8af8c3cb-7061-4365-af57-ec6be5b09c1f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8cf9fb33-6202-4899-b1aa-3681af21a84a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8e2dd8c0-1b98-445f-9a69-db044e0ff470"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8ec309fb-a347-4f18-9d48-4903b0e6f9c9"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8f4b70ab-6f87-4470-a36a-e9b1f1819b2b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("92566af7-04a9-49be-a5b0-207e96f77fed"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9616bdeb-e645-4236-a1e2-ae37eca0da77"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("97e535d1-9f4d-4e22-8d85-7e5f0396673d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9ba974a9-4a18-4495-9de2-ad1a3e84cdc8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9f0c9655-d172-49fc-baf0-cc507149a0e7"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a3291eab-5e7c-4587-9e60-4b156734103a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a9b513da-8a35-4444-9d1c-07fc7f1631c5"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ac154c81-0e99-4f3b-bf4c-eb76e0e328a6"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b02663d0-e4f1-46bf-aa2b-fe329ea71d0f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b06d5f9e-9176-4f31-a67c-85383604e518"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b378bfb8-7991-49b0-aa55-42950b92161f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b4a87c72-3d38-4dbc-b3d8-9b8993979268"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b6d9643e-816e-4750-bd05-75790f2931b7"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b7aa1e07-219c-4014-b905-066aef675ebf"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b93ada2e-64f9-49df-9fe5-1953608584ff"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b961ee9d-b768-4bda-a355-aee6bb878fa8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("bbc4d3f9-b20c-4cc8-addb-f0668ec766fb"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("bbeea3ea-3774-427b-abd6-91710829c44b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("bdc3bc28-7b38-4040-9d3d-940d97298120"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c27420d3-6fcf-445b-be7c-dd38fdae4020"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c672b42a-6734-4ea9-951d-f1e1f958dfc2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c6910ce0-0128-49c6-8837-a68c6d69a20b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c71a088b-9b57-40f7-a34e-63566d6ada85"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ca15e2ad-7443-4b50-af49-eade7b6d28a4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d0223813-fa5e-4971-a666-fc7cfaec8964"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d51a1655-2965-4c8e-bb6c-36d522e56475"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d6fc45a1-249d-4f7d-b19a-eaa6d8ce5c6f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d93bb1d8-4652-48d3-baaf-9e725332f969"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("da8b71b0-f67e-476e-96b0-312282cd76f5"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("dcde7712-792f-4458-b5a3-202f0c3466bd"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e4b9e4fb-a907-4b8a-b785-8f9ec06ae251"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e4ff82e0-c35c-4fe2-9ae1-6f2d052e02f5"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e9287c1d-22cb-430b-bcfc-ddd9d15458d0"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ea78c1f0-6eaf-42a4-a0f0-9ce5772da323"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("eaff94a7-9901-4ffc-84d8-fab26b24d09a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ebf85fdb-78e4-415e-a1d6-7e1e09641185"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ecdc823c-2bd3-4024-a72c-bc6915c7a484"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ed0df265-f33f-4301-baa0-9214d65246ee"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("eeafb775-27fe-425b-b897-e92cfce6603b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f134993f-8064-4114-b42a-1af964db77b4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f1cceaec-4891-4d13-bb0d-2aea708717d2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f79408ae-4887-47b3-8d74-5f2e5dcbc5e1"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f7c5e27d-6da2-483c-ab78-474ee2ef7217"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f9edd806-8e1d-4f14-a73a-9a3ba39b6322"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("faa43d63-188d-464f-ade6-ce759bdd676a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("fbb6081a-939c-49ba-86b0-9b930e6b7bf9"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ff860804-8449-49fa-9b5f-bb4d142dddf4"));

            migrationBuilder.RenameTable(
                name: "QaAnswers",
                schema: "public",
                newName: "QaAnswer",
                newSchema: "public");

            migrationBuilder.RenameTable(
                name: "Patients",
                schema: "public",
                newName: "Patient",
                newSchema: "public");

            migrationBuilder.RenameIndex(
                name: "IX_QaAnswers_UserId",
                schema: "public",
                table: "QaAnswer",
                newName: "IX_QaAnswer_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_QaAnswers_QuesttionId",
                schema: "public",
                table: "QaAnswer",
                newName: "IX_QaAnswer_QuesttionId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_QaAnswer",
                schema: "public",
                table: "QaAnswer",
                column: "AnswerId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Patient",
                schema: "public",
                table: "Patient",
                column: "UserId");

            migrationBuilder.InsertData(
                schema: "public",
                table: "BloodCompatibility",
                columns: new[] { "Id", "ComponentType", "FromBloodTypeId", "ToBloodTypeId" },
                values: new object[,]
                {
                    { new Guid("01500cf3-d334-43d8-a527-a40fa8ca747d"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("01ca1737-524a-4d4a-8984-83197ee0112d"), "Platelet", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("02bd1164-051c-4cf3-84a2-6de68d9049b4"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("03cd5f4d-c6ae-4019-969b-0128cc2e39c1"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("07513971-a5d4-4ca8-ada7-3ca3da6a067f"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("0be84a82-42b8-4c2f-b24b-44898e5b6469"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("11167eed-5114-4ccf-aef7-6d7e5b16f09d"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("11e99270-0727-4531-bfa1-efbac333f6cf"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("13065b52-86db-4225-bc18-aeb82fba6dee"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("13a04d2d-cad1-41ed-9d3c-d9d5fca8eb1c"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("170684e4-4be2-4e98-abc0-092644bcfad1"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("17536745-b490-42ee-9ad1-23c6dfb3b239"), "Plasma", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("18d44578-cab0-42ed-8b74-a90717aefc0e"), "Plasma", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("1c629d74-b381-47bf-906b-46e3cf250bb6"), "Whole", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("1e1faf90-8025-44de-8647-3a843d24ff89"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("21562d6f-7b48-452a-920d-db6b0e33d932"), "Whole", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("21a54321-ed9c-46af-862f-fed42eecf258"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("24ae0dc9-fee7-4d08-a921-231358338869"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("28fc219e-acbe-485f-afa2-0b3fe089c707"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("2c15c0ea-b96f-4c93-84b1-648ad64be31b"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("2c53e2d5-f797-42bb-9ed5-b0b007758358"), "Plasma", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("2e8d4ab4-3f9f-4411-ae82-6080a54bc664"), "Whole", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("307481c4-f020-4564-b220-f8df86879e7c"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("358af5c8-5c9f-419b-af07-98601e42319a"), "RBC", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("35dc8906-2653-40ec-a172-33adea10a7a6"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("3b7d5a02-d15e-4494-9285-c2ecc6a17ba1"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("3bb59672-19d8-4c8b-8479-b016af8fbc0d"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("3bf4c440-f5a5-4df9-9459-cad01e13cdf2"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("40fef3d7-fca1-486a-bcaf-06fc2e982c07"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("4770f651-2338-4c3c-915d-ec9b2693bc1e"), "RBC", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("47bc57af-ac1c-4b24-8e70-a230533062b2"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("48b85461-df4e-4491-8403-7d710c6c0bf1"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("4bc556fd-b374-4030-927e-e891e2d06722"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("4bd15292-79ae-44be-8268-164ebc309c32"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("4f1a716d-4fbd-4834-ba67-911d1fc7030d"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("4f756b14-2f73-4b18-817d-101aeec28f1c"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("4fc33783-a1ca-480e-a10e-3dedb478d1a9"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("506bb221-9d1b-44dd-957a-ea146f420f05"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("5131d1b6-b33a-48d2-bdaa-05876f61b68b"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("53213a6c-bbd0-4475-afad-939bf6be0157"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("57163f79-fbdc-49f8-9651-ccc2c332179a"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("5a04b058-b787-4eaf-8c77-0bd4f75b6089"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("5b062b76-498e-4030-b874-81ffd9355c17"), "Platelet", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("5e168d9e-a6f6-4729-a784-140d69c9be57"), "Plasma", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("5fd8a1c0-0405-4803-b7db-59f2551fdb1c"), "RBC", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("60be3cd1-ae55-49c4-a84c-c6458db62dd8"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("611efa3e-5735-4e6e-baba-9531b2f790c4"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("6305f9b7-5486-493c-8691-34496aa00a72"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("63a2a190-c7cf-427e-a897-817bf713bf37"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("6be3ef4d-0207-40fc-bc19-eb071ac82efa"), "Platelet", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("6d80b1ff-fb08-45db-9c9d-c59640a6bb5e"), "Plasma", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("6f4063e2-a0c9-4abb-ad96-1761d3805952"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("73e5a094-0e1f-4947-a64d-09a158ae1ebc"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("74aa73f9-4d7c-4706-8d5d-a292f350410b"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("761f97d2-9fb0-42b1-922e-2f30b0ba0853"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("7e84c243-700a-4127-a0d3-1ebce94232a4"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("823d957c-351e-4e9d-b658-550e362a01f2"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("84fbdd50-56ae-41c1-8be8-cd0115677885"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("85c2b5ef-f86b-405a-806b-fb02e42ec5d9"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("89624fe4-ccf2-49c7-8271-c8f6a3b22d99"), "Platelet", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("8b3dce24-8359-4c62-98c0-6a6149375bb8"), "Whole", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("8b5e9e5b-fbc7-4d47-abef-3a8ca01f2f76"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("8f356237-1c65-4c06-84d9-5999c2f7f175"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("8fc7c468-0ebd-4bf9-8198-a2ea05197ca6"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("95d29e06-b8ec-4910-9eaf-e7b9f1a8ec17"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("98be2cc6-bc7a-4ac3-9d42-e48cbbdb3726"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("99b4f9da-5278-463b-9e6d-65c33436666c"), "RBC", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("9bf026a5-ce9a-4f3c-aa28-9e71fdc4d43a"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("a0892593-4520-462e-bb96-2a9cc63423cd"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("a134b466-cf4b-48e6-b8b3-a37f4b1f0def"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("a15cba5b-6a26-4be3-a4f6-917f79f3529d"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("a562d2cb-4883-4cd1-ba22-0e9145669a5d"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("a7811b1c-3d4e-46ae-8b10-56d071252946"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("a8a4c584-727b-4877-b38a-3d1a4c5f1682"), "RBC", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("ac687ef5-4192-477e-9254-83a1b6f1d14f"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("ae030b25-9813-4679-9043-6ae75343c831"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("b03bc6ba-27c1-4c93-b373-255b8133240e"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("b29dec9d-f18f-4c8d-848c-92e276401a3d"), "Platelet", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("b2dafb35-27a0-4ed4-811a-25963b3d38b8"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("b416f712-18b0-45ac-8194-0884df2b4dc5"), "Platelet", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("b44027ba-fc4e-4db5-9523-3ffe06c9a98e"), "Platelet", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("b8f17bf8-1a2d-413a-a5dd-5e6f0a15d7e8"), "Whole", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("ba5e07d8-9128-4666-b068-9a4d2e637f03"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("bbb8a567-3cf4-49b4-8bfc-517a5a68d3de"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("be089f51-acc4-4643-938b-c46fc4ea6b30"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("c3725478-6007-4d84-876a-f8de2999ac3d"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("c72e6f53-638c-4e72-aee0-206b596cfecb"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("c7d9ddf0-43dd-4278-ae94-ee9e2204304a"), "Plasma", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("cc7d01ec-12f7-4ea0-974d-c14cc51a77ea"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("cf40291a-261d-4a27-9dac-03c162ec8fd9"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("cfd30bbe-6332-4a25-8c90-d8db402a1728"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("d0ec3692-3d8d-4188-96ed-821b8e9f378d"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("d1532a4b-300f-462f-b991-e61850ba8087"), "Plasma", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("d2b00869-cc11-4a30-921c-1fa9ac8af9a9"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("d59fd085-e8bc-4135-936a-8bbf7b9a00a5"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("d5e03273-7f96-4833-bb16-a5a357c50da0"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("d878e81d-1945-4fb2-9d50-ffc180e23bd8"), "Whole", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("de95888f-9886-4d51-9c37-a71a26ead9c7"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("dfe4ae7b-3b76-4676-a861-10e8a1c84595"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("e2751f19-1ee1-490b-acde-372956bde82e"), "Whole", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("ebb59c82-36ef-4426-bdaa-599df3bed9ce"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("ebd25b93-8bb9-4a97-9f08-7b0b3b1daafd"), "RBC", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("f02079a7-0006-47ea-94af-5a6b88b5be73"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("f1bfa218-bb02-494a-aca7-44526fe88f75"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("f65e32b7-f13c-4e67-8d81-a06f4ac3eb74"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("f7bbc21a-69b1-48f8-8e1f-51b7e7e917b9"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("fbc3f2ca-56c0-40c4-b248-3a0243f5a4fd"), "RBC", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("fcb72082-2e7e-47ab-8e8e-37378e2dfd46"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") }
                });

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000001"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 15, 16, 22, 52, 245, DateTimeKind.Utc).AddTicks(1750));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000002"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 15, 16, 22, 52, 245, DateTimeKind.Utc).AddTicks(1760));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000003"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 15, 16, 22, 52, 245, DateTimeKind.Utc).AddTicks(1760));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000004"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 15, 16, 22, 52, 245, DateTimeKind.Utc).AddTicks(1760));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000005"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 15, 16, 22, 52, 245, DateTimeKind.Utc).AddTicks(1760));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000006"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 15, 16, 22, 52, 245, DateTimeKind.Utc).AddTicks(1760));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000007"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 15, 16, 22, 52, 245, DateTimeKind.Utc).AddTicks(1760));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000008"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 15, 16, 22, 52, 245, DateTimeKind.Utc).AddTicks(1760));

            migrationBuilder.AddForeignKey(
                name: "FK_Patient_Users_UserId",
                schema: "public",
                table: "Patient",
                column: "UserId",
                principalSchema: "public",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_QaAnswer_QaQuestions_QuesttionId",
                schema: "public",
                table: "QaAnswer",
                column: "QuesttionId",
                principalSchema: "public",
                principalTable: "QaQuestions",
                principalColumn: "QuestionId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_QaAnswer_Users_UserId",
                schema: "public",
                table: "QaAnswer",
                column: "UserId",
                principalSchema: "public",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
