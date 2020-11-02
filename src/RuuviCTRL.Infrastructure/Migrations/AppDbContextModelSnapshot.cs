﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using RuuviCTRL.Infrastructure.Data.EntityFramework;

namespace RuuviCTRL.Infrastructure.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("RuuviCTRL.Core.Entities.Asset", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("DeviceId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Assets");
                });

            modelBuilder.Entity("RuuviCTRL.Core.Entities.Breach", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AssetId")
                        .HasColumnType("int");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<float>("Humidity")
                        .HasColumnType("real");

                    b.Property<float>("HumidityCount")
                        .HasColumnType("real");

                    b.Property<long>("HumidityTime")
                        .HasColumnType("bigint");

                    b.Property<float>("Latitude")
                        .HasColumnType("real");

                    b.Property<string>("LocationBoundary")
                        .HasColumnType("nvarchar(max)");

                    b.Property<float>("LocationCount")
                        .HasColumnType("real");

                    b.Property<long>("LocationTime")
                        .HasColumnType("bigint");

                    b.Property<float>("Longitude")
                        .HasColumnType("real");

                    b.Property<float>("MaxHumidity")
                        .HasColumnType("real");

                    b.Property<float>("MaxPressure")
                        .HasColumnType("real");

                    b.Property<float>("MaxTemprature")
                        .HasColumnType("real");

                    b.Property<float>("MinHumidity")
                        .HasColumnType("real");

                    b.Property<float>("MinPressure")
                        .HasColumnType("real");

                    b.Property<float>("MinTemprature")
                        .HasColumnType("real");

                    b.Property<float>("Pressure")
                        .HasColumnType("real");

                    b.Property<float>("PressureCount")
                        .HasColumnType("real");

                    b.Property<long>("PressureTime")
                        .HasColumnType("bigint");

                    b.Property<int>("SlaAgreementId")
                        .HasColumnType("int");

                    b.Property<float>("Temperature")
                        .HasColumnType("real");

                    b.Property<float>("TempratureCount")
                        .HasColumnType("real");

                    b.Property<long>("TempratureTime")
                        .HasColumnType("bigint");

                    b.Property<int>("Type")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("AssetId");

                    b.ToTable("Breaches");
                });

            modelBuilder.Entity("RuuviCTRL.Core.Entities.SLAAgreement", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AssetId")
                        .HasColumnType("int");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<float>("HumidityCount")
                        .HasColumnType("real");

                    b.Property<long>("HumidityTime")
                        .HasColumnType("bigint");

                    b.Property<string>("LocationBoundary")
                        .HasColumnType("nvarchar(max)");

                    b.Property<float>("LocationCount")
                        .HasColumnType("real");

                    b.Property<long>("LocationTime")
                        .HasColumnType("bigint");

                    b.Property<float>("MaxHumidity")
                        .HasColumnType("real");

                    b.Property<float>("MaxPressure")
                        .HasColumnType("real");

                    b.Property<float>("MaxTemprature")
                        .HasColumnType("real");

                    b.Property<float>("MinHumidity")
                        .HasColumnType("real");

                    b.Property<float>("MinPressure")
                        .HasColumnType("real");

                    b.Property<float>("MinTemprature")
                        .HasColumnType("real");

                    b.Property<float>("PressureCount")
                        .HasColumnType("real");

                    b.Property<long>("PressureTime")
                        .HasColumnType("bigint");

                    b.Property<float>("TempratureCount")
                        .HasColumnType("real");

                    b.Property<long>("TempratureTime")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("AssetId");

                    b.ToTable("SlaAgreements");
                });

            modelBuilder.Entity("RuuviCTRL.Core.Entities.Breach", b =>
                {
                    b.HasOne("RuuviCTRL.Core.Entities.Asset", null)
                        .WithMany("Breaches")
                        .HasForeignKey("AssetId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("RuuviCTRL.Core.Entities.SLAAgreement", b =>
                {
                    b.HasOne("RuuviCTRL.Core.Entities.Asset", null)
                        .WithMany("SlaAgreements")
                        .HasForeignKey("AssetId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
