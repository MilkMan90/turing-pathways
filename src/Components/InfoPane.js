/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import {Match} from 'react-router';
import UserProfile from './UserProfile.js';


class InfoPane extends Component {
  render() {
    console.log(this.props.userDisplay);
    return (
      <div className="info-pane">
        <Match pattern="/editprofile" render={()=> (
            <UserProfile user={this.props.user}/>
          )
        }/>
        {/* <Match pattern="/" render={()=> (

          )
        }/> */}

        {this.props.userDisplay != null ?
          <div className="infopane-user-container">
            <h2>{this.props.userDisplay.name}</h2>
            <p>{this.props.userDisplay.cohort} {this.props.userDisplay.program}</p>
            <img className="infopane-user-img" src={this.props.userDisplay.imgsrc}/>
          </div>
          :
          <h2> test </h2>
        }
      </div>
    )
  }
}

export default InfoPane;
