import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './custom.scss'

import { AddNewVacation } from './pages/AddNewVacation'
import { ShowUpcomingVacations } from './pages/ShowUpcomingVacations'
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
        <Route exact path="/vacations">
          <ShowUpcomingVacations />
        </Route>
      </Switch>

      <h1>Welcome message here</h1>
      <p>What would you like to do today?</p>
      <p>
        Lorem ipsum dolor sit amet, mea verterem argumentum ne, qui vidisse
        tibique expetendis at. Nam at justo error suscipiantur. Ut fabellas
        efficiendi per, cu agam posse accommodare his. Ad eam brute verear. An
        eam munere putant saperet, discere honestatis in pro. Mel at homero
        perfecto, etiam saepe fabellas ea his, eu pri tale unum assentior. Duo
        liber volutpat ei, eum illud doming prompta ne. An adipisci accusata
        vel, tacimates patrioque repudiandae cum id. At primis mollis alienum
        vix. Cu partiendo imperdiet nec. Mei et vocent aliquip persequeris, eum
        ne tamquam rationibus. Et per dicit quaestio. Alienum accusam mediocrem
        no vim, has possim discere consulatu id. In mei case regione, no nam
        movet delicata definitiones. Justo graece duo ei, no quo alii falli. Ne
        discere laoreet mei. Te euismod argumentum mel. Ad nec nonumy noster
        senserit, adhuc pertinax convenire est cu, paulo feugait liberavisse ne
        usu. Utinam habemus pro eu, movet feugiat vituperatoribus vel eu, diam
        rebum urbanitas vel cu. No numquam inimicus maluisset sed, cum cu primis
        philosophia. Vix gubergren delicatissimi ex. Gloriatur theophrastus nam
        eu. An veri legendos ullamcorper eos, ea mel labores apeirian. Per natum
        homero pericula cu. Has no liber doming noluisse, utamur saperet
        voluptatum vel ei. At mei detracto singulis, vis eleifend platonem
        appellantur no, sed case detraxit id. Mei ne nemore facete deleniti, in
        idque dicit neglegentur his, semper delicatissimi quo ut.
      </p>
      <p>
        Lorem ipsum dolor sit amet, mea verterem argumentum ne, qui vidisse
        tibique expetendis at. Nam at justo error suscipiantur. Ut fabellas
        efficiendi per, cu agam posse accommodare his. Ad eam brute verear. An
        eam munere putant saperet, discere honestatis in pro. Mel at homero
        perfecto, etiam saepe fabellas ea his, eu pri tale unum assentior. Duo
        liber volutpat ei, eum illud doming prompta ne. An adipisci accusata
        vel, tacimates patrioque repudiandae cum id. At primis mollis alienum
        vix. Cu partiendo imperdiet nec. Mei et vocent aliquip persequeris, eum
        ne tamquam rationibus. Et per dicit quaestio. Alienum accusam mediocrem
        no vim, has possim discere consulatu id. In mei case regione, no nam
        movet delicata definitiones. Justo graece duo ei, no quo alii falli. Ne
        discere laoreet mei. Te euismod argumentum mel. Ad nec nonumy noster
        senserit, adhuc pertinax convenire est cu, paulo feugait liberavisse ne
        usu. Utinam habemus pro eu, movet feugiat vituperatoribus vel eu, diam
        rebum urbanitas vel cu. No numquam inimicus maluisset sed, cum cu primis
        philosophia. Vix gubergren delicatissimi ex. Gloriatur theophrastus nam
        eu. An veri legendos ullamcorper eos, ea mel labores apeirian. Per natum
        homero pericula cu. Has no liber doming noluisse, utamur saperet
        voluptatum vel ei. At mei detracto singulis, vis eleifend platonem
        appellantur no, sed case detraxit id. Mei ne nemore facete deleniti, in
        idque dicit neglegentur his, semper delicatissimi quo ut.
      </p>
      <p>
        Lorem ipsum dolor sit amet, mea verterem argumentum ne, qui vidisse
        tibique expetendis at. Nam at justo error suscipiantur. Ut fabellas
        efficiendi per, cu agam posse accommodare his. Ad eam brute verear. An
        eam munere putant saperet, discere honestatis in pro. Mel at homero
        perfecto, etiam saepe fabellas ea his, eu pri tale unum assentior. Duo
        liber volutpat ei, eum illud doming prompta ne. An adipisci accusata
        vel, tacimates patrioque repudiandae cum id. At primis mollis alienum
        vix. Cu partiendo imperdiet nec. Mei et vocent aliquip persequeris, eum
        ne tamquam rationibus. Et per dicit quaestio. Alienum accusam mediocrem
        no vim, has possim discere consulatu id. In mei case regione, no nam
        movet delicata definitiones. Justo graece duo ei, no quo alii falli. Ne
        discere laoreet mei. Te euismod argumentum mel. Ad nec nonumy noster
        senserit, adhuc pertinax convenire est cu, paulo feugait liberavisse ne
        usu. Utinam habemus pro eu, movet feugiat vituperatoribus vel eu, diam
        rebum urbanitas vel cu. No numquam inimicus maluisset sed, cum cu primis
        philosophia. Vix gubergren delicatissimi ex. Gloriatur theophrastus nam
        eu. An veri legendos ullamcorper eos, ea mel labores apeirian. Per natum
        homero pericula cu. Has no liber doming noluisse, utamur saperet
        voluptatum vel ei. At mei detracto singulis, vis eleifend platonem
        appellantur no, sed case detraxit id. Mei ne nemore facete deleniti, in
        idque dicit neglegentur his, semper delicatissimi quo ut.
      </p>

      <Footer />
    </>
  )
}
