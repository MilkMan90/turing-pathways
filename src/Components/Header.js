import React, { Component } from 'react';
import turingLogo from '../imgs/turing-logowheel.png'

class Header extends Component {
  render() {
    return (
      <header>
        <img className="logo" src={turingLogo}/>
        <h1 className="title">Pathways</h1>
      </header>
    )
  }
}

export default Header;
