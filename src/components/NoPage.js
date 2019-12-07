import React, { Component } from "react";
import "../css/noPage.css";

export default class NoPage extends Component {
  render() {
    return (
      <div>
        <div class="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1>Hata 404!!!!!!!</h1>
      </div>
    );
  }
}
