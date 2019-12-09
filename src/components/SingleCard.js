import React, { Component } from "react";
import { cardGet } from "../actions";
import { connect } from "react-redux";
import "../css/singlecard.css";
import NavBar from "./NavBar";
import Calendar from "./Calendar";
// import BlokPost from "./BlokPost";
import Footer from "./Footer";
import Loading from "./Loading";
import ProfilBlok from "./ProfilBlok";

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
                    {this.props.card.name} &nbsp;
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
                <div className="container" style={{ borderStyle: "double " }}>
                  <h3 class="title">About me</h3>
                  <br></br>
                  <br></br>
                  <br></br>

                  <h3 style={{ borderStyle: "solid" }}>
                    <label>Telefon:</label>
                    <br></br>
                    &nbsp; &nbsp;{this.props.card.number}
                  </h3>
                  <h3 style={{ borderStyle: "solid" }}>
                    <label>Mesleği:</label>
                    <br></br>
                    &nbsp; &nbsp;{this.props.card.job}
                  </h3>
                  <h3 style={{ borderStyle: "solid" }}>
                    <label>Doğum Tarihi:</label>
                    <br></br>
                    &nbsp; &nbsp;{this.props.card.databirth}
                  </h3>
                  <h3 style={{ borderStyle: "solid" }}>
                    <label>Şehir:</label>
                    <br></br>
                    &nbsp; &nbsp; {this.props.card.city}
                  </h3>
                  <h3 style={{ borderStyle: "solid" }}>
                    <label>İlçe:</label>
                    <br></br>
                    &nbsp; &nbsp;{this.props.card.district}
                  </h3>
                  <h3 style={{ borderStyle: "solid" }}>
                    <label>Email:</label>
                    <br></br>
                    &nbsp; &nbsp;{this.props.card.mail}
                  </h3>
                  <h3>
                    <label>Açıklama:</label>
                    <br></br>
                    &nbsp; &nbsp; {this.props.card.explanation}
                  </h3>
                </div>
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
                  <div class="tab-content gallery container">
                    <div
                      class="tab-pane active"
                      id="home"
                      role="tabpanel"
                      style={{ marginLeft: "220px", width: "1250px" }}
                    >
                      <div class="col-md-10 ml-auto mr-auto">
                        <div class="row collections">
                          <div class="col-md-6">
                            <ProfilBlok></ProfilBlok>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane"
                      id="profile"
                      role="tabpanel"
                      style={{ marginLeft: "70px", width: "1250px" }}
                    >
                      <div class="col-md-10 ml-auto mr-auto">
                        <div class="row collections">
                          <div class="col-md-6">
                            <img
                              src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                              alt=""
                              class="img-raised"
                            />
                            <img
                              src="https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                              alt=""
                              class="img-raised"
                            />
                          </div>
                          <div class="col-md-6">
                            <img
                              src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                              alt=""
                              class="img-raised"
                            />
                            <img
                              src="https://images.unsplash.com/flagged/photo-1550413231-202a9d53a331?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                              alt=""
                              class="img-raised"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane"
                      id="messages"
                      role="tabpanel"
                      style={{ marginLeft: "300px", width: "1250px" }}
                    >
                      <div class="col-md-10 ml-auto mr-auto">
                        <div class="row collections">
                          <div class="col-md-6">
                            <Calendar></Calendar>
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
      return (
        <div>
          <Loading></Loading>
        </div>
      );
    }
  };

  //yukarıdaki render listi renderledim
  render() {
    return (
      <div>
        <NavBar></NavBar>
        {this.renderList()}
        <Footer></Footer>
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
