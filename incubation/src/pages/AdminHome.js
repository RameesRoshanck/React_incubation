import React from 'react'
import AdminNavbar from '../adminSide/navbar/AdminNavbar'
import AdminTable from '../adminSide/adminhome/adminTable'
import './adminHome.css'

function adminHome() {
  return (
    <div>
        <AdminNavbar/>
        <div className='adminHomePage'>
          <AdminTable/>
        </div>
    </div>
  )
}

export default adminHome