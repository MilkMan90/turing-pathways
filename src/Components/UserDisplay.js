import React from 'react'

const UserDisplay = ({user}) => (
  <div className="infopane-user-container info-pane">
    <h2 className="infopane-user-name">{user.name}</h2>
    <p className="infopane-user-cohort">{user.cohort} {user.program}</p>
    <img className="infopane-user-img" src={user.imgsrc}/>
  </div>
)

export default UserDisplay
