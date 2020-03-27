import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <img style={{ maxWidth: 400 }} src={require("../public/home.png")} />
      </div>
    );
  }
}
