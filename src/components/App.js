import React from "react";
import Home from "./Home";
import PlayerCard from "./PlayerPostCard";
import Abouth from "./Abouth";
import Contact from "./Contact";
import Cards from "./Cards";
import BlokPost from "./BlokPost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleCard from "./SingleCard";
import Register from "./Register";
import Login from "./Login";
import history from "../history";
// import NoPage from "./NoPage";

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/abouth" component={Abouth} />
            <Route exact path="/PlayerCard" component={PlayerCard} />
            <Route exact path="/Cards" component={Cards} />
            <Route exact path="/cards/:singleUserID" component={SingleCard} />
            <Route exact path="/BlokPost" component={BlokPost} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Login" component={Login} />
            {/* <Route exact path="*" component={NoPage} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
