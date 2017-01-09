import React, { Component } from 'react';
import BaseMap from './BaseMap.js';
import Header from './Header.js';
import data from '../fakeData.js';
import UserProfile from './UserProfile.js';
import InfoPane from './InfoPane.js';
import {Match} from 'react-router';
import '../styles/index.css';

import AuthService from '../utils/AuthService.js'

const auth = new AuthService('3OrpSpUDH5zkAEcMNbHsfymMxbgnpERB', 'milkman.auth0.com');

class App extends Component {
  constructor(props){
    super(props)
    this.state =  {
      user: null,
      studentDisplayID: 0,
      data: data
    };
    auth.on('profile_updated', (newProfile) => {
      this.setState({user: newProfile})
    })
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
      this.setState({
        user:auth.getProfile()
      })
  }
  setStudentID(){

  }
  logOut(){
    this.setState({
      user: null
    })
  }
  render() {
    return (
      <div className="App">
        <Header auth={auth}
          logOut={()=>this.logOut()}
          user={this.state.user}
        />
        <InfoPane auth={auth} user={this.state.user}/>
        <BaseMap data={this.state.data} />

        <Match pattern="/profile" component={UserProfile} />

      </div>
    );
  }
}

export default App;
