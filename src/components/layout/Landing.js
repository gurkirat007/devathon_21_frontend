import React, { Component } from "react";
import SearchBar from "./search";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <SearchBar />
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
