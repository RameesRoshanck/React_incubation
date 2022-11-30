import React, { useState } from "react";
import "./Login.css";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3002/login",
    {email,password}).then((data)=>{
      localStorage.setItem("token",data.token)
      navigate("/")
      console.log(data);
    }).catch((error)=>{
      throw error
    })


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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            defaultValue="Ramees"
          />
          <label htmlFor="fname">Password</label>
          <input
            type="Password"
            id="lname"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            defaultValue="123456"
          />
          <button className="btn" type="submit" >Log In</button>
        </form>
        <button className="link-btn">Don't have an account ? Sign up here </button>
      </div>
    </div>
  );
}

export default Login;
