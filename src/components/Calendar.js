import React, { Component } from "react";
import "../css/calendar.css";

export default class Calendar extends Component {
  render() {
    return (
      // Profil sayfasındaki Takvim kısmı
      <div class="container">
        <div class="row row-striped">
          <div class="col-2 text-right">
            <h1 class="display-4">
              <span class="badge badge-secondary">23</span>
            </h1>
            <h3>Aralık</h3>
          </div>
          <div class="col-10">
            <h3 class="text-uppercase">
              <strong>Atatürk Halısaha</strong>
            </h3>
            <ul class="list-inline">
              <li class="list-inline-item">
                <i class="fa fa-calendar-o" aria-hidden="true"></i> Aralık
              </li>
              <li class="list-inline-item">
                <i class="fa fa-clock-o" aria-hidden="true"></i> 21.00-22.00 PM
              </li>
              <li class="list-inline-item">
                <i class="fa fa-location-arrow" aria-hidden="true"></i> Halı
                Saha
              </li>
            </ul>
            <p>
              Ben takvimde belirttiğim saatlerde oynaya bilirim sadece
              belirtilen tarihte buradayım başka günler için rahatsız etmeyin
              lütfen
            </p>
          </div>
        </div>
        <div class="row row-striped">
          <div class="col-2 text-right">
            <h1 class="display-4">
              <span class="badge badge-secondary">27</span>
            </h1>
            <h3>Ocak</h3>
          </div>
          <div class="col-10">
            <h3 class="text-uppercase">
              <strong>Merkez Halı Saha</strong>
            </h3>
            <ul class="list-inline">
              <li class="list-inline-item">
                <i class="fa fa-calendar-o" aria-hidden="true"></i> Ocak
              </li>
              <li class="list-inline-item">
                <i class="fa fa-clock-o" aria-hidden="true"></i> 23.00-24.00 PM
              </li>
              <li class="list-inline-item">
                <i class="fa fa-location-arrow" aria-hidden="true"></i> Halı
                Saha
              </li>
            </ul>
            <p>
              Ocak Ayı iş için burada olacağım ve halı saha maçı yapmak
              istiyorum arayabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
