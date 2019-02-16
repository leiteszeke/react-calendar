import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
// Actions
import {
  fetchEvents,
  saveEvent,
  updateEvent,
  deleteEvent,
  clearValues,
} from '../../actions/event';
// Components
import Button from '../../components/Button';
import Calendar from '../../components/Calendar';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import ColorList from '../../components/ColorList';
import Datepicker from '../../components/Datepicker';
import Timepicker from '../../components/Timepicker';
// Styled
import { EventModal, DateTime } from './style';

const defaultEvent = {
  color: '#FFFFFF',
  date: moment(),
  time: moment(),
  title: '',
};

class ReactCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: parseInt(moment().format('M')),
      currentYear: parseInt(moment().format('YYYY')),
      event: defaultEvent,
      showModal: false,
    };

    this.openEditModal = this.openEditModal.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.saveEvent = this.saveEvent.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents();

    if (window.innerWidth < 768) {
      const today = moment().format('D');
      const day = document.querySelector(`[data-day="${ today }"]`);
      const container = document.getElementById('container');

      if (day !== null) {
        const position = { top: day.offsetTop - 135 };
        container.scrollTop = position.top;
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (
      (this.props.eventSaved !== prevProps.eventSaved
      && this.props.eventSaved === true)
      ||
      (this.props.eventUpdated !== prevProps.eventUpdated
      && this.props.eventUpdated === true)
      ||
      (this.props.eventDeleted !== prevProps.eventDeleted
      && this.props.eventDeleted === true)
    ) {
      this.props.clearValues();
      this.setState({ event: defaultEvent, showModal: false });
    }
  }

  generateDays(currentMonth, week) {
    return Array(7).fill(0).map((n, i) => {
      const currentDay = moment().week(week).startOf('week').clone().add(n + i, 'day');
      const month = currentDay.format('M');

      const day = {
        day: currentDay,
        disabled: false,
        events: this.getEvents(currentDay),
      };

      if (currentMonth !== parseInt(month)) {
        day.disabled = true;
      }

      return day;
    });
  }

  getEvents(date) {
    const { events } = this.props;
    const currentDate = moment(date).format('YYYY-MM-DD');
    const result = [];

    if (typeof events === 'undefined') {
      return [];
    }

    Object.entries(events).map(([, value]) => {
      const eventDate = moment(value.date).format('YYYY-MM-DD');

      if (eventDate === currentDate) {
        result.push(value);
      }

      return true;
    });

    result.sort((a, b) => {
      return new Date(a.time).getTime() - new Date(b.time).getTime();
    });

    return result;
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

    if (name === 'date' && !value._isAMomentObject) {
      value = moment(value);
    }

    if (name === 'time' && !value._isAMomentObject) {
      const time = value.split(":");
      value = moment().hours(time[0]).minutes(time[1]);
    }

    event[name] = value;
    this.setState({ event });
  }

  saveEvent() {
    const { event } = this.state;
    const {
      updateEvent,
      saveEvent,
    } = this.props;

    if (event.title === "") {
      alert("Debes completar con un título para el evento");
      return;
    }

    if (event.id) {
      updateEvent(event);
    } else {
      saveEvent(event);
    }
  }

  openEditModal(selectedEvent) {
    const event = { ...this.state.event, ...selectedEvent };
    this.setState({ showModal: true, event });
  }

  deleteEvent() {
    this.props.deleteEvent(this.state.event.id);
  }

  closeModal() {
    this.setState({ showModal: false, event: defaultEvent });
  }

  render() {
    const {
      currentMonth,
      currentYear,
      event,
      showModal,
    } = this.state;
    const calendar = this.generateCalendar(currentMonth, this.props.events);
    const footerButtons =
      <React.Fragment>
        <Button
          label="Cancelar"
          onClick={ this.closeModal }
        />
        { typeof event.id !== 'undefined'
          && <Button
            color="#FF3030"
            hoverColor="#DE132A"
            label="Eliminar"
            onClick={ this.deleteEvent }
          />
        }
        <Button
          color="#07ad4b"
          hoverColor="#009E43"
          label="Guardar"
          onClick={ this.saveEvent }
        />
      </React.Fragment>
    ;

    const eventModal =
      <EventModal>
        <Input name="title" placeholder="Agregar título" value={ event.title } onChange={ this.setValue } />
        <DateTime>
          <Datepicker name="date" value={ event.date } onChange={ this.setValue } />
          <Timepicker name="time" value={ event.time } onChange={ this.setValue } />
        </DateTime>
        <ColorList name="color" selected={ event.color } onClick={ this.setValue } />
      </EventModal>
    ;

    return (
      <React.Fragment>
        <Header month={ currentMonth } year={ currentYear } />
        <Calendar
          month={ calendar }
          onDayClick={ (date) => this.setState({ showModal: true, event: { ...event, ...{ date } } } ) }
          onEventClick={ this.openEditModal }
        />
        <Modal
          color={ event.color }
          show={ showModal }
          title={ typeof event.id !== 'undefined' ? "Editar Evento" : "Agregar Evento" }
          content={ eventModal }
          buttons={ footerButtons }
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({
  event: { events, eventDeleted, eventSaved, eventUpdated },
}) => ({
  events, eventDeleted, eventSaved, eventUpdated,
});

const mapDispatchToProps = (dispatch) => {
  return {
    clearValues: () => {
      dispatch(clearValues())
    },
    fetchEvents: () => {
      dispatch(fetchEvents())
    },
    saveEvent: (event) => {
      dispatch(saveEvent(event))
    },
    updateEvent: (event) => {
      dispatch(updateEvent(event))
    },
    deleteEvent: (id) => {
      dispatch(deleteEvent(id))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactCalendar);
