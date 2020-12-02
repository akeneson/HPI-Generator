import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Nav/Nav";
import HomePage from './components/Home/HomePage';
import FeedPage from './components/Feed';
import HpiCard from './components/HPI/HPICard';
import history from './components/history';
// import Login from './components/Login';
// import Register from './components/Register';

function App() {
  return (
    <Router history={history}>
      <Navigation /> 
      <Switch>
        <Route exact path="/" component={FeedPage}/>
        <Route exact path="/new" component={HomePage}/>
        <Route exact path="/hpi" component={HpiCard}/>
      </Switch>
    </Router>
  );
}
export default App;