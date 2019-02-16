// Dependencies
import React from 'react';
import { Provider } from 'react-redux';
// Containers
import ReactCalendar from './containers/ReactCalendar';

const App = ({ store }) => {
  return (
    <Provider store={ store }>
      <ReactCalendar />
    </Provider>
  )
}

export default App;