/*eslint-disable no-unused-vars*/

import React, { PropTypes as T, Component } from 'react'
import AuthService from '../utils/AuthService'
import githublogo from '../imgs/github-logo.svg'

export class LoginButton extends React.Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }
  logOut() {
    this.props.auth.logout();
    this.props.logOut();
  }
  logIn(){
    this.props.auth.login();
  }
  render() {
    const { auth } = this.props
    return (
      <div>
        {auth.loggedIn() ? <button className="auth-button-logout" onClick={()=>this.logOut()}>Log Out</button>
        : <button
          className={`auth-button-login ${this.props.className}`} onClick={()=>this.logIn()}>
            Log In With Github
            <img
              className="github-logo"
              src={githublogo}
            />
          </button>
        }
      </div>
    )
  }
}

export default LoginButton;
