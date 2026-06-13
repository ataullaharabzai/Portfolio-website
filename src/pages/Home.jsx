import React from 'react'
import myImage from '../images/img_3.jpeg'
import {NavLink} from 'react-router-dom'

function Home() {
  return (
    <main>
      <div className='w-full p-15 mt-10 flex justify-around flex-wrap'>
        <section className='introduction w-full max-w-[50%] flex flex-wrap justify-center items-stretch flex-col gap-2'>
          <p className='text-[22px] text-[#4e525a]'>Hey, i'm Ataullah ARABZAI</p>
          <div className='leading-24'>
            <h1 className='text-[90px] font-bold'><span className='text-[#6e06f2]'>Front</span>end</h1>
            <h1 className='text-[90px] font-bold'>Developer</h1>
          </div>
          <p className='text-[22px] text-[#4e525a] leading-7'>I'm a frontend developer based in Afghanistan, I'll help you build beautiful websites and web applications your users will love.</p>
          <div className='w-full max-w-75 flex flex-wrap justify-around items-start mt-5'>
            <NavLink to='/contact' className='border rounded-lg font-medium px-2.5 py-2 text-white bg-[#6c06f2] cursor-pointer hover:bg-[#6c06f2c5] transition-all'>Get In Touch</NavLink>
            <NavLink to='/projects' className='border rounded-lg font-medium px-2.5 py-2 cursor-pointer hover:bg-black hover:text-white transition-all'>Browse Projects</NavLink>
          </div>
        </section>
        <section className='myImage w-full max-w-60'>
          <div className='circle-img '>
            <div className='w-85 h-85 rounded-full p-10 border border-[#6e06f2]'>
              <img className='object-cover w-full h-full rounded-full' src={myImage} alt="Developer Image" />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home