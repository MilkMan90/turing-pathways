/*eslint-disable no-unused-vars*/

import React, { Component } from 'react';
import StudentPath from './StudentPath.js'
import L from 'leaflet'
import filter from 'lodash'

class StudentPaths extends Component {

  render() {
    let studentPaths;

    if(this.props.paths){
      studentPaths = this.props.paths.map((user, i)=>{
        return <StudentPath
                  key={i}
                  data={user}
                  handleHover={this.props.handleHover}
              />
      })
    }
    return (
      <div className="all-student-paths">
        {studentPaths}
      </div>
    );
  }
}

export default StudentPaths;
