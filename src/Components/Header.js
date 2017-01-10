/*eslint-disable no-unused-vars*/

import React, { Component } from 'react';
import {Link, Match} from 'react-router'
import LoginButton from './LoginButton.js'
import AuthService from '../utils/AuthService.js'

import turingLogo from '../imgs/turing-logowheel.png'

class Header extends Component {

  render() {
    let userDisplay;
    if(this.props.user.name){
      userDisplay =
        <div className="user-container">
          <h2 className="header-username">Welcome {this.props.user.name}</h2>
          <img className="header-user-thumbnail" alt={` of ${this.props.user.name}`} src={this.props.user.picture}/>
          <Link to="/editprofile">Edit My Path</Link>
        </div>
    }
    return (
      <header>
        <img className="logo" role="presentation" src={turingLogo}/>
        <h1 className="title">Pathways</h1>
        <div className="user-auth">
          <LoginButton className="log-button" auth={this.props.auth} logOut={this.props.logOut}/>
          {userDisplay}
        </div>
      </header>
    )
  }
}

export default Header;
