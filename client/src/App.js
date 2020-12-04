import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/HomePage";
import Navigation from "./components/Nav/Nav";
import HomePage from './components/Home/HomePage';
import FeedPage from './components/Feed';
import HpiCard from './components/HPI/HPICard';
import history from './components/history';
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