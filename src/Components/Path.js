/*eslint-disable no-unused-vars*/

import React, { Component } from 'react';
import { Map, Popup, TileLayer, LayersControl, Polyline, Tooltip } from 'react-leaflet';
import L from 'leaflet'

class Path extends Component {
  constructor(props){
    super(props)
    this.state =  {
      pathColor: "orange",
      pathOpacity: 0.65
    };
  }
  focusHover(){
    this.props.handleHover(this.props.info)
    this.setState({
      pathColor: "purple",
      pathOpacity: 1.0
    })
  }
  mouseLeave(){
    this.setState({
      pathColor: "orange",
      pathOpacity: 0.35
    })
  }
  render() {
    return (
      <div className="path-container">
        <Polyline
          color={this.state.pathColor}
          opacity={this.state.pathOpacity}
          positions={this.props.path}
          smoothFactor={1}
          interactive={true}
          weight={3}
          onMouseOver={()=>{this.focusHover()}}
          onMouseOut={()=>{this.mouseLeave()}}
        >
          <Tooltip
            sticky={true}
            interactive={true}
          >
            <div>
              <p>{this.props.info.name}</p>
              <p>{this.props.info.cohort}</p>
              <p>{this.props.info.program}</p>
            </div>
          </Tooltip>
        </Polyline>
      </div>
    );
  }
}

export default Path;
