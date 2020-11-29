import React, {useState,useContext} from 'react';
//two sates - useState will provide state for functional components
import AuthService from '../Services/AuthService';
import Message from './Message';
//helper component to display messages to the user
import {AuthContext} from '../Context/AuthContext';
//context is global API state for react

//declear login
const Login = props=>{
    //set states, pass empty objects, initalize user to these
    const [user,setUser] = useState({email: "", password : ""});
    //set state to null so it does not render the message compnent yet
    const [message,setMessage] = useState(null);
    const authContext = useContext(AuthContext);


    //onchange function
    const onChange = event =>{
        //copy the what is existing for user and update it with the targeted value for field
        setUser({...user,[event.target.name] : e.target.value});
        console.log(user);
    }

    //onSubmit function    
    const onSubmit = event =>{
        event.preventDefault();
        //use the AuthService, pass in the user and return a promise to get back parsed data
        AuthService.login(user).then(data=>{
            console.log(data);
            //pull out authenicated and user datea
            const { isAuthenticated,user,message} = data;
            //check if authenicated
            if(isAuthenticated){
                //updated the user 
                authContext.setUser(user);
                //set to if authenicated
                authContext.setIsAuthenticated(isAuthenticated);
                //authenticated go to cheif complaint page
                props.history.push('/Home/HomePage');
            }
            else
            //otherwise provide a message
                setMessage(message);
        });
    }

//create a form with bootstarp
//user message will populate after the form (if needed)
    return(
        <div>
            <form onSubmit={onSubmit}>
                <h3>Please sign in</h3>
                
                <label htmlFor="email" className="sr-only">email: </label>
                <input type="text" 
                       name="email" 
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter Email Address"/>
                
                <label htmlFor="password" className="sr-only">password: </label>
                <input type="password" 
                       name="password" 
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter Password"/>
                
                <button className="btn btn-lg btn-primary btn-block" 
                        type="submit">Log in using your Email Address</button>
            </form>
    
        {message ? <Message message={message}/> : null}
        
        </div>
    )
}

export default Login;