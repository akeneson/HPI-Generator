import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Button, Container} from "react-bootstrap";

import UserContext from '../../Context/UserContext';
import './LogOptions.css'

export default function LogOptions() {
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    const register = () => history.push('/register')
    const login = (e) => {
      e.preventDefault();
      // setUserData({
      //   token: TOKEN,
      //   user: USER
      // });
      // localStorage.setItem("auth-token", "");
      history.push('/login')
    }
    const logout = (e) => {
      e.preventDefault();
        setUserData({
          token: undefined,
          user: undefined
        });
        localStorage.setItem("auth-token", "");
        history.push('/login')
      };
      console.log('USER DATA:', userData)
      return (
        
        <Container className="auth-options mx-3">
          {userData.user ? (
            <Button className="btn-blue" onClick={logout}>Log out</Button>
          ) : (
            
            <Container className=''>
              <Button className="btn-blue" onClick={register}>Register</Button>
              <Button className="btn-blue" onClick={login}>Log in</Button>
            </Container>
          )}
        </Container>
      );
}