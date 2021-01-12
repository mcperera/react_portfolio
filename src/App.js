import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Wrapper from "./components/Wrapper/Wrapper";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";

function App() {
  return (
    <Router>
      <div className="App">
        <Wrapper>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Header} />
            <Route exact path="/about" component={About} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/work" component={Work} />
          </Switch>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
//Build Test
