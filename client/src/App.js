import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Nav/Nav";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
      </div>
    </Router>
  );
}
export default App;