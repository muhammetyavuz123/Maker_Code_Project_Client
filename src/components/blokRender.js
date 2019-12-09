import React, { Component } from "react";
import { blogGet } from "../actions";
import { connect } from "react-redux";
import "../css/blok.css";
import "../css/blokrender.css";
import NavBar from "./NavBar";
import Loading from "./Loading";

class blokRender extends Component {
  componentDidMount() {
    this.props.blogGet();
  }

  //Blok verilerinin (title,header) get edildiği kısım
  blogRender = () => {
    if (this.props !== undefined) {
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
              <p style={{ backgroundColor: "white" }}>{blog.header}</p>
            </div>
          </div>
        </div>
      ));

      return blogrender;
    } else {
      return (
        <div>
          <Loading></Loading>
        </div>
      );
    }
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
