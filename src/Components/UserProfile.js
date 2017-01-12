/*eslint-disable no-unused-vars*/

import React, { Component } from 'react';
import PathsForm from './PathsForm.js'

class UserProfile extends Component {
  constructor(props){
    super(props)
    this.state =  {
      newRecord: true,
      currentCityIndex: 0,
      cohort: "",
      program: "",
      path: [{id: "",
              city: "",
              state: "",
              type: "",
              desc: "",
              lat: '',
              lon: ''
            }]
    };
  }
  componentDidMount(){
    fetch(`/users/${this.props.user.email}`)
      .then((res)=>{
        return res.json()
      })
      .then((res)=>{
        console.log(res);
        if(res !== null){
          this.setState({
            newRecord: false,
            cohort: res.cohort,
            program: res.program,
            path: res.path
          })
        }
      })
  }
  submitForm(e){
    e.preventDefault()
    //check if updating or adding new record
    if(this.state.newRecord){
      this.postNewUser()
    } else {
      this.updateExistingUser()
    }
  }
  postNewUser(){
    fetch(`/users`, {
	      method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
	      body: JSON.stringify({
          email: this.props.user.email,
          name: this.props.user.name,
          cohort: this.state.cohort,
          program: this.state.program,
          path: this.state.path.slice(0, this.state.path.length-1)
        })
    })
    .then((res)=>{
      console.log(res);
      // return res.json()
    })
    .then((res)=>{

    })
  }
  updateExistingUser(){
    fetch(`/users/${this.props.user.email}`, {
	      method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
	      body: JSON.stringify({
          cohort: this.state.cohort,
          program: this.state.program,
          path: this.state.path.slice(0, this.state.path.length-1)
        })
    })
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
      console.log(res);
    })
  }
  updateState(value, key){
    this.setState({
      [key]: value
    })
  }
  updatePath(value, key){
    let tempPath = this.state.path;
    tempPath[this.state.currentCityIndex][key] = value;
    this.setState({
      path: tempPath
    })
  }
  saveCityToPath(city){
    let tempPath = this.state.path;
    tempPath[this.state.currentCityIndex] = city;
    this.setState({
      path: tempPath
    })
    this.nextPath();
  }
  nextPath(){
    let tempPath = this.state.path;
    if(this.state.currentCityIndex === this.state.path.length-1){
      tempPath = this.state.path;
      tempPath.push({
        id: "",
        city: "",
        state: "",
        type: "",
        desc: ""
      })
    }
    this.setState({
      currentCityIndex: this.state.currentCityIndex + 1,
      path: tempPath
    })
  }
  render() {
    console.log(this.state.path);
    let pathsForm = <PathsForm
                // currentCity={this.state.path[this.state.currentCityIndex]}
                city={this.state.path[this.state.currentCityIndex].city}
                state={this.state.path[this.state.currentCityIndex].state}
                type={this.state.path[this.state.currentCityIndex].type}
                desc={this.state.path[this.state.currentCityIndex].desc}
                lat={this.state.path[this.state.currentCityIndex].lat}
                lon={this.state.path[this.state.currentCityIndex].lon}

                updatePath={(value, key)=>this.updatePath(value, key)}
                pathNumber={this.state.currentCityIndex}
                cityList={this.props.cityList}
                saveCityToPath={(city)=>this.saveCityToPath(city)}
                nextPath={(e)=>this.nextPath(e)}
              />
    return (
      <div className="new-user-form">
        {this.props.user ? <h2>{this.props.user.name}</h2> : <h2> No User </h2>}
        <form>
          <label>
            Cohort Number(eg. 1608)
            <input type="text" value={this.state.cohort} onChange={(e)=>this.updateState(e.target.value, "cohort")}/>
          </label>
          <label>
            Program
            <select value={this.state.program} onChange={(e)=>this.updateState(e.target.value, "program")}>
              <option value="frontend">Front End</option>
              <option value="backend">Back End</option>
            </select>
          </label>
          {pathsForm}
          <button onClick={(e)=>this.submitForm(e)}>Save Profile</button>
        </form>
      </div>
    )
  }
}

export default UserProfile;
