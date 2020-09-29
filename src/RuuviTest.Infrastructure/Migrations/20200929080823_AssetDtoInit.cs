using Microsoft.EntityFrameworkCore.Migrations;

namespace RuuviTest.Infrastructure.Migrations
{
    public partial class AssetDtoInit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Assets",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DeviceId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Temperature = table.Column<float>(nullable: false),
                    Humidity = table.Column<float>(nullable: false),
                    Pressure = table.Column<float>(nullable: false),
                    BatteryLevel = table.Column<float>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Assets", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Assets");
        }
    }
}
