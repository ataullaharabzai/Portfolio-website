import React from 'react'
import myImage from '../images/img_3.jpeg'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <main>
      <div className='w-full p-5 md:p-15 mt-10 flex flex-col md:flex-row justify-around'>
        <section className='introduction w-full md:max-w-[50%] flex flex-wrap justify-center items-stretch flex-col gap-2'>
          <p className='text-[14px] md:text-[22px] text-[#4e525a]'>Hey, i'm Ataullah ARABZAI</p>
          <div className='leading-12 w-full md:w1/2 lg:leading-24'>
            <h1 className='text-[50px] lg:text-[90px] font-bold'><span className='text-[#6e06f2]'>Front</span>end</h1>
            <h1 className='text-[50px] lg:text-[90px] font-bold'>Developer</h1>
          </div>
          <p className='text-[14px] md:text-[22px] text-[#4e525a] md:leading-8 leading-6'>I'm a frontend developer based in Afghanistan, I'll help you build beautiful websites and web applications your users will love.</p>
          <div className='text-[14px] md:text-[16px] w-full lg:w-[320px] flex justify-center lg:justify-start items-center mt-5 gap-4 lg:gap-2 sm:mt-0'>
            <NavLink to='/contact' className='border rounded-lg font-medium px-2.5 py-2 text-white bg-[#6c06f2] cursor-pointer hover:bg-[#6c06f2c5] transition-all'>Get In Touch</NavLink>
            <NavLink to='/projects' className='border rounded-lg font-medium px-2.5 py-2 cursor-pointer hover:bg-black hover:text-white transition-all'>Browse Projects</NavLink>
          </div>
        </section>
        <section className='myImage w-full'>
          <div className='circle-img lg:w-full flex justify-center items-center mt-10 md:mt-0'>
            <div className='lg:w-85 lg:h-85 w-65 h-65 rounded-full p-10 border border-[#6e06f2]'>
              <img className='object-cover w-full h-full rounded-full' src={myImage} alt="Developer Image" />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home