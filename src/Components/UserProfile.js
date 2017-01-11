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
      path: []
    };
  }
  componentDidMount(){
    fetch(`/users/${this.props.user.clientID}`)
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
          clientID: this.props.user.clientID,
          name: this.props.user.name,
          cohort: this.state.cohort,
          program: this.state.program
        })
    })
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{

    })
  }
  updateExistingUser(){
    fetch(`/users/${this.props.user.clientID}`, {
	      method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
	      body: JSON.stringify({
          cohort: this.state.cohort,
          program: this.state.program,
          path: this.state.path
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
  }
  nextPath(e){
    e.preventDefault();
    let tempPath = this.state.path;
    if(this.state.currentCityIndex === this.state.path.length-1){
      let tempPath = this.state.path;
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
    let pathsForm;
    if(this.state.path.length > 0){
      pathsForm = <PathsForm
                // currentCity={this.state.path[this.state.currentCityIndex]}

                title={this.state.path[this.state.currentCityIndex].name}
                city={this.state.path[this.state.currentCityIndex].city}
                state={this.state.path[this.state.currentCityIndex].state}
                type={this.state.path[this.state.currentCityIndex].type}
                desc={this.state.path[this.state.currentCityIndex].desc}

                updatePath={(value, key)=>this.updatePath(value, key)}
                pathName={"Home Town"}
                cityList={this.props.cityList}
                saveCityToPath={(city)=>this.saveCityToPath(city)}
                nextPath={(e)=>this.nextPath(e)}
              />
    }
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
