import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import DurationPage from "./pages/Duration";
import Home from "./components/Home/HomePage";
import Navigation from "./components/Nav/Nav";
// import Login from './components/Login';
// import Register from './components/Register';
import LoginPage from "./components/Login/LoginPage"

function App() {
  return (
    <Router>
      <div>
        {/* <Navigation /> */}
        <LoginPage />
        
        {/* <Route exact path="/" component={Login}/>
        <Route path="/Register" component={Register}/> */}
      </div>
    </Router>
  );
}
export default App;