import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer, LayersControl, Polyline, Tooltip } from 'react-leaflet';
import Path from './Path.js'
import data from '../fakeData.js'
import L from 'leaflet'
import filter from 'lodash'

class AllPaths extends Component {
  render() {
    return (
      <div className="paths-container">
        <Path
          path={this.props.paths}
          info={this.props.info}
        />
      </div>
    );
  }
}

export default AllPaths;
