import React from 'react'
import { Link } from 'react-router-dom'
export function NavBar() {
  return (
    <>
      <div className="topnav">
        <nav className="navbar navbar-expand-lg">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#add_new_vacation">New Vacation</a>
          <a href="#user_account_page">My Account</a>
          <a href="#upcoming_vacation">My Upcoming Vacations</a>
        </nav>
      </div>

      <main>
        <div className="userinfo">Welcome Back, userNameSpace!</div>
      </main>
    </>
  )
}
