using Microsoft.EntityFrameworkCore.Migrations;

namespace RuuviCTRL.Infrastructure.Migrations
{
    public partial class addlocationtobreaches : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "HasLocationBreach",
                table: "Breaches",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HasLocationBreach",
                table: "Breaches");
        }
    }
}
