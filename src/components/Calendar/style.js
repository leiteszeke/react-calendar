// Dependencies
import styled from 'styled-components';

export const Container = styled.div.attrs(props => ({
  className: `weeks_${ props.weeks }`,
}))`
  display: flex;
  flex-wrap: wrap;
  height: calc(100% - 80px);
  width: 100%;

  @media (max-width: 767px) {
    overflow: auto;
  }
`;

export const Week = styled.div`
  display: flex;
  width: 100%;

  ${ Container }.weeks_5 & {
    height: 20%;
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    height: auto;
    width: 100%;

    ${ Container }.weeks_5 & {
      height: auto;
    }
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
  width: calc(100% / 7);

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

  @media (max-width: 767px) {
    flex-direction: row-reverse;
    height: 75px;
    width: 100%;

    &.disabled {
      display: none;
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
      background: #FF3030;
      text-align: center;
      width: 30px;
    }
  }

  > p {
    margin: 0;
  }

  @media (max-width: 767px) {
    padding-right: 5px;
    width: 40px;
  }
`;

export const EventList = styled.div`
  align-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  color: black;
  display: flex;
  flex-wrap: wrap;
  height: calc(100% - 45px);
  justify-content: center;
  overflow: auto;
  padding: 0 5px;
  width: 100%;

  @media (max-width: 767px) {
    height: calc(100% - 20px);
    margin-top: 10px;
    overflow: auto;
    width: calc(100% - 40px);
  }
`;