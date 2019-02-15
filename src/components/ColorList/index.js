// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// Styled
import { Container, Color } from './style';

const colors = [
    '#6db8ff',
    '#f06292',
    '#81c784',
    '#ba68c8',
];

const ColorList = (props) => {
    const {
        name,
        onClick,
        selected,
    } = props;

    const handleClick = color => () => {
        if (typeof onClick === 'function') {
            onClick(name, color);
        }
    }

    return (
        <Container>
            { colors.map(color =>
                <Color
                    classes={ classnames({
                        selected: selected === color,
                    })}
                    color={ color }
                    key={ color }
                    onClick={ handleClick(color) }
                />
            ) }
        </Container>
    )
};

ColorList.propTypes = {
    onClick: PropTypes.func,
};

export default ColorList;