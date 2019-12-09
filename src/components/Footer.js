import React, { Component } from "react";
import "../css/footer.css";

export default class Footer extends Component {
  render() {
    //footer render kısmı
    return (
      <div>
        <footer id="dk-footer" class="dk-footer">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-lg-4">
                <div class="dk-footer-box-info">
                  <a href="index.html" class="footer-logo">
                    <h2>
                      Oyuncu<br></br>Bul.com
                    </h2>
                  </a>
                  <p class="footer-info-text"></p>
                  <div class="footer-social-link">
                    <h3>OyuncuBul.com</h3>
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="footer-awarad">
                  <img src="images/icon/best.png" alt="" />
                  <p>OyuncuBul.2019</p>
                </div>
              </div>
              <div class="col-md-12 col-lg-8">
                <div class="row">
                  <div class="col-md-6">
                    <div class="contact-us">
                      <div class="contact-icon">
                        <i class="fa fa-map-o" aria-hidden="true"></i>
                      </div>
                      <div class="contact-info">
                        <h3>Adres</h3>
                        <p>Kaleiçi mah. önem sk. Çatalca/istanbul</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="contact-us contact-us-last">
                      <div class="contact-icon">
                        <i
                          class="fa fa-volume-control-phone"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div class="contact-info">
                        <h3>Telefon</h3>
                        <p>05343841051</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 col-lg-6">
                    <div class="footer-widget footer-left-widget">
                      <div class="section-heading">
                        <h3>Kişisel Link</h3>
                        <span class="animate-border border-black"></span>
                      </div>
                      <ul>
                        <li>
                          <a href="#">AnaSayfa</a>
                        </li>
                        <li>
                          <a href="#">hakkımızda</a>
                        </li>
                        <li>
                          <a href="#">Kart Oluştur</a>
                        </li>
                        <li>
                          <a href="#">Kartlar</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="#">Contact </a>
                        </li>
                        <li>
                          <a href="#">Blog</a>
                        </li>
                        <li>
                          <a href="#">Register</a>
                        </li>
                        <li>
                          <a href="#">Login</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-md-12 col-lg-6">
                    <div class="footer-widget">
                      <div class="section-heading">
                        <h3>oyuncu Bul link</h3>
                        <span class="animate-border border-black"></span>
                      </div>
                      <p>
                        Reference site about Lorem Ipsum, giving information on
                        its origins, as well.
                      </p>
                      <form action="#">
                        <div class="form-row">
                          <div class="col dk-footer-form">
                            <input
                              type="email"
                              class="form-control"
                              placeholder="Email Address"
                            />
                            <button type="submit">
                              <i class="fa fa-send"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="copyright">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <span>Copyright © 2019, All Right Reserved Seobin</span>
                </div>

                <div class="col-md-6">
                  <div class="copyright-menu">
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Terms</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="back-to-top" class="back-to-top">
            <button
              class="btn btn-dark"
              title="Back to Top"
              style={{ display: "block" }}
            >
              <i class="fa fa-angle-up"></i>
            </button>
          </div>
        </footer>
      </div>
    );
  }
}
