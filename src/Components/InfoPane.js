/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import {Match} from 'react-router';
import UserProfile from './UserProfile.js';


class InfoPane extends Component {
  render() {
    return (
      <div className="info-pane">
        <Match pattern="/editprofile" render={()=> (
            <UserProfile user={this.props.user}/>
          )
        }/>
      </div>
    )
  }
}

export default InfoPane;
