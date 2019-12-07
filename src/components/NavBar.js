import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
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
        <Link to="/BlokPost" className="item">
          Blok
        </Link>
        <Link to="/Contact" className="item">
          Contact
        </Link>
        <Link to="/Register" className="item">
          Register
        </Link>
        <Link to="/Login" className="item">
          Login
        </Link>
        <div className="right menu"></div>
      </div>
    );
  }
}
