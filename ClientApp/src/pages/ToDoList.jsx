import React, { useState, useEffect } from 'react'
import { NavBar } from '../components/NavBar'
import { useHistory, useParams } from 'react-router-dom'
import { getUser } from '../auth'

export function ToDoList() {
  const history = useHistory()
  const user = getUser()

  const { id } = useParams()

  const [todolist, setToDoList] = useState({})

  useEffect(() => {
    const fetchToDoList = async () => {
      const response = await fetch(`/api/ToDoList/`)
      const apiData = await response.json()

      setToDoList(apiData)
    }
    fetchToDoList()
    console.log(todolist)
  }, [id])

  console.log(id)

  return (
    <>
      <NavBar />
      <div id="myToDo" className="header">
        <h2>My To Do List</h2>
        <input type="text" id="myInput" placeholder="Add New Item.." />
        <button className="btn btn-primary">Add</button>
      </div>

      <ul id="myList">
        <ol>Buy Flight</ol>
        <ol>Pay Deposit</ol>
        <ol>Book Hotel</ol>
        <ol>Pack Bags</ol>
      </ul>
    </>
  )
}
