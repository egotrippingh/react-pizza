import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

import "./App.css";

const App = () => {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <>
      <div className="container">
        <div className="topbar">
          <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home searchValue={searchValue} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
