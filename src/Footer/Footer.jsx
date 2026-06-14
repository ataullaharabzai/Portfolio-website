import React from 'react'
import { NavLink } from 'react-router-dom'
import { Linkedin, GitHub } from 'react-feather'

function Footer() {
  return (
    <footer className='p-5 md:p-15'>
      <div className='w-full flex justify-between items-center'>
        <div className='w-full max-w-75 flex justify-between items-center text-[#4e525a] text-[11px] sm:text-[17px]'>
          <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#6e06f2] font-semibold' : 'hover:text-[#6e06f2] font-semibold'}>Home</NavLink>

          <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-[#6e06f2] font-semibold' : 'hover:text-[#6e06f2] font-semibold'}>Projects</NavLink>

          <NavLink to='/about' className={({ isActive }) => isActive ? 'text-[#6e06f2] font-semibold' : 'hover:text-[#6e06f2] font-semibold'}>About</NavLink>

          <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-[#6e06f2] font-semibold' : 'hover:text-[#6e06f2] font-semibold'}>Contact</NavLink>
        </div>
        <div className='text-[#4e525a] w-full max-w-20 flex justify-around items-center'>
          <a href='https://linkedin.com/in/ataullah-dev'><Linkedin className='hover:fill-[#4e525a]' /></a>
          <a href='https://github.com/ataullaharabzai'><GitHub className='hover:fill-[#4e525a]' /></a>
        </div>
      </div>

      <div className='w-full flex justify-between items-center mt-10'>
        <div className='w-full max-w-96 p-2 flex justify-center items-start flex-col gap-5'>
          <p className='text-[#4e525a] font-semibold md:text-[22px]'>Interested in working together<span className='text-[#6e06f2]'>?</span></p>
          <div className='text-[14px] md:text-[16px] w-full lg:w-[320px] flex justify-center lg:justify-start items-center mt-5 gap-4 lg:gap-2 sm:mt-0'>
            <NavLink to='/contact' className='border rounded-lg font-medium px-2.5 py-2 text-white bg-[#6c06f2] cursor-pointer hover:bg-[#6c06f2c5] transition-all'>Get In Touch</NavLink>
            <NavLink to='/projects' className='border rounded-lg font-medium px-2.5 py-2 cursor-pointer hover:bg-black hover:text-white transition-all'>Browse Projects</NavLink>
          </div>
        </div>
        <div className='text-[#4e525a] w-full max-w-75 text-right'>
          <p>©2026 All Rights Reserved.</p>
          <p>Made with 💜 by Ataullah ARABZAI</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer