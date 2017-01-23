import React, { Component } from 'react';
import BaseMap from './BaseMap.js';
import Header from './Header.js';
import FiltersWindow from './FiltersWindow';
import pathData from '../fakeData.js';
import UserProfile from './UserProfile.js';
import InfoPane from './InfoPane.js';
import LogInWelcome from './LogInWelcome.js';
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
      cityData: [],
      showLogInHelper: true,
      cohortFilter: 'all',
      programFilter: 'all',
    };
    auth.on('profile_updated', (newProfile) => {
      this.setState({
        showLogInHelper: false,
        user_github: newProfile
      })
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
        this.setState({
          cityData: res
        })
      })
      this.setState({
        user_github:auth.getProfile()
      })

      if(auth.loggedIn()){
        this.setState({
          showLogInHelper: false
        })
      }
  }
  hitAPI(){
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
  }
  setStudentID(){

  }
  logOut(){
    this.setState({
      user_github: {}
    })
  }
  closeLogInWelcomeHelper(){
    this.setState({
      showLogInHelper: false
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
  updateCohortFilter(e){
    this.setState({
      cohortFilter: e.target.value
    })
  }
  updateProgramFilter(e){
    this.setState({
      programFilter: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <Header
          auth={auth}
          logOut={()=>this.logOut()}
          user={this.state.user_github}
        />
        {this.state.showLogInHelper &&
          <LogInWelcome
            auth={auth}
            logOut={()=>this.logOut()}
            closeLogInWelcomeHelper={()=>this.closeLogInWelcomeHelper()}
          />}
        <InfoPane
          auth={auth}
          cityList={this.state.cityData.cities}
          user={this.state.user_github}
          userDisplay={this.state.userDisplay}
          cityDisplay={this.state.cityDisplay}
          userCityList={this.state.userList}
          hitAPI={()=>{this.hitAPI()}}
        />
        <FiltersWindow
          users={this.state.pathData}
          handleCohortFilter={(e)=>this.updateCohortFilter(e)}
          handleProgramFilter={(e)=>this.updateProgramFilter(e)}
          programFilter={this.state.programFilter}
          cohortFilter={this.state.cohortFilter}
        />
        <BaseMap
          paths={this.state.pathData}
          cities={this.state.cityData}
          handlePathHover={(user)=>this.setPathDisplay(user)}
          handleCityHover={(cityID)=>this.setCityDisplay(cityID)}
          cohortFilter={this.state.cohortFilter}
          programFilter={this.state.programFilter}
        />

        {/* <Match pattern="/profile" component={UserProfile} /> */}

      </div>
    );
  }
}

export default App;
