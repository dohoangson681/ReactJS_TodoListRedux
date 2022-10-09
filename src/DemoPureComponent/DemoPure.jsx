import React, { Component } from "react";
import Profile from "./Profile";

export default class DemoPure extends Component {
  state = {
    like: 0,
  };
  likeImg = () => {
    let likehientai = ++this.state.like ; 
    this.setState({
        like : likehientai , 
    })
  }
  render() {
    return (
      <div className="container">
        <h3 className="text-primary">Profile</h3>
        <Profile/>
        <h3 className="text-primary">Review</h3>
        <div className="card text-white bg-primary">
            <h3>Likes : {this.state.like}</h3>
          <div className="card-body">
            <button onClick={()=>{
                this.likeImg() ; 
            }} className="btn btn-success">Like</button>
          </div>
        </div>
      </div>
    );
  }
}
