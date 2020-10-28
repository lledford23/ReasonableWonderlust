using System;

namespace ReasonableWonderlust.Models
{
    public class ToDoList
    {
        public int Id { get; set; }
        public string ListItem { get; set; }
        public DateTime CreatedAt { get; set; }
        public int VacationId { get; set; }
        public Vacation Vacation { get; set; }
    }
}