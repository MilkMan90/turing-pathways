/*eslint-disable no-unused-vars*/

import React, { Component } from 'react';
import StudentPath from './StudentPath.js'
import L from 'leaflet'
import filter from 'lodash'

class StudentPaths extends Component {

  render() {

    let studentPaths = this.props.paths;

    if(studentPaths){
      if(this.props.cohortFilter !== 'all'){
        studentPaths = studentPaths.filter((user)=>{
            return user.cohort === this.props.cohortFilter
        })
      }
      if(this.props.programFilter !== 'all'){
        studentPaths = studentPaths.filter((user)=>{
            return user.program === this.props.programFilter
        })
      }
      studentPaths = studentPaths.map((user, i)=>{
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
