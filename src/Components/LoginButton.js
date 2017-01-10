/*eslint-disable no-unused-vars*/

import React, { PropTypes as T, Component } from 'react'
import AuthService from '../utils/AuthService'

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
        : <button  className="auth-button-login" onClick={()=>this.logIn()}>Log In With Github</button>
        }
      </div>
    )
  }
}

export default LoginButton;
