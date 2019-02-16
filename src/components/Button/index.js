// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
// Styled
import { Container } from './style';

const Button = (props) => {
    const {
        color,
        hoverColor,
        label,
        onClick,
    } = props;

    const handleClick = () => {
        if (typeof onClick === 'function') {
            onClick();
        }
    }

    return (
        <Container
            color={ color }
            hoverColor={ hoverColor }
            onClick={ handleClick }
        >
            { label }
        </Container>
    )
};

Button.propTypes = {
    color: PropTypes.string,
    hoverColor: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    color: '#6DAFD9',
    hoverColor: '#2C91D1',
};

export default Button;