import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import styled from 'styled-components';
// Components
import Button from './components/Button';
import Calendar from './components/Calendar';
import Header from './components/Header';
import Modal from './components/Modal';
import Input from './components/Input';
import ColorList from './components/ColorList';
import Datepicker from './components/Datepicker';
import Timepicker from './components/Timepicker';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: parseInt(moment().format('M')),
      currentYear: parseInt(moment().format('YYYY')),
      event: {
        color: '#FFFFFF',
        date: moment(),
        time: moment(),
        title: '',
      },
      showModal: false,
    };

    this.saveEvent = this.saveEvent.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  generateDays(currentMonth, week) {
    return Array(7).fill(0).map((n, i) => {
      const currentDay = moment().week(week).startOf('week').clone().add(n + i, 'day');
      const month = currentDay.format('M');
      const day = {
        day: currentDay,
        disabled: false,
        events: [],
      };

      if (currentMonth !== parseInt(month)) {
        day.disabled = true;
      }

      return day;
    });
  }

  generateCalendar(currentMonth) {
    const startWeek = moment().startOf('month').week();
    const endWeek = moment().endOf('month').week();
    const calendar = [];

    for (var week = startWeek; week <= endWeek; week++){
      calendar.push({
        week,
        days: this.generateDays(currentMonth, week)
      });
    }

    return calendar;
  }

  setValue(name, value) {
    const { event } = this.state;
    event[name] = value;
    this.setState({ event });
  }

  saveEvent() {

  }

  render() {
    const {
      currentMonth,
      currentYear,
      event,
      showModal,
    } = this.state;
    const calendar = this.generateCalendar(currentMonth);
    const footerButtons =
      <React.Fragment>
        <Button label="Cancelar" onClick={ () => this.setState({ showModal: false }) } />
        <Button label="Guardar" onClick={ this.saveEvent } />
      </React.Fragment>
    ;

    const eventModal =
      <EventModal>
        <Input name="title" placeholder="Agregar título" value={ event.title } onChange={ this.setValue } />
        <DateTime>
          <Datepicker name="date" value={ event.date } onChange={ this.setValue } />
          <Timepicker name="time" value={ event.time } onChange={ this.setValue } />
        </DateTime>
        <ColorList name="color" selected={ event.color } onClick={ this.setValue } />
      </EventModal>
    ;

    return (
      <React.Fragment>
        <Header month={ currentMonth } year={ currentYear } />
        <Calendar
          month={ calendar }
          onDayClick={ (date) => this.setState({ showModal: true, event: { ...event, ...{ date } } } ) }
        />
        <Modal
          color={ event.color }
          show={ showModal }
          title="Agregar Evento"
          content={ eventModal }
          buttons={ footerButtons }
        />
      </React.Fragment>
    );
  }
}

const EventModal = styled.div`
  align-content: center;
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;

  input {
    margin-bottom: 24px;
  }
`;

const DateTime = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  input {
    width: 95%;
  }
`;

export default App;
