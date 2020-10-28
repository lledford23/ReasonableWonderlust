import React from 'react'
import { Link } from 'react-router-dom'
import { isLoggedIn, logout, getUser } from '../auth'
// @ts-ignore
// import logo from '../images/logoWL.png'

export function NavBar() {
  const user = getUser()

  function handleLogout() {
    logout()
    window.location.assign('/LoginPage')
  }
  return (
    <>
      <nav className="topNav navbar-light">
        <div className="navItems">
          <div className="welcome">
            {isLoggedIn() && <p>Welcome back, {user.fullName}!</p>}
          </div>
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
              Vacations
            </button>
          </Link>

          <Link to="/UserAccountPage">
            <button type="button" className="btn btn-info">
              Account Page
            </button>
          </Link>
          <div className="sign-out">
            {isLoggedIn() && (
              <button
                onClick={handleLogout}
                type="button"
                className="btn btn-info"
              >
                Sign out
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
