import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './Styles/custom.scss'

import { AddNewVacation } from './pages/AddNewVacation'
import { ShowUpcomingVacations } from './pages/ShowUpcomingVacations'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { LandingPage } from './pages/LandingPage'
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
          <LoginPage />
        </Route>
        <Route exact path="/LoginRoutePage">
          <LoginRoutePage />
        </Route>
        <Route exact path="/LandingPage">
          <LandingPage />
        </Route>
        <Route exact path="/add_new_vacation">
          <AddNewVacation />
        </Route>
        <Route exact path="/vacations">
          <ShowUpcomingVacations />
        </Route>
        {/* Add route that shows single vacation  */}
      </Switch>
    </>
  )
}
