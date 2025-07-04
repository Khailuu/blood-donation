using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BloodDonation.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class RecreateDroppedTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("0106becd-3c5d-4d77-ac50-20b2647c0146"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("0287793d-8744-416b-a583-1bfaf6d2efd4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("03c9b3b6-a0af-498b-97be-65c6036eb09a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("049bd12d-ec97-4e24-aae5-7c45f303b829"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("04e110d3-cbff-438f-a468-6f390b30b87e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1077430f-6f65-4ad8-8b67-34f8cc1db8f2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("13dd4a9a-60f5-4a12-b476-999d4cd8d407"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("145e12be-4738-4d00-8768-42aade54ebb3"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("16531f03-68d1-4912-9889-916a44853504"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("183ea0c7-651e-453d-9c15-9fdd29206ef7"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1ad7de40-a6e9-4a2a-bbb5-757e67f8247f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1b22c844-343b-4772-84fa-f692dd351eb8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1f3c5011-05a2-464b-9b72-d8bd52bd97cd"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1f6b1c33-db15-4a8a-9f5e-88ee34991c9b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("20d7d73f-527e-43ae-8043-0889adfb70cb"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("21656270-f34a-4516-8c4a-38c84d35257c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("217a78da-1ce6-4a8d-979b-72566e7cd364"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("237ac9b6-9741-4770-aa8d-28e5e0c931ab"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("285ebe3f-b8c7-45d3-9d1d-2eef63ba3833"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("314693bc-350a-4389-9841-ce82266bc013"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("36845a09-6e71-4e7a-a120-c6de13be68dd"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("394dce79-691d-4365-b883-8d58a8b39910"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3bb45dcc-6a9a-476f-803f-13beb74ac885"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3c7479a3-2242-4ba0-8a22-e29b84b8cd59"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3f403371-382e-4a47-a4c7-f0b129a30803"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("43cf7d53-72bb-4c28-8e0c-bb4757c67a4a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("48cb6902-b8f9-4193-ac60-18c518646787"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("49a781c6-ede3-40a9-8c95-ba6a6186adf0"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("49b7fad5-06a1-4900-899c-a330ef4a9449"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4aaaa9c6-ecaf-478c-b37b-595737cda8c4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4c9d6a66-3ca8-4b65-8313-6af760f5ca12"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4eec7d1b-49a6-443e-aa12-a6cc8da0d334"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("525ecce3-a48f-4be8-a73c-74eb4462a801"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5322a1c1-4de1-4451-9290-813a2d8b3248"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("54ad7d83-c0bc-4844-ba13-3d69cfa987e9"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("57cefd15-eb97-407d-9612-8052b0e7f823"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("58a54cfe-dddd-4642-af86-1fbefffa0bc8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("599db277-214b-421f-9fb7-c26bbd6c01d7"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6181c0e7-97c5-4910-8939-42d7ec8817e4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6717a315-d820-4d53-9fb7-c57d3e93129f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6d69fd76-e65a-4b3a-9cef-5541772aecb2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7725e8e1-2a32-4881-b7db-b046a1f54583"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7a2d47c6-1164-4a28-b1b5-449dfafaa247"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7ac0e114-7c73-48fc-90ff-3292cafd0dab"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7ae5eac4-99c2-4b0c-8569-47f1b32bb65e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7dc97071-41a3-44fd-a0c2-474dcbca99b6"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("800fa614-d727-4ad6-b612-8a244c18b721"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("817552ee-f1eb-4643-b29c-28e458f9cb81"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8544735c-3ccb-4727-999b-e2a36210fd21"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("85975fbe-7fc2-42a7-81d0-32be01c13cd4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("85aff244-4541-4516-bf27-8229e04c3a55"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8738cfda-7eb5-454b-a97f-c0b8a33c184c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("87e5fa56-6e8f-4cdf-8088-c7f82cba8605"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("89781b8b-f105-420c-840e-436329c82ea7"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8d371710-2b10-477e-9e98-2ade6e47ce0d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8d4605d7-0e89-43e7-b8cb-03450baaaeef"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8f324fb2-6ed0-4701-982c-300bccc2829c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9022f138-4914-4035-933b-d50e8892cd97"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9319d9d8-6a33-48fa-87f5-b3f35fb1e6e7"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("99849573-5192-46da-8ed0-a5dbf662dbd7"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9c3bfcf9-379d-4d67-b21f-6a78409ba9d4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9d1e92f0-1779-4205-b41d-a199a2a557bd"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9e8c0902-88fb-4c80-9b4c-e0e87be1853b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a0b25a37-abcc-4efa-b15e-c0b0011c0d5b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a57d4f3a-56ec-4d29-a151-19f55da186c4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ae4831dd-48a3-42fb-9a47-588b7f8be699"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ae5cbf10-5898-4d39-8f00-0549eb8ca9e6"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("aee2e252-0df3-465b-b47a-440dffaa74d3"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("afbab679-9a6e-4334-b79f-137115fa6c93"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b2343cb4-d474-4b9a-a85b-3208a115a4c2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b351a395-b7f0-47f2-b190-a638f6ce3301"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b38b137b-c648-423c-bf85-3c937fa974b4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b7edf83d-aebf-4146-8977-4b1e2d7939b6"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ba42496f-60d7-4fc2-b86b-0009d45ad772"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("bb469358-86f3-461a-a69d-b38864a07ba2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("bba6c65e-1270-48ae-ac3a-e521fbcf8edd"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("bf738631-46be-4f0a-a851-5dbea400134c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c5526e08-91d2-4954-a420-4bc31f6385de"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c5a8fabd-f284-4e6a-abc3-198784d73be4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c5e3209d-8e4d-472f-a03e-0a5865927027"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c71154a7-260c-4547-ae62-181a83a907b3"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ca70b498-99be-42d6-9b44-0adeafdb3dee"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("cc75bc5a-c0e1-4671-a0aa-45c6f0ec013e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("cc7ac4e2-a514-43f5-b765-28e6302c0443"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("cce84c82-529b-4903-a282-970d9bb965a5"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ceb59919-8d1a-4d4a-bd5e-e6f9dc72fd5b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d77b9466-5c89-4f57-84a2-e92b2e1d6bba"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d7e47421-249b-48d5-9d62-c638e00e3c72"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e04b8207-0286-4988-ae2f-da4f2f55d6d8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e4828f0e-9d1b-418a-8415-18ba88dfa7fd"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e690a16a-1a90-462e-a06a-ce49705a6abf"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e6dcc965-cb92-4858-80ff-4705729446e5"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e7833271-bec1-4c34-8f84-a9cac37d4d67"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e9b16784-23ec-4253-9051-ecfdcc8ecb63"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e9cbb8b3-bade-4f0d-9186-f6376e18e4ed"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e9d97ced-54a5-4dc5-a0bd-30a717434523"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ea1ab5c7-fb35-4826-9789-8967023a412f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ec9563fd-5e52-45e5-a4ab-a1e662c66154"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ed18ff5c-cc9f-45e1-a235-4641500cc901"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ed6c5ed5-abe9-4108-9b3f-a58a6b00b202"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f25d2289-3a46-4ee4-8424-6ff74abd14b8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f5d36a78-49ff-40fc-bff5-7574afd2457f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("fa809b2a-d4bc-45fa-973b-68bc2ead5527"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("fc18d3dd-f647-4c37-af3f-d3ba22700f59"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("fc2ac222-c8b6-4ef6-a907-293ab487e82e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("fc93e95a-4ddf-485c-a7cb-cbe2a648c1d1"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("fd0af34b-5e5a-435c-959b-d98bacfde54a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("fffc458d-e9ab-472b-99df-7789c69d611a"));

            migrationBuilder.AlterColumn<DateTime>(
                name: "Deadline",
                schema: "public",
                table: "DonationRequests",
                type: "timestamp with time zone",
                nullable: false,
                defaultValueSql: "NOW() + interval '7 days'",
                oldClrType: typeof(DateTime),
                oldType: "timestamp with time zone");

            migrationBuilder.InsertData(
                schema: "public",
                table: "BloodCompatibility",
                columns: new[] { "Id", "ComponentType", "FromBloodTypeId", "ToBloodTypeId" },
                values: new object[,]
                {
                    { new Guid("05d50b72-818e-49ea-b4ab-1bc04830a0f4"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("09a887ea-67ed-4e87-8cd5-c8adbe3e872d"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("0a8a041c-5e48-49c2-8e4f-d29cd0b9f7d9"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("0bc4d66f-2a0d-445d-90cf-704d0036d462"), "RBC", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("10c7b094-66c5-4cef-8f2c-fd84afc7be6a"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("1212f043-9f4e-41af-bef9-def308d6cbf7"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("15a27fb3-ad1e-4202-9ea2-5b75cd0bdb58"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("16127983-1461-42fd-97c4-772c1dcd11b8"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("1907e58b-33a7-4ad3-a7c8-d23d277b2774"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("1a36b880-a7f7-4ce0-8cd9-bd94ea353a45"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("1bc1941a-c568-4fc6-b57c-3993f11388a3"), "Plasma", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("1bcf013d-5090-40c0-a62c-98d7afa71bec"), "RBC", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("1efe10e5-8f0b-4798-9771-585c303ef6ca"), "Platelet", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("2054b107-307c-4b17-98fa-d7068482e809"), "Platelet", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("20679492-288c-4a7a-a385-21ff43cd086a"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("25be96f4-8e61-46a5-ada8-602a4c1c1fcf"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("2715ac7b-a0e0-48fa-8074-fa2cbfbbdbbd"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("2bd30744-39ab-4cd6-a510-b74e130da16d"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("2cc3bd54-8728-4cf4-b274-4b922f5cd0c1"), "Whole", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("2d2772db-6fc7-4aec-a332-4baf7a71eda9"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("2f291c9f-0f60-4d5c-a83a-e7341375aaad"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("30597b87-7559-4062-8908-3163ab7593a8"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("34696711-420c-42ad-ab94-55dd3888f7a4"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("35e90ba0-bc94-453b-8f98-43016fd0d678"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("369a57d0-1c9c-4c6f-af60-31f7128a7f91"), "RBC", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("38019457-81dd-4cc9-9122-844decc2b771"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("389dab6d-6798-4071-982c-eb5bba51ec9e"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("39ebc85e-5786-44d0-8211-71d22fba429c"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("3ff25a1d-256f-4554-9d04-6d89d6fa480b"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("414617a2-aaa1-495e-87f3-bd765f330194"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("41985154-c011-4a1c-b372-a02275ccacd1"), "Platelet", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("41ce5b98-d4b1-4c08-9346-b42c72d703ab"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("4680c399-f041-4984-8945-52b5d0511f12"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("4898d828-886c-4a7c-bde7-661b3157983a"), "Plasma", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("4c60f8a9-86cf-4e50-af80-3225f1936f5a"), "Whole", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("4d7c2c31-ee37-402e-9ad2-fdadf84c939b"), "Platelet", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("50e160e6-df9b-42ad-a5fb-eab11912635d"), "RBC", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("51e4a93c-72e6-4a15-8446-44f374599ee2"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("58c719e8-81ce-4f3b-aa48-698bd0a7a488"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("5d5e85e1-6e37-481d-a577-679aaa3b85f6"), "RBC", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("60c7f119-1b3e-4c59-9638-e93471d3f077"), "Platelet", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("673c782e-6bd6-4534-96b2-1327f0ccce5e"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("6a77f09a-2a27-4c8b-a2b4-bb8c2f165b02"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("7051911e-17ea-4ee8-b82e-f7a5169de1de"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("709a9db9-7c5b-479d-a7dd-e554ccdc98b2"), "Whole", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("74dcaba1-8091-4ca7-a87a-7dbde6090571"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("7869bf4c-427f-4b05-b9eb-e1588261d056"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("79923733-3e6f-4c4b-9eeb-0eac6b318691"), "RBC", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("7a41ffee-ce24-4a1d-9cfd-79cf8c64fe27"), "Plasma", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("7d10bd33-77ad-4231-802a-cdee690d31dd"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("7d640ec8-352e-4acc-8851-e5252c923bf5"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("7e142aaa-72d3-484a-ab25-1539e412d35d"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("870731ee-b63f-4b66-8704-f8e78cfb358f"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("872af7cf-3ab1-4309-bb65-9ef4589981db"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("8739eaa0-fc51-425c-85c4-3714cd881bee"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("88a2a8ba-8425-4daa-b60a-538d502e65cf"), "Platelet", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("8a98f2cc-94cd-4eb0-b133-696ca04c8af9"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("9165be26-5e11-47c8-a1de-a526666ec120"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("91d817b2-5337-451d-b6f2-c33d0db8a309"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("95710d3d-55c3-402c-a2e0-d9a061b34aec"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("9af67212-9674-45a5-94b0-5dad821c176d"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("9c2a0c92-4a96-4339-bc8b-fa4b02c489a6"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("a20de736-8505-4918-b24d-6957aaaf1d95"), "Whole", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("a3d4bda3-114a-42fd-a580-31a7dee44040"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("a3e3e557-daaa-4332-87a7-03a5fccb7fdc"), "Plasma", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("a86bcffa-454b-48ed-b52a-d22867863906"), "Plasma", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("aac6d7e0-e075-4163-8b6d-9416a466bfe9"), "Plasma", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("ab98ce08-7bb3-4692-9a08-9452886bc330"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("ae422d9a-1020-469e-a6fd-2ffe07874310"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("b0997f04-edde-48d4-9d7a-7a6c64e96942"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("b27e1ab0-fe57-4269-8276-eca2ac6c0d27"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("b32bb584-4836-4e78-b136-1b6314830a00"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("b49df54e-f173-44b0-8dd8-116a78ca6689"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("b4a7ddc6-b27e-4a0f-a6e1-4c4adebc390c"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("b4b8cd97-9314-48ee-8fc3-c1ec8a2b155b"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("b592b695-c257-4ee2-a193-3d35f0f6ecfc"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("b9d2e65f-8ffb-4953-adfb-6d989d9f37df"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("bb4dcfc5-5a2d-4b64-a0b7-2c0ad075b4c6"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("c1f86986-aaa7-48c3-9309-70e52817afb1"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("c246555f-3946-4119-8a76-fcfe6643aba2"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("c2ad46e6-c8db-434e-92e6-1c7d0f42e33a"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("c2df12c3-f0e4-4056-8464-48c7c37bff21"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("c483133f-5211-4040-8895-f9d2195d455f"), "Plasma", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("c4db7cfc-b4db-47fc-b07f-095a78bb5776"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("c5a1780b-bded-4087-b3e6-97e8f36b060e"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("cac1ddc0-6a03-4936-b931-08d2515b48b2"), "Whole", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("cad5b0b5-de0a-456b-9282-7e6a78041686"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("cce8bfc2-107a-4d20-bca0-88c12e6cb5bc"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("d8566600-2a40-445e-9bcd-88cfee112de5"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("dbd44695-d15d-4bf3-a3b2-42e30f6bd8c3"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("ddeaf388-69ba-4c10-8120-3830c68e6667"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("dea89f0d-84d8-457c-af3e-4ba3016bd0ce"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("e5f1f8e4-1a21-4ea6-b5f6-2449593b7881"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("e856ab09-1200-46d7-8fca-7ed806f713b6"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("e921581b-6780-40dc-801e-89b683a10f7f"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("e9f25875-3bcc-4215-9df2-df33243c6bb2"), "Whole", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("ea5f9056-a66b-4963-a2df-51dc5998a826"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("edc3821b-ba57-4e1c-8b8c-65ba0cd9ceec"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("eeff2cbf-087d-4e9b-988f-2ed078c9e4bd"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("f53aa4ea-ff6f-44c2-a6a6-f286ac49fbb0"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("f549cc7f-5db3-4e72-8f8c-9271fac4eecc"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("f64e0b61-f439-4679-b185-b154aeba3255"), "Whole", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("f7596ff0-7498-4ca3-a74a-fd1721e3ab8b"), "RBC", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("f85f28ae-90b8-4e78-993b-97586524bc38"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("f97e1883-8f95-4ccc-8bc7-e6180a26d0c5"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("f9f233d1-ce5b-452a-b59e-611bf68b1df3"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("fa8659b2-b830-4e3d-909a-5efd21748e06"), "Platelet", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("fd6f3908-912b-4592-b648-31d761ba39e2"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") }
                });

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000001"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 4, 3, 8, 41, 416, DateTimeKind.Utc).AddTicks(1580));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000002"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 4, 3, 8, 41, 416, DateTimeKind.Utc).AddTicks(1590));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000003"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 4, 3, 8, 41, 416, DateTimeKind.Utc).AddTicks(1590));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000004"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 4, 3, 8, 41, 416, DateTimeKind.Utc).AddTicks(1590));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000005"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 4, 3, 8, 41, 416, DateTimeKind.Utc).AddTicks(1590));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000006"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 4, 3, 8, 41, 416, DateTimeKind.Utc).AddTicks(1590));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000007"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 4, 3, 8, 41, 416, DateTimeKind.Utc).AddTicks(1590));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000008"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 4, 3, 8, 41, 416, DateTimeKind.Utc).AddTicks(1590));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "EmailTemplates",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Content", "Header" },
                values: new object[] { "\n                    <!DOCTYPE html>\n                    <html>\n                    <head>\n                        <meta charset=\"UTF-8\" />\n                        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n                        <title>Email Template</title>\n                        <link href=\"https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css\" rel=\"stylesheet\" />\n                    </head>\n                    <body class=\"bg-gray-100\">\n                        <div class=\"max-w-xl mx-auto my-6 bg-white rounded-lg shadow-md\">\n                            <div class=\"bg-blue-500 text-white text-center py-4 rounded-t-lg\">\n                                <h1 class=\"text-xl font-bold\">{{header}}</h1>\n                            </div>\n                            <div class=\"p-6 text-center\">\n                                <p class=\"text-gray-800 text-base\">Hello <b>{{username}}</b>,</p>\n                                <p class=\"text-gray-700 mt-4\">{{content}}</p>\n                                <div class=\"mt-6\">\n                                    <a href=\"{{button_link}}\" class=\"inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300\">\n                                        {{button_text}}\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"bg-gray-100 text-center py-3 rounded-b-lg\">\n                                <p class=\"text-gray-500 text-xs\">\n                                    © {{year}} Blood Donation. All rights reserved.\n                                </p>\n                                <p>\n                                    <a href=\"{{website_link}}\" class=\"text-blue-500 text-xs\">Visit our website</a>\n                                </p>\n                            </div>\n                        </div>\n                    </body>\n                    </html>", "Verify Email" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("05d50b72-818e-49ea-b4ab-1bc04830a0f4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("09a887ea-67ed-4e87-8cd5-c8adbe3e872d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("0a8a041c-5e48-49c2-8e4f-d29cd0b9f7d9"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("0bc4d66f-2a0d-445d-90cf-704d0036d462"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("10c7b094-66c5-4cef-8f2c-fd84afc7be6a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1212f043-9f4e-41af-bef9-def308d6cbf7"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("15a27fb3-ad1e-4202-9ea2-5b75cd0bdb58"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("16127983-1461-42fd-97c4-772c1dcd11b8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1907e58b-33a7-4ad3-a7c8-d23d277b2774"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1a36b880-a7f7-4ce0-8cd9-bd94ea353a45"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1bc1941a-c568-4fc6-b57c-3993f11388a3"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1bcf013d-5090-40c0-a62c-98d7afa71bec"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1efe10e5-8f0b-4798-9771-585c303ef6ca"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2054b107-307c-4b17-98fa-d7068482e809"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("20679492-288c-4a7a-a385-21ff43cd086a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("25be96f4-8e61-46a5-ada8-602a4c1c1fcf"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2715ac7b-a0e0-48fa-8074-fa2cbfbbdbbd"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2bd30744-39ab-4cd6-a510-b74e130da16d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2cc3bd54-8728-4cf4-b274-4b922f5cd0c1"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2d2772db-6fc7-4aec-a332-4baf7a71eda9"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2f291c9f-0f60-4d5c-a83a-e7341375aaad"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("30597b87-7559-4062-8908-3163ab7593a8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("34696711-420c-42ad-ab94-55dd3888f7a4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("35e90ba0-bc94-453b-8f98-43016fd0d678"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("369a57d0-1c9c-4c6f-af60-31f7128a7f91"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("38019457-81dd-4cc9-9122-844decc2b771"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("389dab6d-6798-4071-982c-eb5bba51ec9e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("39ebc85e-5786-44d0-8211-71d22fba429c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3ff25a1d-256f-4554-9d04-6d89d6fa480b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("414617a2-aaa1-495e-87f3-bd765f330194"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("41985154-c011-4a1c-b372-a02275ccacd1"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("41ce5b98-d4b1-4c08-9346-b42c72d703ab"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4680c399-f041-4984-8945-52b5d0511f12"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4898d828-886c-4a7c-bde7-661b3157983a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4c60f8a9-86cf-4e50-af80-3225f1936f5a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4d7c2c31-ee37-402e-9ad2-fdadf84c939b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("50e160e6-df9b-42ad-a5fb-eab11912635d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("51e4a93c-72e6-4a15-8446-44f374599ee2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("58c719e8-81ce-4f3b-aa48-698bd0a7a488"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5d5e85e1-6e37-481d-a577-679aaa3b85f6"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("60c7f119-1b3e-4c59-9638-e93471d3f077"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("673c782e-6bd6-4534-96b2-1327f0ccce5e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6a77f09a-2a27-4c8b-a2b4-bb8c2f165b02"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7051911e-17ea-4ee8-b82e-f7a5169de1de"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("709a9db9-7c5b-479d-a7dd-e554ccdc98b2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("74dcaba1-8091-4ca7-a87a-7dbde6090571"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7869bf4c-427f-4b05-b9eb-e1588261d056"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("79923733-3e6f-4c4b-9eeb-0eac6b318691"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7a41ffee-ce24-4a1d-9cfd-79cf8c64fe27"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7d10bd33-77ad-4231-802a-cdee690d31dd"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7d640ec8-352e-4acc-8851-e5252c923bf5"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7e142aaa-72d3-484a-ab25-1539e412d35d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("870731ee-b63f-4b66-8704-f8e78cfb358f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("872af7cf-3ab1-4309-bb65-9ef4589981db"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8739eaa0-fc51-425c-85c4-3714cd881bee"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("88a2a8ba-8425-4daa-b60a-538d502e65cf"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8a98f2cc-94cd-4eb0-b133-696ca04c8af9"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9165be26-5e11-47c8-a1de-a526666ec120"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("91d817b2-5337-451d-b6f2-c33d0db8a309"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("95710d3d-55c3-402c-a2e0-d9a061b34aec"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9af67212-9674-45a5-94b0-5dad821c176d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9c2a0c92-4a96-4339-bc8b-fa4b02c489a6"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a20de736-8505-4918-b24d-6957aaaf1d95"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a3d4bda3-114a-42fd-a580-31a7dee44040"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a3e3e557-daaa-4332-87a7-03a5fccb7fdc"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a86bcffa-454b-48ed-b52a-d22867863906"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("aac6d7e0-e075-4163-8b6d-9416a466bfe9"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ab98ce08-7bb3-4692-9a08-9452886bc330"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ae422d9a-1020-469e-a6fd-2ffe07874310"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b0997f04-edde-48d4-9d7a-7a6c64e96942"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b27e1ab0-fe57-4269-8276-eca2ac6c0d27"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b32bb584-4836-4e78-b136-1b6314830a00"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b49df54e-f173-44b0-8dd8-116a78ca6689"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b4a7ddc6-b27e-4a0f-a6e1-4c4adebc390c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b4b8cd97-9314-48ee-8fc3-c1ec8a2b155b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b592b695-c257-4ee2-a193-3d35f0f6ecfc"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b9d2e65f-8ffb-4953-adfb-6d989d9f37df"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("bb4dcfc5-5a2d-4b64-a0b7-2c0ad075b4c6"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c1f86986-aaa7-48c3-9309-70e52817afb1"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c246555f-3946-4119-8a76-fcfe6643aba2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c2ad46e6-c8db-434e-92e6-1c7d0f42e33a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c2df12c3-f0e4-4056-8464-48c7c37bff21"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c483133f-5211-4040-8895-f9d2195d455f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c4db7cfc-b4db-47fc-b07f-095a78bb5776"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c5a1780b-bded-4087-b3e6-97e8f36b060e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("cac1ddc0-6a03-4936-b931-08d2515b48b2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("cad5b0b5-de0a-456b-9282-7e6a78041686"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("cce8bfc2-107a-4d20-bca0-88c12e6cb5bc"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d8566600-2a40-445e-9bcd-88cfee112de5"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("dbd44695-d15d-4bf3-a3b2-42e30f6bd8c3"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ddeaf388-69ba-4c10-8120-3830c68e6667"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("dea89f0d-84d8-457c-af3e-4ba3016bd0ce"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e5f1f8e4-1a21-4ea6-b5f6-2449593b7881"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e856ab09-1200-46d7-8fca-7ed806f713b6"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e921581b-6780-40dc-801e-89b683a10f7f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e9f25875-3bcc-4215-9df2-df33243c6bb2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ea5f9056-a66b-4963-a2df-51dc5998a826"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("edc3821b-ba57-4e1c-8b8c-65ba0cd9ceec"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("eeff2cbf-087d-4e9b-988f-2ed078c9e4bd"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f53aa4ea-ff6f-44c2-a6a6-f286ac49fbb0"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f549cc7f-5db3-4e72-8f8c-9271fac4eecc"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f64e0b61-f439-4679-b185-b154aeba3255"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f7596ff0-7498-4ca3-a74a-fd1721e3ab8b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f85f28ae-90b8-4e78-993b-97586524bc38"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f97e1883-8f95-4ccc-8bc7-e6180a26d0c5"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f9f233d1-ce5b-452a-b59e-611bf68b1df3"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("fa8659b2-b830-4e3d-909a-5efd21748e06"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("fd6f3908-912b-4592-b648-31d761ba39e2"));

            migrationBuilder.AlterColumn<DateTime>(
                name: "Deadline",
                schema: "public",
                table: "DonationRequests",
                type: "timestamp with time zone",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "timestamp with time zone",
                oldDefaultValueSql: "NOW() + interval '7 days'");

            migrationBuilder.InsertData(
                schema: "public",
                table: "BloodCompatibility",
                columns: new[] { "Id", "ComponentType", "FromBloodTypeId", "ToBloodTypeId" },
                values: new object[,]
                {
                    { new Guid("0106becd-3c5d-4d77-ac50-20b2647c0146"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("0287793d-8744-416b-a583-1bfaf6d2efd4"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("03c9b3b6-a0af-498b-97be-65c6036eb09a"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("049bd12d-ec97-4e24-aae5-7c45f303b829"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("04e110d3-cbff-438f-a468-6f390b30b87e"), "RBC", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("1077430f-6f65-4ad8-8b67-34f8cc1db8f2"), "Platelet", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("13dd4a9a-60f5-4a12-b476-999d4cd8d407"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("145e12be-4738-4d00-8768-42aade54ebb3"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("16531f03-68d1-4912-9889-916a44853504"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("183ea0c7-651e-453d-9c15-9fdd29206ef7"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("1ad7de40-a6e9-4a2a-bbb5-757e67f8247f"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("1b22c844-343b-4772-84fa-f692dd351eb8"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("1f3c5011-05a2-464b-9b72-d8bd52bd97cd"), "RBC", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("1f6b1c33-db15-4a8a-9f5e-88ee34991c9b"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("20d7d73f-527e-43ae-8043-0889adfb70cb"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("21656270-f34a-4516-8c4a-38c84d35257c"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("217a78da-1ce6-4a8d-979b-72566e7cd364"), "Whole", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("237ac9b6-9741-4770-aa8d-28e5e0c931ab"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("285ebe3f-b8c7-45d3-9d1d-2eef63ba3833"), "Plasma", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("314693bc-350a-4389-9841-ce82266bc013"), "Platelet", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("36845a09-6e71-4e7a-a120-c6de13be68dd"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("394dce79-691d-4365-b883-8d58a8b39910"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("3bb45dcc-6a9a-476f-803f-13beb74ac885"), "Plasma", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("3c7479a3-2242-4ba0-8a22-e29b84b8cd59"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("3f403371-382e-4a47-a4c7-f0b129a30803"), "Whole", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("43cf7d53-72bb-4c28-8e0c-bb4757c67a4a"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("48cb6902-b8f9-4193-ac60-18c518646787"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("49a781c6-ede3-40a9-8c95-ba6a6186adf0"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("49b7fad5-06a1-4900-899c-a330ef4a9449"), "Platelet", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("4aaaa9c6-ecaf-478c-b37b-595737cda8c4"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("4c9d6a66-3ca8-4b65-8313-6af760f5ca12"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("4eec7d1b-49a6-443e-aa12-a6cc8da0d334"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("525ecce3-a48f-4be8-a73c-74eb4462a801"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("5322a1c1-4de1-4451-9290-813a2d8b3248"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("54ad7d83-c0bc-4844-ba13-3d69cfa987e9"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("57cefd15-eb97-407d-9612-8052b0e7f823"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("58a54cfe-dddd-4642-af86-1fbefffa0bc8"), "RBC", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("599db277-214b-421f-9fb7-c26bbd6c01d7"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("6181c0e7-97c5-4910-8939-42d7ec8817e4"), "Platelet", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("6717a315-d820-4d53-9fb7-c57d3e93129f"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("6d69fd76-e65a-4b3a-9cef-5541772aecb2"), "Whole", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("7725e8e1-2a32-4881-b7db-b046a1f54583"), "RBC", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("7a2d47c6-1164-4a28-b1b5-449dfafaa247"), "Platelet", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("7ac0e114-7c73-48fc-90ff-3292cafd0dab"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("7ae5eac4-99c2-4b0c-8569-47f1b32bb65e"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("7dc97071-41a3-44fd-a0c2-474dcbca99b6"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("800fa614-d727-4ad6-b612-8a244c18b721"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("817552ee-f1eb-4643-b29c-28e458f9cb81"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("8544735c-3ccb-4727-999b-e2a36210fd21"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("85975fbe-7fc2-42a7-81d0-32be01c13cd4"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("85aff244-4541-4516-bf27-8229e04c3a55"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("8738cfda-7eb5-454b-a97f-c0b8a33c184c"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("87e5fa56-6e8f-4cdf-8088-c7f82cba8605"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("89781b8b-f105-420c-840e-436329c82ea7"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("8d371710-2b10-477e-9e98-2ade6e47ce0d"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("8d4605d7-0e89-43e7-b8cb-03450baaaeef"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("8f324fb2-6ed0-4701-982c-300bccc2829c"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("9022f138-4914-4035-933b-d50e8892cd97"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("9319d9d8-6a33-48fa-87f5-b3f35fb1e6e7"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("99849573-5192-46da-8ed0-a5dbf662dbd7"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("9c3bfcf9-379d-4d67-b21f-6a78409ba9d4"), "Plasma", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("9d1e92f0-1779-4205-b41d-a199a2a557bd"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("9e8c0902-88fb-4c80-9b4c-e0e87be1853b"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("a0b25a37-abcc-4efa-b15e-c0b0011c0d5b"), "RBC", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("a57d4f3a-56ec-4d29-a151-19f55da186c4"), "Whole", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("ae4831dd-48a3-42fb-9a47-588b7f8be699"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("ae5cbf10-5898-4d39-8f00-0549eb8ca9e6"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("aee2e252-0df3-465b-b47a-440dffaa74d3"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("afbab679-9a6e-4334-b79f-137115fa6c93"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("b2343cb4-d474-4b9a-a85b-3208a115a4c2"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("b351a395-b7f0-47f2-b190-a638f6ce3301"), "RBC", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("b38b137b-c648-423c-bf85-3c937fa974b4"), "Whole", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("b7edf83d-aebf-4146-8977-4b1e2d7939b6"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("ba42496f-60d7-4fc2-b86b-0009d45ad772"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("bb469358-86f3-461a-a69d-b38864a07ba2"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("bba6c65e-1270-48ae-ac3a-e521fbcf8edd"), "RBC", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("bf738631-46be-4f0a-a851-5dbea400134c"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("c5526e08-91d2-4954-a420-4bc31f6385de"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("c5a8fabd-f284-4e6a-abc3-198784d73be4"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("c5e3209d-8e4d-472f-a03e-0a5865927027"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("c71154a7-260c-4547-ae62-181a83a907b3"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("ca70b498-99be-42d6-9b44-0adeafdb3dee"), "Plasma", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("cc75bc5a-c0e1-4671-a0aa-45c6f0ec013e"), "Plasma", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("cc7ac4e2-a514-43f5-b765-28e6302c0443"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("cce84c82-529b-4903-a282-970d9bb965a5"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("ceb59919-8d1a-4d4a-bd5e-e6f9dc72fd5b"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("d77b9466-5c89-4f57-84a2-e92b2e1d6bba"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("d7e47421-249b-48d5-9d62-c638e00e3c72"), "Platelet", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("e04b8207-0286-4988-ae2f-da4f2f55d6d8"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("e4828f0e-9d1b-418a-8415-18ba88dfa7fd"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("e690a16a-1a90-462e-a06a-ce49705a6abf"), "Plasma", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("e6dcc965-cb92-4858-80ff-4705729446e5"), "Whole", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("e7833271-bec1-4c34-8f84-a9cac37d4d67"), "Platelet", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("e9b16784-23ec-4253-9051-ecfdcc8ecb63"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("e9cbb8b3-bade-4f0d-9186-f6376e18e4ed"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("e9d97ced-54a5-4dc5-a0bd-30a717434523"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("ea1ab5c7-fb35-4826-9789-8967023a412f"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("ec9563fd-5e52-45e5-a4ab-a1e662c66154"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("ed18ff5c-cc9f-45e1-a235-4641500cc901"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("ed6c5ed5-abe9-4108-9b3f-a58a6b00b202"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("f25d2289-3a46-4ee4-8424-6ff74abd14b8"), "Plasma", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("f5d36a78-49ff-40fc-bff5-7574afd2457f"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("fa809b2a-d4bc-45fa-973b-68bc2ead5527"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("fc18d3dd-f647-4c37-af3f-d3ba22700f59"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("fc2ac222-c8b6-4ef6-a907-293ab487e82e"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("fc93e95a-4ddf-485c-a7cb-cbe2a648c1d1"), "Whole", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("fd0af34b-5e5a-435c-959b-d98bacfde54a"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("fffc458d-e9ab-472b-99df-7789c69d611a"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") }
                });

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000001"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 1, 13, 30, 33, 429, DateTimeKind.Utc).AddTicks(8460));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000002"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 1, 13, 30, 33, 429, DateTimeKind.Utc).AddTicks(8460));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000003"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 1, 13, 30, 33, 429, DateTimeKind.Utc).AddTicks(8470));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000004"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 1, 13, 30, 33, 429, DateTimeKind.Utc).AddTicks(8470));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000005"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 1, 13, 30, 33, 429, DateTimeKind.Utc).AddTicks(8470));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000006"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 1, 13, 30, 33, 429, DateTimeKind.Utc).AddTicks(8470));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000007"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 1, 13, 30, 33, 429, DateTimeKind.Utc).AddTicks(8470));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000008"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 1, 13, 30, 33, 429, DateTimeKind.Utc).AddTicks(8470));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "EmailTemplates",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Content", "Header" },
                values: new object[] { "\n                    <!DOCTYPE html>\n                        <html>\n                            <head>\n                                <meta charset=\"UTF-8\" />\n                                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n                                <title>Email Template</title>\n                                <link\n                                href=\"https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css\"\n                                rel=\"stylesheet\"\n                                />\n                            </head>\n                            <body class=\"bg-gray-100\">\n                                <div class=\"max-w-xl mx-auto my-6 bg-white rounded-lg shadow-md\">\n                                <div class=\"bg-blue-500 text-white text-center py-4 rounded-t-lg\">\n                                    <h1 class=\"text-xl font-bold\">{{header}}</h1>\n                                </div>\n                                <div class=\"p-6 text-center\">\n                                    <p class=\"text-gray-800 text-base\">Hello <b>{{username}}</b>,</p>\n                                    <p class=\"text-gray-700 mt-4\">{{content}}</p>\n                                </div>\n                                <div class=\"bg-gray-100 text-center py-3 rounded-b-lg\">\n                                    <p class=\"text-gray-500 text-xs\">\n                                        © {{year}} Blood Donation. All rights reserved.\n                                    </p>\n                                    <p>\n                                        <a href=\"{{website_link}}\" class=\"text-blue-500 text-xs\"\n                                            >Visit our website</a\n                                        >\n                                    </p>\n                                </div>\n                            </div>\n                        </body>\n                    </html>", "Template 1" });
        }
    }
}
