using Microsoft.EntityFrameworkCore.Migrations;

namespace RuuviCTRL.Infrastructure.Migrations
{
    public partial class Addboolsforactivation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "HasHumidityBoundry",
                table: "SlaAgreements",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "HasLocationBoundry",
                table: "SlaAgreements",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "HasPressureBoundry",
                table: "SlaAgreements",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "HasTempratureBoundry",
                table: "SlaAgreements",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "HasHumidityBoundry",
                table: "Breaches",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "HasLocationBoundry",
                table: "Breaches",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "HasPressureBoundry",
                table: "Breaches",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "HasTempratureBoundry",
                table: "Breaches",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HasHumidityBoundry",
                table: "SlaAgreements");

            migrationBuilder.DropColumn(
                name: "HasLocationBoundry",
                table: "SlaAgreements");

            migrationBuilder.DropColumn(
                name: "HasPressureBoundry",
                table: "SlaAgreements");

            migrationBuilder.DropColumn(
                name: "HasTempratureBoundry",
                table: "SlaAgreements");

            migrationBuilder.DropColumn(
                name: "HasHumidityBoundry",
                table: "Breaches");

            migrationBuilder.DropColumn(
                name: "HasLocationBoundry",
                table: "Breaches");

            migrationBuilder.DropColumn(
                name: "HasPressureBoundry",
                table: "Breaches");

            migrationBuilder.DropColumn(
                name: "HasTempratureBoundry",
                table: "Breaches");
        }
    }
}
