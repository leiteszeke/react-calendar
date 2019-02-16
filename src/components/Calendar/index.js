// Dependencies
import React from 'react';
import classnames from 'classnames';
import moment from 'moment';
// Styled
import { Container, Week, Day, EventList, Number } from './style';
// Components
import Event from '../Event';

const Calendar = (props) => {
    const {
        month,
        onDayClick,
        onEventClick,
    } = props;

    const today = moment().format('D');

    const handleDayClick = (date) => {
        if (typeof onDayClick === 'function') {
            onDayClick(date);
        }
    }

    const handleEventClick = (event) => {
        if (typeof onEventClick === 'function') {
            onEventClick(event);
        }
    }

    return (
        <Container weeks={ month.length } id="container">
            { month.map(item => {
                const { week, days } = item;
                return (
                    <Week weeks={ month.length } key={ week }>
                        { days.map(currentDay => {
                            const { day, disabled, events } = currentDay;

                            return (
                                <Day
                                    classes={ classnames({
                                        disabled,
                                    }) }
                                    data-day={ day.format('D') }
                                    key={ `${ week }_${ day.format('D') }` }
                                    onClick={ () => handleDayClick(day) }
                                >
                                    <Number
                                        classes={ classnames({
                                            active: today === day.format('D'),
                                        }) }
                                    >
                                        <p>{ day.format('D') }</p>
                                    </Number>
                                    <EventList>
                                        { events.map(item =>
                                            <Event
                                                key={ item.id }
                                                onClick={ handleEventClick }
                                                { ...item }
                                            />
                                        ) }
                                    </EventList>
                                </Day>
                            )
                        })}
                    </Week>
                )
            }) }
        </Container>
    );
}

export default Calendar;