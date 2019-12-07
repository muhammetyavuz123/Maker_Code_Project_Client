import React, { Component } from "react";
import "../css/navbar.css";
import "../css/home.css";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="main-wrap">
          <nav class="">
            <div class="nav-links">
              <Link to="/" className="active item">
                <a href="" class="link">
                  Home
                </a>
              </Link>
              <a href="" class="link">
                FIND WORK
              </a>
              <a href="" class="link">
                FIND TALENT
              </a>
              <a href="" class="link">
                SERVICES
              </a>
              <a href="" class="link">
                Contact
              </a>
              <a href="" class="link">
                LEADERSHIP
              </a>
              <a href="" class="link">
                ABOUT US
              </a>
            </div>
          </nav>
        </div>
        <div class="main-wrap">
          <div class="content-main">
            <header class="header" id="head">
              <div class="brand-logo">
                <h2 style={{ color: "white" }}>
                  Oyuncu <br></br>Bul.com
                </h2>
              </div>
              <div class="menu-btn">
                <div class="line line--1"></div>
                <div class="line line--2"></div>
                <div class="line line--3"></div>
              </div>
            </header>
            <div class="content">
              <div class="site-banner__vid">
                <video
                  muted=""
                  autoplay=""
                  loop=""
                  preload=""
                  playsinline=""
                  data-video="0"
                >
                  <source src="http://www.saxonglobal.com/wp-content/themes/saxonglobal/video/saxonglobal.mp4" />
                </video>
                <div class="overlay-bg"></div>
                <div class="header-title">
                  <h2 style={{ color: "white" }}>
                    Akşam Halısaha Maçımı Yapmak İstiyorsun Kartını Oluştur
                    <br></br>
                    <br></br>
                    Halısaya Eksik Çıkma
                  </h2>
                </div>
                {/* <video
                  muted=""
                  autoplay=""
                  loop=""
                  preload=""
                  playsinline=""
                  data-video="0"
                >
                  <source
                    src="https://www.peopleplace.eu/wp-content/themes/peopleplace/images/intro-video-peopleplace.mp4"
                    type="video/mp4"
                  />
                </video> */}
              </div>
            </div>
            <footer class="footer">
              <div class="footer__leftside">
                <span class="open-social">
                  <i class="fa fa-share-alt"></i>
                </span>
              </div>

              <div class="footer__rightside">
                <a class="search-link" href="">
                  <i class="fa fa-search"></i>
                </a>
              </div>
            </footer>
          </div>
        </div>

        <saction class="home-wrap">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div id="f2">
                  <div class="inside">
                    <span></span>
                    <h3>
                      Oyuncu Bul
                      <span class="blue-text">Kayıt olmak için tıkayınız</span>
                    </h3>
                    <Link to="/Register" className="item">
                      <h4>
                        Kendi Oyuncu Kartını Oluşturmak için Kayıt olunuz!
                      </h4>
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div id="f3">
                  <div class="inside">
                    <span></span>
                    <h3>
                      Oyuncu Bul <span class="blue-text">Kayıt Olmadan</span>
                    </h3>
                    <Link to="/Cards" className="item">
                      <h4>İstediğiniz Oyuncuyu Bulmak için Tıklayınız!</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </saction>
      </div>
    );
  }
}
