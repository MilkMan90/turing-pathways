import React from 'react'

const CurrentPathList = ({path}) => {
  let pathList = path.map((city, i)=>{
    return <li key={i}>{city.city}, {city.state}</li>
  })
  return (
  <ul className="path-list-container">
    {path[0].city !== "" && pathList}
  </ul>
)}

export default CurrentPathList
