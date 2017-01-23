/*eslint-disable no-unused-vars*/

import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer, LayersControl, ZoomControl, Tooltip } from 'react-leaflet';
import StudentPaths from './StudentPaths.js'
import AllMarkers from './allMarkers.js'
import L from 'leaflet'

class BaseMap extends Component {
  constructor(props){
    super(props)
    this.state =  {

    };
  }
  render() {

    return (
      <div className="map-container">
        <Map
          className="map"
          zoomControl={false}
          center={[39.750809, -104.996810]}
          zoom={4}
          maxBounds={[[85, 100],[-85, -280]]}
        >
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            maxZoom={10}
            minZoom={2}
          />
          <StudentPaths
            paths={this.props.paths.users}
            handleHover={this.props.handlePathHover}
            cohortFilter={this.props.cohortFilter}
            programFilter={this.props.programFilter}
          />
          <AllMarkers
            markers={this.props.cities}
            handleHover={this.props.handleCityHover}
            cohortFilter={this.props.cohortFilter}
            programFilter={this.props.programFilter}
            paths={this.props.paths.users}
            />
          <ZoomControl
            position='bottomright'
          />
        </Map>
      </div>
    );
  }
}

export default BaseMap;
