/*eslint-disable no-unused-vars*/

import React, { Component } from 'react';
import {Link, Match} from 'react-router'
import LoginButton from './LoginButton.js'
import AuthService from '../utils/AuthService.js'

import turingLogo from '../imgs/turing-logowheel.png'

class Header extends Component {

  render() {
    let userDisplay;
    if(this.props.user){
      userDisplay = <h2 className="header-username">Welcome {this.props.user.name}</h2>
    }
    return (
      <header>
        <img className="logo" src={turingLogo}/>
        <h1 className="title">Pathways</h1>
        <Link to="/newuser">Add a New Path</Link>
        <div className="user-container">
          <LoginButton className="log-button"auth={this.props.auth} logOut={this.props.logOut}/>
          {userDisplay}
        </div>
      </header>
    )
  }
}

export default Header;
