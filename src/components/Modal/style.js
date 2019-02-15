// Dependencies
import styled from 'styled-components';

export const Overlay = styled.div`
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`;

export const Container = styled.div`
    background: ${ props => props.color || '#FFFFFF' };
    border-radius: 4px;
    height: 30%;
    width: 40%;
`;

export const Header = styled.div`
    box-sizing: border-box;
    display: flex;
    font-size: 20px;
    font-weight: 400;
    height: 50px;
    padding: 12px;
`;

export const Body = styled.div`
    box-sizing: border-box;
    display: flex;
    height: calc(100% -  110px);
    padding: 0 12px;
`;

export const Footer = styled.div`
    align-items: center;
    display: flex;
    height: 60px;
    justify-content: flex-end;
    padding: 0 12px;
`;