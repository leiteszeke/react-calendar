// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
// Styled
import { Container } from './style';

const Button = (props) => {
    const {
        label,
        onClick,
    } = props;

    const handleClick = () => {
        if (typeof onClick === 'function') {
            onClick();
        }
    }

    return (
        <Container onClick={ handleClick }>
            { label }
        </Container>
    )
};

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;