import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Axios from 'axios';
import "./App.css";
import Home from "./components/Home/HomePage";
import Navigation from "./components/Navigation/Navigation";
import FeedPage from './components/Feed';
import HpiCard from './components/HPI/HPICard';
import UserContext from './Context/UserContext'
// import history from './components/history';

import Register from './components/Register/Register';
import Login from "./components/Login/LoginPage"

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  })

  useEffect(() => {
    const loginCheck = async () => {
      let token = localStorage.getItem('auth-token');
      if (token === null) {
        localStorage.setItem('auth-token', "");
        token = ""
      }
      const tokenRes = await Axios.post('http://localhost:3001/api/users/validToken', null,
        { headers: { 'x-auth-token': token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get('http://localhost:3001/api/users/', {
          headers: { 'x-auth-token': token },
        });
        setUserData({
          token,
          user: userRes.data,
        })
      }
    }
    loginCheck();
  }, []);

  return (
    <Router>
      {/* UserContext to provide state if logged in or not */}
      <UserContext.Provider value={userData, setUserData} >
        <Navigation />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
          <Route path="/hpi" component={HpiCard} />
          {/* <Route exact path="/user" component={Login}/> */}
        </Switch>
        {/* <Navigation /> */}
        {/* <Route path="/Register" component={Register}/> */}
      </UserContext.Provider>
    </Router>
  );
}
export default App;