// import React from 'react'

import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-10  h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md">
      <p className="blue-gradient_text">AH</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">

        <div className="py-1 px-4 rounded-lg bg-white flex items-center justify-center shadow-lg hover:cursor-pointer ">
      <NavLink to="about" className={({isActive})=> isActive?'text-green-500':'text-black-500 '} >
        About
      </NavLink>
        </div>
        <div className="py-1 px-4 rounded-lg bg-white flex items-center justify-center shadow-lg hover:cursor-pointer ">
      <NavLink to="projects" className={({isActive})=> isActive?'text-green-500':'text-black-500'}>
        Projects
      </NavLink>
      </div>
      </nav>
    </header>
  )
}

export default Navbar