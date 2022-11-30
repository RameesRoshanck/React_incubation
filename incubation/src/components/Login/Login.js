import React, { useState } from "react";
import "./Login.css";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [logErr,setLogErr]=useState(false)
  const [login,setLogin]=useState({
    email:'',
    password:'',
  })

  const handleChange=(e)=>{
     const {name,value}=e.target
    //  console.log(e.target.value);
     setLogin({
      ...login,[name]:value
     })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!login.email || !login.password){
        setLogErr(true)
        return false
    }else {
    axios.post("http://localhost:3002/login",
     login).then((data)=>{
      localStorage.setItem("token",data.token)
      console.log(data.data);
      navigate("/")
    }).catch((error)=>{
      throw error
    })
  }
  };

  return (
    <div className="parantDiv">
      <div className="auth-form-conatiner" >
        <h2>Login</h2>
        <form action="" className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <input
            type="email"
            id="fname"
            value={login.email}
            onChange={handleChange}
            name="email"
            defaultValue="Ramees"
          />
          <p>{logErr && !login.email && <label>email is required</label> }</p>
          <label htmlFor="fname">Password</label>
          <input
            type="Password"
            id="lname"
            value={login.password}
            onChange={handleChange}
            name="password"
            defaultValue="123456"
          />
           <p>{logErr && !login.password && <label>email is required</label> }</p>
          <button className="btn" type="submit" >Log In</button>
        </form>
        <button className="link-btn">Don't have an account ? Sign up here </button>
      </div>
    </div>
  );
}

export default Login;
