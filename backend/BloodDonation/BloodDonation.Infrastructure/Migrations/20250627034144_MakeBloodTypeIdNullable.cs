using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BloodDonation.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class MakeBloodTypeIdNullable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_BloodTypes_BloodTypeId",
                schema: "public",
                table: "Users");

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("00b471d5-966f-4640-8caa-f31e1d1c98d7"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("02a385f9-b589-44d1-984b-3039af64a680"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("033bc2bd-c93a-4d22-81ce-865913d3f800"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("050847e9-9d4d-46aa-8f42-d4ee988bcc82"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("06f8e3b8-458d-4a6d-8f66-ac0b805df19c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("079d9fa2-2034-4723-a6cc-62088a7554b2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("09993480-897e-4a7f-8e68-2d643b73b6fd"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("0ec6f903-d0aa-4e33-87c6-1d9e9f41ff1d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1159e503-0b58-47a6-b265-1f5bda10ecac"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("19518909-25a7-4164-9702-0332306f0395"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1d6332f8-3ce6-42e0-9f1e-67cb4811a0fc"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1e63a6cf-ed3d-419b-83a4-dfd55906c0cd"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("20321475-dcbe-47ce-b5cd-4d48f7b9f311"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("223aac6d-844c-4fee-a90e-47f78bb79d79"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2666c23f-41b5-410c-ba30-227fedef4f95"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("27a9e044-a383-46ea-9401-0024750976ff"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2917a729-c007-4817-88d5-a561994dfeb8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2cef4290-8770-4e55-9dcc-78cab2cb9812"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2f69a33e-9cb0-4fe7-b93e-88e74b607b5e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2f7a2112-c8ab-45be-9871-a5fd9399c4f5"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3052b7bf-b986-4110-af4b-122875a5d38f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("32525fd9-296b-47d5-abea-9c04ec2589a6"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("334084f2-fe8d-46b8-9345-da4d1abbf9f1"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3600aa03-625c-4c62-b1ce-c7913c02ee39"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("361cbfa9-e51a-40e1-85eb-ec5f974e01f4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3bea8092-3d18-4da1-acb3-f7bb7fc0286e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3dde35d1-cbd4-4bc4-8356-4625998ec41f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3eb70a8b-b1d9-475b-b1a9-531f19ad1879"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("40b245f8-9251-40e9-b5dc-88e8fcf67912"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("40f2bffb-c196-4ddd-ab24-e2e6685c86dc"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("421587c1-cf16-4234-8009-7dc002ad96d1"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4237fbdf-8df0-4b02-9ad2-b98bd23cdea2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("443f1023-cc7f-4c04-8b43-17ca4f688134"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("453d9aa2-d893-4924-bb3d-b60a8c58ec46"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("488be2fc-91e4-434c-ac1f-4dba02aa479f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4ce08c06-9ba9-4f38-8b83-fb20d5c75dff"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4e89367e-5553-40b2-bb03-e74b753a9c02"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("50184553-3314-4754-915c-7b3e6c670266"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("517f8715-f80d-450f-a0dd-c293ceca2b8b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("519a090b-a6df-4cf8-8962-35355bf55d02"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("543add1c-0387-4f42-a367-a168abb27edc"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5babde96-8877-4266-b471-476e6c119f51"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5c45b311-6599-4398-b9c2-a12405482620"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5f93c004-7220-4edc-a010-8aa0be5e0201"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("61bb4929-6d5e-401e-9db7-0f90adb7fe21"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("642e893a-3967-483b-bb86-288a9c96ff1c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("69fd61f6-4d9f-438a-9f47-f2e92082cf0a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6b39dc1f-894b-4410-abe0-6f5a55ae8e03"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6dc00a87-9ad2-41ed-a715-fe157d322509"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6dcc71c9-c522-4230-8e8a-7be333fa05e8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("767b26a0-faad-4b32-9958-8d44abf2db15"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("786af73c-7f28-4f96-a516-f29d9554d92b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("78cd117d-9956-45d8-a8d2-59b60066de49"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("78fef508-f2f1-472e-a037-f80bd107c5c6"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7917df72-44e5-43be-916c-0a177d4ec94b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("79a4064d-9019-4fbc-a5fc-666ffdc30586"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("879b359f-3e42-449b-9fd9-29950fec8f2d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("87aeb9ce-1089-43de-b8e8-19b632b4cfe9"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("88f2419c-f4e4-4bba-9f79-34c188642cff"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8ae2061b-a453-415e-b5ae-18fef7d65cb7"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8b0323a3-1800-4fe4-b751-79928815d6aa"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8c9fa099-7b4a-4bf6-8601-58f26bd2149b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8e8335bf-2c78-4d9c-b68c-a865397a9ecb"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8f8404ac-2a5f-41c5-accc-8b215cad5996"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8fb1ffc1-6442-452c-9b88-b4aefd626892"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("90e0e2d5-76db-4fcc-abfa-fb92dedbb333"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("96e0dc49-f891-48a3-b047-6f6cd24ced10"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("99daa0e9-a936-4ade-8252-db378c0832a7"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9b00dd26-0cb7-4eee-85bb-a328a874fbd7"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9d3c9a60-a54e-4fe9-9675-2e57c5c3b8ea"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9ecbe939-ba22-4571-803b-7c146f599044"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a0028522-7907-4334-b0d4-3c36baa88ac3"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a1568985-21f7-4b1d-b3e0-5e5534d6f837"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a2cdbb08-99c7-4881-b195-e92198f35e16"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a2dac3df-74d5-41f1-bce5-716d263f44c2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("aad051af-f2b8-45f6-b911-32887de98e59"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b34586b1-7c94-416f-a281-c0390ac4698c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b52c82fa-026f-435f-96b0-f52c42c84583"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b64b299b-5681-4295-a146-f72b82a35275"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b69bd742-efe5-4531-a24e-a38063e84eea"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("bb4a0950-e53f-4c11-a9bb-107b059a38da"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("bc5441c8-ebad-4ad6-bdce-39d8008768d7"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("bda32380-d98c-4b4e-ac0f-4fbf3b847f0b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("bee14ace-e201-4730-a425-f32a1203b0ac"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c06e6368-8f54-404e-ad81-b08b4403b92c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c1eb112c-6654-4d7f-b7e2-b9ea7beec030"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c51f6bde-d24f-4e26-96e4-0a7c80ed69be"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c83faa9c-3130-4646-bc3a-c50e92f887c3"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c8a52090-85ff-4459-9a9a-02b45cd0e6a3"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ca808cf9-6d09-433e-8eb3-0ad51b3919b1"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("cd0544aa-0c7d-4b20-8794-85a2193a143c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d1c74420-9285-46c3-b307-bdf5b4ebdecc"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d2db3808-c1e5-48fb-b758-5f6025f4d35d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d809a3a7-8c56-4978-ad50-6c8e53f6b59f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d92af5ac-cca2-46e5-9d4f-14581b50a8f4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("dd00e819-b4a1-4ad0-9403-13d676e3f27e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("df16c655-73b4-4744-a39c-aadc0b79fc99"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e082af2f-ff73-49e2-a797-ffa6afbc2f70"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e1d7a07b-e667-44b6-9b3a-a6f4ac1a456b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e747434d-5d30-4528-a58e-bf2e39381412"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e76139f7-9954-4bfa-8850-00f625e7b649"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ea167a13-c47d-4733-a560-61299426908b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ea90ba83-b611-428a-9893-257561b99508"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("eb0dfd33-71b5-4504-8b4a-71d2eaff72c2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ec92f34a-e3ec-441e-b46a-ea3087fcaa49"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f73b8a49-5a69-4619-afde-645c1be53797"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("fa770c70-c783-461b-aaed-f01addc3d020"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("fe848c80-254a-4667-8a41-69123bfa5d3a"));

            migrationBuilder.AlterColumn<Guid>(
                name: "BloodTypeId",
                schema: "public",
                table: "Users",
                type: "uuid",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uuid");

            migrationBuilder.InsertData(
                schema: "public",
                table: "BloodCompatibility",
                columns: new[] { "Id", "ComponentType", "FromBloodTypeId", "ToBloodTypeId" },
                values: new object[,]
                {
                    { new Guid("012d1bf2-b941-4f8f-9526-a5d17312333c"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("0a6014f2-ad07-487c-b0b1-3d48f5d09dbf"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("0f2bef12-3762-4d93-86e0-0886ae65aae8"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("13c54d95-1110-4f43-a4c2-7e888fc253f5"), "Whole", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("157d80ef-0518-4ba2-aaed-73b85e9b17c2"), "Plasma", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("186c5068-64f0-4549-afa7-07e1fe41ed7c"), "Plasma", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("186d4611-235b-4857-9a71-7c678c0fd25f"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("1a9f0526-a622-4c10-8c52-a45fe9159393"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("1adf916c-8179-436a-ad5c-1095b8d62f58"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("1c8f7dfb-eda6-4cef-a557-4448c2f755bd"), "Platelet", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("1e4528b5-f5ca-4dce-96d2-d3e9a6fc2b72"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("20f7ef90-e65e-475a-a2b8-c162dc179660"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("211b8614-62e3-4e08-b2f3-57bd037fface"), "Whole", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("212a8ba1-4c30-468c-a9f6-5cb9eff1149c"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("23867149-6332-4dec-ae68-afa747a5cbc5"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("24df6450-74a8-463a-a674-9c65035b60e8"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("274618b4-2cef-4910-bb1f-1ad3358c6bf6"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("28e9146e-f92a-4849-9892-5a36c452e247"), "RBC", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("2ee10ead-1d13-4c73-9d09-2b1048025a02"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("32cfb212-3b1c-4d8e-95b8-305f4a1909e0"), "Platelet", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("3799dbca-e018-48fe-b707-3331b656c9b9"), "Plasma", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("39f11b52-e76a-4eea-b8b3-7149d4b0824c"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("3a8c7e9c-3fc6-4a74-881f-a936aa1f185f"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("3c2948ab-89ab-47dc-accd-9bb52ffa1204"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("3c7909ed-3d8a-48e3-831d-08d2e69cf2cd"), "Platelet", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("3eea6f35-b278-4c2c-b1d1-1c2b7e928ca8"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("48fb19b1-da59-4461-923f-529bf0cd7aa1"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("4c61bb9e-8a11-4c95-ad81-120e66fd0e96"), "Platelet", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("4cc2de46-c29e-47b5-8c1b-5deba693f2ed"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("4dcfabf3-f84d-4269-9342-f02bfb96d3d3"), "Platelet", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("4fd197a9-161e-47a1-8734-716d9c423d40"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("52002dc8-5ba4-40a7-b57e-0f24ff270b04"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("52fa26a0-ea5b-4549-9949-9fcb5ed13953"), "Plasma", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("579243cb-64a5-416e-8d15-79fce75a2113"), "RBC", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("58019045-c74c-453c-a2e1-ab355395f709"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("581d930e-76e2-437d-9d2e-360dddcbb752"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("589b11f8-b77c-438d-9ff6-bad573b4b4a0"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("591e2ea3-55e9-44b6-a8b9-f4ea7a7a9722"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("592cd25a-426f-4d4d-b7fb-3811b7d05f86"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("5949abf3-5617-45fb-aa67-52e462462140"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("60b11ba3-dc90-4fea-8e2e-849e39e72ae0"), "RBC", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("628890c1-ce2d-4be0-9342-f87474f7f010"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("6599942a-5d52-4b1a-bbc5-63067e1da3d8"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("6781daf7-a528-4106-82a2-f666ff75732e"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("6813319c-18fc-4181-8723-d34c56336e3c"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("686744ab-90db-4ad0-b0bc-ba8adb84cd8e"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("687c6d51-6b40-48c6-bd24-f0862d89454a"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("6a78b97e-8507-41c8-931d-d6db10b85763"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("6d2d1460-0d03-4233-a358-3369d769fe6e"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("6dc1d1a2-42d9-48d0-a18b-6a924ee4c945"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("6fa73056-71d1-4722-be0f-75c153b3da6f"), "Platelet", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("7028754e-cff3-4e02-ae95-c9cc171dc5ff"), "Plasma", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("72d43e10-be0f-4125-8182-2f75845b0623"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("73d651a6-4e5c-4815-85a4-ccd3267cce34"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("75d4695b-f759-4888-a1d8-b08e5c48d267"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("791ba529-fe06-428b-8459-3ad3ffdac63e"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("7aa8b86e-e2c0-4b88-983e-e198f66d33de"), "Plasma", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("7c2be4ef-c68a-4d9d-bbb5-cfb8105692cf"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("7fe3b14e-f9bc-46dc-aa76-77d244e98c0f"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("8435ae12-259b-467e-888b-99f8c0230bfb"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("855d7c7c-76d3-4379-a8b7-3fb047bea08e"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("8aa1d1f0-642b-45bb-b678-8ff57b4de614"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("9345cf2e-b3e5-4294-ad7a-9a9e3fb6ee08"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("94119586-ad0f-479f-9b13-b164cf434677"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("97d134f7-ba82-40ee-af17-0de741f61502"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("9bbbccd5-23c6-40df-89ae-7f8927734cfb"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("9c2b2a40-bab2-4fa6-9882-2db584c6ca96"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("9d0306c7-738a-4098-a2df-42de99453a86"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("a0d03dfc-b8c2-474c-90ea-b4009fa1471b"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("a0ff4d40-c503-4c91-b7fe-e7bcf822a014"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("a1e34f38-35ba-4402-80ad-e47fb0b8365f"), "Whole", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("a301916e-a502-4dc1-b27a-333667ee6492"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("a6d055f8-e5fc-445f-bda6-9f89ee9c6c07"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("a82438e0-93f5-472a-8892-b2d1f9929709"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("acf0488d-4f3e-4a64-bdc7-d4184e3f8b4a"), "RBC", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("b0925306-5782-4f2b-bb2c-a27279fb1803"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("b324d7a2-d7c6-4870-99b4-d2074c633cbb"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("b4b5366a-4085-412f-b71b-8de54ea6de90"), "RBC", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("b5021343-653b-4b3d-846c-a90cc02a0958"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("b5fe9038-04b9-498a-b378-0f8f42e562e3"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("bad93869-2d55-4988-8159-b611ff6ea5ac"), "Whole", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("bd0313af-a7a0-4b75-989e-1cf60801576f"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("bee4356e-aba1-4a2f-b096-afc37feaf02c"), "Whole", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("c44d0fa7-98ca-45fe-991b-47c95a307d3a"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("c5dae946-167a-427f-b633-177978f4c1af"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("ca5bce93-4f4d-4893-b74a-62e3c060c09a"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("cb6153eb-b66f-4735-a397-abcb704b6819"), "Whole", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("cc4505e2-5809-4b3f-a9f5-91d6ff81abd1"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("d0d9ffec-ebe2-4c39-bfd8-9c01d08bbe31"), "RBC", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("d2491c8b-42ba-45f3-aab6-ae9de523d028"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("db9ce220-57f7-4003-93cf-6e5bd35c4339"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("de0f2a50-ff35-44f2-905d-237e97198d20"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("e0e9b686-7546-401d-b9c2-70956c95a67b"), "RBC", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("e24dba5c-307d-4798-9514-5b64c3ac05cb"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("e2e01887-1b08-4f67-87db-7bf88d665c72"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("e72dbb1d-1e88-4122-b4c0-f383bb197513"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("ea413834-9ed1-43df-aefe-01c39a60cfa6"), "Plasma", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("eabb90b1-20f9-4e54-8bd3-29fdae1c03bc"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("ecbdcc29-1357-4f16-9288-0831b73a83ce"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("f3d9da60-ef85-4f02-a4f7-5aa544f32b29"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("f625671b-f4b9-476a-b92f-ab6c73fcaa7e"), "Platelet", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("f6d38aeb-6ac1-490d-86da-5a90531bc1e2"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("f923c882-ee7a-47fc-8fa0-4d52e4fb94a2"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("f9e3385b-5f4b-4dbc-a891-bec45c96ff16"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("fb091ee4-692a-41fd-87be-a1a09ca6d028"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("fb176fb6-ead3-4d66-a207-6653262c8aa5"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("fbcc8aaf-6cff-471f-8a54-66a9432d0ba8"), "Whole", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("fe455fdf-84ab-4391-a26c-8cd326c26f13"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") }
                });

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000001"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 27, 3, 41, 44, 555, DateTimeKind.Utc).AddTicks(9750));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000002"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 27, 3, 41, 44, 555, DateTimeKind.Utc).AddTicks(9760));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000003"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 27, 3, 41, 44, 555, DateTimeKind.Utc).AddTicks(9760));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000004"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 27, 3, 41, 44, 555, DateTimeKind.Utc).AddTicks(9760));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000005"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 27, 3, 41, 44, 555, DateTimeKind.Utc).AddTicks(9760));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000006"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 27, 3, 41, 44, 555, DateTimeKind.Utc).AddTicks(9760));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000007"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 27, 3, 41, 44, 555, DateTimeKind.Utc).AddTicks(9760));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000008"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 27, 3, 41, 44, 555, DateTimeKind.Utc).AddTicks(9760));

            migrationBuilder.AddForeignKey(
                name: "FK_Users_BloodTypes_BloodTypeId",
                schema: "public",
                table: "Users",
                column: "BloodTypeId",
                principalSchema: "public",
                principalTable: "BloodTypes",
                principalColumn: "BloodTypeId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_BloodTypes_BloodTypeId",
                schema: "public",
                table: "Users");

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("012d1bf2-b941-4f8f-9526-a5d17312333c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("0a6014f2-ad07-487c-b0b1-3d48f5d09dbf"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("0f2bef12-3762-4d93-86e0-0886ae65aae8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("13c54d95-1110-4f43-a4c2-7e888fc253f5"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("157d80ef-0518-4ba2-aaed-73b85e9b17c2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("186c5068-64f0-4549-afa7-07e1fe41ed7c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("186d4611-235b-4857-9a71-7c678c0fd25f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1a9f0526-a622-4c10-8c52-a45fe9159393"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1adf916c-8179-436a-ad5c-1095b8d62f58"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1c8f7dfb-eda6-4cef-a557-4448c2f755bd"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1e4528b5-f5ca-4dce-96d2-d3e9a6fc2b72"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("20f7ef90-e65e-475a-a2b8-c162dc179660"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("211b8614-62e3-4e08-b2f3-57bd037fface"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("212a8ba1-4c30-468c-a9f6-5cb9eff1149c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("23867149-6332-4dec-ae68-afa747a5cbc5"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("24df6450-74a8-463a-a674-9c65035b60e8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("274618b4-2cef-4910-bb1f-1ad3358c6bf6"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("28e9146e-f92a-4849-9892-5a36c452e247"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2ee10ead-1d13-4c73-9d09-2b1048025a02"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("32cfb212-3b1c-4d8e-95b8-305f4a1909e0"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3799dbca-e018-48fe-b707-3331b656c9b9"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("39f11b52-e76a-4eea-b8b3-7149d4b0824c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3a8c7e9c-3fc6-4a74-881f-a936aa1f185f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3c2948ab-89ab-47dc-accd-9bb52ffa1204"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3c7909ed-3d8a-48e3-831d-08d2e69cf2cd"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3eea6f35-b278-4c2c-b1d1-1c2b7e928ca8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("48fb19b1-da59-4461-923f-529bf0cd7aa1"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4c61bb9e-8a11-4c95-ad81-120e66fd0e96"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4cc2de46-c29e-47b5-8c1b-5deba693f2ed"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4dcfabf3-f84d-4269-9342-f02bfb96d3d3"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4fd197a9-161e-47a1-8734-716d9c423d40"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("52002dc8-5ba4-40a7-b57e-0f24ff270b04"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("52fa26a0-ea5b-4549-9949-9fcb5ed13953"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("579243cb-64a5-416e-8d15-79fce75a2113"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("58019045-c74c-453c-a2e1-ab355395f709"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("581d930e-76e2-437d-9d2e-360dddcbb752"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("589b11f8-b77c-438d-9ff6-bad573b4b4a0"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("591e2ea3-55e9-44b6-a8b9-f4ea7a7a9722"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("592cd25a-426f-4d4d-b7fb-3811b7d05f86"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5949abf3-5617-45fb-aa67-52e462462140"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("60b11ba3-dc90-4fea-8e2e-849e39e72ae0"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("628890c1-ce2d-4be0-9342-f87474f7f010"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6599942a-5d52-4b1a-bbc5-63067e1da3d8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6781daf7-a528-4106-82a2-f666ff75732e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6813319c-18fc-4181-8723-d34c56336e3c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("686744ab-90db-4ad0-b0bc-ba8adb84cd8e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("687c6d51-6b40-48c6-bd24-f0862d89454a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6a78b97e-8507-41c8-931d-d6db10b85763"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6d2d1460-0d03-4233-a358-3369d769fe6e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6dc1d1a2-42d9-48d0-a18b-6a924ee4c945"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6fa73056-71d1-4722-be0f-75c153b3da6f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7028754e-cff3-4e02-ae95-c9cc171dc5ff"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("72d43e10-be0f-4125-8182-2f75845b0623"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("73d651a6-4e5c-4815-85a4-ccd3267cce34"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("75d4695b-f759-4888-a1d8-b08e5c48d267"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("791ba529-fe06-428b-8459-3ad3ffdac63e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7aa8b86e-e2c0-4b88-983e-e198f66d33de"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7c2be4ef-c68a-4d9d-bbb5-cfb8105692cf"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7fe3b14e-f9bc-46dc-aa76-77d244e98c0f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8435ae12-259b-467e-888b-99f8c0230bfb"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("855d7c7c-76d3-4379-a8b7-3fb047bea08e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8aa1d1f0-642b-45bb-b678-8ff57b4de614"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9345cf2e-b3e5-4294-ad7a-9a9e3fb6ee08"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("94119586-ad0f-479f-9b13-b164cf434677"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("97d134f7-ba82-40ee-af17-0de741f61502"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9bbbccd5-23c6-40df-89ae-7f8927734cfb"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9c2b2a40-bab2-4fa6-9882-2db584c6ca96"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9d0306c7-738a-4098-a2df-42de99453a86"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a0d03dfc-b8c2-474c-90ea-b4009fa1471b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a0ff4d40-c503-4c91-b7fe-e7bcf822a014"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a1e34f38-35ba-4402-80ad-e47fb0b8365f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a301916e-a502-4dc1-b27a-333667ee6492"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a6d055f8-e5fc-445f-bda6-9f89ee9c6c07"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a82438e0-93f5-472a-8892-b2d1f9929709"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("acf0488d-4f3e-4a64-bdc7-d4184e3f8b4a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b0925306-5782-4f2b-bb2c-a27279fb1803"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b324d7a2-d7c6-4870-99b4-d2074c633cbb"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b4b5366a-4085-412f-b71b-8de54ea6de90"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b5021343-653b-4b3d-846c-a90cc02a0958"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b5fe9038-04b9-498a-b378-0f8f42e562e3"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("bad93869-2d55-4988-8159-b611ff6ea5ac"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("bd0313af-a7a0-4b75-989e-1cf60801576f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("bee4356e-aba1-4a2f-b096-afc37feaf02c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c44d0fa7-98ca-45fe-991b-47c95a307d3a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c5dae946-167a-427f-b633-177978f4c1af"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ca5bce93-4f4d-4893-b74a-62e3c060c09a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("cb6153eb-b66f-4735-a397-abcb704b6819"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("cc4505e2-5809-4b3f-a9f5-91d6ff81abd1"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d0d9ffec-ebe2-4c39-bfd8-9c01d08bbe31"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d2491c8b-42ba-45f3-aab6-ae9de523d028"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("db9ce220-57f7-4003-93cf-6e5bd35c4339"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("de0f2a50-ff35-44f2-905d-237e97198d20"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e0e9b686-7546-401d-b9c2-70956c95a67b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e24dba5c-307d-4798-9514-5b64c3ac05cb"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e2e01887-1b08-4f67-87db-7bf88d665c72"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e72dbb1d-1e88-4122-b4c0-f383bb197513"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ea413834-9ed1-43df-aefe-01c39a60cfa6"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("eabb90b1-20f9-4e54-8bd3-29fdae1c03bc"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ecbdcc29-1357-4f16-9288-0831b73a83ce"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f3d9da60-ef85-4f02-a4f7-5aa544f32b29"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f625671b-f4b9-476a-b92f-ab6c73fcaa7e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f6d38aeb-6ac1-490d-86da-5a90531bc1e2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f923c882-ee7a-47fc-8fa0-4d52e4fb94a2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f9e3385b-5f4b-4dbc-a891-bec45c96ff16"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("fb091ee4-692a-41fd-87be-a1a09ca6d028"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("fb176fb6-ead3-4d66-a207-6653262c8aa5"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("fbcc8aaf-6cff-471f-8a54-66a9432d0ba8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("fe455fdf-84ab-4391-a26c-8cd326c26f13"));

            migrationBuilder.AlterColumn<Guid>(
                name: "BloodTypeId",
                schema: "public",
                table: "Users",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uuid",
                oldNullable: true);

            migrationBuilder.InsertData(
                schema: "public",
                table: "BloodCompatibility",
                columns: new[] { "Id", "ComponentType", "FromBloodTypeId", "ToBloodTypeId" },
                values: new object[,]
                {
                    { new Guid("00b471d5-966f-4640-8caa-f31e1d1c98d7"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("02a385f9-b589-44d1-984b-3039af64a680"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("033bc2bd-c93a-4d22-81ce-865913d3f800"), "Platelet", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("050847e9-9d4d-46aa-8f42-d4ee988bcc82"), "RBC", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("06f8e3b8-458d-4a6d-8f66-ac0b805df19c"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("079d9fa2-2034-4723-a6cc-62088a7554b2"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("09993480-897e-4a7f-8e68-2d643b73b6fd"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("0ec6f903-d0aa-4e33-87c6-1d9e9f41ff1d"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("1159e503-0b58-47a6-b265-1f5bda10ecac"), "Plasma", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("19518909-25a7-4164-9702-0332306f0395"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("1d6332f8-3ce6-42e0-9f1e-67cb4811a0fc"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("1e63a6cf-ed3d-419b-83a4-dfd55906c0cd"), "Whole", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("20321475-dcbe-47ce-b5cd-4d48f7b9f311"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("223aac6d-844c-4fee-a90e-47f78bb79d79"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("2666c23f-41b5-410c-ba30-227fedef4f95"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("27a9e044-a383-46ea-9401-0024750976ff"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("2917a729-c007-4817-88d5-a561994dfeb8"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("2cef4290-8770-4e55-9dcc-78cab2cb9812"), "RBC", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("2f69a33e-9cb0-4fe7-b93e-88e74b607b5e"), "Platelet", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("2f7a2112-c8ab-45be-9871-a5fd9399c4f5"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("3052b7bf-b986-4110-af4b-122875a5d38f"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("32525fd9-296b-47d5-abea-9c04ec2589a6"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("334084f2-fe8d-46b8-9345-da4d1abbf9f1"), "Whole", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("3600aa03-625c-4c62-b1ce-c7913c02ee39"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("361cbfa9-e51a-40e1-85eb-ec5f974e01f4"), "RBC", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("3bea8092-3d18-4da1-acb3-f7bb7fc0286e"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("3dde35d1-cbd4-4bc4-8356-4625998ec41f"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("3eb70a8b-b1d9-475b-b1a9-531f19ad1879"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("40b245f8-9251-40e9-b5dc-88e8fcf67912"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("40f2bffb-c196-4ddd-ab24-e2e6685c86dc"), "Platelet", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("421587c1-cf16-4234-8009-7dc002ad96d1"), "Whole", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("4237fbdf-8df0-4b02-9ad2-b98bd23cdea2"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("443f1023-cc7f-4c04-8b43-17ca4f688134"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("453d9aa2-d893-4924-bb3d-b60a8c58ec46"), "Plasma", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("488be2fc-91e4-434c-ac1f-4dba02aa479f"), "Plasma", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("4ce08c06-9ba9-4f38-8b83-fb20d5c75dff"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("4e89367e-5553-40b2-bb03-e74b753a9c02"), "Plasma", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("50184553-3314-4754-915c-7b3e6c670266"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("517f8715-f80d-450f-a0dd-c293ceca2b8b"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("519a090b-a6df-4cf8-8962-35355bf55d02"), "Platelet", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("543add1c-0387-4f42-a367-a168abb27edc"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("5babde96-8877-4266-b471-476e6c119f51"), "RBC", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("5c45b311-6599-4398-b9c2-a12405482620"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("5f93c004-7220-4edc-a010-8aa0be5e0201"), "Whole", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("61bb4929-6d5e-401e-9db7-0f90adb7fe21"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("642e893a-3967-483b-bb86-288a9c96ff1c"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("69fd61f6-4d9f-438a-9f47-f2e92082cf0a"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("6b39dc1f-894b-4410-abe0-6f5a55ae8e03"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("6dc00a87-9ad2-41ed-a715-fe157d322509"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("6dcc71c9-c522-4230-8e8a-7be333fa05e8"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("767b26a0-faad-4b32-9958-8d44abf2db15"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("786af73c-7f28-4f96-a516-f29d9554d92b"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("78cd117d-9956-45d8-a8d2-59b60066de49"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("78fef508-f2f1-472e-a037-f80bd107c5c6"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("7917df72-44e5-43be-916c-0a177d4ec94b"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("79a4064d-9019-4fbc-a5fc-666ffdc30586"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("879b359f-3e42-449b-9fd9-29950fec8f2d"), "RBC", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("87aeb9ce-1089-43de-b8e8-19b632b4cfe9"), "Platelet", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("88f2419c-f4e4-4bba-9f79-34c188642cff"), "Whole", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("8ae2061b-a453-415e-b5ae-18fef7d65cb7"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("8b0323a3-1800-4fe4-b751-79928815d6aa"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("8c9fa099-7b4a-4bf6-8601-58f26bd2149b"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("8e8335bf-2c78-4d9c-b68c-a865397a9ecb"), "Whole", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("8f8404ac-2a5f-41c5-accc-8b215cad5996"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("8fb1ffc1-6442-452c-9b88-b4aefd626892"), "Platelet", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("90e0e2d5-76db-4fcc-abfa-fb92dedbb333"), "Plasma", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("96e0dc49-f891-48a3-b047-6f6cd24ced10"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("99daa0e9-a936-4ade-8252-db378c0832a7"), "Platelet", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("9b00dd26-0cb7-4eee-85bb-a328a874fbd7"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("9d3c9a60-a54e-4fe9-9675-2e57c5c3b8ea"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("9ecbe939-ba22-4571-803b-7c146f599044"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("a0028522-7907-4334-b0d4-3c36baa88ac3"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("a1568985-21f7-4b1d-b3e0-5e5534d6f837"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("a2cdbb08-99c7-4881-b195-e92198f35e16"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("a2dac3df-74d5-41f1-bce5-716d263f44c2"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("aad051af-f2b8-45f6-b911-32887de98e59"), "Plasma", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("b34586b1-7c94-416f-a281-c0390ac4698c"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("b52c82fa-026f-435f-96b0-f52c42c84583"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("b64b299b-5681-4295-a146-f72b82a35275"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("b69bd742-efe5-4531-a24e-a38063e84eea"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("bb4a0950-e53f-4c11-a9bb-107b059a38da"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("bc5441c8-ebad-4ad6-bdce-39d8008768d7"), "RBC", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("bda32380-d98c-4b4e-ac0f-4fbf3b847f0b"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("bee14ace-e201-4730-a425-f32a1203b0ac"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("c06e6368-8f54-404e-ad81-b08b4403b92c"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("c1eb112c-6654-4d7f-b7e2-b9ea7beec030"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("c51f6bde-d24f-4e26-96e4-0a7c80ed69be"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("c83faa9c-3130-4646-bc3a-c50e92f887c3"), "RBC", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("c8a52090-85ff-4459-9a9a-02b45cd0e6a3"), "Plasma", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("ca808cf9-6d09-433e-8eb3-0ad51b3919b1"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("cd0544aa-0c7d-4b20-8794-85a2193a143c"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("d1c74420-9285-46c3-b307-bdf5b4ebdecc"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("d2db3808-c1e5-48fb-b758-5f6025f4d35d"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("d809a3a7-8c56-4978-ad50-6c8e53f6b59f"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("d92af5ac-cca2-46e5-9d4f-14581b50a8f4"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("dd00e819-b4a1-4ad0-9403-13d676e3f27e"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("df16c655-73b4-4744-a39c-aadc0b79fc99"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("e082af2f-ff73-49e2-a797-ffa6afbc2f70"), "Whole", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("e1d7a07b-e667-44b6-9b3a-a6f4ac1a456b"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("e747434d-5d30-4528-a58e-bf2e39381412"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("e76139f7-9954-4bfa-8850-00f625e7b649"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("ea167a13-c47d-4733-a560-61299426908b"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("ea90ba83-b611-428a-9893-257561b99508"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("eb0dfd33-71b5-4504-8b4a-71d2eaff72c2"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("ec92f34a-e3ec-441e-b46a-ea3087fcaa49"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("f73b8a49-5a69-4619-afde-645c1be53797"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("fa770c70-c783-461b-aaed-f01addc3d020"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("fe848c80-254a-4667-8a41-69123bfa5d3a"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") }
                });

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000001"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 27, 3, 30, 29, 854, DateTimeKind.Utc).AddTicks(1610));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000002"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 27, 3, 30, 29, 854, DateTimeKind.Utc).AddTicks(1620));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000003"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 27, 3, 30, 29, 854, DateTimeKind.Utc).AddTicks(1620));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000004"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 27, 3, 30, 29, 854, DateTimeKind.Utc).AddTicks(1620));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000005"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 27, 3, 30, 29, 854, DateTimeKind.Utc).AddTicks(1620));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000006"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 27, 3, 30, 29, 854, DateTimeKind.Utc).AddTicks(1620));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000007"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 27, 3, 30, 29, 854, DateTimeKind.Utc).AddTicks(1620));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000008"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 27, 3, 30, 29, 854, DateTimeKind.Utc).AddTicks(1620));

            migrationBuilder.AddForeignKey(
                name: "FK_Users_BloodTypes_BloodTypeId",
                schema: "public",
                table: "Users",
                column: "BloodTypeId",
                principalSchema: "public",
                principalTable: "BloodTypes",
                principalColumn: "BloodTypeId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
