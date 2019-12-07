import React, { Component } from "react";
import { cardGet } from "../actions";
import { connect } from "react-redux";
import "../css/singlecard.css";
import NavBar from "./NavBar";
import Calendar from "./Calendar";

class SingleCard extends Component {
  //single card için card id singlecardID içine attım
  componentDidMount() {
    const singleUserID = this.props.match.params.singleUserID;

    this.props.cardGet(singleUserID);
  }

  renderList = () => {
    //card içi kontrol
    if (this.props.card !== undefined) {
      return (
        <div class="profile-page sidebar-collapse">
          <div class="wrapper">
            <div class="page-header clear-filter" filter-color="orange">
              <div
                class="page-header-image"
                data-parallax="true"
                style={{
                  backgroundimage:
                    "url('https://images.unsplash.com/photo-1476984251899-8d7fdfc5c92c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3700&q=80'"
                }}
              ></div>

              <div class="container">
                <div class="photo-container">
                  <img
                    src="https://raw.githack.com/creativetimofficial/now-ui-kit/master/assets/img/ryan.jpg"
                    alt=""
                  />
                </div>

                <h3 class="title">
                  <h3>
                    {this.props.card.name}
                    {this.props.card.surname}
                  </h3>
                </h3>

                <div class="content">
                  <div class="social-description">
                    <h2>26</h2>
                    <p>Comments</p>
                  </div>
                  <div class="social-description">
                    <h2>26</h2>
                    <p>Comments</p>
                  </div>
                  <div class="social-description">
                    <h2>48</h2>
                    <p>Bookmarks</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="section">
              <div class="container">
                <div class="button-container">
                  <a href="#button" class="btn btn-primary btn-round btn-lg">
                    Follow
                  </a>
                  <a
                    href="#button"
                    class="btn btn-default btn-round btn-lg btn-icon"
                    rel="tooltip"
                    title="Follow me on Twitter"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#button"
                    class="btn btn-default btn-round btn-lg btn-icon"
                    rel="tooltip"
                    title="Follow me on Instagram"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
                <h3 class="title">About me</h3>
                <h3>{this.props.card.number}</h3>
                <h3>{this.props.card.job}</h3>
                <h3>{this.props.card.databirth}</h3>
                <h3>{this.props.card.city}</h3>
                <h3>{this.props.card.district}</h3>
                <h3>{this.props.card.mail}</h3>
                <h3>{this.props.card.explanation}</h3>
                <div class="row">
                  <div class="col-md-6 ml-auto mr-auto">
                    <h4 class="title text-center">My Portfolio</h4>
                    <div class="nav-align-center">
                      <ul
                        class="nav nav-pills nav-pills-primary nav-pills-just-icons"
                        role="tablist"
                      >
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            data-toggle="tab"
                            href="#profile"
                            role="tablist"
                          >
                            <i class="now-ui-icons design_image"></i>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link active"
                            data-toggle="tab"
                            href="#home"
                            role="tablist"
                          >
                            <i class="now-ui-icons location_world"></i>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            data-toggle="tab"
                            href="#messages"
                            role="tablist"
                          >
                            <i class="now-ui-icons sport_user-run"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="tab-content gallery">
                    <div class="tab-pane active" id="home" role="tabpanel">
                      <div class="col-md-10 ml-auto mr-auto">
                        <div class="row collections">
                          <div class="col-md-6">
                            <img
                              src="https://raw.githack.com/creativetimofficial/now-ui-kit/master/assets/img/bg1.jpg"
                              alt=""
                              class="img-raised"
                            />
                            <img
                              src="https://raw.githack.com/creativetimofficial/now-ui-kit/master/assets/img/bg3.jpg"
                              alt=""
                              class="img-raised"
                            />
                          </div>
                          <div class="col-md-6">
                            <img
                              src="https://raw.githack.com/creativetimofficial/now-ui-kit/master/assets/img/bg8.jpg"
                              alt=""
                              class="img-raised"
                            />
                            <img
                              src="https://raw.githack.com/creativetimofficial/now-ui-kit/master/assets/img/bg7.jpg"
                              alt=""
                              class="img-raised"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane" id="profile" role="tabpanel">
                      <div class="col-md-10 ml-auto mr-auto">
                        <div class="row collections">
                          <div class="col-md-6">
                            <img
                              src="https://raw.githack.com/creativetimofficial/now-ui-kit/master/assets/img/bg6.jpg"
                              class="img-raised"
                            />
                            <img
                              src="https://raw.githack.com/creativetimofficial/now-ui-kit/master/assets/img/bg11.jpg"
                              alt=""
                              class="img-raised"
                            />
                          </div>
                          <div class="col-md-6">
                            <img
                              src="https://raw.githack.com/creativetimofficial/now-ui-kit/master/assets/img/bg7.jpg"
                              alt=""
                              class="img-raised"
                            />
                            <img
                              src="https://raw.githack.com/creativetimofficial/now-ui-kit/master/assets/img/bg8.jpg"
                              alt=""
                              class="img-raised"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane" id="messages" role="tabpanel">
                      <div class="col-md-10 ml-auto mr-auto">
                        <div class="row collections">
                          <div class="col-md-6">
                            <div class="img-raised"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  };

  //yukarıdaki render listi renderledim
  render() {
    return (
      <div>
        <NavBar></NavBar>
        {this.renderList()}
        <Calendar />
      </div>
    );
  }
}

//storeden card statemi card içine attım
const mapStateToProps = state => {
  return {
    card: state.card
  };
};

//maptostateProps connect
export default connect(mapStateToProps, { cardGet })(SingleCard);
