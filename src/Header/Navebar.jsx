import React from 'react'
import { NavLink } from 'react-router-dom'
import { Phone } from 'react-feather'

function Navebar() {
  return (
    <header className='w-full flex justify-around items-center gap-50 p-3'>
      <NavLink to='/' className='font-bold'>Arabzai DEV<span className='font-bold text-3xl text-[#6e06f2]'>.</span></NavLink>
      <nav className='list-none w-full max-w-60 flex justify-around items-center'>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-[#6e06f2] font-semibold' : 'hover:text-[#6e06f2] font-semibold'}>Home</NavLink></li>
        <li><NavLink to='/projects' className={({ isActive }) => isActive ? 'text-[#6e06f2] font-semibold' : 'hover:text-[#6e06f2] font-semibold'}>Projects</NavLink></li>
        <li><NavLink to='/about' className={({ isActive }) => isActive ? 'text-[#6e06f2] font-semibold' : 'hover:text-[#6e06f2] font-semibold'}>About</NavLink></li>
      </nav>
      <NavLink to='/contact' className={`border border-[#6e06f2] p-2 rounded-full`}>
        <Phone className='hover:fill-white' />
      </NavLink>
    </header>
  )
}

export default Navebar