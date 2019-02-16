// Dependencies
import styled from 'styled-components';

export const Element = styled.input.attrs(props => ({
    name: props.name,
    onChange: props.onChange,
    placeholder: props.placeholder,
    value: props.value,
}))`
    background: none;
    border: none;
    border-bottom: 1px solid #333333;
    box-sizing: border-box;
    color: #333333;
    font-size: 14px;
    height: 28px;
    outline: none;
    padding: 8px 4px;
    width: 100%;
`;