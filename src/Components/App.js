import React, { Component } from 'react';
import BaseMap from './BaseMap.js';
import Header from './Header.js';
import data from '../fakeData.js'
import InfoPane from './InfoPane.js';
import '../styles/index.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state =  {
      studentDisplayID: 0
    };
  }
  setStudentID(){

  }
  render() {
    return (
      <div className="App">
        <Header/>
        <InfoPane/>
        <BaseMap data={data} />
      </div>
    );
  }
}

export default App;
