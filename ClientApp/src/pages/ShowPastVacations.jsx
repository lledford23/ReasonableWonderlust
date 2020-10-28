import React, { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { isLoggedIn, authHeader, getUser } from '../auth'
import { formatDate } from '../dates'

export function ShowPastVacations() {
  const history = useHistory()
  const user = getUser()

  const { id } = useParams()

  const [vacations, setVacations] = useState([
    {
      id: 0,
      userId: user.id,
      beginDate: '',
      endDate: '',
      activitiesBudget: 0,
      mealBudget: 0,
      travelBudget: 0,
      accommodationsBudget: 0,
      travelMethod: '',
      accommodationsMethod: '',
      notesNewVacation: '',
    },
  ])

  console.log(vacations)

  useEffect(function () {
    async function loadVacations() {
      const response = await fetch(`/api/Vacations/user/${user.id}`)
      const json = await response.json()
      setVacations(json)
    }
    loadVacations()
  }, [])

  async function handleDelete(event) {
    event.preventDefault()

    const response = await fetch(`/api/vacations/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json', ...authHeader() },
    })

    if (response.status === 200 || response.status === 204) {
      history.push('/LandingPage/vacations')
    }
  }

  return (
    <>
      <NavBar />
      <header>Vacations</header>

      {vacations.map((vacation) => (
        <div key={vacation.id}>
          <h2>
            <Link to={`/vacations/${vacation.id}`}>
              {formatDate(vacation.beginDate)}
            </Link>
          </h2>
          {isLoggedIn() && vacation.userId === user.id && (
            <button onClick={handleDelete}>Delete</button>
          )}

          <p>
            <li>
              Your vacation is set for dates: {formatDate(vacation.beginDate)}{' '}
              to {formatDate(vacation.endDate)}
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
