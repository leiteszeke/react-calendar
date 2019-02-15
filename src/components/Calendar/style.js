// Dependencies
import styled from 'styled-components';

export const Container = styled.div.attrs(props => ({
  className: `weeks_${ props.weeks }`,
}))`
  display: flex;
  flex-wrap: wrap;
  height: calc(100% - 80px);
  width: 100%;
`;

export const Week = styled.div`
  display: flex;
  width: 100%;

  ${ Container }.weeks_5 & {
    height: 20%;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const Day = styled.div.attrs(props => ({
  className: props.classes,
}))`
  align-items: flex-start;
  border-bottom: 1px solid #CCCCCC;
  border-right: 1px solid #CCCCCC;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  position: relative;
  width: 100%;

  &:last-child {
    border-right: none;
  }

  &.disabled {
    pointer-events: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:after {
      background: rgba(0, 0, 0, 0.5);
      content: '';
      height: 100%;
      position: absolute;
      width: 100%;
    }
  }
`;

export const Number = styled.div.attrs(props => ({
  className: props.classes,
}))`
  align-items: flex-start;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-size: 24px;
  height: 40px;
  justify-content: flex-end;
  padding-right: 10px;
  padding-top: 5px;
  width: 100%;

  &.active {
    > p {
      border-radius: 15px;
      background: red;
      text-align: center;
      width: 30px;
    }
  }

  > p {
    margin: 0;
  }
`;

export const EventList = styled.div`
  align-items: center;
  box-sizing: border-box;
  color: black;
  display: flex;
  flex-wrap: wrap;
  height: calc(100% - 45px);
  justify-content: center;
  overflow: auto;
  width: 100%;
`;