import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
// import { useDropzone } from 'react-dropzone'
import { authHeader } from '../auth'

export function SignUpPage() {
  const history = useHistory()

  const [errorMessage, setErrorMessage] = useState('')

  const [newUser, setNewUser] = useState({
    fullName: '',
    email: '',
    password: '',
  })

  const [isUploading, setIsUploading] = useState(false)

  // async function onDropFile(acceptedFiles) {
  //   const fileToUpload = acceptedFiles[0]
  //   console.log(fileToUpload)

  //   const formData = new FormData()
  //   formData.append('file', fileToUpload)
  //   try {
  //     setIsUploading(true)
  //     const response = await fetch('/api/Uploads', {
  //       method: 'POST',
  //       headers: {
  //         ...authHeader(),
  //       },
  //       body: formData,
  //     })
  //     setIsUploading(false)
  //     if (response.status === 200) {
  //       const apiResponse = await response.json()
  //       const url = apiResponse.url
  //       setNewUser({ ...newUser, photoURL: url })
  //     } else {
  //       setErrorMessage('Unable to upload image')
  //     }
  //   } catch (error) {
  //     console.debug(error)
  //     setErrorMessage('Unable to upload image')
  //     setIsUploading(false)
  //   }
  // }
  // let dropZoneMessage = 'Drag a picture of the restaurant here to upload!'
  // if (isUploading) {
  //   dropZoneMessage = 'Uploading...'
  // }
  // if (isDragActive) {
  //   dropZoneMessage = 'Drop the files here ...'
  // }

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedUser = { ...newUser, [fieldName]: value }

    setNewUser(updatedUser)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newUser),
    })

    const apiResponse = await response.json()

    console.log(apiResponse)

    if (apiResponse.status === 400) {
      // setErrorMessage(Object.values(apiResponse.errors).join(' '))
      setErrorMessage('Error')
    } else {
      // history.push('/')
    }
  }

  return (
    <>
      <main className="page">
        <nav>
          <Link to="/">
            <i className="fa fa-home"></i>
          </Link>
          <h2>Sign Up</h2>
        </nav>
        <form onSubmit={handleFormSubmit}>
          {errorMessage && <p>{errorMessage}</p>}
          <p className="form-input">
            <label htmlFor="fullName">Name</label>
            <input
              type="text"
              name="fullName"
              value={newUser.fullName}
              onChange={handleStringFieldChange}
            />
          </p>
          <p className="form-input">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleStringFieldChange}
            />
          </p>
          <p className="form-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={newUser.password}
              onChange={handleStringFieldChange}
            />
          </p>
          <p>
            <button type="submit" className="btn btn-info">
              Sign Up
            </button>
          </p>
        </form>
      </main>
    </>
  )
}
