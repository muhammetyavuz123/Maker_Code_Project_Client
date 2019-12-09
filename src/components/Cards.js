import React, { Component } from "react";
import { connect } from "react-redux";
import { cardsGet } from "../actions";
import { cardDel } from "../actions";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../css/cardstyle.css";
import NavBar from "../components/NavBar";
import Footer from "./Footer";
import Loading from "./Loading";

class Cards extends Component {
  //action componentdidmount olduğunda çağırdık
  componentDidMount() {
    this.props.cardsGet();
  }

  //card silme action çağırilan kısım
  cardDell = cardID => {
    this.props.cardDel(cardID);
  };

  //form submit kısmı
  onFormSumit = event => {
    event.preventDefault();
    this.cardsGet();
  };
  renderList = () => {
    //cardların map lendiği ve renderlendiği kısım
    if (this.props !== undefined) {
      const response = this.props.cards.map(card => (
        <div style={{ marginLeft: "0" }}>
          <section id="team" class="pb-5">
            <ul id="menuFull" style={{ liststyletype: "none" }}>
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
                                  src={card.img}
                                  alt="card image"
                                />
                              </p>
                              <h4 class="card-title">
                                {card.name}&nbsp;
                                {card.surname}
                              </h4>
                              <h5 class="card-text" id="menuFull">
                                <li>{card.city}</li>
                                <br></br>
                                <li>{card.district}</li>
                              </h5>

                              <button class="btn btn-primary btn-sm">
                                <i class="fa fa-plus"> Profile Git</i>
                              </button>
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
                              <Link to={`/cards/${card._id}`}>
                                <button class="btn btn-primary btn-sm">
                                  <i class="fa fa-plus"> Profile Git</i>
                                </button>
                              </Link>
                              <br></br>

                              <button
                                class="btn btn-primary btn-sm"
                                onClick={() => this.cardDell(card._id)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </section>
        </div>
      ));
      return response;
    } else {
      return (
        <div>
          <Loading></Loading>
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <NavBar />

        <div
          className="container"
          style={{ backgroundColor: "none", marginTop: "35px" }}
        >
          <form className="ui form" onSubmit={this.onFormSumit}>
            <div className="field">
              <label>Search Card</label>
              <input
                type="text"
                autocomplete="off"
                name="searchTags"
                id="searchTags"
                placeholder="Aranacak Kelime"
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

// reducersden dataları aldığım kısım maptosatateprops kısmı
const mapStateToProps = state => {
  return {
    cards: state.cards,
    cardDel: state.cardDel
  };
};
export default connect(mapStateToProps, { cardsGet, cardDel })(Cards);
