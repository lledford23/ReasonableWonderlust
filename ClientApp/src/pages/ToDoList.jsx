import React from 'react'
import { NavBar } from '../components/NavBar'

export function ToDoList() {
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
