import React, { Component } from "react";
import blokRender from "./blokRender";

export default class Blok extends Component {
  //blok state
  state = {
    title: "",
    header: ""
  };

  postBlog = () => {
    const requestBody = this.state;
  };

  //blok submit ediliyor
  onSubmit = event => {
    event.preventDefault();
    this.props.blogPost();
  };

  render() {
    // console.log(this.state.title);
    return (
      <div>
        <div
          className="container"
          style={{ backgroundColor: "none", marginTop: "55px" }}
        >
          <form className="ui form" onSubmit={this.onFormSumit}>
            <div className="field">
              <label>Title</label>
              <input
                type="text"
                placeholder="Title"
                onChange={event => this.setState({ title: event.target.value })}
              />

              <br></br>
              <br></br>

              <label>Header</label>
              <input
                type="text"
                placeholder="Header"
                onChange={event =>
                  this.setState({ header: event.target.value })
                }
              />
              <br></br>
              <br></br>
              <button className="ui button primary">Submit</button>
            </div>
          </form>
          <blokRender />
        </div>
      </div>
    );
  }
}
