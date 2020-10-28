using System;

namespace reasonablewonderlust.Models
{
    public class ToDoList
    {
        public int Id { get; set; }
        public string ListItem { get; set; }
        public DateTime CreatedAt { get; set; }
        public int VacationId { get; set; }
    }
}