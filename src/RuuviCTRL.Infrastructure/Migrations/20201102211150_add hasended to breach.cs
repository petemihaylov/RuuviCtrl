using Microsoft.EntityFrameworkCore.Migrations;

namespace RuuviCTRL.Infrastructure.Migrations
{
    public partial class addhasendedtobreach : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "HasEnded",
                table: "Breaches",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HasEnded",
                table: "Breaches");
        }
    }
}
