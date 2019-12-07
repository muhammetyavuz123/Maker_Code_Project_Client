import React, { Component } from "react";
import "../css/abouth.css";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default class Abouth extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div class="accordian">
          <ul>
            <li>
              <div class="image_title">
                <a>
                  <a>
                    <span>Vizyon</span>
                    Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat
                    numune kitabı oluşturmak üzere bir yazı galerisini alarak
                    karıştırdığı 1500'lerden beri endüstri standardı sahte
                    metinler olarak kullanılmıştı
                  </a>
                </a>
              </div>
              <a href="https://www.erzurum.bel.tr/img/CK/images/M%C4%B0SYON(1).png">
                <img src="https://iasbh.tmgrup.com.tr/894f5b/650/344/0/16/400/227?u=http://i.sabah.com.tr/sbh/2017/02/05/misyon-ve-vizyon-arasindaki-fark-nedir-1486279908484.png" />
              </a>
            </li>
            <li>
              <div class="image_title">
                <a>
                  <span>Misyon</span>
                  Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune
                  kitabı oluşturmak üzere bir yazı galerisini alarak
                  karıştırdığı 1500'lerden beri endüstri standardı sahte
                  metinler olarak kullanılmıştı
                </a>
              </div>
              <a href="https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg">
                <img src="https://iasbh.tmgrup.com.tr/894f5b/650/344/0/16/400/227?u=http://i.sabah.com.tr/sbh/2017/02/05/misyon-ve-vizyon-arasindaki-fark-nedir-1486279908484.png" />
              </a>
            </li>
            <li>
              <div class="image_title">
                <a>
                  <span>Biz Kimiz</span>
                  Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune
                  kitabı oluşturmak üzere bir yazı galerisini alarak
                  karıştırdığı 1500'lerden beri endüstri standardı sahte
                  metinler olarak kullanılmıştı
                </a>
              </div>
              <a href="https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg">
                <img src="https://asder.org.tr/media/k2/items/cache/5a1fdee3d8f8504ca6c9c3d132f7e23d_XL.jpg" />
              </a>
            </li>
            <li>
              <div class="image_title">
                <a>
                  <span>Hedeflerimiz</span>
                  Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune
                  kitabı oluşturmak üzere bir yazı galerisini alarak
                  karıştırdığı 1500'lerden beri endüstri standardı sahte
                  metinler olarak kullanılmıştı
                </a>
              </div>
              <a href="https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg"></a>
              <img src="https://asder.org.tr/media/k2/items/cache/5a1fdee3d8f8504ca6c9c3d132f7e23d_XL.jpg" />
            </li>
            <li>
              <div class="image_title">
                <a>
                  <span>Önceliklerimiz</span>
                  Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune
                  kitabı oluşturmak üzere bir yazı galerisini alarak
                  karıştırdığı 1500'lerden beri endüstri standardı sahte
                  metinler olarak kullanılmıştı
                </a>
              </div>
              <a href="https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg">
                <img src="http://www.kamuajans.com/images/haberler/2018/03/onceliklerimiz_h522319_6b9c7.png" />
              </a>
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}
