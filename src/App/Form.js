import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitReservation = event => {
    event.preventDefault();
    const newReservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newReservation);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', number: '' });
  }

  render() {
    return (
      <form>
        <input
          className='form__input-name'
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input
          className='form__input-date'
          type='date'
          placeholder='Date'
          name='date'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />
        <input
          className='form__input-time'
          type='time'
          placeholder='Time'
          name='time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />
        <input
          className='form__input-number'
          type='number'
          placeholder='Number of people'
          name='number'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />
        <button className='make-reservation-btn' onClick={event => this.submitReservation(event)}>Make Reservation</button>
      </form>
    )
  }
}

export default Form;
