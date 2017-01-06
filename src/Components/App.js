import React, { Component } from 'react';
import BaseMap from './BaseMap.js';
import Header from './Header.js';
import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <BaseMap/>
      </div>
    );
  }
}

export default App;
