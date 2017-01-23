/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import _ from 'lodash'

class FiltersWindow extends Component {
  constructor(props){
    super(props)
    this.state =  {
      cohortFilter: '',
      programFilter: 'all',
    };
  }
  findAndFilterCohortsNumbers(){
    return _.uniqBy((this.props.users.users), 'cohort')
      .map((item)=>{
      return item.cohort
    }).filter((item)=>{
      return item.length === 4
    }).sort()
  }
  updateCohortFilter(e){
    // this.props.applyFilter()
    this.setState({
      cohortFilter: e.target.value
    })
  }
  updateProgramFilter(e){
    this.setState({
      programFilter: e.target.value
    })
  }
  render() {
    let cohortValues = this.findAndFilterCohortsNumbers();
    let cohortOptions = cohortValues.map((cohort, i)=>{
      return <option key={i} value={cohort}>{cohort}</option>
    })
    return (
      <div className="filter-controls-container">
        <form>
          <h5>Filter By: </h5>
          <label>
            Cohort
            <select value={this.props.cohortFilter} onChange={(e)=>{this.props.handleCohortFilter(e)}}>
              <option value='all'>All</option>
              {cohortOptions}
            </select>
          </label>
          <label>
            Program
            <select value={this.props.programFilter} onChange={(e)=>{this.props.handleProgramFilter(e)}}>
              <option value='all'>All</option>
              <option value='frontend'>Front End</option>
              <option value='backend'>Back End</option>
            </select>
          </label>
        </form>
      </div>
    )
  }
}

export default FiltersWindow;
