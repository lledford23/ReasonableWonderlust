import React from 'react'

export function LoginPage() {
  return (
    <>
      <section className="login-page">
        <h1>Where will you wander next?</h1>
        <div className="side-buttons">
          <button className="login-button">Login</button>
          <button>Sign Up</button>
        </div>
      </section>

      <button type="button" className="btn btn-info">
        Sign Up
      </button>
    </>
  )
}
