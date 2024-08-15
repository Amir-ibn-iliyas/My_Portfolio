// import React from 'react'

import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-10  h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md">
      <p className="blue-gradient_text">AH</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">

        <div className="group nav_link rounded-lg bg-white flex items-center justify-center shadow-lg hover:cursor-pointer ">
      <NavLink to="about" className={({isActive})=> isActive?' text-green-500  group-hover:text-white':'text-black-500 group-hover:text-white '} >
        About
      </NavLink>
        </div>
        <div className="group nav_link rounded-lg bg-white flex items-center justify-center shadow-lg  hover:cursor-pointer  ">
      <NavLink to="projects"  className={({isActive})=> isActive?'text-green-500 border-b-green-500 group-hover:text-white':'text-black-500 group-hover:text-white '}>
        Projects
      </NavLink>
      </div>
      </nav>
    </header>
  )
}

export default Navbar