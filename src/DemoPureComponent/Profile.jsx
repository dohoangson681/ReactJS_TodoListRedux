import React, { Component, PureComponent } from "react";

export default class Profile extends PureComponent {
  render() {
    console.log("laod") ; 
    return (
      <div className="card text-left">
        <img style={{width: "300px"}} className="card-img-top" src="https://icdn.dantri.com.vn/thumb_w/640/2020/12/16/ngam-dan-hot-girl-xinh-dep-noi-bat-nhat-nam-2020-docx-1608126694049.jpeg" alt ="!" />
        <div className="card-body">
          <h4 className="card-title">GIRL</h4>
          <p className="card-text">18 years old</p>
        </div>
      </div>
    );
  }
}
