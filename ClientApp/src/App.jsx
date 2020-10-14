import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './custom.scss'

import { AddNewVacation } from './pages/AddNewVacation'
import { ShowUpcomingVacations } from './pages/ShowUpcomingVacations'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { LandingPage } from './pages/LandingPage'
import { LoginPage } from './pages/LoginPage'

export function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LoginPage />
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
      </Switch>

      <Footer />
    </>
  )
}
