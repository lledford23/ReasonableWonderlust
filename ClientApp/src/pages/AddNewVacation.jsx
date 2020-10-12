import React from 'react'

export function AddNewVacation() {
  return (
    <div className="card">
      <div className="card-header">Add a New Vacation</div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="name">Place you are traveling to?</label>
            <input type="text" className="form-control" id="name" />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description of Vacation</label>
            <textarea
              // @ts-ignore
              type="text"
              className="form-control"
              id="description"
            />
            <small id="descriptionHelp" className="form-text text-muted">
              Enter a brief description of the vacation like dates and number of
              people going.
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="budget">Budget for Vacation</label>
            <textarea
              // @ts-ignore
              type="text"
              className="form-control"
              id="budget"
            />
          </div>

          <div className="form-group">
            <label htmlFor="telephone">Telephone</label>
            <input type="text" className="form-control" id="telephone" />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
