/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import {Match} from 'react-router';
import UserProfile from './UserProfile.js';


class InfoPane extends Component {
  render() {
    let cityDisplay;
    let studentCityList;
    if(this.props.userCityList){
      console.log(this.props.userCityList);
      studentCityList = this.props.userCityList.map((user, i)=>{
        return <li key={i}>
                <p>{user.name}: {user.cohort} {user.program}</p>
              </li>
      })
    }
    return (
      <div className="info-pane">
        <Match pattern="/editprofile" render={()=> (
            <UserProfile 
              user={this.props.user}
              cityList={this.props.cityList}
            />
          )
        }/>
         <Match pattern="/" exactly render={()=> (
           <div>
           {this.props.userDisplay != null ?
             <div className="infopane-user-container">
               <h2>{this.props.userDisplay.name}</h2>
               <p>{this.props.userDisplay.cohort} {this.props.userDisplay.program}</p>
               <img className="infopane-user-img" src={this.props.userDisplay.imgsrc}/>
             </div>
             :
             <div></div>
           }
           {this.props.cityDisplay != null ?
             <div className="infopane-city-container">
               <h2>{this.props.cityDisplay.city}, {this.props.cityDisplay.state}</h2>
               <ul>
                 {studentCityList}
               </ul>
             </div>
             :
             <div></div>
           }
           </div>
          )
        }/>


      </div>
    )
  }
}

export default InfoPane;
