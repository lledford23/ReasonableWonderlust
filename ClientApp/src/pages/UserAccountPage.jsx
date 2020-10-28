import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { authHeader, getUser, updateUserAuth } from '../auth'
import { NavBar } from '../components/NavBar'

export function UserAccountPage() {
  const history = useHistory()
  const user = getUser()

  console.log(user.id)
  const [errorMessage, setErrorMessage] = useState('')
  const [updatedUser, setUpdatedUser] = useState({
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    password: '',
  })

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name
    const newUpdatedUser = { ...updatedUser, [fieldName]: value }
    setUpdatedUser(newUpdatedUser)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()
    const response = await fetch(`/api/Users/${user.id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(updatedUser),
    })
    const apiResponse = await response.json()
    if (apiResponse.status === 400) {
      setErrorMessage(Object.values(apiResponse.errors).join(' '))
    } else {
      updateUserAuth(apiResponse)
      window.location.assign('/LandingPage')
    }
  }

  return (
    <>
      <NavBar />
      <section className="accountpage">
        <div className="accountbody">
          <h2>Edit Profile</h2>
          <form onSubmit={handleFormSubmit}>
            {errorMessage && <p>{errorMessage}</p>}
            <p className="form-input">
              <label htmlFor="fullName">Name</label>
              <input
                type="text"
                name="fullName"
                value={updatedUser.fullName}
                onChange={handleStringFieldChange}
              />
            </p>
            <p className="form-input">
              <label htmlFor="name">Email</label>
              <input
                type="email"
                name="email"
                value={updatedUser.email}
                onChange={handleStringFieldChange}
              />
            </p>
            <p className="form-input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={updatedUser.password}
                onChange={handleStringFieldChange}
              />
            </p>
            <p>
              <button type="submit" className="btn btn-info">
                Update
              </button>
            </p>
          </form>
        </div>
      </section>
    </>
  )
}
