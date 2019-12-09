import React, { Component } from "react";
import "../css/register.css";
import axios from "axios";
import NavBar from "./NavBar";
import history from "../history";

export default class Register extends Component {
  state = {
    name: "",
    surname: "",
    mail: "",
    password: ""
  };

  postRegister = async () => {
    const requestBody = this.state;
    try {
      const response = await axios.post(
        `http://localhost:5000/register`,
        requestBody
      );
      history.push("/login");
      console.log(response.data);
    } catch (error) {}
  };

  onSubmit = event => {
    event.preventDefault();
    this.postRegister();
  };

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <form onSubmit={this.onSubmit}>
          <div class="container containerr">
            <header class="heading">Registration</header>
            <hr></hr>

            <div class="row ">
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-xs-4">
                    <label class="firstname">First Name :</label>}
                  </div>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      placeholder="Enter your First Name"
                      class="form-control "
                      onChange={event =>
                        this.setState({ name: event.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              <div class="col-sm-12">
                <div class="row">
                  <div class="col-xs-4">
                    <label class="lastname">Last Name :</label>
                  </div>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      placeholder="Enter your Last Name"
                      class="form-control last"
                      onChange={event =>
                        this.setState({ surname: event.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              <div class="col-sm-12">
                <div class="row">
                  <div class="col-xs-4">
                    <label class="mail">Email :</label>
                  </div>
                  <div class="col-xs-8">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      class="form-control"
                      onChange={event =>
                        this.setState({ mail: event.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              <div class="col-sm-12">
                <div class="row">
                  <div class="col-xs-4">
                    <label class="pass">Password :</label>
                  </div>
                  <div class="col-xs-8">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your Password"
                      class="form-control"
                      onChange={event =>
                        this.setState({ password: event.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              <div class="col-sm-12">
                <div class="col-sm-12">
                  <button class="btn btn-warning" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
