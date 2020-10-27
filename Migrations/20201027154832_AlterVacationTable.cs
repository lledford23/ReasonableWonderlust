using Microsoft.EntityFrameworkCore.Migrations;

namespace ReasonableWonderlust.Migrations
{
    public partial class AlterVacationTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "Vacations");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "Vacations");

            migrationBuilder.DropColumn(
                name: "UserName",
                table: "Vacations");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Vacations",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Vacations");

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "Vacations",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "Vacations",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "Vacations",
                type: "text",
                nullable: true);
        }
    }
}
