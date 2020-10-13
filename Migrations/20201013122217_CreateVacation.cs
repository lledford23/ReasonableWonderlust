using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace ReasonableWonderlust.Migrations
{
    public partial class CreateVacation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Vacations",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UserName = table.Column<string>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    BeginDate = table.Column<DateTime>(nullable: false),
                    EndDate = table.Column<DateTime>(nullable: false),
                    OverallBudget = table.Column<double>(nullable: false),
                    ActivitiesBudget = table.Column<double>(nullable: false),
                    MealBudget = table.Column<double>(nullable: false),
                    TravelBudget = table.Column<double>(nullable: false),
                    AccommodationsBudget = table.Column<double>(nullable: false),
                    TravelMethod = table.Column<string>(nullable: true),
                    AccommodationsMethod = table.Column<string>(nullable: true),
                    NotesNewVacation = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vacations", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Vacations");
        }
    }
}
