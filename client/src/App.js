import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import DurationPage from "./pages/Duration";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <h1>Hello HPI Generator</h1>
        <p>dang this was hard</p>
        <DurationPage/>

      </div>
    </Router>
  );
}

export default App;
