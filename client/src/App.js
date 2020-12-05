import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/HomePage";
import Navigation from "./components/Navigation/Navigation";
import HomePage from './components/Home/HomePage';
import FeedPage from './components/Feed';
// import history from './components/history';
// import Login from './components/Login';
// import Register from './components/Register';
import LoginPage from "./components/Login/LoginPage"
import HPICard from "./components/HPI/HPICard";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        {/* <LoginPage /> */}
        <HomePage />
        <HPICard />
        
        {/* <Route exact path="/" component={Login}/>
        <Route path="/Register" component={Register}/> */}
      </div>
    </Router>
  );
}
export default App;