using System;
using System.Collections.Generic;

namespace ReasonableWonderlust.Models
{
    public class Vacation
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Destination { get; set; }
        public DateTime BeginDate { get; set; }
        public DateTime EndDate { get; set; }
        public double OverallBudget { get; set; }
        public double ActivitiesBudget { get; set; }
        public double MealBudget { get; set; }
        public double TravelBudget { get; set; }
        public double AccommodationsBudget { get; set; }
        public int TravelParty { get; set; }
        public string TravelMethod { get; set; }
        public string AccommodationsMethod { get; set; }
        public string NotesNewVacation { get; set; }

        // A Vacation has many to dos
        public List<ToDoList> ToDoLists { get; set; }
    }
}