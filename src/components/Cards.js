import React, { Component } from "react";
import { connect } from "react-redux";
import { usersGet } from "../actions";

class Cards extends Component {
  componentDidMount() {
    this.props.usersGet();
  }
  renderList = () => {
    const response = this.props.users.map(user => (
      <div style={{ float: "left" }}>
        <div
          className="container"
          style={({ float: "left" }, { textAlign: "center" })}
        >
          <div class="ui card">
            <div class="content">
              <div class="header">
                {user.name}
                <br></br>
                {user.surname}
              </div>
            </div>
            <div class="content">
              <h4 class="ui sub header">
                City: {user.city}
                <br></br>
                <br></br>
                District: {user.district}
              </h4>
              <div class="ui small feed">
                <div class="event">
                  <div class="content">
                    <div class="summary">
                      <a>{user.databirth}</a>
                    </div>
                  </div>
                </div>
                <div class="extra content">
                  <button class="ui button">İncele</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
    return response;
  };
  render() {
    return <div>{this.renderList()}</div>;
  }
}
const mapStateToProps = state => {
  return {
    users: state.users
  };
};
export default connect(mapStateToProps, { usersGet })(Cards);
