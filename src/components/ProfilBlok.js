import React, { Component } from "react";
import BlokRender from "./BlokRender";
import axios from "axios";

export default class ProfilCalendar extends Component {
  //blok state
  state = {
    title: "",
    header: ""
  };

  postBlog = async () => {
    const requestBody = this.state;
    try {
      const response = await axios.post(
        `http://localhost:5000/blok`,
        requestBody
      );
      console.log(response.data);
    } catch (error) {}
  };

  //blok submit
  onFormSubmit = event => {
    // event.preventDefault();
    this.postBlog();
  };
  render() {
    return (
      <div>
        <div>
          <div
            className="container"
            style={{
              backgroundColor: "none",
              marginTop: "55px",
              textAlign: "center"
            }}
          >
            <form onSubmit={this.onFormSubmit}>
              <input
                type="text"
                name="name"
                class="question"
                id="nme"
                required
                autocomplete="off"
                onChange={event => this.setState({ title: event.target.value })}
              />
              <label for="nme">
                <span>User</span>
              </label>
              <textarea
                name="message"
                rows="2"
                class="question"
                id="msg"
                required
                autocomplete="off"
                onChange={event =>
                  this.setState({ header: event.target.value })
                }
              ></textarea>
              <label for="msg">
                <span>message?</span>
              </label>
              <input type="submit" value="Submit!" />
            </form>
            <br></br>
            <br></br>

            <BlokRender />
          </div>
        </div>
      </div>
    );
  }
}
