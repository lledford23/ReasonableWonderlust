import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './Styles/custom.scss'

import { AddNewVacation } from './pages/AddNewVacation'
import { ShowPastVacations } from './pages/ShowPastVacations'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { LandingPage } from './pages/LandingPage'
import { SignUpPage } from './pages/SignUpPage'
import { ShowVacation } from './pages/ShowVacation'
import { ToDoList } from './pages/ToDoList'
import { LoginPage } from './pages/LoginPage'
import { LoginRoutePage } from './pages/LoginRoutePage'

export function App() {
  return (
    <>
      <Switch>
        <Route exact path="/LoginPage">
          <LoginPage />
        </Route>
        <Route exact path="/">
          <LoginRoutePage />
        </Route>
        <Route exact path="/LoginRoutePage">
          <LoginRoutePage />
        </Route>
        <Route exact path="/LandingPage">
          <LandingPage />
        </Route>
        <Route exact path="/SignUpPage">
          <SignUpPage />
        </Route>
        <Route exact path="/add_new_vacation">
          <AddNewVacation />
        </Route>
        <Route exact path="/ToDoList">
          <ToDoList />
        </Route>
        <Route exact path="/vacations">
          <ShowPastVacations />
        </Route>
        <Route exact path="/vacations/:id">
          <ShowVacation />
        </Route>
        <Route exact path="/LandingPage">
          <LandingPage />
        </Route>
      </Switch>
    </>
  )
}
