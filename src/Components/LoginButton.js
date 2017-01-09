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
    console.log(auth.loggedIn());
    return (
      <div className="auth-button">
        {auth.loggedIn() ? <button onClick={()=>this.logOut()}>Logout</button>
        : <button onClick={()=>this.logIn()}>Login</button>
        }
      </div>
    )
  }
}

export default LoginButton;
