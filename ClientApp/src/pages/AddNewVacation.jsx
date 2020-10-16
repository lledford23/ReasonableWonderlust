import React from 'react'
import { NavBar } from '../components/NavBar'

export function AddNewVacation() {
  return (
    <>
      <NavBar />
      <section className="add-new-vacation-form">
        <form>
          <div className="form-group">
            <label htmlFor="place">Place you are traveling to?</label>
            <input type="text" className="form-control" id="place" />
          </div>
          <div className="form-group">
            <label htmlFor="beginDate">
              What is the start date of your vacation?
            </label>
            <input type="date" className="form-control" id="beginDate" />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">
              What is the end date of your vacation?
            </label>
            <input type="date" className="form-control" id="endDate" />
          </div>
          <div className="form-group">
            <label htmlFor="budgetForOverall">
              Budget for overall vacation?
            </label>
            <input type="int" className="form-control" id="budgetForOverall" />
          </div>

          <div className="form-group">
            <label htmlFor="travelMethod">What's your travel method?</label>
            <select className="travelMethod" id="travelMethod">
              <option value="Plane">Plane</option>
              <option value="Car">Car</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="budgetForTravel">Budget for your travel?</label>
            <input type="int" className="form-control" id="budgetForTravel" />
          </div>

          <div className="form-group">
            <label htmlFor="travelParty">How many people in your party?</label>
            <input type="int" className="form-control" id="travelParty" />
          </div>

          <div className="form-group">
            <label htmlFor="accommodationsMethod">Where are you staying?</label>
            <select name="accommodationsMethod" id="accommodationsMethod">
              <option value="Hotel">Hotel</option>
              <option value="Condo Rental">Condo Rental</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="budgetForAccommodations">
              Budget for Accommodations
            </label>
            <input
              type="int"
              className="form-control"
              id="budgetForAccommodations"
            />
          </div>

          <div className="form-group">
            <label htmlFor="budgetForActivities">Budget for Activities</label>
            <input
              type="int"
              className="form-control"
              id="budgetForActivities"
            />
          </div>

          <div className="form-group">
            <label htmlFor="notesNewVacation">Notes</label>
            <textarea className="form-control" id="notesNewVacation" />
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
