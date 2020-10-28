using Microsoft.EntityFrameworkCore.Migrations;

namespace ReasonableWonderlust.Migrations
{
    public partial class AddUserIdToVacationAndVacationDetail : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "VacationDetails",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_ToDoLists_VacationId",
                table: "ToDoLists",
                column: "VacationId");

            migrationBuilder.AddForeignKey(
                name: "FK_ToDoLists_Vacations_VacationId",
                table: "ToDoLists",
                column: "VacationId",
                principalTable: "Vacations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ToDoLists_Vacations_VacationId",
                table: "ToDoLists");

            migrationBuilder.DropIndex(
                name: "IX_ToDoLists_VacationId",
                table: "ToDoLists");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "VacationDetails");
        }
    }
}
