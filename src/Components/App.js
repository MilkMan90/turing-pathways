import React, { Component } from 'react';
import BaseMap from './BaseMap.js';
import Header from './Header.js';
import pathData from '../fakeData.js';
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
      user: {},
      studentDisplay: null,
      pathData: pathData,
      cityData: []
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
        this.setState({
          pathData: res
        })
      })
    fetch('/cities')
      .then((res)=>{
        return res.json()
      })
      .then((res)=>{
        console.log(res);
        this.setState({
          cityData: res
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
      user: {}
    })
  }
  setHoverDisplay(user){
    this.setState({
      userDisplay: user,
      cityDisplay: null
    })
  }
  render() {
    return (
      <div className="App">
        <Header auth={auth}
          logOut={()=>this.logOut()}
          user={this.state.user}
        />
        <InfoPane
          auth={auth}
          user={this.state.user}
          userDisplay={this.state.userDisplay}
        />
        <BaseMap
          paths={this.state.pathData}
          cities={this.state.cityData}
          handlePathHover={(user)=>this.setHoverDisplay(user)}
        />

        <Match pattern="/profile" component={UserProfile} />

      </div>
    );
  }
}

export default App;
