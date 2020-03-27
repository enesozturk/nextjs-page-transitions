import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <img style={{ maxWidth: 400 }} src={require("../public/about.png")} />
      </div>
    );
  }
}
