// Dependencies
import React from 'react';
// Styled
import { Element } from './style';

const Datepicker = (props) => {
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
                defaultValue={ value._isAMomentObject && value.format('YYYY-MM-DD') }
                name={ name }
                onChange={ handleChange }
                placeholder={ placeholder }
                type="date"
            />
        </React.Fragment>

    )
}

export default Datepicker;