/*eslint-disable import/no-unresolved*/

import React from 'react';
import {render} from 'react-dom';
import App from './Components/App';
import './styles/index.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

const Root = ()=> {
    return (
      <Router>
        <div>
          <main>
            <Route path="/" component={App} />
            {/* <Miss component={App}/> */}
          </main>
        </div>
      </Router>
    )
}



render( <Root />, document.getElementById('root') );

export default Root;
