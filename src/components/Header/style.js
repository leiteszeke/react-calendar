// Dependencies
import styled from 'styled-components';

export const Container = styled.div`
    border-bottom: 1px solid #CCCCCC;
    display: flex;
    flex-wrap: wrap;
    height: 80px;
    width: 100%;
`;

export const Month = styled.div`
    align-items: center;
    color: #FFFFFF;
    display: flex;
    font-size: 24px;
    padding: 0 10px;
`;

export const Days = styled.div`
    align-items: center;
    color: #FFFFFF;
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

export const Day = styled.div`
    align-items: center;
    color: #FFFFFF;
    display: flex;
    height: 100%;
    justify-content: flex-end;
    padding-right: 10px;
    width: 100%;
`;
