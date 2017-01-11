import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
// import Root from './index.js';
import BaseMap from './Components/BaseMap';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
