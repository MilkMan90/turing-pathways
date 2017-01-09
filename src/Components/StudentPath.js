/*eslint-disable no-unused-vars*/

import React, { Component } from 'react';
import AllPaths from './allPaths.js'
import AllMarkers from './allMarkers.js'
import L from 'leaflet'
import filter from 'lodash'

class StudentPath extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let path = this.props.data.path.map((item)=>{
      return [item.lat, item.lon]
    });
    return (
      <div className="paths-container">
        <AllPaths paths={path} info={this.props.data}/>
        <AllMarkers markers={this.props.data.path}/>
      </div>
    );
  }
}

export default StudentPath;
