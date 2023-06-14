import React from "react";
import Avatar from "./Avatar";
import Profile from "./Profile";
function Card(props){
    return <div className="card">
    <div className="top">
    <p className="name">{props.id}</p>
      <h2 className="name">{props.name}</h2>
      <Avatar imag={props.imag}/>
    </div>
    <Profile tel = {props.tel} email={props.email} />
  </div>
}
export default Card;
