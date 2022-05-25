import React from 'react';
import './ResyCard.css'

const ResyCard = ({ id, name, date, time, number, deleteReservation }) => {
  return (
    <div className='resy-card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of People: {number}</p>
      <button onClick={() => deleteReservation(id)}>🗑</button>
    </div>
  )
}

export default ResyCard;
