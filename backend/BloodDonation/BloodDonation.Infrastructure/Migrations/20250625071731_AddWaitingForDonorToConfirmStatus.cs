using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BloodDonation.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddWaitingForDonorToConfirmStatus : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("0143669c-abca-42f4-88a9-0733f7aee9c8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("032a33dd-e0ed-4050-91df-3cf548866ff6"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("06e6a27c-1eb5-47ba-be7c-96519f382ab0"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("07b3926c-44a8-4780-965b-4883d5f54768"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("0b3dacdb-1812-424b-aea8-5e62055c70d2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("0b6d85a1-b255-496b-aa36-7493517e300b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("11f99f5c-734e-4324-9a0e-5d86d5adf16f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("12cbc025-7008-41f8-a39a-da33bc08e5be"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("147db7fd-5079-4e1d-88df-475d7db5ee09"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("14814993-1466-4650-8406-3e14960c57bd"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("177adc66-7ab7-4e62-87ab-a905ab4d2125"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("19dba2b7-c8fa-43f6-b880-fd3e62a8ba9a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("19efe4a7-173e-4439-967a-f6086cd4e84b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1b5b08e2-7d88-4a2d-8804-a3f12d7a0709"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1b70a1ea-90ce-408f-9d50-7255397c205a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1bb4b9f7-b271-4e93-9037-0dd912275578"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("214a2e3f-84fc-45d3-b1d6-1f17b924b0c5"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("23434f53-3438-43a6-b7f2-29692d1659c2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("23eb6435-8d2f-4fe7-a172-c02a5733035f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("25ada933-8bbe-4f64-9eb5-7f637f1e932a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2623e70e-8a24-434c-879e-6cc6504acf3f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("26555595-b130-47e4-93ec-f1b27c2d71bc"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("28730e1b-0d41-4acd-b433-f7e0908a9732"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("29cfdd3b-b359-49b8-97f1-efe69ec0c59a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2bc8c38b-680a-4f80-a5b0-ce17a7775fd4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2c1d53ce-0f78-40a3-a699-6bd7d82c1080"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("342d423d-cb11-4dc5-929b-ff8f21ec1665"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("399d212d-4068-4ed1-9611-0661069934fc"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3a7f2900-3728-4896-b517-d9a5f0239a25"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3ad33361-a211-4b5c-922c-c56d0e745241"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3d6fb2cb-87e2-4014-b027-a41fc04ca42b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("425bc66f-1dff-4c25-b4e4-8fa84f47b1f5"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("42c39bbe-7b3b-4374-90b1-26051ddea3c6"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("487e5d18-51ae-49db-a39e-cc97c10d1757"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4cc1de37-e5e3-438b-a3b4-9aebe8798cd7"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4cf2306a-9ad7-42f7-9a8d-e563def23844"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4fce4eb6-e35f-4b5a-a8bf-90a6feab6319"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("54e64ea1-e85c-48b3-ba83-29deddde61bf"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("58f15792-0aa9-43ee-8b9d-05ec95326fea"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("598511ca-dd27-4806-b7d9-a3c07530e3e5"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5cdebdb7-ba1f-4800-9d4b-f83f5959d798"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5f83c17d-c539-4c93-9a7e-f085302f4401"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6153f860-7671-4dad-ade2-b1668c8a5f3e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("64c5d9b3-e375-4e5a-977e-c2374cfc0249"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6593a1dc-dfd2-47c8-a0f1-915b0dccda3b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("66d9f0ca-bff2-4175-9282-d6b92d398c45"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6af8ad7d-fa04-4d33-97b3-78052212be18"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("716568ac-8cb7-4d9a-b8b5-584559630c21"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("71b241c8-13ed-467f-aa85-0b102fca8ecc"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7430fa81-e54b-43f6-9283-fe9bf149a787"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("743d9d05-dd6a-4386-9e79-00f4721f51ad"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("760cfc76-0ac4-42ec-879d-511652c0ec0e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7a0a56dd-3046-4923-bf2b-b04abf9b8b4c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7e94b171-9da8-4163-8294-0528b07f1e91"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7fa0732c-4fc6-4c03-a339-0ddbcfb3430f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7ffa4363-b2a3-4ad8-b4e6-b547ff292847"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8089dfc3-da97-45ae-af7b-0349a5c7a9fb"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("811a4009-f506-451d-adf1-172ebe63a518"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8528bf70-5594-48d8-a563-1ce23123b574"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("87b13eb4-362d-4130-aa4e-10682e194fa1"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8a157305-06a4-48c2-a51c-7ac1fd342ca2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8af83553-6628-40f1-ad35-a87b67c32a6a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8d27d795-6f25-4588-be3e-b26ad2f3016b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("908be492-4bcb-4ce1-b9f6-f0d5cc97d201"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("91b63fda-cd41-4554-a89f-0fe8b7e03c90"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("95c10f40-e824-4e06-a3b1-042f017e58ae"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("973203d0-12b7-4e36-9d15-2a50a0f9032a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9a533f13-5a27-46e8-97bc-4d66ff964ef8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9d9989fd-cce2-41d8-992d-cae1ec8ab45d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9e6fca26-8f65-4c7f-a9b2-1d41e289100b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9f810a58-5a82-4e48-8f36-91307ee059cb"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9fa6a4c0-5eea-47be-a9de-c18b823623a8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a2604894-c810-4dc1-8a8f-81415023e7b6"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a2fe224a-65f8-4bbc-bc58-4cb6fff0d88a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a441eca1-eb3e-4aa4-9882-af8f71336d27"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a626db3a-47b4-4124-84f6-776c2996d4db"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a68a85bc-32d8-4066-93d1-ca1f07d2a685"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ac117b18-5996-40a9-b127-ff490e6ddb71"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b1700bc6-8d11-42c9-b9d2-32189c488a22"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b1851d69-5969-4607-b099-e1fba8e36053"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b2dc704b-6bcc-42dc-88c1-2664e2bd8caf"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b3fc0bc7-ed68-444a-a8c1-972fddc8e16a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b54e208f-c69f-4237-b078-5fdbe271f0c4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b8abcbbf-7f59-4fa2-bb10-3209e39ffd7e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ba018e8f-268c-44f3-a933-b3a6cf42423f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("bdb78245-baf1-4894-b588-e7d4b5ee14fe"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("bfb5a458-4ccb-41b5-8510-dad69dfc415a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c0006037-a56f-40c6-882e-31297a723ea1"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c08dfd88-010f-4864-8125-f1dfb65be495"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c1878fd2-6d4a-4ddf-ac53-f28468d61e3d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c3dca1d0-3cb9-4153-b6ea-2bae32e210ca"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c5f1756f-3a4f-4295-a762-3b8845ec2ff4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c5f361f0-ffeb-4ae8-802e-0bb11a499612"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c7dbf3eb-d2d0-4e09-8469-02018eca3e40"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("cc915b57-8013-4ebf-8984-952843f0686d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("cf449132-0308-4e34-ae4d-d319ac0ae007"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("dbdedb0c-cec4-4b09-ad34-8e2d2d4d1845"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("dea381a3-e161-47b3-bb67-8d3b7e7a1ff1"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e2ec21a0-68b0-4ca0-9103-1ab4b050cb1f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e86f8c20-e9f4-4a68-9cc7-38a484707bc0"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e87a730d-89fe-420b-91f5-154dfd40fb7f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ec968b44-0db5-4c73-84bc-f3f30fc85f24"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ede158bc-05bc-4db6-a43c-8ccdf5c6a779"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ef799c71-e41f-4fd0-9858-9f12e2a8f4a1"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f61c960b-abdf-4648-b781-9c9193109fca"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f984ce9f-7809-4816-adde-a41bb7da91b9"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("fb74fae0-da0d-4dcd-9ea3-ee5c2ae78b7f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("fe80804e-72d7-457f-bb77-e66c217f79e8"));

            migrationBuilder.InsertData(
                schema: "public",
                table: "BloodCompatibility",
                columns: new[] { "Id", "ComponentType", "FromBloodTypeId", "ToBloodTypeId" },
                values: new object[,]
                {
                    { new Guid("01c44a2d-87d0-4afb-b61b-a036b2c0598a"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("0642f4e0-8fcb-4c5d-83fa-47eae8626aae"), "Platelet", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("0a12b824-2863-461e-a1ef-d69caed2e724"), "RBC", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("16bb84d9-b338-4896-a9d4-55c01dba5d19"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("1786dabb-656c-4533-9c9d-fceb84d5a361"), "Plasma", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("17f64728-2e89-423f-8304-18f123b0f217"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("188589b7-62d4-44c9-8067-1b1572e71308"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("1d3d99ba-3c4b-44c5-9ee8-90e0211faa1c"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("2047a55b-12ad-4822-8317-6e340451e9c8"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("222e5de4-367c-4281-a54d-a4d75da3bea3"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("252ad2d4-64b5-4f22-97f9-f3d0ca55f333"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("290ba9ce-70e0-4c00-95f8-dbe85551f2e0"), "RBC", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("2a1ad3a7-fcaa-4f6f-9db9-1fe6ab7164dc"), "Whole", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("2b69b245-2725-4db5-ac18-ff6bcfa4dba1"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("2dcefee9-e733-49d3-bc4a-58cf1af67613"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("2e7041fa-b4d4-4858-ae6c-6e992cdd402a"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("3321b6a8-f7b7-48fe-aa3f-a9eb1689668e"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("36f80f82-990e-420e-bc29-62ddd6138d7a"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("3720a4a9-5509-40dc-b3a7-9ebbfc570e31"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("42301d56-af15-446f-9986-b15bbb250d6e"), "Plasma", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("42fd62f6-4f84-462e-ba1f-4dcba239d3fb"), "Platelet", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("46f67846-c3c6-4665-8d54-a90cc8bf0fe0"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("4a068034-17e8-443d-94a0-99c98fabeec2"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("4a293eb4-0717-4ac1-886e-726b42254312"), "RBC", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("4ced30ac-46d1-4218-bef1-fbe1dbd0f850"), "Whole", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("4d784377-a391-4021-9623-f84709b89b38"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("4f655813-2220-40e6-ba3f-1251498b3188"), "Plasma", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("4f8016f8-2caa-4677-a7fa-2960123a8a56"), "Whole", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("507a905a-7b05-4dc1-8a2e-7314a9110331"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("50e7d2aa-fd46-437f-8e22-99103778f899"), "Plasma", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("516a271b-64ba-49de-ac3c-889035a27df7"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("5352bff5-2011-47b6-93fa-d88ccb028f7e"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("57549c21-0efd-47fc-9d10-44ecad1c674c"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("5b09abd8-704f-4169-a49a-d50e8db0236b"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("5ea5cde3-2736-4cd2-aeea-52fb3c462168"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("5ffced59-dce2-45c3-9999-afb30626e369"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("61aec08f-e6f6-40a3-be08-c282b4265b06"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("63f6ad30-59ca-4435-9e63-b6525080872f"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("651edc2b-5d80-45c8-83ca-220d63e490f2"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("69a211dc-da7e-43ca-a7f4-efa88eb8f57d"), "Plasma", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("6c802031-023c-49cf-8ce6-25756bcd162f"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("6cba29a2-2489-415b-983a-5ef5fbaa720b"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("729af393-a2e8-486c-b78d-93b5bcbbdf36"), "Platelet", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("79f99fae-5c55-4ca6-a16b-b4369823ed14"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("7c4367ad-8f49-426f-b6fd-b7e80e2c73a1"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("7cab5633-d790-4ea5-aeb6-dd4770cd4a41"), "RBC", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("7dfe8f53-deae-412a-969c-248eaf65158e"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("7e1be08c-e5ca-4c2b-abb0-3ba4eb769b7d"), "Platelet", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("7e48540a-c869-4355-b2b1-9423dd4047b3"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("7ee2275e-6cb0-4d00-b38b-7180def9c162"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("80b5414b-8236-4a0b-9569-41350bf05150"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("83ab3f61-e7ec-4e4b-9161-2714575348cd"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("84e8bab2-168a-4a1b-9b09-66e60de2a409"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("8601236d-47d0-4081-a46e-abdf2c8613a3"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("8a14ce63-1817-4b22-a860-358fc70a6863"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("8adc1add-c768-46ab-bbd6-01eede051f26"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("8b455c27-e386-4aaa-b5d2-689709f72e5e"), "Plasma", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("8d5691ee-1f0a-42e5-87f1-15af80464e22"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("8f26c358-9e0d-4225-acab-df6f375deabe"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("9380821a-b5c5-4980-bf1a-299a4a3ce0f7"), "RBC", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("93ed407b-b7bf-4165-834a-aed484fac998"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("96cb169f-f062-4a17-8b98-78786fd4e28b"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("9c8c4e18-9476-4955-ad1c-4ab74c174b8a"), "RBC", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("a161f133-f2b4-457f-a621-932edc36e0c8"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("a1f2879e-effe-400a-9f27-ddc990ebd6de"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("a3a87038-667d-4c0c-8d67-2461aeb1ecfe"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("a45b8a77-4752-4486-bc69-b32ea95cef82"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("a5b1222c-7028-43db-92e2-6fb52042dc70"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("b129287a-229b-447e-95a5-5656e40ce623"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("b12f564a-e719-4c1f-9352-8ba18c9220c3"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("b17b2855-ef92-43c8-a6a2-e5df2855f358"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("b80d56ea-b4b2-4353-a6d6-5167b04bfc30"), "Whole", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("bae4f37b-0fe7-444b-b980-45d832d6d513"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("bcd67ea4-dd44-43f3-8108-4dc55db6febe"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("bd2cef43-94ca-4eb3-8b1d-5066af3acd7b"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("be454fcf-d1d2-468f-bcb9-3ee927b54015"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("c1aceaaa-7e1b-4ea6-a858-9614a1848e76"), "Platelet", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("c61ebd43-4618-4807-8558-207781d8926b"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("c77b8807-cf1d-44b4-8c1b-644f922e0904"), "Platelet", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("cbeb00a0-8b85-45ba-844d-74a23ef75c27"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("d057fac7-d4ec-4021-99f9-e2cec67cfa48"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("d3f83a68-de00-4fe4-9919-03e7cb0c591e"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("d4213566-b3bf-43b6-9f32-e6eae819a967"), "Whole", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("d55b5612-b69a-4e3e-9614-c64e23b5f331"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("d6b55203-9ff7-4256-926b-7f3a3f0f0882"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("d7614f86-0e71-45b2-a860-460f854eb0af"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("d7bfacbd-d97c-40d2-ba4e-02e7fc8fc507"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("ddada43d-3f11-42f0-b653-d736bbee10a8"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("ddf4ad9a-18a7-4035-ad3c-d8ec5a1eb163"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("e0a6e3b6-afb6-46fb-92e7-4d5a9bd7cc95"), "Whole", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("e324d008-d7fb-4e13-8d31-9c283831e49a"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("e46fdff7-3f34-40f5-a9b2-1d5fa148ae3d"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("e4a214ea-1951-45a8-852c-6b030812dbf6"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("e4da55a2-dc4c-47fc-ad82-a95989ac7f67"), "RBC", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("e63e61e2-e005-457f-a8bd-3ed5b9da3759"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("e65e5901-2f4b-4728-b086-9ea5cd1d6c41"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("e6894fb7-6c9e-4495-a530-c65c0922aac4"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("e71ebaf0-979e-401d-98aa-edc899ba1aa1"), "Plasma", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("ede85164-4f13-4849-ba47-47c16a110fd6"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("f018dd5e-0c03-4901-ac91-76a5e9ec1a1b"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("f4e74ef4-83b5-4747-866c-20554fa92d2f"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("f56e293c-4a43-4f99-9759-afe3b9a28612"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("f58929d6-ee3c-4fb7-bd5c-0f55aa5f1bff"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("f7055ba5-6da1-45cf-b1b7-93adc93eceda"), "Platelet", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("f93d170c-da88-42ad-a788-32e3b7597aa5"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("f9e1148e-2918-4337-aec4-e5d4a10bc2f4"), "Whole", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("fb1ac324-bbb8-4e1e-9a84-c38e5d44e692"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("fe173afd-9eca-449f-aebf-008190b8bde9"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") }
                });

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000001"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 25, 7, 17, 31, 553, DateTimeKind.Utc).AddTicks(220));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000002"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 25, 7, 17, 31, 553, DateTimeKind.Utc).AddTicks(220));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000003"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 25, 7, 17, 31, 553, DateTimeKind.Utc).AddTicks(220));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000004"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 25, 7, 17, 31, 553, DateTimeKind.Utc).AddTicks(220));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000005"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 25, 7, 17, 31, 553, DateTimeKind.Utc).AddTicks(220));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000006"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 25, 7, 17, 31, 553, DateTimeKind.Utc).AddTicks(220));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000007"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 25, 7, 17, 31, 553, DateTimeKind.Utc).AddTicks(220));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000008"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 25, 7, 17, 31, 553, DateTimeKind.Utc).AddTicks(230));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("01c44a2d-87d0-4afb-b61b-a036b2c0598a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("0642f4e0-8fcb-4c5d-83fa-47eae8626aae"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("0a12b824-2863-461e-a1ef-d69caed2e724"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("16bb84d9-b338-4896-a9d4-55c01dba5d19"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1786dabb-656c-4533-9c9d-fceb84d5a361"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("17f64728-2e89-423f-8304-18f123b0f217"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("188589b7-62d4-44c9-8067-1b1572e71308"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1d3d99ba-3c4b-44c5-9ee8-90e0211faa1c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2047a55b-12ad-4822-8317-6e340451e9c8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("222e5de4-367c-4281-a54d-a4d75da3bea3"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("252ad2d4-64b5-4f22-97f9-f3d0ca55f333"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("290ba9ce-70e0-4c00-95f8-dbe85551f2e0"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2a1ad3a7-fcaa-4f6f-9db9-1fe6ab7164dc"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2b69b245-2725-4db5-ac18-ff6bcfa4dba1"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2dcefee9-e733-49d3-bc4a-58cf1af67613"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2e7041fa-b4d4-4858-ae6c-6e992cdd402a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3321b6a8-f7b7-48fe-aa3f-a9eb1689668e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("36f80f82-990e-420e-bc29-62ddd6138d7a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3720a4a9-5509-40dc-b3a7-9ebbfc570e31"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("42301d56-af15-446f-9986-b15bbb250d6e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("42fd62f6-4f84-462e-ba1f-4dcba239d3fb"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("46f67846-c3c6-4665-8d54-a90cc8bf0fe0"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4a068034-17e8-443d-94a0-99c98fabeec2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4a293eb4-0717-4ac1-886e-726b42254312"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4ced30ac-46d1-4218-bef1-fbe1dbd0f850"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4d784377-a391-4021-9623-f84709b89b38"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4f655813-2220-40e6-ba3f-1251498b3188"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4f8016f8-2caa-4677-a7fa-2960123a8a56"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("507a905a-7b05-4dc1-8a2e-7314a9110331"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("50e7d2aa-fd46-437f-8e22-99103778f899"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("516a271b-64ba-49de-ac3c-889035a27df7"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5352bff5-2011-47b6-93fa-d88ccb028f7e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("57549c21-0efd-47fc-9d10-44ecad1c674c"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5b09abd8-704f-4169-a49a-d50e8db0236b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5ea5cde3-2736-4cd2-aeea-52fb3c462168"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5ffced59-dce2-45c3-9999-afb30626e369"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("61aec08f-e6f6-40a3-be08-c282b4265b06"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("63f6ad30-59ca-4435-9e63-b6525080872f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("651edc2b-5d80-45c8-83ca-220d63e490f2"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("69a211dc-da7e-43ca-a7f4-efa88eb8f57d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6c802031-023c-49cf-8ce6-25756bcd162f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6cba29a2-2489-415b-983a-5ef5fbaa720b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("729af393-a2e8-486c-b78d-93b5bcbbdf36"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("79f99fae-5c55-4ca6-a16b-b4369823ed14"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7c4367ad-8f49-426f-b6fd-b7e80e2c73a1"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7cab5633-d790-4ea5-aeb6-dd4770cd4a41"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7dfe8f53-deae-412a-969c-248eaf65158e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7e1be08c-e5ca-4c2b-abb0-3ba4eb769b7d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7e48540a-c869-4355-b2b1-9423dd4047b3"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7ee2275e-6cb0-4d00-b38b-7180def9c162"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("80b5414b-8236-4a0b-9569-41350bf05150"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("83ab3f61-e7ec-4e4b-9161-2714575348cd"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("84e8bab2-168a-4a1b-9b09-66e60de2a409"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8601236d-47d0-4081-a46e-abdf2c8613a3"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8a14ce63-1817-4b22-a860-358fc70a6863"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8adc1add-c768-46ab-bbd6-01eede051f26"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8b455c27-e386-4aaa-b5d2-689709f72e5e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8d5691ee-1f0a-42e5-87f1-15af80464e22"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8f26c358-9e0d-4225-acab-df6f375deabe"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9380821a-b5c5-4980-bf1a-299a4a3ce0f7"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("93ed407b-b7bf-4165-834a-aed484fac998"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("96cb169f-f062-4a17-8b98-78786fd4e28b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9c8c4e18-9476-4955-ad1c-4ab74c174b8a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a161f133-f2b4-457f-a621-932edc36e0c8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a1f2879e-effe-400a-9f27-ddc990ebd6de"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a3a87038-667d-4c0c-8d67-2461aeb1ecfe"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a45b8a77-4752-4486-bc69-b32ea95cef82"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a5b1222c-7028-43db-92e2-6fb52042dc70"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b129287a-229b-447e-95a5-5656e40ce623"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b12f564a-e719-4c1f-9352-8ba18c9220c3"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b17b2855-ef92-43c8-a6a2-e5df2855f358"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b80d56ea-b4b2-4353-a6d6-5167b04bfc30"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("bae4f37b-0fe7-444b-b980-45d832d6d513"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("bcd67ea4-dd44-43f3-8108-4dc55db6febe"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("bd2cef43-94ca-4eb3-8b1d-5066af3acd7b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("be454fcf-d1d2-468f-bcb9-3ee927b54015"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c1aceaaa-7e1b-4ea6-a858-9614a1848e76"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c61ebd43-4618-4807-8558-207781d8926b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c77b8807-cf1d-44b4-8c1b-644f922e0904"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("cbeb00a0-8b85-45ba-844d-74a23ef75c27"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d057fac7-d4ec-4021-99f9-e2cec67cfa48"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d3f83a68-de00-4fe4-9919-03e7cb0c591e"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d4213566-b3bf-43b6-9f32-e6eae819a967"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d55b5612-b69a-4e3e-9614-c64e23b5f331"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d6b55203-9ff7-4256-926b-7f3a3f0f0882"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d7614f86-0e71-45b2-a860-460f854eb0af"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d7bfacbd-d97c-40d2-ba4e-02e7fc8fc507"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ddada43d-3f11-42f0-b653-d736bbee10a8"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ddf4ad9a-18a7-4035-ad3c-d8ec5a1eb163"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e0a6e3b6-afb6-46fb-92e7-4d5a9bd7cc95"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e324d008-d7fb-4e13-8d31-9c283831e49a"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e46fdff7-3f34-40f5-a9b2-1d5fa148ae3d"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e4a214ea-1951-45a8-852c-6b030812dbf6"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e4da55a2-dc4c-47fc-ad82-a95989ac7f67"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e63e61e2-e005-457f-a8bd-3ed5b9da3759"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e65e5901-2f4b-4728-b086-9ea5cd1d6c41"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e6894fb7-6c9e-4495-a530-c65c0922aac4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e71ebaf0-979e-401d-98aa-edc899ba1aa1"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ede85164-4f13-4849-ba47-47c16a110fd6"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f018dd5e-0c03-4901-ac91-76a5e9ec1a1b"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f4e74ef4-83b5-4747-866c-20554fa92d2f"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f56e293c-4a43-4f99-9759-afe3b9a28612"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f58929d6-ee3c-4fb7-bd5c-0f55aa5f1bff"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f7055ba5-6da1-45cf-b1b7-93adc93eceda"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f93d170c-da88-42ad-a788-32e3b7597aa5"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f9e1148e-2918-4337-aec4-e5d4a10bc2f4"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("fb1ac324-bbb8-4e1e-9a84-c38e5d44e692"));

            migrationBuilder.DeleteData(
                schema: "public",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("fe173afd-9eca-449f-aebf-008190b8bde9"));

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

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000001"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 23, 15, 52, 31, 239, DateTimeKind.Utc).AddTicks(5503));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000002"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 23, 15, 52, 31, 239, DateTimeKind.Utc).AddTicks(5507));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000003"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 23, 15, 52, 31, 239, DateTimeKind.Utc).AddTicks(5513));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000004"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 23, 15, 52, 31, 239, DateTimeKind.Utc).AddTicks(5515));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000005"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 23, 15, 52, 31, 239, DateTimeKind.Utc).AddTicks(5516));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000006"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 23, 15, 52, 31, 239, DateTimeKind.Utc).AddTicks(5518));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000007"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 23, 15, 52, 31, 239, DateTimeKind.Utc).AddTicks(5519));

            migrationBuilder.UpdateData(
                schema: "public",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000008"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 23, 15, 52, 31, 239, DateTimeKind.Utc).AddTicks(5521));
        }
    }
}
