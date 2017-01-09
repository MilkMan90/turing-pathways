import React, { Component } from 'react';
import BaseMap from './BaseMap.js';
import Header from './Header.js';
import data from '../fakeData.js';
import NewUserForm from './NewUserForm.js';
import InfoPane from './InfoPane.js';
import {Match, Link} from 'react-router';
import '../styles/index.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state =  {
      studentDisplayID: 0,
      userData: data
    };
  }
  componentDidMount(){
    fetch('/users')
      .then((res)=>{
        return res.json()
      })
      .then((res)=>{
        console.log(res);
        this.setState({
          data: res
        })
      })
  }
  setStudentID(){

  }
  render() {
    return (
      <div className="App">
        <Header/>
        {/* <InfoPane/> */}
        <BaseMap data={data} />

        <Match pattern="/newuser" component={NewUserForm} />
      </div>
    );
  }
}

export default App;
