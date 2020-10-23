import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { NavBar } from '../components/NavBar'

export function AddNewVacation() {
  const history = useHistory()

  const [newVacation, setNewVacation] = useState({
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

    const updatedVacation = { ...newVacation, [fieldName]: value }

    setNewVacation(updatedVacation)
  }

  function handleIntChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedVacation = {
      ...newVacation,
      [fieldName]: parseInt(value),
    }

    setNewVacation(updatedVacation)

    console.log(event.target.value)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Vacations', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newVacation),
    })

    const json = await response.json()

    // history.push('/')
  }

  return (
    <>
      <NavBar />
      <section className="add-new-vacation-form">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="place">Place you are traveling to?</label>
            <input
              name="destination"
              value={newVacation.destination}
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
              value={newVacation.beginDate}
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
              value={newVacation.endDate}
              onChange={handleStringFieldChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="overallBudget">Budget for overall vacation?</label>
            <input
              type="number"
              name="overallBudget"
              value={newVacation.overallBudget}
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
              value={newVacation.travelBudget}
              onChange={handleIntChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="travelParty">How many people in your party?</label>
            <input
              type="number"
              name="travelParty"
              value={newVacation.travelParty}
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
              value={newVacation.accommodationsBudget}
              onChange={handleIntChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mealBudget">Budget for Meals</label>
            <input
              type="number"
              name="mealBudget"
              value={newVacation.mealBudget}
              onChange={handleIntChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="activitiesBudget">Budget for Activities</label>
            <input
              type="number"
              name="activitiesBudget"
              value={newVacation.activitiesBudget}
              onChange={handleIntChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="notesNewVacation">Notes</label>
            <textarea
              className="form-control"
              name="notesNewVacation"
              value={newVacation.notesNewVacation}
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
      </section>
    </>
  )
}
