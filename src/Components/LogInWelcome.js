import React from 'react'
import LoginButton from './LoginButton.js'

const LogInWelcome = ({auth, logOut, closeLogInWelcomeHelper}) => (
  <div className="log-in-welcome-container">
    <div className="log-in-welcome-message">
      <h4>Welcome to Pathways</h4>
      <p>To create your own path,</p>
      <LoginButton
        className='login-button-helper'
        auth={auth}
        logOut={logOut}
      />
      <button
        className="close-log-in-helper-button"
        onClick={()=>closeLogInWelcomeHelper()}
      >Or just explore!
      </button>
    </div>
  </div>
)

export default LogInWelcome
