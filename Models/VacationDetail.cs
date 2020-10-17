using System;

namespace ReasonableWonderlust.Models
{
    public class VacationDetail
    {
        public int Id { get; set; }
        public DateTime BeginDate { get; set; }
        public DateTime EndDate { get; set; }
        public double OverallBudget { get; set; }
        public double ActivitiesBudget { get; set; }
        public double MealBudget { get; set; }
        public double TravelBudget { get; set; }
        public double AccommodationsBudget { get; set; }
        public string TravelMethod { get; set; }
        public string AccommodationsMethod { get; set; }
        public string NotesNewVacation { get; set; }
        public int VacationId { get; set; }
    }
}
