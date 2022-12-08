import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configure/firebase";
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import "../css/login.css"

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useNavigate();
    const login = (() =>{
        signInWithEmailAndPassword(auth, email, password).then(()=>{
            history.push("/home");
        }).catch((err)=>{
            alert('Error logging in, review you username and password')
        })
       
    })

    return(
        <div >

            <h1>Login</h1>

            <input type="email" placeholder="Please Enter your email" onChange={(e)=>setEmail(e.target.value)}/><br></br>
            <input type="password" placeholder="Please Enter your Password" onChange={(e)=>setPassword(e.target.value)}/><br></br>

            <button style={{width: '150px', height: '30px'}} onClick={login}>Login</button><br></br><br></br>

            <span>Forgot password? </span>
            <span>
                <Link to="/forgotPass">Click here</Link>
            </span>
            <br></br>
            <span>Don't have account? </span>
            <span>
                <Link to="/signup">Sign Up</Link>
            </span>

        </div>
    )

}

export default Login;