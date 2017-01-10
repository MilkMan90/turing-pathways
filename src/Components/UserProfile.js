/*eslint-disable no-unused-vars*/

import React, { Component } from 'react';

class UserProfile extends Component {
  submitForm(e){
    e.preventDefault()
    console.log(`Name : ${this.refs.name.value} Program: ${this.refs.program.value}`);
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
            <input type="text" ref="cohort"/>
          </label>
          <label>
            Program
            <select ref="program">
              <option value="frontend">Front End</option>
              <option value="backend">Back End</option>
            </select>
          </label>
          <button onClick={(e)=>this.submitForm(e)}>Submit</button>
        </form>
      </div>
    )
  }
}

export default UserProfile;
