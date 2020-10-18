import React, { useState } from 'react'
import { recordAuthentication } from '../auth'

export function LoginPage() {
  const [errorMessage, setErrorMessage] = useState()

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedUser = { ...user, [fieldName]: value }

    setUser(updatedUser)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Sessions', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    })

    const apiResponse = await response.json()

    if (apiResponse.status === 400) {
      setErrorMessage(Object.values(apiResponse.errors).join(' '))
    } else {
      recordAuthentication(apiResponse)
      window.location.assign('/LandingPage')
    }
  }

  return (
    <>
      <main className="login-page">
        <nav>
          <a href="/">
            <i className="fa fa-home"></i>
          </a>
          <h2>Sign In</h2>
        </nav>
        <form onSubmit={handleFormSubmit}>
          {errorMessage && <p>{errorMessage}</p>}

          <p className="form-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleStringFieldChange}
            />
          </p>

          <p className="form-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleStringFieldChange}
            />
          </p>
          <p>
            <button type="submit" className="btn btn-info">
              Submit
            </button>
          </p>
        </form>
      </main>
    </>
  )
}
