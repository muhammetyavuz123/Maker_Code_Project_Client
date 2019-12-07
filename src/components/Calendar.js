import React, { Component } from "react";
import "../css/calendar.css";

export default class Calendar extends Component {
  render() {
    return (
      <div className="container">
        <div id="wrap">
          <div id="calendar"></div>

          <div style={{ clear: "both" }}></div>
        </div>
      </div>
    );
  }
}
