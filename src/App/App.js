import React, { Component } from 'react';
import Reservations from './Reservations'
import Form from './Form';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => this.setState({ reservations: data }))
  }

  addReservation = (newReservation) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      body: JSON.stringify({
        "name": newReservation.name,
        "date": newReservation.date,
        "time": newReservation.time,
        "number": newReservation.number
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => this.setState({ reservations: [...this.state.reservations, newReservation] })
    )
  }

  deleteReservation = (id) => {
    const filteredReservations = this.state.reservations.filter(reservation => reservation.id !== id)

    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE'
    })
    .then(() => this.setState({ reservations: filteredReservations }))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>

        <Reservations reservations={this.state.reservations} deleteReservation={this.deleteReservation}/>
      </div>
    )
  }
}

export default App;
