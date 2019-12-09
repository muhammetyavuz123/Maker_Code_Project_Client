import React, { Component } from "react";
import NavBar from "./NavBar";
import "../css/contact.css";
import Footer from "./Footer";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        {/* Contact render kısmı */}
        <section
          class="contact pt-100 pb-100"
          id="contact"
          style={{ width: "100%", marginTop: "-15px" }}
        >
          <div class="container">
            <div class="row">
              <div class="col-xl-6 mx-auto text-center">
                <div class="section-title mb-100">
                  <p>Soru ve Önerileriniz İçin</p>
                  <h4>İletişim</h4>
                </div>
              </div>
            </div>
            <div class="row text-center">
              <div class="col-md-8">
                <form action="#" class="contact-form">
                  <div class="row">
                    <div class="col-xl-6">
                      <input type="text" placeholder="name" />
                    </div>
                    <div class="col-xl-6">
                      <input type="text" placeholder="email" />
                    </div>
                    <div class="col-xl-6">
                      <input type="text" placeholder="subject" />
                    </div>
                    <div class="col-xl-6">
                      <input type="text" placeholder="telephone" />
                    </div>
                    <div class="col-xl-12">
                      <textarea
                        placeholder="message"
                        cols="30"
                        rows="10"
                      ></textarea>
                      <input type="submit" value="send message" />
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-md-4">
                <div class="single-contact">
                  <i class="fa fa-map-marker"></i>
                  <h5>Adres</h5>
                  <p>Kaleiçi Mah. Önem sk. No:18 Çatalca/İstanbul</p>
                </div>
                <div class="single-contact">
                  <i class="fa fa-phone"></i>
                  <h5>Telefon</h5>
                  <p>05343841051</p>
                </div>
                <div class="single-contact">
                  <i class="fa fa-envelope"></i>
                  <h5>Email</h5>
                  <p>Muhametyavuz@hotmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
