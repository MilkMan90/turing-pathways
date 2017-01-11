import React, { Component } from 'react';

class PathsForm extends Component {
  constructor(props){
    super(props)
    this.state =  {
      lat: '',
      lon: ''
    };
  }
  savePath(e){
    e.preventDefault()
    this.getPathCoords();
  }
  getPathCoords(){
    var {city, state} = this.props
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&components=administrative_area:${state}|country:US&key=AIzaSyBflDyoDsV7jJjXo_bNuvdcbOqbRqnS73o`)
      .then((res)=>{
        return res.json()
      })
      .then((res)=>{
        this.setState({
          lat:res.results[0].geometry.location.lat,
          lon:res.results[0].geometry.location.lng
        })
        if( !this.doesCityExist(this.props.city, this.props.state) ){
            this.addCityToRecords()
        } else {
            let city = this.findCity(this.props.city, this.props.state)
            this.saveCityToPath(city._id)
        }
      })
  }
  findCity(city, state){
    if(this.props.cityList.length === 0) return undefined
    return this.props.cityList.find((onecity)=>{
      console.log(onecity);
      return onecity.city.toLowerCase() === city.toLowerCase() && onecity.state.toLowerCase() === state.toLowerCase()
    })
  }
  doesCityExist(city, state){
    let cityResult = this.findCity(city, state)
    return cityResult !== undefined
  }
  addCityToRecords(){
    fetch(`/cities`, {
	      method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
	      body: JSON.stringify({
          city: this.props.city,
          state: this.props.state,
          lat: this.state.lat,
          lon: this.state.lon
        })
    })
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
      let newCityID = res;
      this.saveCityToPath(newCityID)
    })
  }
  saveCityToPath(id){
    let cityObj = {
      id: id,
      city: this.props.city,
      state: this.props.state,
      type: this.props.type,
      desc: this.props.desc,
      lat: this.state.lat,
      lon: this.state.lon
    }
    this.props.saveCityToPath(cityObj);
  }
  render() {
    return (
      <div className='single-path-form'>
        <h3>{this.props.pathName}</h3>
        <label>
          City
          <input type="text" value={this.props.city} onChange={(e)=>this.props.updatePath(e.target.value, "city")}/>
        </label>
        <label>
          US State or Country
          <input type="text" value={this.props.state} onChange={(e)=>this.props.updatePath(e.target.value, "state")}/>
          <p>{this.state.lat}, {this.state.lon}</p>
        </label>
        <label>
          Type
          <select value={this.props.type} onChange={(e)=>this.props.updatePath(e.target.value, "type")}>
            <option value="hometown">Home-Town</option>
            <option value="school">School</option>
            <option value="work">Work</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Description
          <input type="text" value={this.props.desc} onChange={(e)=>this.props.updatePath(e.target.value, "desc")}/>
        </label>
        <button onClick={(e)=>this.savePath(e)}>Save City</button>
      </div>
    )
  }
}

export default PathsForm;
