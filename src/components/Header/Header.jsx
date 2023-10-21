import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/users'>Users</NavLink>
    </div>
  )
}

export default Header