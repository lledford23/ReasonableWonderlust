import React from 'react'
import { Link } from 'react-router-dom'
// @ts-ignore
import logo from '../images/logoWL.png'

export function NavBar() {
  return (
    <>
      <nav className="topNav navbar-light">
        <div className="logo">
          <a className="navbar-brand" href="/user_account_page">
            <img src={logo} className="logo-1" role="img" aria-label="logo" />
          </a>
        </div>

        <div className="navItems">
          <a href="/add_new_vacation">New Vacation</a>
          <a href="/user_account_page">My Account</a>
          <a href="/vacations/:id">My Upcoming Vacations</a>
        </div>
      </nav>
    </>
  )
}
