import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    background: ${ props => props.color || '#000000' };
    border-radius: 4px;
    box-sizing: border-box;
    color: ${ props => props.color === '#FFFFFF' ? '#000000' : '#FFFFFF' };
    cursor: pointer;
    display: flex;
    flex-wrap: nowrap;
    font-size: 12px;
    height: 20px;
    margin-bottom: 5px;
    padding: 0 5px;
    width: 100%;
`;

export const Title = styled.div`
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100% - 40px);
    word-break: break-all;
`;

export const Time = styled.div`
    line-height: 20px;
    overflow: hidden;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 40px;
    word-break: break-all;
`;
