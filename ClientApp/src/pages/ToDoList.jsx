import React, { useState, useEffect } from 'react'
import { NavBar } from '../components/NavBar'
import { useHistory, useParams } from 'react-router-dom'
import { getUser, authHeader } from '../auth'
import { formatDate } from '../dates'

export function ToDoList() {
  const history = useHistory()
  const user = getUser()

  const { id } = useParams()

  const [todolist, setToDoList] = useState({})

  const [allVacations, setAllVacations] = useState([])

  const [vacationId, setVacationId] = useState([])

  function handleStringFieldChange(event) {
    const value = event.target.value
    setVacationId(value)
  }

  useEffect(() => {
    const fetchToDoList = async () => {
      const response = await fetch(`/api/ToDoList/${vacationId}`)
      const apiData = await response.json()

      setToDoList(apiData)
    }
    fetchToDoList()
  }, [id])

  useEffect(() => {
    const fetchAllVacations = async () => {
      const response = await fetch('/api/Vacations/', {
        headers: { 'content-type': 'application/json', ...authHeader() },
      })
      const apiData = await response.json()

      setAllVacations(apiData)
      console.log(apiData)
    }
    fetchAllVacations()
  }, [])

  return (
    <>
      <NavBar />
      <div className="stupidParent">
        <h1>Which vacation are we adding to?</h1>
        <select
          name="vacationDropDown"
          onChange={handleStringFieldChange}
          required
        >
          {allVacations ? (
            allVacations.map((vacation, key) => {
              return (
                <option value={vacation.id}>
                  {formatDate(vacation.beginDate)}
                </option>
              )
            })
          ) : (
            // <>
            //   <option
            //     placeholder="Pick your vacation"
            //     value="UserVacations"
            //   ></option>
            // </>
            <></>
          )}
        </select>

        <h2>My To Do List</h2>
        <input type="text" id="myInput" placeholder="Add New Item.." />
        <button className="btn btn-primary">Add</button>

        <ul id="myList">
          <ol>Buy Flight</ol>
          <ol>Pay Deposit</ol>
          <ol>Book Hotel</ol>
          <ol>Pack Bags</ol>
        </ul>
      </div>
    </>
  )
}
