import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      //navbar render kısmı
      <div
        className="ui secondary  menu "
        style={{
          backgroundColor: "Black",
          background: " webkilineargradient(#f96332 0%, #000 80%)",
          background: "olineargradient(#f96332 0%, #000 80%)",
          background: " mozlineargradient(#f96332 0%, #000 80%)",

          opacity: 0.72,
          height: "70px",
          filter: "alpha"
        }}
      >
        <Link to="/" className="active item">
          <h5 style={{ color: "white" }}>Ana Sayfa</h5>
        </Link>
        <Link to="/Abouth" className="active item">
          <h5 style={{ color: "white" }}> Hakkımızda</h5>
        </Link>
        <Link to="/PlayerCard" className="item">
          <h5 style={{ color: "white" }}> Kart Ekle</h5>
        </Link>
        <Link to="/Cards" className="item">
          <h5 style={{ color: "white" }}>Kartlar</h5>
        </Link>
        <Link to="/BlokPost" className="item">
          <h5 style={{ color: "white" }}>Blok</h5>
        </Link>
        <Link to="/Contact" className="item">
          <h5 style={{ color: "white" }}>İletişim</h5>
        </Link>
        <Link to="/Register" className="item">
          <h5 style={{ color: "white", marginLeft: "570px" }}>Kayıt</h5>
        </Link>
        <Link to="/Login" className="item">
          <h5 style={{ color: "white" }}>Giriş</h5>
        </Link>
        <div className="right menu"></div>
      </div>
    );
  }
}
