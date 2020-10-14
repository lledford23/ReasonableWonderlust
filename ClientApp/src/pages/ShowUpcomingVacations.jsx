import React, { useState } from 'react'

export function ShowUpcomingVacations() {
  const [vacations, setVacations] = useState([
    {
      id: 11,
      userName: 'lledford23',
      firstName: 'Lindsay',
      lastName: 'Ledford',
      beginDate: '2019-05-23T00:00:00',
      endDate: '2019-05-28T00:00:00',
      overallBudget: 3500,
      activitiesBudget: 1500,
      mealBudget: 1000,
      travelBudget: 1000,
      accommodationsBudget: 1000,
      travelMethod: 'Car',
      accommodationsMethod: 'Hotel',
      notesNewVacation: 'For my birthday',
    },
    {
      id: 12,
      userName: 'ncrockett15',
      firstName: 'Natalie',
      lastName: 'Crockett',
      beginDate: '2017-05-23T00:00:00',
      endDate: '2017-05-28T00:00:00',
      overallBudget: 3000,
      activitiesBudget: 1000,
      mealBudget: 1000,
      travelBudget: 1000,
      accommodationsBudget: 1000,
      travelMethod: 'Plane',
      accommodationsMethod: 'Hotel',
      notesNewVacation: 'Remember medicine and passport',
    },
    {
      id: 13,
      userName: 'ashtyn15',
      firstName: 'Ashtyn',
      lastName: 'Crockett',
      beginDate: '2019-08-21T00:00:00',
      endDate: '2019-08-29T00:00:00',
      overallBudget: 2500,
      activitiesBudget: 500,
      mealBudget: 1000,
      travelBudget: 1000,
      accommodationsBudget: 1000,
      travelMethod: 'Car',
      accommodationsMethod: 'Condo Rental',
      notesNewVacation: 'Engagement trip, dont forget ring',
    },
    {
      id: 14,
      userName: 'ccrockett21',
      firstName: 'Cody',
      lastName: 'Crockett',
      beginDate: '2020-10-23T00:00:00',
      endDate: '2020-10-25T00:00:00',
      overallBudget: 750,
      activitiesBudget: 0,
      mealBudget: 500,
      travelBudget: 250,
      accommodationsBudget: 1000,
      travelMethod: 'Car',
      accommodationsMethod: 'Other',
      notesNewVacation: 'Buying car, staying with friends',
    },
    {
      id: 15,
      userName: 'lledford23',
      firstName: 'Lindsay',
      lastName: 'Ledford',
      beginDate: '2017-09-23T00:00:00',
      endDate: '2017-09-28T00:00:00',
      overallBudget: 1750,
      activitiesBudget: 250,
      mealBudget: 750,
      travelBudget: 500,
      accommodationsBudget: 250,
      travelMethod: 'Car',
      accommodationsMethod: 'Hotel',
      notesNewVacation: 'Anniversary Trip',
    },
  ])

  return (
    <>
      <header>Upcoming Vacations</header>

      {vacations.map((vacations) => (
        <li>
          <section className="firstUpcomingVacation">
            <h2>
              {vacations.beginDate} to {vacations.endDate}
            </h2>
            <p>
              <ul>You have budgeted: {vacations.overallBudget}</ul>
              <ul>Your activities budget: {vacations.activitiesBudget}</ul>
              <ul>Your meal budget: {vacations.mealBudget}</ul>
              <ul>Your travel budget: {vacations.travelBudget}</ul>
              <ul>
                Your accommodations budget: {vacations.accommodationsBudget}
              </ul>
            </p>
          </section>
        </li>
      ))}
    </>
  )
}
