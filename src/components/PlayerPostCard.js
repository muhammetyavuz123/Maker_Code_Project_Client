import React, { Component } from "react";
import axios from "axios";

export default class PlayerCard extends Component {
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
  };

  postCard = async () => {
    const requestBody = this.state;
    try {
      const response = await axios.post(
        `http://localhost:5000/cards`,
        requestBody
      );
      console.log(response.data);
    } catch (error) {}
  };

  onSubmit = event => {
    event.preventDefault();
    this.postCard();
  };
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Card Creation Form</h1>

        <form
          className="ui form container field error"
          onSubmit={this.onSubmit}
          style={{ width: "500px" }}
        >
          <br></br>

          <br></br>
          <div className="fields">
            <div className="field">
              <input
                type="text"
                placeholder="Name"
                onChange={event => this.setState({ name: event.target.value })}
                style={{ width: "230px" }}
              ></input>
            </div>
            <br></br>

            <div className="field">
              <input
                type="text"
                placeholder="Surname"
                onChange={event =>
                  this.setState({ surname: event.target.value })
                }
                style={{ width: "230px" }}
              ></input>
            </div>
          </div>

          <hr></hr>
          <br></br>
          <input
            type="text"
            placeholder="Number"
            onChange={event => this.setState({ number: event.target.value })}
          ></input>
          <br></br>
          <hr></hr>
          <br></br>
          <input
            type="text"
            placeholder="Job"
            onChange={event => this.setState({ job: event.target.value })}
          ></input>
          <br></br>
          <hr></hr>
          <br></br>
          <input
            type="email"
            placeholder="Email"
            onChange={event => this.setState({ mail: event.target.value })}
          ></input>
          <br></br>
          <hr></hr>
          <br></br>
          <input
            type="text"
            placeholder="Date birth"
            onChange={event => this.setState({ databirth: event.target.value })}
          ></input>

          <br></br>
          <hr></hr>
          <br></br>
          <div className="fields">
            <div className="field">
              <i className="turkey flag"></i>
              <div className="field">
                <select
                  className="ui fluid search dropdown"
                  name="card[expire-month]"
                  style={{ width: "235px" }}
                  onChange={event =>
                    this.setState({ city: event.target.value })
                  }
                >
                  <option value="">City</option>
                  <option value="Ankara">Ankara</option>
                  <option value="Adana">Adana</option>
                  <option value="İstanbul">İstanbul</option>
                  <option value="İzmir">İzmir</option>
                  <option value="Amasya">Amasya</option>
                  <option value="Artvin">Artvin</option>
                  <option value="Çorum">Çorum</option>
                  <option value="Gaziantep">Gaziantep</option>
                  <option value="Düzce">Düzce</option>
                  <option value="Kocaeli">Kocaeli</option>
                  <option value="Erzurum">Erzurum</option>
                  <option value="Eskişehir">Eskişehir</option>
                </select>
              </div>
            </div>

            <div class="field">
              <i class="turkey flag"></i>
              <select
                style={{ width: "230px" }}
                class="ui fluid search dropdown"
                name="card[expire-month]"
                onChange={event =>
                  this.setState({ district: event.target.value })
                }
              >
                <option value="">district</option>
                <option value="Çatalca">Çatalca</option>
                <option value="Beylikdüzü">Beylikdüzü</option>
                <option value="Ümranire">Ümranire</option>
                <option value="KadıKöy">KadıKöy</option>
                <option value="Beyoğlu">Beyoğlu</option>
                <option value="Eminönü">Eminönü</option>
                <option value="Çorum">Çorum</option>
              </select>
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
          <br></br>
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
