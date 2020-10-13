import React from 'react'

export function AddNewVacation() {
  return (
    <div className="card">
      <div className="card-header">Add a New Vacation</div>

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
          <label htmlFor="budgetForOverall">Budget for overall vacation?</label>
          <input type="int" className="form-control" id="budgetForOverall" />
        </div>

        {/* I need to find out how to make this a clickable dropdown */}
        <div className="dropdown">
          <button className="dropdown">How do you plan to travel?</button>
          <div className="dropdown-content">
            <li>Plane</li>
            <li>Car</li>
          </div>

          <div className="form-group">
            <label htmlFor="budgetForTravel">Budget for your travel?</label>
            <input type="int" className="form-control" id="budgetForTravel" />
          </div>

          <div className="form-group">
            <label htmlFor="travelParty">How many people in your party?</label>
            <input type="int" className="form-control" id="travelParty" />
          </div>

          {/* I need to find out how to make this a clickable dropdown */}
          <div className="dropdown">
            <button className="dropdown">Where do you plan to stay?</button>
            <div className="dropdown-content">
              <li>Hotel</li>
              <li>Rent Condo</li>
              <li>Other</li>
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
              <textarea
                // @ts-ignore
                type="text"
                className="form-control"
                id="notesNewVacation"
              />
              <small id="descriptionHelp" className="form-text text-muted">
                Special notes for yourself when looking back at this vacation!
              </small>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
