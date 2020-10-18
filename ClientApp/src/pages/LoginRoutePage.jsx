import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function LoginRoutePage() {
  const [errorMessage, setErrorMessage] = useState()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  return (
    <>
      <section className="login-route">
        <h1>Where will you wander next?</h1>
        <div className="side-buttons">
          <Link to="/LoginPage">
            <button type="button" className="btn btn-info">
              Login
            </button>
          </Link>
          <Link to="/SignUpPage">
            <button type="button" className="btn btn-info">
              Sign Up
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}
