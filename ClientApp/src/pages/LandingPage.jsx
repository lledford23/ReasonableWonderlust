import React from 'react'
import { NavBar } from '../components/NavBar'

export function LandingPage() {
  return (
    <>
      <NavBar />
      <div className="welcome1">
        <div>
          <h1>Reasonable Wanderlust</h1>
        </div>
      </div>

      <div className="tagline">
        <h2>Curate where you'll wander next, reasonably.</h2>
      </div>
    </>
  )
}
