import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import format from 'date-fns/format'
import { getUser, authHeader, isLoggedIn } from '../auth'
import { NavBar } from '../components/NavBar'
import { formatDate } from '../dates'

export function ShowVacation() {
  const history = useHistory()
  const user = getUser()

  const { id } = useParams()

  const [vacation, setVacation] = useState({
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
  })

  useEffect(() => {
    const fetchVacation = async () => {
      const response = await fetch(`/api/vacations/${id}`)
      const apiData = await response.json()

      setVacation(apiData)
    }

    fetchVacation()
  }, [id])

  const dateFormat = `EEEE, MMMM do, yyyy`

  async function handleDelete(event) {
    event.preventDefault()

    const response = await fetch(`/api/vacations/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json', ...authHeader() },
    })

    if (response.status === 200 || response.status === 204) {
      history.push('/LandingPage')
    }
  }
  return (
    <>
      <NavBar />
      <Link to="/vacations">
        <button type="button" className="btn btn-info">
          Back to Past Vacations
        </button>
      </Link>
      <header>Show Vacation</header>
      <h2>
        {formatDate(vacation.beginDate)} to {formatDate(vacation.endDate)}
      </h2>

      <button type="button" className="btn btn-info" onClick={handleDelete}>
        Delete
      </button>
      <p>
        <li>You have budgeted: {vacation.overallBudget}</li>
        <li>Your activities budget: {vacation.activitiesBudget}</li>
        <li>Your meal budget: {vacation.mealBudget}</li>
        <li>Your travel budget: {vacation.travelBudget}</li>
        <li>Your accommodations budget: {vacation.accommodationsBudget}</li>
      </p>
    </>
  )
}
