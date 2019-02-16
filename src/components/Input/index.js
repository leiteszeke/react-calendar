// Dependencies
import React from 'react';
// Styled
import { Element } from './style';

const Input = (props) => {
    const {
        name,
        onChange,
        placeholder,
        value,
    } = props;

    const handleChange = (event) => {
        if (typeof onChange === 'function') {
            onChange(name, event.target.value);
        }
    }

    return (
        <Element
            defaultValue={ value }
            name={ name }
            onChange={ handleChange }
            placeholder={ placeholder }
        />
    )
}

export default Input;