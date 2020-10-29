import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

import { NavBar } from '../components/NavBar'
import { getUser } from '../auth'

export function EditVacation() {
  const { id } = useParams()

  const history = useHistory()

  const [errorMessage, setErrorMessage] = useState()

  const [vacation, setUpdateVacation] = useState({
    id: 0,
    userName: '',
    firstName: '',
    lastName: '',
    destination: '',
    beginDate: '',
    endDate: '',
    overallBudget: 0 || null,
    activitiesBudget: 0 || null,
    mealBudget: 0 || null,
    travelBudget: 0 || null,
    accommodationsBudget: 0 || null,
    travelMethod: 'Plane',
    travelParty: 0 || null,
    accommodationsMethod: '',
    notesNewVacation: '',
  })

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedVacation = { ...vacation, [fieldName]: value }

    setUpdateVacation(updatedVacation)
  }

  function handleIntChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedVacation = {
      ...vacation,
      [fieldName]: parseInt(value),
    }

    setUpdateVacation(updatedVacation)

    console.log(event.target.value)
  }

  useEffect(() => {
    fetchVacation()
  }, [id])

  const fetchVacation = async () => {
    const response = await fetch(`/api/Vacations/${id}`)
    const apiData = await response.json()

    setUpdateVacation(apiData)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch(`/api/Vacations/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(vacation),
    })

    if (response.status === 401) {
      setErrorMessage('Not Authorized')
    } else {
      if (response.status === 400) {
        const json = await response.json()

        setErrorMessage(Object.values(json.errors).join(''))
      } else {
        history.push('/vacations')
      }
    }
  }

  if (!vacation.id) {
    return <></>
  }

  return (
    <>
      <NavBar />
      <div className="edit-vacation">
        <form onSubmit={handleFormSubmit}>
          <h1>Edit Your Vacation</h1>
          <div className="form-group">
            <label htmlFor="place">Place you are traveling to?</label>
            <input
              name="destination"
              value={vacation.destination}
              onChange={handleStringFieldChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="beginDate">
              What is the start date of your vacation?
            </label>
            <input
              type="date"
              name="beginDate"
              value={vacation.beginDate}
              onChange={handleStringFieldChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">
              What is the end date of your vacation?
            </label>
            <input
              type="date"
              name="endDate"
              value={vacation.endDate}
              onChange={handleStringFieldChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="overallBudget">Budget for overall vacation?</label>
            <input
              type="number"
              name="overallBudget"
              value={vacation.overallBudget}
              onChange={handleIntChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="travelMethod">What's your travel method?</label>
            <select
              name="travelMethod"
              onChange={handleStringFieldChange}
              required
            >
              <option value="Plane">Plane</option>
              <option value="Car">Car</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="travelBudget">Budget for your travel?</label>
            <input
              type="number"
              name="travelBudget"
              value={vacation.travelBudget}
              onChange={handleIntChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="travelParty">How many people in your party?</label>
            <input
              type="number"
              name="travelParty"
              value={vacation.travelParty}
              onChange={handleIntChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="accommodationsMethod">Where are you staying?</label>
            <select
              name="accommodationsMethod"
              onChange={handleStringFieldChange}
              required
            >
              <option value="Hotel">Hotel</option>
              <option value="Condo Rental">Condo Rental</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="accommodationsBudget">
              Budget for Accommodations
            </label>
            <input
              type="number"
              name="accommodationsBudget"
              value={vacation.accommodationsBudget}
              onChange={handleIntChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mealBudget">Budget for Meals</label>
            <input
              type="number"
              name="mealBudget"
              value={vacation.mealBudget}
              onChange={handleIntChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="activitiesBudget">Budget for Activities</label>
            <input
              type="number"
              name="activitiesBudget"
              value={vacation.activitiesBudget}
              onChange={handleIntChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="notesNewVacation">Notes</label>
            <textarea
              className="form-control"
              name="notesNewVacation"
              value={vacation.notesNewVacation}
              onChange={handleStringFieldChange}
            />

            <small id="descriptionHelp" className="form-text text-muted">
              Special notes for yourself when looking back at this vacation!
            </small>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}
