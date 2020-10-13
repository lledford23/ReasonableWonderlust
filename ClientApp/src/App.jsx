import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './custom.scss'

import { AddNewVacation } from './pages/AddNewVacation'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'

export function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route exact path="/add_new_vacation">
          <AddNewVacation />
        </Route>
      </Switch>
    </>
  )
}
