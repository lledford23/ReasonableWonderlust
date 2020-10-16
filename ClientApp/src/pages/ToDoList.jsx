import React from 'react'
import { NavBar } from '../components/NavBar'

export function ToDoList() {
  return (
    <>
      <NavBar />
      <div id="myToDo" className="header">
        <h2>My To Do List</h2>
        <input type="text" id="myInput" placeholder="Add New Item.." />
        <span onclick="newElement()" className="btn btn-primary">
          Add
        </span>
      </div>

      <ul id="myList">
        <li>Buy Flight</li>
        <li>Pay Deposit</li>
        <li>Book Hotel</li>
        <li>Pack Bags</li>
      </ul>
    </>
  )
}
