import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/HomePage";
import Navigation from "./components/Navigation/Navigation";
// import FeedPage from './components/Feed';
import HpiCard from './components/HPI/HPICard';
// import history from './components/history';

import Register from './components/Register/Register';
import Login from "./components/Login/LoginPage";

function App() {
  return (
    <Router>
      <Navigation />
      <div>
     
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/hpi" component={HpiCard} /> 
          {/* <Route exact path="/user" component={Login}/> */}
        </Switch>
        {/* <Navigation /> */}
        {/* <Route path="/Register" component={Register}/> */}
      </div>
    </Router>
  );
}
export default App;