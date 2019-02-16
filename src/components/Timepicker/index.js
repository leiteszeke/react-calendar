// Dependencies
import React from 'react';
// Styled
import { Element } from './style';

const Timepicker = (props) => {
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
        <React.Fragment>
            <Element
                defaultValue={ value._isAMomentObject && value.format('HH:mm') }
                name={ name }
                onChange={ handleChange }
                placeholder={ placeholder }
                type="time"
            />
        </React.Fragment>

    )
}

export default Timepicker;