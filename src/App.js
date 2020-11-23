import React from "react";
import "./App.css";

import Warapper from "./components/Warapper/Warapper";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className='App'>
      <Warapper>
        <Header />
      </Warapper>
    </div>
  );
}

export default App;
