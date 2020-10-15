import React from 'react'
import { Link } from 'react-router-dom'
// @ts-ignore
import logo from '../images/logoWL.png'

export function NavBar() {
  return (
    <>
      <nav className="topNav navbar-light">
        <div className="logo">
          <Link className="navbar-brand" to="/user_account_page">
            <img src={logo} className="logo-1" role="img" aria-label="logo" />
          </Link>
        </div>

        <div className="navItems">
          <Link to="/add_new_vacation">
            <button type="button" className="btn btn-info">
              New Vacation
            </button>
          </Link>
          <Link to="/user_account_page">
            <button type="button" className="btn btn-info">
              My Account
            </button>
          </Link>
          <Link to="/vacations">
            <button type="button" className="btn btn-info">
              Upcoming Vacations
            </button>
          </Link>
        </div>
      </nav>
    </>
  )
}
