// Dependencies
import styled from 'styled-components';

export const Container = styled.div.attrs(props => ({
    onClick: props.onClick,
}))`
    background: #2c91d1;
    border-radius: 4px;
    color: #FFFFFF;
    cursor: pointer;
    display: block;
    font-size: 14px;
    font-weight: 400;
    height: 36px;
    line-height: 36px;
    margin-left: 8px;
    padding: 0 8px;
    text-transform: uppercase;

    &:hover {
        background: #2284c4;
    }
`;