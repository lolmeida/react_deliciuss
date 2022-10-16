import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Searched from "./Searched";

export default class Pages extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/search/:key" element={<Searched />} />
      </Routes>
    );
  }
}
