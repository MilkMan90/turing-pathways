import React, { Component } from 'react';
import {Link, Match} from 'react-router'

import turingLogo from '../imgs/turing-logowheel.png'

class Header extends Component {
  render() {
    return (
      <header>
        <img className="logo" src={turingLogo}/>
        <h1 className="title">Pathways</h1>
        <Link to="/newuser">Add a New Path</Link>
      </header>
    )
  }
}

export default Header;
