using Microsoft.EntityFrameworkCore.Migrations;

namespace RuuviCTRL.Infrastructure.Migrations
{
    public partial class addslaTitle : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "SlaAgreements",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SlaTitle",
                table: "Breaches",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Title",
                table: "SlaAgreements");

            migrationBuilder.DropColumn(
                name: "SlaTitle",
                table: "Breaches");
        }
    }
}
