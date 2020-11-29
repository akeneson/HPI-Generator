import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Nav/Nav";
// import Login from './components/Login';
// import Register from './components/Register';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        {/* <Route exact path="/" component={Login}/>
        <Route path="/Register" component={Register}/> */}
      </div>
    </Router>
  );
}
export default App;