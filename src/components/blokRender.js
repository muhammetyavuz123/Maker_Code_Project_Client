import React, { Component } from "react";
import { blogGet } from "../actions";
import { connect } from "react-redux";
import "../css/blok.css";
import "../css/blokrender.css";
import NavBar from "./NavBar";

class blokRender extends Component {
  componentDidMount() {
    this.props.blogGet();
  }

  blogRender = () => {
    const blogrender = this.props.blogget.map(blog => (
      <div class="container">
        <div class="media comment-box">
          <div class="media-left">
            <a href="#">
              <img
                class="img-responsive user-photo"
                src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"
              />
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">{blog.title}</h4>
            <p>{blog.header}</p>
          </div>
        </div>
      </div>
    ));

    return blogrender;
  };
  render() {
    return <div>{this.blogRender()}</div>;
  }
}
const mapStateToProps = state => {
  return {
    blogget: state.blogGet
  };
};

export default connect(mapStateToProps, { blogGet })(blokRender);
