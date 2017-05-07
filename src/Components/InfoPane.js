/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {Route} from 'react-router-dom';
import UserProfile from './UserProfile.js';
import CityDisplay from './CityDisplay.js';
import UserDisplay from './UserDisplay.js';

class InfoPane extends Component {
  render() {
    let cityDisplay;
    let studentCityList;
    if(this.props.userCityList){
      studentCityList = this.props.userCityList.map((user, i)=>{
        let userCity = user.path.find((city)=>{
          return city.city === this.props.cityDisplay.city
        })
        return <li key={i} className="infopane-city-student-container">
                <p className="infopane-city-student-info">
                  {user.name}: {user.cohort} {user.program}
                </p>
                <p className="infopane-city-student-info">
                  <a href={`mailto:${user.email}`}>email</a>
                </p>
              </li>
      })
    }
    return (
      <div className="info-pane-container">
        <Route path="/editprofile" render={()=> (
          <ReactCSSTransitionGroup
            transitionName="wide"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            <UserProfile
              user={this.props.user}
              cityList={this.props.cityList}
              hitAPI={this.props.hitAPI}
            />
          </ReactCSSTransitionGroup>
          )
        }/>
         <Route path="/" exact render={()=> (
           <div>
           {this.props.userDisplay
             &&
             <UserDisplay
              user={this.props.userDisplay}
            />}
           {this.props.cityDisplay
             &&
            <CityDisplay
              city={this.props.cityDisplay}
              studentCityList={studentCityList}
            />}
           </div>
          )
        }/>
      </div>
    )
  }
}

export default InfoPane;
