import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logoWL.PNG'

export function NavBar() {
  return (
    <>
      <nav className="topNav">
        <div className="logo">
          <Link className="navbar-brand" to="#">
            <img src={logo} className="logo-1" role="img" aria-label="logo" />
          </Link>
          <div className="userInfo">Welcome Back, userNameSpace!</div>
        </div>

        <div className="navItems">
          <a href="#add_new_vacation">New Vacation</a>
          <a href="#user_account_page">My Account</a>
          <a href="#upcoming_vacation">My Upcoming Vacations</a>
        </div>
      </nav>
    </>
  )
}
