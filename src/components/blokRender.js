import React, { Component } from "react";
import { blogGet } from "../actions";

class blokRender extends Component {
  componentDidMount() {
    this.props.blogGet();
  }

  blogrender = () => {
    const blogrender = this.props.blogGet.map(
      (blog = () => {
        return (
          <div>
            <h3>{blog.title}</h3>
            <h5>{blog.header}</h5>
          </div>
        );
      })
    );
    return blogrender;
  };
  render() {
    return <div>{this.blogrender()}</div>;
  }
}
const mapStateToProps = state => {
  return {
    blogGet: state.blogGet
  };
};

export default (mapStateToProps, { blogGet })(blokRender);
