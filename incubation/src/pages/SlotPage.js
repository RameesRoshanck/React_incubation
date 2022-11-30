import React from 'react'
import AdminNavbar from "../adminSide/navbar/AdminNavbar"
import Slot from '../adminSide/Slot/Slot'
import './adminHome.css'


function SlotPage() {
  return (
    <div>
        <AdminNavbar/>
        <div className='adminHomePage1'>
        <Slot/>
        </div>
    </div>
  )
}

export default SlotPage
