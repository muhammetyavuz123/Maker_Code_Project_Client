import React, { useState } from "react";
import "../css/login.css";
import axios from "axios";
import NavBar from "./NavBar";
import history from "../history";

export default function Login() {
  const [mail, setmail] = useState(""); //hooks state
  const [password, setpassword] = useState(""); //hooks state

  // Form Submit ve post edilen Kısım
  const submithundleler = event => {
    // event.preventDefault();
    axios
      .post("http://localhost:5000/login", { mail, password })
      .then(response => {
        const token = response.headers.authorization;
        localStorage.setItem("JWT_Token", token); //localStorage atıyoruz
      });
    history.push("/PlayerCard");
  };

  return (
    <div>
      <NavBar></NavBar>
      {/* Login sayfası render */}
      <div class="container">
        <div class="d-flex justify-content-center h-100">
          <div class="cardd">
            <div class="card-header">
              <h3>Sign In</h3>
            </div>
            <div class="card-body">
              <form onSubmit={submithundleler}>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="username"
                    onChange={event => setmail(event.target.value)}
                  />
                </div>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="password"
                    onChange={event => setpassword(event.target.value)}
                  />
                </div>
                <div class="row align-items-center remember">
                  <input type="checkbox" />
                  Remember Me
                </div>
                <div class="form-group">
                  <button
                    type="submit"
                    value="Login"
                    class="btn float-right login_btn"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div class="card-footer">
              <div class="d-flex justify-content-center links">
                Don't have an account?<a href="#">Sign Up</a>
              </div>
              <div class="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
