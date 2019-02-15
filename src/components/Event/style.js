import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    background: ${ props => props.color || '#000000' };
    border-radius: 4px;
    color: #FFFFFF;
    cursor: pointer;
    display: flex;
    flex-wrap: nowrap;
    font-size: 12px;
    height: 20px;
    margin: 0 5px;
    margin-bottom: 5px;
    padding: 0 5px;
    width: 100%;
`;

export const Title = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100% - 40px);
    word-break: break-all;
`;

export const Time = styled.div`
    text-align: right;
    width: 40px;
`;
