import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="ui secondary  menu">
          <Link to="/" className="active item">
            Home
          </Link>
          <Link to="/Abouth" className="active item">
            Abouth
          </Link>
          <Link to="/PlayerCard" className="item">
            Kart Ekle
          </Link>
          <Link to="/Cards" className="item">
            Kartlar
          </Link>
          <Link to="/Blok" className="item">
            Blok
          </Link>
          <Link to="/Contact" className="item">
            Contact
          </Link>
          <div className="right menu"></div>
        </div>
      </div>
    );
  }
}
