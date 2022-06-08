import logo from "./logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React from "react";
import { useState } from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NewSize from "./NewSize";
import Summary from "./Summary";
import Error from "./Error";
import Navbar from "./navbar";
function App() {
  const [sizes, setSizes] = useState([]);
  const getSizes = async () => {
    try {
      const response = await fetch("http://localhost:5000/");
      const jsonData = await response.json();

      setSizes(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="size" element={<NewSize />} />
      <Route path="size/:id" element={<Summary />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
