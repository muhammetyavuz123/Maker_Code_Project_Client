import React, { Component } from "react";
import "../css/loader.css";
export default class Loading extends Component {
  render() {
    return (
      <div>
        <div class="loader">
          <div class="face face1">
            <div class="circle"></div>
          </div>
          <div class="face face2">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    );
  }
}
