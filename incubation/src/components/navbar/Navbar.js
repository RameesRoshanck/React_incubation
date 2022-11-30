import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';


function Navbar() {
    const navigate = useNavigate();
    
    function handleSubmit(){
       navigate("/admin")
    }

    function logout(e){
        localStorage.removeItem("token")
        navigate("/login")
    }

  return (
    <div className='parentNav'>
        <div className='left-nav'>
            <h2>VEE SPACE</h2>
            <button onClick={()=>{
                navigate('/register')
            }} className='registerbtn'>Registration</button>
        </div>
        <div>
            <div class="dropdown">
                <button class="dropbtn">Dropdown 
                <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                   <button onClick={handleSubmit} >Admin</button>
                   <button onClick={logout} >Logout</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar