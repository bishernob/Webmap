﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Webmap.Database;

#nullable disable

namespace Webmap.Migrations
{
    [DbContext(typeof(GvtlocationContext))]
    partial class GvtlocationContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.12");

            modelBuilder.Entity("Webmap.Database.Locations", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<double>("LAT")
                        .HasColumnType("REAL");

                    b.Property<double>("LNG")
                        .HasColumnType("REAL");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Notes")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("ID");

                    b.ToTable("Locations");

                    b.HasData(
                        new
                        {
                            ID = 1,
                            LAT = 40.712800000000001,
                            LNG = -74.006,
                            Name = "Location 1",
                            Notes = "Sample Note 1"
                        },
                        new
                        {
                            ID = 2,
                            LAT = 34.052199999999999,
                            LNG = -118.2437,
                            Name = "Location 2",
                            Notes = "Sample Note 2"
                        },
                        new
                        {
                            ID = 3,
                            LAT = 51.507399999999997,
                            LNG = -0.1278,
                            Name = "Location 3",
                            Notes = "Sample Note 3"
                        },
                        new
                        {
                            ID = 4,
                            LAT = 35.689500000000002,
                            LNG = 139.6917,
                            Name = "Location 4",
                            Notes = "Sample Note 4"
                        },
                        new
                        {
                            ID = 5,
                            LAT = 41.878100000000003,
                            LNG = -87.629800000000003,
                            Name = "Location 5",
                            Notes = "Sample Note 5"
                        },
                        new
                        {
                            ID = 6,
                            LAT = 37.774900000000002,
                            LNG = -122.4194,
                            Name = "Location 6",
                            Notes = "Sample Note 6"
                        },
                        new
                        {
                            ID = 7,
                            LAT = 19.076000000000001,
                            LNG = 72.877700000000004,
                            Name = "Location 7",
                            Notes = "Sample Note 7"
                        },
                        new
                        {
                            ID = 8,
                            LAT = -33.8688,
                            LNG = 151.20930000000001,
                            Name = "Location 8",
                            Notes = "Sample Note 8"
                        },
                        new
                        {
                            ID = 9,
                            LAT = 55.755800000000001,
                            LNG = 37.617600000000003,
                            Name = "Location 9",
                            Notes = "Sample Note 9"
                        },
                        new
                        {
                            ID = 10,
                            LAT = 40.416800000000002,
                            LNG = -3.7038000000000002,
                            Name = "Location 10",
                            Notes = "Sample Note 10"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}