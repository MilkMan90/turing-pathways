/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet'
import home from '../imgs/home.svg'
import work from '../imgs/work.svg'
import school from '../imgs/school.svg'

class Mark extends Component {
  focusHover(){
    this.props.handleHover(this.props.info.id);
  }
  render() {
    let icon;
    switch(this.props.info.type){
      case 'work':
        icon = L.icon({
          iconUrl: work,
          iconSize: [20, 20],
          popupAnchor: [-3, -76],
        });
        break;
      case 'education':
        icon = L.icon({
          iconUrl: school,
          iconSize: [20, 20],
          popupAnchor: [-3, -76],
        });
        break;
      case 'hometown':
        icon = L.icon({
          iconUrl: home,
          iconSize: [20, 20],
          popupAnchor: [-3, -76],
        });
        break;
      default:
        icon = L.icon({
          iconUrl: work,
          iconSize: [20, 20],
          iconAnchor: [22, 94],
          popupAnchor: [-3, -76],
          shadowSize: [68, 95],
          shadowAnchor: [22, 94]
        });
        break;
    }
    return (
      <div className="marker-container">
        <Marker
          position={this.props.location}
          onMouseOver={()=>{this.focusHover()}}
          // icon={icon}
        >
          <Tooltip
            sticky={true}
            interactive={true}
          >
            <div>
              <h4>{this.props.info.city}</h4>
            </div>
          </Tooltip>
        </Marker>
      </div>
    );
  }
}

export default Mark;
