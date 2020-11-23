import React from "react";
import "./App.css";

import Warapper from "./components/Warapper/Warapper";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Warapper>
        <Header />
      </Warapper>
    </div>
  );
}

export default App;
