import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logoWL.PNG'

export function NavBar() {
  return (
    <>
      <div className="topNav">
        <nav className="navbar navbar-expand-lg navbar-translucent bg-stick">
          <Link className="navbar-brand" to="#">
            <img src={logo} className="logo-1" role="img" aria-label="logo" />
          </Link>

          <a href="#add_new_vacation">New Vacation</a>
          <a href="#user_account_page">My Account</a>
          <a href="#upcoming_vacation">My Upcoming Vacations</a>
        </nav>
      </div>
      <div className="userInfo">Welcome Back, userNameSpace!</div>
    </>
  )
}
