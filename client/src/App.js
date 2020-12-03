import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Register from "./components/Register/Register";
import RegisterPage from "./components/Register/Register";

function App() {
  return (
    <Router>
      <div>
        <RegisterPage />
      </div>
    </Router>
  );
}
export default App;