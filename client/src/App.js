import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import DurationPage from "./pages/Duration";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <h1>Hello HPI Generator</h1>
        <p>dang this was hard</p>
        <DurationPage/>
        <Home/>
      </div>
    </Router>
  );
}

export default App;
