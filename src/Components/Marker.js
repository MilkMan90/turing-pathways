import React, { Component } from 'react';
import { Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet'

class Mark extends Component {
  render() {
    console.log(this.props.info);
    return (
      <div className="marker-container">
        <Marker
          position={this.props.location}
        >
          <Tooltip
            sticky={true}
            interactive={true}
          >
            <div>
              <h4>{this.props.info.city}</h4>
              <p>{this.props.info.name}</p>
            </div>
          </Tooltip>
        </Marker>
      </div>
    );
  }
}

export default Mark;
