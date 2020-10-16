import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export function ShowVacation() {
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

  return (
    <>
      <header>Show Vacation</header>
      <h2>
        <Link to={`/vacations/${vacation.id}`}>
          {vacation.beginDate} to {vacation.endDate}
        </Link>
      </h2>
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
