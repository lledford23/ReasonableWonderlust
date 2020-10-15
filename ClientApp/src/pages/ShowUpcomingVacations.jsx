import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export function ShowUpcomingVacations() {
  const { id } = useParams()

  const [vacations, setVacations] = useState([
    {
      id: 0,
      userName: 'string',
      firstName: 'string',
      lastName: 'string',
      beginDate: '2020-10-15T14:23:58.834Z',
      endDate: '2020-10-15T14:23:58.834Z',
      overallBudget: 0,
      activitiesBudget: 0,
      mealBudget: 0,
      travelBudget: 0,
      accommodationsBudget: 0,
      travelMethod: 'string',
      accommodationsMethod: 'string',
      notesNewVacation: 'string',
    },
  ])

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
