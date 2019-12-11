import React, { Component } from "react";
import axios from "axios";
import "../css/PlayerPostPage.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import history from "../history";

export default class PlayerCard extends Component {
  //back end de olan bilgilerimi state olarak tuttuğum kısım
  state = {
    name: "",
    surname: "",
    number: "",
    job: "",
    mail: "",
    databirth: "",
    city: "",
    district: "",
    explanation: ""
    // img: {}
  };

  postCard = async () => {
    const requestBody = this.state;
    try {
      const response = await axios.post(
        `http://localhost:5000/cards`,
        requestBody,

        {
          headers: {
            Authorization: localStorage.getItem("JWT_Token")
          }
        }
      );
      console.log(response);

      history.push("/Cards");
    } catch (error) {}
  };

  onSubmit = event => {
    event.preventDefault();
    this.postCard();
  };
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <h1
          class="font-weight-light text-white"
          style={{ textAlign: "center" }}
        >
          Oyuncu Kartı Oluştur
        </h1>
        <div style={{ marginRight: "40%" }}>
          <form
            className="ui form container field error"
            onSubmit={this.onSubmit}
            style={{ width: "500px", marginRight: "80%" }}
          >
            <br></br>
            <br></br>
            <div className="fields">
              <div className="field">
                <label>İsim</label>
                <input
                  type="text"
                  placeholder="İsim"
                  onChange={event =>
                    this.setState({ name: event.target.value })
                  }
                ></input>
              </div>
              <br></br>

              <div className="field">
                <label>SoyAd</label>
                <input
                  type="text"
                  placeholder="SoyAd"
                  onChange={event =>
                    this.setState({ surname: event.target.value })
                  }
                ></input>
              </div>
            </div>
            <hr></hr>
            <br></br>
            <label>Telefon</label>
            <input
              type="text"
              placeholder="Telefon"
              onChange={event => this.setState({ number: event.target.value })}
            ></input>
            <br></br>
            <hr></hr>
            <br></br>
            <label>Meslek</label>
            <input
              type="text"
              placeholder="Meslek"
              onChange={event => this.setState({ job: event.target.value })}
            ></input>
            <br></br>
            <hr></hr>
            <br></br>
            <label>Email</label>
            <input
              type="Email"
              placeholder="Email"
              onChange={event => this.setState({ mail: event.target.value })}
            ></input>
            <br></br>
            <hr></hr>
            <br></br>
            <label>Doğum Tarihi:</label>
            <input
              type="text"
              placeholder="Doğum Tarihi"
              onChange={event =>
                this.setState({ databirth: event.target.value })
              }
            ></input>
            <br></br>
            <hr></hr>
            <br></br>

            <div
              style={{
                float: "left",
                marginLeft: "510px",
                marginTop: "-800px"
              }}
            >
              <div className="fields">
                <div className="field">
                  <label>Şehir</label>
                  <input
                    type="text"
                    placeholder="Şehir"
                    onChange={event =>
                      this.setState({ city: event.target.value })
                    }
                    style={{ width: "230px" }}
                  ></input>
                </div>
                <br></br>

                <div className="field">
                  <label>İlçe</label>
                  <input
                    type="text"
                    placeholder="İlçe"
                    onChange={event =>
                      this.setState({ district: event.target.value })
                    }
                    style={{ width: "230px" }}
                  ></input>
                </div>
              </div>

              <br></br>
              <hr></hr>
              <br></br>
              <label>Explanation</label>
              <textarea
                onChange={event =>
                  this.setState({ explanation: event.target.value })
                }
              ></textarea>

              <br></br>
              <hr></hr>
              <div
                class="container"
                style={{
                  marginLeft: "-5%",
                  width: "600px",

                  marginTop: "-10px"
                }}
              >
                <div class="row" style={{ marginLeft: "15px" }}>
                  <div class="col-md-6">
                    <form method="post" action="#" id="#">
                      <div class="form-group files">
                        <label>Lütfen Profil Resmi Seçiniz</label>
                        <input
                          type="file"
                          class="form-control"
                          multiple=""
                          onChange={event =>
                            this.setState({ img: event.target.multiple })
                          }
                        />
                        <br></br>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <br></br>
              <button
                className="ui button"
                type="submit"
                style={{ marginLeft: "15px" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <Footer></Footer>
      </div>
    );
  }
}
