import React, { Component } from 'react';
import { Map, Popup, TileLayer, LayersControl, Polyline, Tooltip } from 'react-leaflet';
import L from 'leaflet'

var mattPath = [
    [42.952286, -77.590276],
    [42.443961, -76.501881],
    [42.098687, -75.917974],
    [43.161030, -77.610922],
    [39.739236, -104.990251]
];

class Path extends Component {
  render() {
    return (
      <div className="path-container">
        <Polyline
          positions={this.props.path}
          smoothFactor={1}
          weight={1}
        >
          <Tooltip
            sticky={true}
            interactive={true}
          >
            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
          </Tooltip>
        </Polyline>
      </div>
    );
  }
}

export default Path;
