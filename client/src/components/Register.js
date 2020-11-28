import React, {useState,useRef,useEffect} from 'react';
//useref to create an instance variable for timeout function and useeffect will clean up timeout fucntion
import AuthService from '../Services/AuthService';
import Message from '../Components/Message';

const Register = props=>{
    const [user,setUser] = useState({email: "", password : "", firstName : "", lastName : "", birthDate : ""});
    const [message,setMessage] = useState(null);
    //create time variable
    let messageTime = useRef(null);

    //create useEffect hook that takes in a call back
    useEffect(()=>{
        return ()=>{
            setMessageTime(messageTime);
        }
        //pass empty array as second fucntion so it's only called once
    },[]);


    const onChange = event =>{
        setUser({...user,[event.target.name] : event.target.value});
    }

    //create reset form to reset the state of user to employ strings
    const resetForm = ()=>{
        setUser({email: "", password : "",firstName : "", lastName : "", birthDate : ""});
    }

    const onSubmit = event =>{
        event.preventDefault();
        //pass in the user to get the data
        AuthService.register(user).then(data=>{
            //pull out message from the server
            const { message } = data;
            //set the message
            setMessage(message);
            //call the function to reset the form
            resetForm();
            //check if there are errors
            if(!message.msgError){
                //if no errors and a registration was created, it will time out after two seconds and send them to the login page
                timerID = setTimeout(()=>{
                    props.history.push('/login');
                    //2 seconds to read the message before going to log in page
                },2000)
            }
        });
    }



    return(
        <div>
            <form onSubmit={onSubmit}>
                <h3>Please Register</h3>
                
                <label htmlFor="email" className="sr-only">email: </label>
                <input type="text" 
                       name="email" 
                       value={user.email}
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter email"/>
                
                <label htmlFor="password" className="sr-only">password: </label>
                <input type="password" 
                       name="password"
                       value={user.password} 
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter Password"/>
                
                <label htmlFor="firstName" className="sr-only">firstName: </label>
                <input type="text" 
                       name="firstName"
                       value={user.firstName}  
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter your first name"/>

                <label htmlFor="lastName" className="sr-only">lastName: </label>
                <input type="text" 
                       name="lastName"
                       value={user.lastName}  
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter your last name"/>   


                <label htmlFor="birthDate" className="sr-only">birthDate: </label>
                <input type="date" 
                       name="birthDate"
                       value={user.birthDate}  
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter your date of birth"/>    
                
                <button className="btn btn-lg btn-primary btn-block" 
                        type="submit">Register</button>
            </form>
            {message ? <Message message={message}/> : null}
        </div>
    )
}

export default Register;