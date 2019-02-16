// Dependencies
import React from 'react';
import moment from 'moment';
// Styled
import { Container, Title, Time } from './style';

const Event = (props) => {
    const {
        color,
        date,
        id,
        onClick,
        time,
        title,
    } = props;

    const handleClick = (e) => {
        e.stopPropagation();

        if (typeof onClick === 'function') {
            onClick({
                color,
                date: moment(date),
                id,
                time: moment(time),
                title,
            });
        }
    }

    return (
        <Container
            color={ color }
            onClick={ handleClick }
        >
            <Title>
                { title || 'Sin Título' }
            </Title>
            <Time>
                { moment(time).format('HH:mm') }
            </Time>
        </Container>
    )
};

export default Event;