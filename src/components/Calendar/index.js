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
    } = props;

    const today = moment().format('D');

    const handleClick = (date) => {
        if (typeof onDayClick === 'function') {
            onDayClick(date);
        }
    }

    return (
        <Container weeks={ month.length }>
            { month.map(item => {
                const { week, days } = item;
                return (
                    <Week weeks={ month.length } key={ week }>
                        { days.map(currentDay => {
                            const { day, disabled, events } = currentDay;

                            return (
                                <Day
                                    classes={ classnames({
                                        disabled,
                                    }) }
                                    key={ `${ week }_${ day.format('D') }` }
                                    onClick={ () => handleClick(day) }
                                >
                                    <Number
                                        classes={ classnames({
                                            active: today === day.format('D'),
                                        }) }
                                    >
                                        <p>{ day.format('D') }</p>
                                    </Number>
                                    <EventList>
                                        { events.map(item =>
                                            <Event key={ item } { ...item } />
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