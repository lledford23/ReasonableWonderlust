﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using ReasonableWonderlust.Models;

namespace ReasonableWonderlust.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    partial class DatabaseContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn)
                .HasAnnotation("ProductVersion", "3.1.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("ReasonableWonderlust.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("HashedPassword")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.ToTable("Users");
                });

            modelBuilder.Entity("ReasonableWonderlust.Models.Vacation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<double>("AccommodationsBudget")
                        .HasColumnType("double precision");

                    b.Property<string>("AccommodationsMethod")
                        .HasColumnType("text");

                    b.Property<double>("ActivitiesBudget")
                        .HasColumnType("double precision");

                    b.Property<DateTime>("BeginDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("Destination")
                        .HasColumnType("text");

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<double>("MealBudget")
                        .HasColumnType("double precision");

                    b.Property<string>("NotesNewVacation")
                        .HasColumnType("text");

                    b.Property<double>("OverallBudget")
                        .HasColumnType("double precision");

                    b.Property<double>("TravelBudget")
                        .HasColumnType("double precision");

                    b.Property<string>("TravelMethod")
                        .HasColumnType("text");

                    b.Property<int>("TravelParty")
                        .HasColumnType("integer");

                    b.Property<int>("UserId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.ToTable("Vacations");
                });

            modelBuilder.Entity("ReasonableWonderlust.Models.VacationDetail", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<double>("AccommodationsBudget")
                        .HasColumnType("double precision");

                    b.Property<string>("AccommodationsMethod")
                        .HasColumnType("text");

                    b.Property<double>("ActivitiesBudget")
                        .HasColumnType("double precision");

                    b.Property<DateTime>("BeginDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<double>("MealBudget")
                        .HasColumnType("double precision");

                    b.Property<string>("NotesNewVacation")
                        .HasColumnType("text");

                    b.Property<double>("OverallBudget")
                        .HasColumnType("double precision");

                    b.Property<double>("TravelBudget")
                        .HasColumnType("double precision");

                    b.Property<string>("TravelMethod")
                        .HasColumnType("text");

                    b.Property<int>("VacationId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.ToTable("VacationDetails");
                });
#pragma warning restore 612, 618
        }
    }
}
