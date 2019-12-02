import React, { Component } from "react";
import { connect } from "react-redux";
import { cardsGet } from "../actions";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../css/cardstyle.css";

class Cards extends Component {
  componentDidMount() {
    this.props.cardsGet();
  }

  onFormSumit = event => {
    event.preventDefault();
    this.cardsGet();
  };
  renderList = () => {
    const response = this.props.cards.map(card => (
      <Link to={`/cards/${card._id}`}>
        <div style={{ marginLeft: "0" }}>
          <section id="team" class="pb-5">
            <div class="container">
              <h5 class="section-title h1"></h5>
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12">
                  <div
                    class="image-flip"
                    ontouchstart="this.classList.toggle('hover');"
                  >
                    <div class="mainflip">
                      <div class="frontside">
                        <div class="card">
                          <div class="card-body text-center">
                            <p>
                              <img
                                class=" img-fluid"
                                src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png"
                                alt="card image"
                              />
                            </p>
                            <h4 class="card-title">
                              {card.name} <br></br>
                              {card.surname}
                            </h4>
                            <p class="card-text">
                              {card.city}
                              <br></br>
                              {card.district}
                            </p>
                            <a href="#" class="btn btn-primary btn-sm">
                              <i class="fa fa-plus"> Profile Git</i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="backside">
                        <div class="card">
                          <div class="card-body text-center mt-4">
                            <h4 class="card-title">Açıklama</h4>
                            <p class="card-text">{card.explanation}</p>
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <a
                                  class="social-icon text-xs-center"
                                  target="_blank"
                                  href="#"
                                >
                                  <i class="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a
                                  class="social-icon text-xs-center"
                                  target="_blank"
                                  href="#"
                                >
                                  <i class="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a
                                  class="social-icon text-xs-center"
                                  target="_blank"
                                  href="#"
                                >
                                  <i class="fa fa-skype"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a
                                  class="social-icon text-xs-center"
                                  target="_blank"
                                  href="#"
                                >
                                  <i class="fa fa-google"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Link>
    ));
    return response;
  };
  render() {
    return (
      <div>
        <div
          className="container"
          style={{ backgroundColor: "none", marginTop: "35px" }}
        >
          <form className="ui form" onSubmit={this.onFormSumit}>
            <div className="field">
              <label>Search Card</label>
              <input
                type="text"
                placeholder="Arama..."
                onChange={event =>
                  this.setState({ search: event.target.value })
                }
              />
            </div>
          </form>
        </div>

        <div>{this.renderList()}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cards: state.cards
  };
};
export default connect(mapStateToProps, { cardsGet })(Cards);
