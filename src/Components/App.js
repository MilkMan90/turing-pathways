import React, { Component } from 'react';
import BaseMap from './BaseMap.js';
import Header from './Header.js';
import pathData from '../fakeData.js';
import UserProfile from './UserProfile.js';
import InfoPane from './InfoPane.js';
import {Match} from 'react-router';
import '../styles/index.css';

import AuthService from '../utils/AuthService.js'

const geocoding = "AIzaSyBflDyoDsV7jJjXo_bNuvdcbOqbRqnS73o"

const auth = new AuthService('3OrpSpUDH5zkAEcMNbHsfymMxbgnpERB', 'milkman.auth0.com');

class App extends Component {
  constructor(props){
    super(props)
    this.state =  {
      user_github: {},
      studentDisplay: null,
      pathData: pathData,
      cityData: []
    };
    auth.on('profile_updated', (newProfile) => {
      this.setState({user_github: newProfile})
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
        user_github:auth.getProfile()
      })
  }
  setStudentID(){

  }
  logOut(){
    this.setState({
      user_github: {}
    })
  }
  setPathDisplay(user){
    this.setState({
      userDisplay: user,
      cityDisplay: null,
      userList: null
    })
  }
  setCityDisplay(cityname){
    let city=this.state.cityData.cities.find((city)=>{
      return city.city.toLowerCase() === cityname.toLowerCase()
    })
    let userArray=this.state.pathData.users.filter((user)=>{
        let cityMatch = user.path.find((city)=>{
          return city.city.toLowerCase() === cityname.toLowerCase()
        })
        return cityMatch !== undefined
    })
    this.setState({
      userDisplay: null,
      cityDisplay: city,
      userList: userArray
    })
  }
  render() {
    return (
      <div className="App">
        <Header auth={auth}
          logOut={()=>this.logOut()}
          user={this.state.user_github}
        />
        <InfoPane
          auth={auth}
          cityList={this.state.cityData.cities}
          user={this.state.user_github}
          userDisplay={this.state.userDisplay}
          cityDisplay={this.state.cityDisplay}
          userCityList={this.state.userList}
        />
        <BaseMap
          paths={this.state.pathData}
          cities={this.state.cityData}
          handlePathHover={(user)=>this.setPathDisplay(user)}
          handleCityHover={(cityID)=>this.setCityDisplay(cityID)}
        />

        {/* <Match pattern="/profile" component={UserProfile} /> */}

      </div>
    );
  }
}

export default App;
