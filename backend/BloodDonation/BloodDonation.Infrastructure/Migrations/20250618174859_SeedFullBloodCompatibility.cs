using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BloodDonation.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class SeedFullBloodCompatibility : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                schema: "dbo",
                table: "BloodCompatibility",
                columns: new[] { "Id", "ComponentType", "FromBloodTypeId", "ToBloodTypeId" },
                values: new object[,]
                {
                    { new Guid("013824c1-493f-44e3-8b04-e3595caed0ce"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("0179182d-0673-42f3-ad0d-ed217be73571"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("034d07f4-d7ef-4dea-bce8-f2050fab8f07"), "Whole", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("04598147-363c-4c49-b51b-5cf0411d7b11"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("083a4130-e050-4bfa-b3eb-85625b707eaf"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("089b0029-1cf5-4785-9e2b-154d5109625c"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("09da0a52-b4fc-4499-b6f0-9c05ea515dcf"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("0a8407b7-fa68-4e93-a0cf-6207f49bd951"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("0b4b9dd7-df00-4ec2-a6f6-578ddc2915be"), "RBC", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("100baa61-2548-467c-af6f-818ead0289dd"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("11b7c132-a39f-4861-a35f-87edd067f7d8"), "RBC", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("12158803-aa9b-4bde-b86c-c9e26ca4db14"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("14967179-e531-4064-a20c-66b023c9dab8"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("16b47c1f-710e-4175-90aa-0d12564c031a"), "Whole", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("16ff22c0-680b-4300-9a6c-b800556a6c78"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("1c54fa26-b205-451f-9383-399b91976e42"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("22d064fe-c537-4327-aea1-ae4a05936a37"), "RBC", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("2bb782a7-9300-4b0e-8c0d-42e015e81fdc"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("2d12413e-ca92-400b-8944-8eca001838e8"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("2f763735-4ccf-48b0-9c44-e94713659ce0"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("304e4cc1-2cc3-440c-9206-8bd6f5060015"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("34591a33-d488-445e-b539-95f7b878efa8"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("36ad1010-4fb5-43ad-b6d2-f3a2ce66d406"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("36d94435-5780-42b1-af80-b7618679f205"), "Plasma", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("3a0e7275-0c45-4d4c-afd3-29189ec333b1"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("46604cd5-5fc9-4d16-b48f-37cb1288563e"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("467aa6a8-0284-4000-a9bc-cca363f70400"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("4af5aea8-1669-4366-b985-baa854ad167a"), "Plasma", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("4c19eb1f-2cce-49a6-9e6f-7763c52f9518"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("4c6a4069-0f6e-45bc-b643-c28af0afc263"), "Plasma", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("59e07d48-28fc-48c5-90eb-aef4a2f911a7"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("5a41f5e0-a224-47da-aeb3-c6abb07beb3e"), "Platelet", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("5d9a2cfc-77ef-49f6-80b6-f2b0b2999343"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("5db2a23a-6739-4ef9-bca6-d589dd38bad6"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("5dc031f4-0e9d-4dc3-be81-41e410098344"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("5f47fd86-fd81-4099-bcfa-62819b279178"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("6124f862-3b93-4217-87f4-5932ce2a490a"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("63baa390-6d64-4c7d-af56-71aa904a05ad"), "Whole", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("64feeb3e-f881-44d5-9b97-9cc22d0f0649"), "Whole", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("666adef4-b238-4149-802d-5f9714b3b479"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("69235865-c797-4a0d-9345-e4bd2dfb6121"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("6a075002-ce4e-4659-ae17-fe113f797b1a"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("6d5698f5-afa2-422b-b5a1-a6f7fcf38d24"), "Plasma", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("6e24daca-40db-4f35-9bce-ded40ce949c2"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("7095c278-1415-4bed-8938-bed03f828381"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("740e1c15-5dd8-4113-80af-0ec0154b36a9"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("79d0c841-faaa-471f-84ef-8d8fffb5ca5f"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("7cccc094-95ad-4046-b9f1-3b0ece96509b"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("81489288-f7f3-4330-893b-d204b39d06ee"), "RBC", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("817d1d33-99fc-481a-8160-fb6dfb6f0dd8"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("87cb880a-0115-443a-8398-58e65be2f45f"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("884bcb50-1e61-4a2a-a9fa-711b85037941"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("8969c5f3-9c13-4c15-a9c1-281d14e5f81b"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("8c1a5e3c-1391-4bde-9d43-6a14c4e6e219"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("8d2102e3-1bf0-4bd1-84cb-f930670bba77"), "Platelet", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("90f50c0b-0a1f-49fa-ac8f-2df17ab387f0"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("91e7fbdf-26c4-4788-8c52-8ab73d7c64ec"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("94c7478a-b67d-4d73-9713-3731f137c98c"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("961b0b89-48b3-434b-8a8a-9b59412f3eb9"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("96344bfe-6d3f-400d-b875-1b97f22ea0f2"), "Whole", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("99eb9d60-56cf-46a3-adc2-abbbc910a2ec"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("9bdec814-f53c-4c17-a27b-52294fc80e9e"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("9c3695e0-6f4f-49c2-aa70-8f65bf2076b3"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("9fb510b6-31cb-49ec-907c-a0a8284b2325"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("9ff051fd-4843-402c-ba26-5d509df440d2"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("a37f80f2-f0e0-46e6-8c0e-a6d68fc624d9"), "Platelet", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("a5a215e8-4947-4e42-922a-807a3f58d14e"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("a7c2c902-54af-45e4-b7db-e0165f5fb5f0"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("a86430b1-da83-4f2b-8d04-4923e6470268"), "Plasma", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("a8ef09d0-aaef-4ab7-8b03-40548e62cdae"), "Whole", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("aa9abd16-beba-470f-9ef5-0c3f7be79b6f"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("acab5220-49b8-4634-a5f2-e89c3e812465"), "Platelet", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("acd2eb61-e7af-461a-a248-8ed60ba6fd89"), "RBC", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("ad9c543a-2c5b-40eb-bb5a-00da90901739"), "Plasma", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("ae4963be-4c96-4d08-9ac9-559ae6d3726a"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("afc1a2d4-f2bf-4cb0-aef1-f8039fb19829"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("b574f464-d5ca-4b0a-aa7d-b49c05ddbfd5"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("b670529d-c8fc-46d9-8a69-6c73bd4020a4"), "Platelet", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("ba3aae40-fac3-4646-9d97-24aa1ee076eb"), "Plasma", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("ba76c82d-acb2-4187-9709-b5435aaa374f"), "RBC", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("bb1a4aff-bbc4-4268-a01a-654f51cfa578"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("bd74419c-022f-4f8f-aa53-c97f3197586c"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("c1255df7-0cc5-40c3-84e9-516f3cfbec90"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("c2564c72-2bb6-4266-a4ac-0a176857084f"), "RBC", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("c363bcf7-e33b-46eb-abc4-b8fbdeacd619"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("c41b92cb-5d14-460c-91c3-3276606ff696"), "RBC", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("c72e0725-0548-4601-a737-35d80e1c763c"), "RBC", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7") },
                    { new Guid("ca04d0f6-9bfb-4f2a-ab06-9ce3637fa73e"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("caaa5347-e447-4e8a-96bc-1b18c5b7e5ea"), "Plasma", new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("ce3b99f9-9807-4fd5-93a6-2f93885faf92"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("d434e809-9dd6-412f-80bd-3e7a24fb2f8d"), "Whole", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("d535b44e-0edd-4d82-97a4-f68defc28e4f"), "Platelet", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("d5e94a01-d125-4205-875f-ffb3f11dc441"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845") },
                    { new Guid("d8340d16-1160-4dfe-9311-47646e463b8e"), "Plasma", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79") },
                    { new Guid("dfbc081b-0d5e-4b7a-86cf-fb10f6d622c7"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("e23672b3-c5dd-4797-9a9f-139f37f46acb"), "Plasma", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("e435d4d7-231c-4c16-a2f0-762091983bab"), "Platelet", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1") },
                    { new Guid("e5e2bb4a-f26b-4d1a-a8a0-7aae4f2b3939"), "Platelet", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("e9c62f5c-c268-4b97-864b-04537c925e12"), "RBC", new Guid("0f5f77fb-2bd4-4aeb-9bd4-bb56745c8845"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("eae5c262-b5e8-4d32-9260-596fb2da9883"), "Platelet", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("f2c3b4fd-546c-4176-9d83-1674c7c2969e"), "Platelet", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("f4eff2ad-b0f4-4d01-9c61-b0cac925617a"), "Platelet", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("f517ff58-2a33-4b6e-a111-258966be7d23"), "Plasma", new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("f5b2d626-2546-43c5-99dc-c0187a030779"), "Whole", new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") },
                    { new Guid("f68facb6-684a-4df6-8206-8f033c9686da"), "Whole", new Guid("1479d6c3-0c85-4cb7-a2c4-894c35e21eb1"), new Guid("edc95a1c-0c3f-4a61-a104-f949109e7c0f") },
                    { new Guid("f93f4428-5d94-49b1-bb3c-b6d54252ec7f"), "Whole", new Guid("82f33bfb-7fa4-432e-8735-1c0e5c2f99f7"), new Guid("91baf3d9-759f-4bb8-82a4-3d9d645d91b7") },
                    { new Guid("fc13bbd5-412d-4843-904a-f6477e974b48"), "RBC", new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c"), new Guid("b160fa12-dfa5-44c7-a179-6ef0f3c7c28c") },
                    { new Guid("fc3e8097-d970-473a-a4ff-a7c5254e9fa0"), "Whole", new Guid("62ef305e-755a-4651-9ed7-6fc4b4061e79"), new Guid("2b0f96e4-9052-4d68-a937-9adfc9d231d1") }
                });

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000001"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 18, 17, 48, 58, 714, DateTimeKind.Utc).AddTicks(4940));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000002"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 18, 17, 48, 58, 714, DateTimeKind.Utc).AddTicks(4944));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000003"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 18, 17, 48, 58, 714, DateTimeKind.Utc).AddTicks(4946));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000004"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 18, 17, 48, 58, 714, DateTimeKind.Utc).AddTicks(4948));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000005"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 18, 17, 48, 58, 714, DateTimeKind.Utc).AddTicks(4949));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000006"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 18, 17, 48, 58, 714, DateTimeKind.Utc).AddTicks(4951));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000007"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 18, 17, 48, 58, 714, DateTimeKind.Utc).AddTicks(4952));

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "BloodStored",
                keyColumn: "StoredId",
                keyValue: new Guid("10000000-0000-0000-0000-000000000008"),
                column: "LastUpdated",
                value: new DateTime(2025, 6, 18, 17, 48, 58, 714, DateTimeKind.Utc).AddTicks(4953));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("013824c1-493f-44e3-8b04-e3595caed0ce"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("0179182d-0673-42f3-ad0d-ed217be73571"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("034d07f4-d7ef-4dea-bce8-f2050fab8f07"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("04598147-363c-4c49-b51b-5cf0411d7b11"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("083a4130-e050-4bfa-b3eb-85625b707eaf"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("089b0029-1cf5-4785-9e2b-154d5109625c"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("09da0a52-b4fc-4499-b6f0-9c05ea515dcf"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("0a8407b7-fa68-4e93-a0cf-6207f49bd951"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("0b4b9dd7-df00-4ec2-a6f6-578ddc2915be"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("100baa61-2548-467c-af6f-818ead0289dd"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("11b7c132-a39f-4861-a35f-87edd067f7d8"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("12158803-aa9b-4bde-b86c-c9e26ca4db14"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("14967179-e531-4064-a20c-66b023c9dab8"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("16b47c1f-710e-4175-90aa-0d12564c031a"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("16ff22c0-680b-4300-9a6c-b800556a6c78"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("1c54fa26-b205-451f-9383-399b91976e42"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("22d064fe-c537-4327-aea1-ae4a05936a37"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2bb782a7-9300-4b0e-8c0d-42e015e81fdc"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2d12413e-ca92-400b-8944-8eca001838e8"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("2f763735-4ccf-48b0-9c44-e94713659ce0"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("304e4cc1-2cc3-440c-9206-8bd6f5060015"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("34591a33-d488-445e-b539-95f7b878efa8"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("36ad1010-4fb5-43ad-b6d2-f3a2ce66d406"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("36d94435-5780-42b1-af80-b7618679f205"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("3a0e7275-0c45-4d4c-afd3-29189ec333b1"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("46604cd5-5fc9-4d16-b48f-37cb1288563e"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("467aa6a8-0284-4000-a9bc-cca363f70400"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4af5aea8-1669-4366-b985-baa854ad167a"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4c19eb1f-2cce-49a6-9e6f-7763c52f9518"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("4c6a4069-0f6e-45bc-b643-c28af0afc263"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("59e07d48-28fc-48c5-90eb-aef4a2f911a7"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5a41f5e0-a224-47da-aeb3-c6abb07beb3e"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5d9a2cfc-77ef-49f6-80b6-f2b0b2999343"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5db2a23a-6739-4ef9-bca6-d589dd38bad6"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5dc031f4-0e9d-4dc3-be81-41e410098344"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("5f47fd86-fd81-4099-bcfa-62819b279178"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6124f862-3b93-4217-87f4-5932ce2a490a"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("63baa390-6d64-4c7d-af56-71aa904a05ad"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("64feeb3e-f881-44d5-9b97-9cc22d0f0649"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("666adef4-b238-4149-802d-5f9714b3b479"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("69235865-c797-4a0d-9345-e4bd2dfb6121"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6a075002-ce4e-4659-ae17-fe113f797b1a"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6d5698f5-afa2-422b-b5a1-a6f7fcf38d24"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("6e24daca-40db-4f35-9bce-ded40ce949c2"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7095c278-1415-4bed-8938-bed03f828381"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("740e1c15-5dd8-4113-80af-0ec0154b36a9"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("79d0c841-faaa-471f-84ef-8d8fffb5ca5f"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("7cccc094-95ad-4046-b9f1-3b0ece96509b"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("81489288-f7f3-4330-893b-d204b39d06ee"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("817d1d33-99fc-481a-8160-fb6dfb6f0dd8"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("87cb880a-0115-443a-8398-58e65be2f45f"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("884bcb50-1e61-4a2a-a9fa-711b85037941"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8969c5f3-9c13-4c15-a9c1-281d14e5f81b"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8c1a5e3c-1391-4bde-9d43-6a14c4e6e219"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("8d2102e3-1bf0-4bd1-84cb-f930670bba77"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("90f50c0b-0a1f-49fa-ac8f-2df17ab387f0"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("91e7fbdf-26c4-4788-8c52-8ab73d7c64ec"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("94c7478a-b67d-4d73-9713-3731f137c98c"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("961b0b89-48b3-434b-8a8a-9b59412f3eb9"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("96344bfe-6d3f-400d-b875-1b97f22ea0f2"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("99eb9d60-56cf-46a3-adc2-abbbc910a2ec"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9bdec814-f53c-4c17-a27b-52294fc80e9e"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9c3695e0-6f4f-49c2-aa70-8f65bf2076b3"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9fb510b6-31cb-49ec-907c-a0a8284b2325"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("9ff051fd-4843-402c-ba26-5d509df440d2"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a37f80f2-f0e0-46e6-8c0e-a6d68fc624d9"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a5a215e8-4947-4e42-922a-807a3f58d14e"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a7c2c902-54af-45e4-b7db-e0165f5fb5f0"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a86430b1-da83-4f2b-8d04-4923e6470268"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("a8ef09d0-aaef-4ab7-8b03-40548e62cdae"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("aa9abd16-beba-470f-9ef5-0c3f7be79b6f"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("acab5220-49b8-4634-a5f2-e89c3e812465"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("acd2eb61-e7af-461a-a248-8ed60ba6fd89"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ad9c543a-2c5b-40eb-bb5a-00da90901739"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ae4963be-4c96-4d08-9ac9-559ae6d3726a"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("afc1a2d4-f2bf-4cb0-aef1-f8039fb19829"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b574f464-d5ca-4b0a-aa7d-b49c05ddbfd5"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("b670529d-c8fc-46d9-8a69-6c73bd4020a4"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ba3aae40-fac3-4646-9d97-24aa1ee076eb"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ba76c82d-acb2-4187-9709-b5435aaa374f"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("bb1a4aff-bbc4-4268-a01a-654f51cfa578"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("bd74419c-022f-4f8f-aa53-c97f3197586c"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c1255df7-0cc5-40c3-84e9-516f3cfbec90"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c2564c72-2bb6-4266-a4ac-0a176857084f"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c363bcf7-e33b-46eb-abc4-b8fbdeacd619"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c41b92cb-5d14-460c-91c3-3276606ff696"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("c72e0725-0548-4601-a737-35d80e1c763c"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ca04d0f6-9bfb-4f2a-ab06-9ce3637fa73e"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("caaa5347-e447-4e8a-96bc-1b18c5b7e5ea"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("ce3b99f9-9807-4fd5-93a6-2f93885faf92"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d434e809-9dd6-412f-80bd-3e7a24fb2f8d"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d535b44e-0edd-4d82-97a4-f68defc28e4f"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d5e94a01-d125-4205-875f-ffb3f11dc441"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("d8340d16-1160-4dfe-9311-47646e463b8e"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("dfbc081b-0d5e-4b7a-86cf-fb10f6d622c7"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e23672b3-c5dd-4797-9a9f-139f37f46acb"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e435d4d7-231c-4c16-a2f0-762091983bab"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e5e2bb4a-f26b-4d1a-a8a0-7aae4f2b3939"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("e9c62f5c-c268-4b97-864b-04537c925e12"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("eae5c262-b5e8-4d32-9260-596fb2da9883"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f2c3b4fd-546c-4176-9d83-1674c7c2969e"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f4eff2ad-b0f4-4d01-9c61-b0cac925617a"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f517ff58-2a33-4b6e-a111-258966be7d23"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f5b2d626-2546-43c5-99dc-c0187a030779"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f68facb6-684a-4df6-8206-8f033c9686da"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("f93f4428-5d94-49b1-bb3c-b6d54252ec7f"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("fc13bbd5-412d-4843-904a-f6477e974b48"));

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "BloodCompatibility",
                keyColumn: "Id",
                keyValue: new Guid("fc3e8097-d970-473a-a4ff-a7c5254e9fa0"));

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
    }
}
