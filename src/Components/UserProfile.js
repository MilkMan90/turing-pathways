/*eslint-disable no-unused-vars*/

import React, { Component } from 'react';
import PathsForm from './PathsForm.js'

class UserProfile extends Component {
  constructor(props){
    super(props)
    this.state =  {
      newRecord: true,
      numberOfPaths: 1,
      cohort: "",
      program: "",
    };
  }
  componentDidMount(){
    fetch(`/users/${this.props.user.clientID}`)
      .then((res)=>{
        return res.json()
      })
      .then((res)=>{
        if(res !== null){
          this.setState({
            newRecord: false,
            cohort: res.cohort,
            program: res.program
          })
        }
      })
  }
  submitForm(e){
    e.preventDefault()
    //check if updating or adding new record
    console.log(this.state.newRecord);
    // if(this.state.newRecord){
    //   this.postNewUser()
    // } else {
    //   this.updateExistingUser()
    // }
  }
  postNewUser(){

  }
  updateExistingUser(){
    fetch(`/users/${this.props.user.clientID}`, {
	      method: 'put',
	      body: JSON.stringify({
          clientID: this.props.user.clientID,
          cohort: this.state.cohort,
          program: this.state.program
        })
    });
  }
  render() {
    // let pathsForm;
    // for(let i=0; i < this.state.numberOfPaths; i++){
    //
    // }
    return (
      <div className="new-user-form">
        {this.props.user ? <h2>{this.props.user.name}</h2> : <h2> No User </h2>}
        <form>
          <label>
            Cohort Number(eg. 1608)
            <input type="text" value={this.state.cohort}/>
          </label>
          <label>
            Program
            <select value={this.state.program}>
              <option value="frontend">Front End</option>
              <option value="backend">Back End</option>
            </select>
          </label>
          <PathsForm
            pathName={"Home Town"}
          />
          <button onClick={(e)=>this.submitForm(e)}>Submit</button>
        </form>
      </div>
    )
  }
}

export default UserProfile;
