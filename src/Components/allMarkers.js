/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import Mark from './Marker.js'
import data from '../fakeData.js'
import L from 'leaflet'
import filter from 'lodash'

class AllMarkers extends Component {

  render() {
    let markerArray;
    if(this.props.markers.hasOwnProperty('cities')){
      markerArray = this.props.markers.cities.map((marker, i)=>{
        return (
          <Mark
            key={i}
            location={[+marker.lat, +marker.lon]}
            info={marker}
          />
        )
      })
    }
    return (
      <div className="paths-container">
        {markerArray}
      </div>
    );
  }
}

export default AllMarkers;
