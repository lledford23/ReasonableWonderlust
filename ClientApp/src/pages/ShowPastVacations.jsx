import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { NavBar } from '../components/NavBar'

export function ShowPastVacations() {
  const { id } = useParams()

  const [vacations, setVacations] = useState([
    {
      id: 0,
      userName: '',
      firstName: '',
      lastName: '',
      beginDate: '',
      endDate: '',
      overallBudget: 0,
      activitiesBudget: 0,
      mealBudget: 0,
      travelBudget: 0,
      accommodationsBudget: 0,
      travelMethod: '',
      accommodationsMethod: '',
      notesNewVacation: '',
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
      <NavBar />
      <header>Past Vacations</header>

      {vacations.map((vacation) => (
        <div key={vacation.id}>
          <h2>
            <Link to={`/vacations/${vacation.id}`}>{vacation.beginDate}</Link>
          </h2>
          <p>
            <li>
              Your vacation is set for dates: {vacation.beginDate} to{' '}
              {vacation.endDate}
            </li>
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
