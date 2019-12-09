import React, { Component } from "react";
import "../css/abouth.css";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default class Abouth extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        {/* About Sayfası render kısmı */}
        <header class="">
          <div class="container">
            <h1
              class="font-weight-light text-white"
              style={{ textAlign: "center" }}
            >
              OyuncuBul.com Ekibi
            </h1>
          </div>
        </header>

        <div class="container">
          <div class="row">
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-0 shadow">
                <img
                  src="https://source.unsplash.com/TMgQMXoglsM/500x350"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body text-center">
                  <h5 class="card-title mb-0">Muhammet Yavuz</h5>
                  <div class="card-text text-black-50">Mekanın Sahibi</div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-0 shadow">
                <img
                  src="https://source.unsplash.com/9UVmlIb0wJU/500x350"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body text-center">
                  <h5 class="card-title mb-0">Ayşe Ay</h5>
                  <div class="card-text text-black-50">Müdür Yardımcısı</div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-0 shadow">
                <img
                  src="https://source.unsplash.com/sNut2MqSmds/500x350"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body text-center">
                  <h5 class="card-title mb-0">Hasan Işık</h5>
                  <div class="card-text text-black-50">Web Developer</div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-0 shadow">
                <img
                  src="https://source.unsplash.com/ZI6p3i9SbVU/500x350"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body text-center">
                  <h5 class="card-title mb-0">Eda Ay</h5>
                  <div class="card-text text-black-50">Web Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
