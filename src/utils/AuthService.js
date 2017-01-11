/*eslint-disable no-unused-vars*/

import { EventEmitter } from 'events'
import Auth0Lock from 'auth0-lock'
import { BrowserRouter } from 'react-router'

export default class AuthService extends EventEmitter{
  constructor(clientId, domain) {
    // Configure Auth0
    super()

    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: 'https://turingpathways.herokuapp.com/',
        responseType: 'token',
        allowedConnections: ['github']
      }
    })
  } 
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    // binds login functions to keep this context
    this.login = this.login.bind(this)
  }

  _doAuthentication(authResult) {
    // Saves the user token
    this.setToken(authResult.accessToken)

    this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
      if (error) {
        console.log('Error loading the Profile', error)
      } else {
        this.setProfile(profile)
      }
    })
  // navigate to the home route
    // BrowserRouter.transitionTo('/')
  }

  setProfile(profile) {
    // Saves profile data to local storage
    localStorage.setItem('profile', JSON.stringify(profile))
    // Triggers profile_updated event to update the UI
    console.log(profile);
    this.emit('profile_updated', profile)
  }

  getProfile() {
    // Retrieves the profile data from local storage
    const profile = localStorage.getItem('profile')
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show()
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    return !!this.getToken()
  }

  setToken(idToken) {
    // Saves user token to local storage
    localStorage.setItem('id_token', idToken)
  }

  getToken() {
    // Retrieves the user token from local storage
    return localStorage.getItem('id_token')
  }

  logout() {
    // Clear user token and profile data from local storage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }
}
