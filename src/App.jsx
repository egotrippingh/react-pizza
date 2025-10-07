import React from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

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
