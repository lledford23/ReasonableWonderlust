import React from 'react'
import { Link } from 'react-router-dom'

export function LoginPage() {
  return (
    <>
      <section className="login-page">
        <h1>Where will you wander next?</h1>
        <div className="side-buttons">
          <Link to="/LoginRoutePage">
            <button className="login-button">Login</button>
          </Link>
          <button>Sign Up</button>
        </div>
      </section>

      <button type="button" className="btn btn-info">
        Sign Up
      </button>
    </>
  )
}
