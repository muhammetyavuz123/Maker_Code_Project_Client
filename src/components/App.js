import React from "react";
import Home from "./Home";
import PlayerCard from "./PlayerPostCard";
import Abouth from "./Abouth";
import Contact from "./Contact";
import Cards from "./Cards";
import Blok from "./Blok";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SingleCard from "./SingleCard";

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/abouth" component={Abouth} />
          <Route exact path="/PlayerCard" component={PlayerCard} />
          <Route exact path="/Cards" component={Cards} />
          <Route exact path="/cards/:singleUserID" component={SingleCard} />
          <Route exact path="/Blok" component={Blok} />
          <Route exact path="/Contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
