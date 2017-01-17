import React from 'react'

const CityDisplay = ({city, studentCityList}) => (
  <div className="infopane-city-container info-pane">
    <h2 className="infopane-city-name">{city.city}, {city.state}</h2>
    <ul>
      {studentCityList}
    </ul>
  </div>
)

export default CityDisplay
