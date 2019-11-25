import React, { useState } from "react";
import { Redirect } from 'react-router-dom';

import './Login.css';

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function validateForm() {
        if( email.length < 1){
            alert('email should contain atleast one character')
            return false;
        }
        if(password.search(/[A-Z]/i) < 0){
            alert('paswrd should contain one capital letter ')
            return false;
        }
        if(password.search(/[a-z]/i) < 0){
            alert('paswrd should contain one small letter ')
            return false;
        }
        if(password.search(/[0-9]/i) < 0){
            alert('paswrd should contain one number letter ')
            return false;
        }
        if(password.search(/[!#$%&? "]/i) < 0){
            alert('paswrd should contain one special letter ')
            return false;
        }
        return true;

    }

    function handleSubmit(event) {
        event.preventDefault();
       if(validateForm()){
           saveInLocalStorage();
           props.history.push("/dashboard");

       }
    }

    function saveInLocalStorage(){
        localStorage.setItem('login-status','true');

    }



        return (
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <input
                        placeholder="Email Id"
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                <input   type="submit">

                </input>
            </form></div>
        );


}
