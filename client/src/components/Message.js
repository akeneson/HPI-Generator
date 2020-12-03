import React from 'react'

//use bootstrap classes to return a message to a user if they are not authenticated
const bootSMessage = (props)=>{
    let userMessage = "alert ";
    if(props.message.msgError)
        userMessage = userMessage + "alert-danger";
    else
        userMessage = userMessage + "alert-primary";
    return userMessage;
}

//output the message body
const AuthMessage = props=>{
    return(
        <div className={bootSMessage(props)} role= "alert">
            {props.message.msgBody}
        </div>
    )
}

export default AuthMessage;