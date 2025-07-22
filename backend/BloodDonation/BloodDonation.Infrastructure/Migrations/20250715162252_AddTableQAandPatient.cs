using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BloodDonation.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddTableQAandPatient : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("03503909-40d7-4520-895d-2d35969557af"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("03612909-90d7-4a0b-b241-8b4a1e4478ee"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("09c57629-69d1-43b2-ab07-d1ee48589c76"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("09f7d5d8-e270-41fc-836e-4c2c6a585def"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("0b3145fe-f467-485d-8e81-4c21677323b1"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("0c25b188-dfec-48d2-95f6-59c004108293"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("0f77355e-506a-4a05-b208-4a590a70ebd5"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1216fc1a-7ec0-48c3-bc1e-be57351cad54"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("13c7d9ec-0d6b-430a-8aed-3e834a9863dc"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1be3ea70-93e3-4701-9056-6dde100a3543"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1ea8f241-86a6-4fdb-ab6e-aa80ff12808d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("21bb9310-68f2-4a96-b095-e891506a9c87"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("22e11a0f-c7c3-4ed1-a2d5-8dd1b0b498f4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("233f8732-baf9-4776-a439-6183bfb34f45"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("28838127-d2a3-4711-ae60-bc6e928571ab"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2c1915e7-91a8-4a0f-86a0-143fdf2f9814"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("33fc409a-7844-4bf3-af25-b3ff07aacd7a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("34ca7c97-2788-46b8-beba-51fc0ed520ae"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("352bbb8d-71ee-4c78-97ba-26deabc1db04"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("38f6bc60-3c35-4966-b6f4-49725329b520"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3a02dadc-3baf-484f-80fc-edee0580371e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3b85e337-29f2-456c-b54d-3cbc620bbd1b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3c349fc8-f543-4259-bb1b-90d91c17f5f8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3e3477ef-5a33-428b-b342-7db8dcb70e87"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3ecd78b1-bdc3-4e44-ba7f-a2d5c2e4daae"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3f098427-92fb-4b25-a1dc-215b0e16acc5"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("43184913-0dbe-4eeb-b156-25ad852c2811"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("473effc2-b418-41e2-87f9-726c4705dc68"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4b246bcf-bc6f-4b7e-a4b6-2c9e2236426f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4f3aad3a-9cce-420f-8f58-e5686ed67f45"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5069a3f7-3040-4014-98b7-99e38aabfcdd"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("511cd522-5b7a-42f7-8d49-64aecb20e6af"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("51468dcc-5dca-49bc-8f19-67884ee7cc07"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("528dc147-f09b-41db-88c5-2a8094324d13"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("54fb27cf-4d42-42b4-b1a5-b9a7fba71072"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5772693e-5836-4e43-b617-42802c225c3a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5adb9fe8-3dd4-43d4-a3d0-58fc2f576644"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5cbe35e9-8d2a-40fa-841b-c3184051b4f7"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5e27e31e-33af-46ef-895b-0a241a922f9d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5f0fbf44-dadd-4447-8df7-39eeb2e1e033"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6014725a-567a-45bd-9e3c-8d028353b853"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("64871c88-9e89-4cdd-bade-6ca5efc52766"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("672c2929-6a97-4948-918a-09752e44ee94"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6a447e96-a6ce-4ffe-90f9-a176f3c8d67a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6afa0315-5c8c-4d44-9d5c-319e950b5714"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6b16ed2d-5283-4015-965a-a9b16fdf283e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6e4f1fdf-5e1a-433e-928b-9ddb2a42d860"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6e7a208e-d62d-4a00-af47-d47a5c85fc7c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6ef85f49-7be0-4770-9553-273375e17159"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("71acf26a-181d-4448-bc1d-2aea2a221abf"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("724b3226-6b1c-45e5-b19c-87c3d33009e6"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("72719623-1d0c-4558-831b-1774961c4017"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("74002145-38d0-4975-814f-c093bb275115"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7520d9ae-6eea-41a4-a97e-a3c6b9beed16"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("76d8e588-6e71-41ff-8f18-62664f5b1bbc"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("76ffb1bc-87f5-42e8-aee1-4f2a3f9bf3f1"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7a24a0cb-3284-4257-ae85-fd1decf94f8b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7a5338f6-4ead-4171-95aa-ed19e4d92761"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7bdee4e6-83fd-497f-a44f-a1b56b68f1a4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7d394284-7fc8-4b36-93b1-5b28e1d76a5a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7db61497-904f-4f55-bc1c-b0439d2c7304"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("822030ef-7b8a-44e1-9c00-3f3a8a2ea750"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("899855c3-28b0-420f-b7ee-b4861df9297b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8c531c6b-bbc4-4184-8aa7-9b33984ac47b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8fd105aa-1abf-41d3-bbb9-5fde89902efe"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("90d2c754-4362-48e5-bc75-7641d94efb34"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("947cd66e-43ef-4438-8eb3-f77ec22a043f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9490af24-f238-4f9b-af24-40e91c15aa18"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9bbdbb90-a001-47ed-99bf-93340d852075"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9d6aa2a4-89dd-48a0-a66b-c0fe03d090ea"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9e5c2b95-b68a-499c-b29b-635fccc64847"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a023019e-35a3-46f2-934c-ea37b7073a25"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a5af949e-fd42-4348-bf16-4a76896b03e0"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("aa85a351-6156-49a6-a840-fba945358ef2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b26769f2-238b-4405-992a-d89569c1a9b9"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b37ba4b7-0c51-47ec-bd16-a5b41da331da"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b65c9626-3c9e-48ba-904e-fbdb7f8ceae3"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b7fc5b49-0bc5-4398-9efc-7cc79fd5ea8e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b8e9cc03-d725-450c-8d3c-567367553b13"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b9170c09-992a-4ed2-97e0-3c1b16eb93c3"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b9a4d53f-7489-4771-8b46-2d54bcd2dc87"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("bfa8c226-8d8e-400d-b411-74d923858173"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c7a77cc1-74ec-49a2-a3b5-f748967c4cee"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c88f8c67-4a53-4427-9e49-cbab53e4b530"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("cdb62fe7-7158-4d1c-a1ed-a45c5c156303"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ce7e3d63-6370-4f4b-972c-05e083ef5f2f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("cfba97b3-e7fc-47bc-9e2f-48aae47d960c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d465c27d-3913-4dc2-ae53-fc47bb00af69"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d8641217-e4bf-4675-9cd7-883d9fb6d35b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d9f62204-8a69-41f0-a2f6-514bb7b28ce2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("dcc69ee0-2310-491a-ba34-7c2ef7261b85"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e29a6284-c135-40b0-ae0c-19aa1446d614"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e5d8b025-9586-4c95-95d4-40e533a9c3c1"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e643159f-092f-4a15-b537-f5f3d02ae883"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e8b7a617-c5e8-4502-81a5-1a0425497b73"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e90b1cc4-7f80-489e-bf5a-3faa0ddfab11"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ea494430-8a52-4fda-9c61-449d02e644b4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ea9bc828-e797-4681-af96-a5b4789242d3"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ed657f99-b5c0-4afe-b900-0c1091f0bdf7"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ed85f6ec-3398-4a22-92e1-8980fe395c47"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("eda30f5c-8d04-4796-9c0e-0d18f91bb2b6"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ef66c869-e0ed-4f10-bc83-ef0233cf3756"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f42e404d-4750-48e3-98b3-4ffb97f349de"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f65b2d9e-a592-4501-aa3a-f27f59adda15"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f6f75ccd-5cd4-4c29-994f-431cc133ff7d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f7386bac-d660-4e57-9803-168ed700fe6f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("fb7909cd-6b6a-4a55-9c52-f9b83cf2bbc4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("fea3fece-8413-443f-bdbf-0e1f08cf2f7b"));

            migrationBuilder.CreateTable(
                name: "Patient",
                schema: "public",
                columns: table => new
                {
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    PatientName = table.Column<string>(type: "text", nullable: false),
                    PatientPhone = table.Column<string>(type: "text", nullable: false),
                    PatientEmail = table.Column<string>(type: "text", nullable: false),
                    PatientBloodType = table.Column<string>(type: "text", nullable: false),
                    Notes = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Patient", x => x.UserId);
                    table.ForeignKey(
                        name: "FK_Patient_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "public",
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "QaQuestions",
                schema: "public",
                columns: table => new
                {
                    QuestionId = table.Column<Guid>(type: "uuid", nullable: false),
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    Content = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_QaQuestions", x => x.QuestionId);
                    table.ForeignKey(
                        name: "FK_QaQuestions_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "public",
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "QaAnswer",
                schema: "public",
                columns: table => new
                {
                    AnswerId = table.Column<Guid>(type: "uuid", nullable: false),
                    QuesttionId = table.Column<Guid>(type: "uuid", nullable: false),
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    Content = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_QaAnswer", x => x.AnswerId);
                    table.ForeignKey(
                        name: "FK_QaAnswer_QaQuestions_QuesttionId",
                        column: x => x.QuesttionId,
                        principalSchema: "public",
                        principalTable: "QaQuestions",
                        principalColumn: "QuestionId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_QaAnswer_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "public",
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

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

            migrationBuilder.CreateIndex(
                name: "IX_QaAnswer_QuesttionId",
                schema: "public",
                table: "QaAnswer",
                column: "QuesttionId");

            migrationBuilder.CreateIndex(
                name: "IX_QaAnswer_UserId",
                schema: "public",
                table: "QaAnswer",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_QaQuestions_UserId",
                schema: "public",
                table: "QaQuestions",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Patient",
                schema: "public");

            migrationBuilder.DropTable(
                name: "QaAnswer",
                schema: "public");

            migrationBuilder.DropTable(
                name: "QaQuestions",
                schema: "public");

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

            migrationBuilder.InsertData(
                schema: "public",
                table: "BloodCompatibility",
                columns: new[] { "Id", "ComponentType", "FromBloodTypeId", "ToBloodTypeId" },
                values: new object[,]
                {
                    { new Guid("03503909-40d7-4520-895d-2d35969557af"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("03612909-90d7-4a0b-b241-8b4a1e4478ee"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("09c57629-69d1-43b2-ab07-d1ee48589c76"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("09f7d5d8-e270-41fc-836e-4c2c6a585def"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("0b3145fe-f467-485d-8e81-4c21677323b1"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("0c25b188-dfec-48d2-95f6-59c004108293"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("0f77355e-506a-4a05-b208-4a590a70ebd5"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("1216fc1a-7ec0-48c3-bc1e-be57351cad54"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("13c7d9ec-0d6b-430a-8aed-3e834a9863dc"), "Platelet", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("1be3ea70-93e3-4701-9056-6dde100a3543"), "Plasma", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("1ea8f241-86a6-4fdb-ab6e-aa80ff12808d"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("21bb9310-68f2-4a96-b095-e891506a9c87"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("22e11a0f-c7c3-4ed1-a2d5-8dd1b0b498f4"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("233f8732-baf9-4776-a439-6183bfb34f45"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("28838127-d2a3-4711-ae60-bc6e928571ab"), "RBC", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("2c1915e7-91a8-4a0f-86a0-143fdf2f9814"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("33fc409a-7844-4bf3-af25-b3ff07aacd7a"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("34ca7c97-2788-46b8-beba-51fc0ed520ae"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("352bbb8d-71ee-4c78-97ba-26deabc1db04"), "Plasma", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("38f6bc60-3c35-4966-b6f4-49725329b520"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("3a02dadc-3baf-484f-80fc-edee0580371e"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("3b85e337-29f2-456c-b54d-3cbc620bbd1b"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("3c349fc8-f543-4259-bb1b-90d91c17f5f8"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("3e3477ef-5a33-428b-b342-7db8dcb70e87"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("3ecd78b1-bdc3-4e44-ba7f-a2d5c2e4daae"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("3f098427-92fb-4b25-a1dc-215b0e16acc5"), "RBC", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("43184913-0dbe-4eeb-b156-25ad852c2811"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("473effc2-b418-41e2-87f9-726c4705dc68"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("4b246bcf-bc6f-4b7e-a4b6-2c9e2236426f"), "RBC", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("4f3aad3a-9cce-420f-8f58-e5686ed67f45"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("5069a3f7-3040-4014-98b7-99e38aabfcdd"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("511cd522-5b7a-42f7-8d49-64aecb20e6af"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("51468dcc-5dca-49bc-8f19-67884ee7cc07"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("528dc147-f09b-41db-88c5-2a8094324d13"), "Whole", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("54fb27cf-4d42-42b4-b1a5-b9a7fba71072"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("5772693e-5836-4e43-b617-42802c225c3a"), "Plasma", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("5adb9fe8-3dd4-43d4-a3d0-58fc2f576644"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("5cbe35e9-8d2a-40fa-841b-c3184051b4f7"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("5e27e31e-33af-46ef-895b-0a241a922f9d"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("5f0fbf44-dadd-4447-8df7-39eeb2e1e033"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("6014725a-567a-45bd-9e3c-8d028353b853"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("64871c88-9e89-4cdd-bade-6ca5efc52766"), "Platelet", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("672c2929-6a97-4948-918a-09752e44ee94"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("6a447e96-a6ce-4ffe-90f9-a176f3c8d67a"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("6afa0315-5c8c-4d44-9d5c-319e950b5714"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("6b16ed2d-5283-4015-965a-a9b16fdf283e"), "RBC", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("6e4f1fdf-5e1a-433e-928b-9ddb2a42d860"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("6e7a208e-d62d-4a00-af47-d47a5c85fc7c"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("6ef85f49-7be0-4770-9553-273375e17159"), "Plasma", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("71acf26a-181d-4448-bc1d-2aea2a221abf"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("724b3226-6b1c-45e5-b19c-87c3d33009e6"), "Whole", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("72719623-1d0c-4558-831b-1774961c4017"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("74002145-38d0-4975-814f-c093bb275115"), "Platelet", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("7520d9ae-6eea-41a4-a97e-a3c6b9beed16"), "Whole", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("76d8e588-6e71-41ff-8f18-62664f5b1bbc"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("76ffb1bc-87f5-42e8-aee1-4f2a3f9bf3f1"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("7a24a0cb-3284-4257-ae85-fd1decf94f8b"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("7a5338f6-4ead-4171-95aa-ed19e4d92761"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("7bdee4e6-83fd-497f-a44f-a1b56b68f1a4"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("7d394284-7fc8-4b36-93b1-5b28e1d76a5a"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("7db61497-904f-4f55-bc1c-b0439d2c7304"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("822030ef-7b8a-44e1-9c00-3f3a8a2ea750"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("899855c3-28b0-420f-b7ee-b4861df9297b"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("8c531c6b-bbc4-4184-8aa7-9b33984ac47b"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("8fd105aa-1abf-41d3-bbb9-5fde89902efe"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("90d2c754-4362-48e5-bc75-7641d94efb34"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("947cd66e-43ef-4438-8eb3-f77ec22a043f"), "Plasma", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("9490af24-f238-4f9b-af24-40e91c15aa18"), "Platelet", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("9bbdbb90-a001-47ed-99bf-93340d852075"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("9d6aa2a4-89dd-48a0-a66b-c0fe03d090ea"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("9e5c2b95-b68a-499c-b29b-635fccc64847"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("a023019e-35a3-46f2-934c-ea37b7073a25"), "Plasma", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("a5af949e-fd42-4348-bf16-4a76896b03e0"), "Platelet", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("aa85a351-6156-49a6-a840-fba945358ef2"), "Platelet", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("b26769f2-238b-4405-992a-d89569c1a9b9"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("b37ba4b7-0c51-47ec-bd16-a5b41da331da"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("b65c9626-3c9e-48ba-904e-fbdb7f8ceae3"), "RBC", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("b7fc5b49-0bc5-4398-9efc-7cc79fd5ea8e"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("b8e9cc03-d725-450c-8d3c-567367553b13"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("b9170c09-992a-4ed2-97e0-3c1b16eb93c3"), "Whole", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("b9a4d53f-7489-4771-8b46-2d54bcd2dc87"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("bfa8c226-8d8e-400d-b411-74d923858173"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("c7a77cc1-74ec-49a2-a3b5-f748967c4cee"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("c88f8c67-4a53-4427-9e49-cbab53e4b530"), "Plasma", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("cdb62fe7-7158-4d1c-a1ed-a45c5c156303"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("ce7e3d63-6370-4f4b-972c-05e083ef5f2f"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("cfba97b3-e7fc-47bc-9e2f-48aae47d960c"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("d465c27d-3913-4dc2-ae53-fc47bb00af69"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("d8641217-e4bf-4675-9cd7-883d9fb6d35b"), "Platelet", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("d9f62204-8a69-41f0-a2f6-514bb7b28ce2"), "RBC", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("dcc69ee0-2310-491a-ba34-7c2ef7261b85"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("e29a6284-c135-40b0-ae0c-19aa1446d614"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("e5d8b025-9586-4c95-95d4-40e533a9c3c1"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("e643159f-092f-4a15-b537-f5f3d02ae883"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("e8b7a617-c5e8-4502-81a5-1a0425497b73"), "Whole", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("e90b1cc4-7f80-489e-bf5a-3faa0ddfab11"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("ea494430-8a52-4fda-9c61-449d02e644b4"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("ea9bc828-e797-4681-af96-a5b4789242d3"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("ed657f99-b5c0-4afe-b900-0c1091f0bdf7"), "Whole", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("ed85f6ec-3398-4a22-92e1-8980fe395c47"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("eda30f5c-8d04-4796-9c0e-0d18f91bb2b6"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("ef66c869-e0ed-4f10-bc83-ef0233cf3756"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("f42e404d-4750-48e3-98b3-4ffb97f349de"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("f65b2d9e-a592-4501-aa3a-f27f59adda15"), "Whole", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("f6f75ccd-5cd4-4c29-994f-431cc133ff7d"), "RBC", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("f7386bac-d660-4e57-9803-168ed700fe6f"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("fb7909cd-6b6a-4a55-9c52-f9b83cf2bbc4"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("fea3fece-8413-443f-bdbf-0e1f08cf2f7b"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") }
                });

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000001"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 4, 5, 42, 0, 498, DateTimeKind.Utc).AddTicks(2020));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000002"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 4, 5, 42, 0, 498, DateTimeKind.Utc).AddTicks(2020));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000003"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 4, 5, 42, 0, 498, DateTimeKind.Utc).AddTicks(2020));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000004"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 4, 5, 42, 0, 498, DateTimeKind.Utc).AddTicks(2020));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000005"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 4, 5, 42, 0, 498, DateTimeKind.Utc).AddTicks(2030));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000006"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 4, 5, 42, 0, 498, DateTimeKind.Utc).AddTicks(2030));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000007"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 4, 5, 42, 0, 498, DateTimeKind.Utc).AddTicks(2030));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000008"),
                column: "LastUpdated",
                value: new DateTime(2025, 7, 4, 5, 42, 0, 498, DateTimeKind.Utc).AddTicks(2030));
        }
    }
}
