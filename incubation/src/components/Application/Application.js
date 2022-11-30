import React, { useState } from 'react'
import './Application.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Application() {
   const navigate = useNavigate();
    const[surename,setSurename]=useState('')
    const[address,setAddress]=useState('')
    const[city,setCity]=useState('')
    const[state,setState]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[companyName,setCompanyName]=useState('')
    const[description,setDescription]=useState('')
    const[solution,setSolution]=useState('')
    const[marketSize,setMarketSize]=useState('')
    const[productMarket,setProductMarket]=useState('')
    const[details,setDetails]=useState('')
  
    const handleOnSubmit=(e)=>{
      e.preventDefault()
      console.log(surename);
      axios.post("http://localhost:3002/register",
    {surename,address,city,state,email,phone,companyName,description
      ,solution,marketSize,productMarket,details}).then((result)=>{
      }).catch((error)=>{
        console.log(error);
     })
     }

     function handlesubmit(e){
        e.preventDefault()
        navigate("/")
     }
    

  return (
    <div className="parentDiv">
        <div className="auth-form-conatiner" >
        <h2>Register Form</h2>
          <form className="signup-form" onClick={handleOnSubmit}>
            <label htmlFor="fname">Name</label>
            <input
              type="text"
              id="fname"
              value={surename}
              onChange={(e)=>{setSurename(e.target.value)}}
              name="surename"
            />
            <label htmlFor="fname">Address</label>
            <input
              type="text"
              id="Aname"
              value={address}
              onChange={(e)=>{setAddress(e.target.value)}}
              name="address"
            />
            <label htmlFor="fname">City</label>
            <input
              type="text"
              id="Ctname"
              value={city}
              onChange={(e)=>{setCity(e.target.value)}}
              name="city"
            />
            <label htmlFor="fname">State</label>
            <input
              type="text"
              id="stname"
              value={state}
              onChange={(e)=>{setState(e.target.value)}}
              name="state"
            />
            <label htmlFor="fname">Email</label>
            <input
              type="Email"
              id="ename"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              name="email"
            />
            <label htmlFor="fname">Phone Number*</label>
            <input
              type="number"
              id="noname"
              value={phone}
              onChange={(e)=>{setPhone(e.target.value)}}
              name="phone"
            />
            <label htmlFor="fname">Company Name</label>
            <input
              type="text"
              id="cmpname"
              value={companyName}
              onChange={(e)=>{setCompanyName(e.target.value)}}
              name="companyName"
            />
            <label htmlFor="fname">Describe your team and background</label>
            <textarea id="dcrptname"
             value={description}
             onChange={(e)=>{setDescription(e.target.value)}}
             name="description" rows="4" cols="50"/>
            <label htmlFor="fname">What is unique about your solution?</label>
            <textarea id="sltnname"
             value={solution}
             onChange={(e)=>{setSolution(e.target.value)}}
             name="solution" rows="4" cols="50"/>
            <label htmlFor="fname">What is the potential market size of the product</label>
            <textarea id="sizename" 
              value={marketSize}
              onChange={(e)=>{setMarketSize(e.target.value)}}
            name="marketSize" rows="4" cols="50"/>
            <label htmlFor="fname">How do you market or plan to market your product and service</label>
            <textarea id="marketname" 
             value={productMarket}
             onChange={(e)=>{setProductMarket(e.target.value)}}
            name="productMarket" rows="4" cols="50"/>
            <label htmlFor="fname">upload a detailed business Proposal</label>
            <textarea id="detailedname"
             value={details}
             onChange={(e)=>{setDetails(e.target.value)}}
             name="details" rows="4" cols="50"/>
            <button className="btn" onClick={handlesubmit} type="submit">Submit</button>
          </form>
        </div>
      </div>
  )
}

export default Application