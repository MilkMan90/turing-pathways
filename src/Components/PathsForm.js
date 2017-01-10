import React, { Component } from 'react';

class PathsForm extends Component {
  constructor(props){
    super(props)
    this.state =  {
      title: '',
      city: '',
      state: '',
      type: '',
      desc: '',
      lat: '',
      lon: ''
    };
  }
  updateState(value, key){
    this.setState({
      [key]: value
    })
  }
  getPathCoords(e){
    e.preventDefault()
    var {city, state} = this.state
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&components=administrative_area:${state}|country:US&key=AIzaSyBflDyoDsV7jJjXo_bNuvdcbOqbRqnS73o`)
      .then((res)=>{
        return res.json()
      })
      .then((res)=>{
        this.setState({
          lat:res.results[0].geometry.location.lat,
          lon:res.results[0].geometry.location.lng
        })
      })
  }
  render() {
    return (
      <div className='single-path-form'>
        <h3>{this.props.pathName}</h3>
        <label>
          Location Title
          <input type="text" value={this.state.title} onChange={(e)=>this.updateState(e.target.value, "title")}/>
        </label>
        <label>
          City
          <input type="text" value={this.state.city} onChange={(e)=>this.updateState(e.target.value, "city")}/>
        </label>
        <label>
          US State or Country
          <input type="text" value={this.state.state} onChange={(e)=>this.updateState(e.target.value, "state")}/>
          <p>{this.state.lat}, {this.state.lon}</p>
        </label>
        <label>
          Type
          <select value={this.state.type} onChange={(e)=>this.updateState(e.target.value, "type")}>
            <option value="hometown">Home-Town</option>
            <option value="school">School</option>
            <option value="work">Work</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Description
          <input type="text" value={this.state.desc} onChange={(e)=>this.updateState(e.target.value, "desc")}/>
        </label>
        <button onClick={(e)=>this.getPathCoords(e)}>Save Path</button>
      </div>
    )
  }
}

export default PathsForm;
