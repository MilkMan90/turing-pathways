import React, { Component } from 'react';

class PathsForm extends Component {
  constructor(props){
    super(props)
    this.state =  {
      name: "Honeoye Falls, NY",
      city: "Honeoye Falls, NY",
      state: "NY",
      lat: 42.952286,
      lon: -77.590276,
      type: "hometown",
      desc:"Home!"
    };
  }
  render() {
    return (
      <div className='single-path-form'>
        <label>
          Location Title
          <input type="text" ref="path-title"/>
        </label>
        <label>
          City
          <input type="text" ref="path-city"/>
        </label>
        <label>
          US State or Country
          <input type="text" ref="path-state"/>
        </label>
        <label>
          Type
          <select ref="type">
            <option value="hometown">Home-Town</option>
            <option value="school">School</option>
            <option value="work">Work</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Description
          <input type="text" ref="path-description"/>
        </label>
      </div>
    )
  }
}

export default PathsForm;
