import React from "react";

import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home";

import "./App.css";

const App = () => {

  return (
    <>
      <div className="container">
        <div className="topbar">
          <Header/>
          <Home />
        </div>
      </div>
    </>
  );
};

export default App;
