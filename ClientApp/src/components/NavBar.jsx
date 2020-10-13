import Reach from 'react'
import { Link } from 'react-router-dom'

export function NavBar() {
  return (
    <>
      <div className="topNav">
        <nav className="navbar navbar-expand-lg navbar-translucent bg-stick">
          <link className="navbar-brand" to="#">
            <span className="logo-1" role="img" aria-label="logo"></span>
          </link>

          <a href="#add_new_vacation">New Vacation</a>
          <a href="#user_account_page">My Account</a>
          <a href="#upcoming_vacation">My Upcoming Vacations</a>
        </nav>
      </div>
      <div className="userInfo">Welcome Back, userNameSpace!</div>
    </>
  )
}
