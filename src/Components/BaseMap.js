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
          />
          <AllMarkers
            markers={this.props.cities}
            handleHover={this.props.handleCityHover}
            />
          <ZoomControl
            position='bottomright'
          />
          {/* <LayersControl>
            <LayersControl.Overlay name='Marker with popup'>
             <Marker position={[51.51, -0.06]}>
               <Tooltip>
                 <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
               </Tooltip>
             </Marker>
           </LayersControl.Overlay>
         </LayersControl> */}
        </Map>
      </div>
    );
  }
}

export default BaseMap;
