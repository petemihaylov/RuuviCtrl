using Microsoft.EntityFrameworkCore.Migrations;

namespace RuuviCTRL.Infrastructure.Migrations
{
    public partial class addmanytomanyslaassets : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SlaAgreements_Assets_AssetId",
                table: "SlaAgreements");

            migrationBuilder.DropIndex(
                name: "IX_SlaAgreements_AssetId",
                table: "SlaAgreements");

            migrationBuilder.DropColumn(
                name: "AssetId",
                table: "SlaAgreements");

            migrationBuilder.CreateTable(
                name: "AssetSLAAgreement",
                columns: table => new
                {
                    AssetId = table.Column<int>(nullable: false),
                    SlaAgreementId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AssetSLAAgreement", x => new { x.AssetId, x.SlaAgreementId });
                    table.ForeignKey(
                        name: "FK_AssetSLAAgreement_Assets_AssetId",
                        column: x => x.AssetId,
                        principalTable: "Assets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AssetSLAAgreement_SlaAgreements_SlaAgreementId",
                        column: x => x.SlaAgreementId,
                        principalTable: "SlaAgreements",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AssetSLAAgreement_SlaAgreementId",
                table: "AssetSLAAgreement",
                column: "SlaAgreementId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AssetSLAAgreement");

            migrationBuilder.AddColumn<int>(
                name: "AssetId",
                table: "SlaAgreements",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_SlaAgreements_AssetId",
                table: "SlaAgreements",
                column: "AssetId");

            migrationBuilder.AddForeignKey(
                name: "FK_SlaAgreements_Assets_AssetId",
                table: "SlaAgreements",
                column: "AssetId",
                principalTable: "Assets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
