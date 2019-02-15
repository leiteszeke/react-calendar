// Dependencies
import React from 'react';
// Styled
import { Container, Day, Month, Days } from './style';

const Header = (props) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    const {
        month,
        year,
    } = props;

    return (
        <Container>
            <Month>
                { months[month - 1] } { year }
            </Month>
            <Days>
                { days.map((day, index) => <Day key={ index }>{ day }</Day>) }
            </Days>
        </Container>
    );
}

export default Header;