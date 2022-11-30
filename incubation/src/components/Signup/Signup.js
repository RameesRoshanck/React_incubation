import React, { useState } from "react";
import "./Signup.css";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Signup() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoen] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
    
  const handleSubmit=(e)=>{
     e.preventDefault()
    //  console.log(username,);
     axios.post("http://localhost:3002/signup",{
      username,email,phone,password}).then((data)=>{
        navigate("/login")
        // console.log(data);
      }).catch((error)=>{
        throw error
      })
  }

  return (
    <div className="parentDiv">
        <div className="auth-form-conatiner" >
        <h2>Sign Up</h2>
          <form className="signup-form" action="" onSubmit={handleSubmit}>
            <label htmlFor="fname">User Name</label>
            <input
              type="text"
              id="fname"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              name="username"
              defaultValue="Ramees"
            />
            <label htmlFor="fname">Email</label>
            <input
              type="email"
              id="ename"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
              defaultValue="Ramees"
            />
            <label htmlFor="fname">Phone</label>
            <input
              type="number"
              id="phname"
              value={phone}
              onChange={(e) => {
                setPhoen(e.target.value);
              }}
              name="phone"
              defaultValue="546546464654654"
            />
            <label htmlFor="fname">Password</label>
            <input
              type="Password"
              id="pwname"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              name="password"
              defaultValue="123456"
            />
            <button className="btn" type="submit">Log In</button>
          </form>
          <button className="link-btn" >Already have an account ? login here</button>
        </div>
      </div>
  );
}

export default Signup;
