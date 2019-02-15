// Dependencies
import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    display: flex;
    height: 34px;
    justify-content: space-between;
`;

export const Color = styled.div.attrs(props => ({
    className: props.classes,
    onClick: props.onClick,
}))`
    background: ${ props => props.color };
    cursor: pointer;
    height: 20px;
    margin: 0 6px;
    width: 20px;

    &.selected {
        height: 16px;
        border: 2px solid #000000;
        width: 16px;
    }
`;