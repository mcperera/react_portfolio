import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Warapper from "./components/Warapper/Warapper";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <Router>
      <div className='App'>
        <Warapper>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Header} />
            <Route exact path='/about' component={About} />
            <Route exact path='/skills' component={Skills} />
          </Switch>
        </Warapper>
      </div>
    </Router>
  );
}

export default App;
