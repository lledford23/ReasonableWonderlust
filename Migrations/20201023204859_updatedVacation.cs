using Microsoft.EntityFrameworkCore.Migrations;

namespace ReasonableWonderlust.Migrations
{
    public partial class updatedVacation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Destination",
                table: "Vacations",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "TravelParty",
                table: "Vacations",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Destination",
                table: "Vacations");

            migrationBuilder.DropColumn(
                name: "TravelParty",
                table: "Vacations");
        }
    }
}
