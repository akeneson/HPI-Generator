import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
<<<<<<< HEAD
import DurationPage from "./pages/Duration";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
=======
import Navigation from "./components/Nav/Nav";
// import Login from './components/Login';
// import Register from './components/Register';
>>>>>>> 7ccc7978de36b8f9f0478d17b911a531cacd1035

function App() {
  return (
    <Router>
      <div>
        <Navigation />
<<<<<<< HEAD
        <h1>Hello HPI Generator</h1>
        <p>dang this was hard</p>
        <DurationPage/>
        <Home/>
=======
        {/* <Route exact path="/" component={Login}/>
        <Route path="/Register" component={Register}/> */}
>>>>>>> 7ccc7978de36b8f9f0478d17b911a531cacd1035
      </div>
    </Router>
  );
}
export default App;