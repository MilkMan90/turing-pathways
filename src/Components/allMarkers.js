/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import Mark from './Marker.js'
import data from '../fakeData.js'
import L from 'leaflet'
import filter from 'lodash'

class AllMarkers extends Component {
  filterMarkersByCohort(markerArray){
    let students = this.props.paths.filter((user)=>{
        return user.cohort === this.props.cohortFilter
    })
    let filteredCities = markerArray.filter((city)=>{
      let result = false;
      students.forEach((student)=>{
        student.path.forEach((pathCity)=>{
          if(pathCity.city === city.city) result = true
        })
      })
      return result
    })
    return filteredCities
  }
  filterMarkersByProgram(markerArray){
    let students = this.props.paths.filter((user)=>{
        return user.program === this.props.programFilter
    })
    let filteredCities = markerArray.filter((city)=>{
      let result = false;
      students.forEach((student)=>{
        student.path.forEach((pathCity)=>{
          if(pathCity.city === city.city) result = true
        })
      })
      return result
    })
    return filteredCities
  }
  render() {
    let studentPaths = this.props.paths;


    let markerArray = this.props.markers;
    if(markerArray.hasOwnProperty('cities')){

      markerArray = this.props.markers.cities

      if(this.props.cohortFilter !== 'all'){
        markerArray = this.filterMarkersByCohort(markerArray)
      }

      if(this.props.programFilter !== 'all'){
        markerArray = this.filterMarkersByProgram(markerArray)
      }

      markerArray = markerArray.map((marker, i)=>{
        return (
          <Mark
            key={i}
            location={[+marker.lat, +marker.lon]}
            info={marker}
            handleHover={this.props.handleHover}
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
