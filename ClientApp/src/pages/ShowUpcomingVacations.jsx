import React, { useState, useEffect } from 'react'

export function ShowUpcomingVacations() {
  const [vacations, setVacations] = useState([])

  useEffect(function () {
    async function loadVacations() {
      const response = await fetch('/api/vacations')
      const json = await response.json()

      setVacations(json)
    }
    loadVacations()
  }, [])

  return (
    <>
      <header>Upcoming Vacations</header>

      {vacations.map((vacation) => (
        <div key={vacation.id}>
          <h2>
            {vacation.beginDate} to {vacation.endDate}
          </h2>
          <p>
            <li>You have budgeted: {vacation.overallBudget}</li>
            <li>Your activities budget: {vacation.activitiesBudget}</li>
            <li>Your meal budget: {vacation.mealBudget}</li>
            <li>Your travel budget: {vacation.travelBudget}</li>
            <li>Your accommodations budget: {vacation.accommodationsBudget}</li>
          </p>
        </div>
      ))}
    </>
  )
}
