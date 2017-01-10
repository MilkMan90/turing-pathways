/*eslint-disable import/no-unresolved*/

import React from 'react';
import {render} from 'react-dom';
import App from './Components/App';
import './styles/index.css';

import {BrowserRouter, Match, Miss} from 'react-router'

const Root = ()=>{
  return (
    <BrowserRouter>
      <div>
        <main>
          <Match pattern="/" component={App} />
          <Miss component={App}/>
        </main>
      </div>
    </BrowserRouter>
  )
}

render(
  <Root />,
  document.getElementById('root')
);
