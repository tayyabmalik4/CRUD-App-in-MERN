import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
    <div className="navbarmain">
        {/* <NavLink className='navlinks' to="/alluser">CodeWithTayyab</NavLink> */}
        <NavLink className='navlinks' to="/alluser">All User</NavLink>
        <NavLink className='navlinks' to="/adduser">Add User</NavLink>
    </div> 
    </>
  )
}
