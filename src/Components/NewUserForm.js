import React, { Component } from 'react';

class NewUserForm extends Component {
  constructor(props){
    super(props)
    this.state =  {
      id: 1,
      name: "",
      imgsrc: "",
      cohort: "",
      program: "",
      path: [],
      numberOfPaths: 1
    };
  }
  submitForm(e){
    e.preventDefault()
    console.log(`Name : ${this.refs.name.value} Program: ${this.refs.program.value}`);
  }
  render() {
    let pathsForm;
    for(let i=0; i < this.state.numberOfPaths; i++){
      
    }
    return (
      <div className="new-user-form">
        <p>New User</p>
        <form>
          <label>
            Name
            <input type="text" ref="name"/>
          </label>
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

export default NewUserForm;
