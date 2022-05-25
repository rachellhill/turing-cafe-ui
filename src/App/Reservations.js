import React from 'react';
import ResyCard from './ResyCard'
import './Reservations.css'

const Reservations = ({reservations}) => {
  console.log(reservations)

  const cards = reservations.map(reservation => {
    return (
      <ResyCard
        key={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
      />
    )
  })

  return (
    <div className='resy-container'>
      {cards}
    </div>
  )
}

export default Reservations;
