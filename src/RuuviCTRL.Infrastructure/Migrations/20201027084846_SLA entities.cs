using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace RuuviCTRL.Infrastructure.Migrations
{
    public partial class SLAentities : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Breaches",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Humidity = table.Column<float>(nullable: false),
                    Pressure = table.Column<float>(nullable: false),
                    Temperature = table.Column<float>(nullable: false),
                    Latitude = table.Column<float>(nullable: false),
                    Longitude = table.Column<float>(nullable: false),
                    MaxTemprature = table.Column<float>(nullable: false),
                    MinTemprature = table.Column<float>(nullable: false),
                    TempratureCount = table.Column<float>(nullable: false),
                    TempratureTime = table.Column<long>(type: "bigint", nullable: false),
                    MaxHumidity = table.Column<float>(nullable: false),
                    MinHumidity = table.Column<float>(nullable: false),
                    HumidityCount = table.Column<float>(nullable: false),
                    HumidityTime = table.Column<long>(type: "bigint", nullable: false),
                    MinPressure = table.Column<float>(nullable: false),
                    MaxPressure = table.Column<float>(nullable: false),
                    PressureCount = table.Column<float>(nullable: false),
                    PressureTime = table.Column<long>(type: "bigint", nullable: false),
                    LocationBoundary = table.Column<string>(nullable: true),
                    LocationCount = table.Column<float>(nullable: false),
                    LocationTime = table.Column<long>(type: "bigint", nullable: false),
                    AssetId = table.Column<int>(nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Breaches", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Breaches_Assets_AssetId",
                        column: x => x.AssetId,
                        principalTable: "Assets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SlaAgreements",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MaxTemprature = table.Column<float>(nullable: false),
                    MinTemprature = table.Column<float>(nullable: false),
                    TempratureCount = table.Column<float>(nullable: false),
                    TempratureTime = table.Column<long>(type: "bigint", nullable: false),
                    MaxHumidity = table.Column<float>(nullable: false),
                    MinHumidity = table.Column<float>(nullable: false),
                    HumidityCount = table.Column<float>(nullable: false),
                    HumidityTime = table.Column<long>(type: "bigint", nullable: false),
                    MinPressure = table.Column<float>(nullable: false),
                    MaxPressure = table.Column<float>(nullable: false),
                    PressureCount = table.Column<float>(nullable: false),
                    PressureTime = table.Column<long>(type: "bigint", nullable: false),
                    LocationBoundary = table.Column<string>(nullable: true),
                    LocationCount = table.Column<float>(nullable: false),
                    LocationTime = table.Column<long>(type: "bigint", nullable: false),
                    AssetId = table.Column<int>(nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SlaAgreements", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SlaAgreements_Assets_AssetId",
                        column: x => x.AssetId,
                        principalTable: "Assets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Breaches_AssetId",
                table: "Breaches",
                column: "AssetId");

            migrationBuilder.CreateIndex(
                name: "IX_SlaAgreements_AssetId",
                table: "SlaAgreements",
                column: "AssetId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Breaches");

            migrationBuilder.DropTable(
                name: "SlaAgreements");
        }
    }
}
