import React from 'react'
import { Link } from 'react-router-dom'
// @ts-ignore
// import logo from '../images/logoWL.png'

export function NavBar() {
  return (
    <>
      <nav className="topNav navbar-light">
        <div className="navItems">
          <Link to="/add_new_vacation">
            <button type="button" className="btn btn-info">
              New Vacation
            </button>
          </Link>
          <Link to="/ToDoList">
            <button type="button" className="btn btn-info">
              To Do Lists
            </button>
          </Link>
          <Link to="/vacations">
            <button type="button" className="btn btn-info">
              Past Vacations
            </button>
          </Link>

          <Link to="/UserAccountPage">
            <button type="button" className="btn btn-info">
              Account Page
            </button>
          </Link>
        </div>
      </nav>
    </>
  )
}
