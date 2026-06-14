import React from 'react'
import myImage from '../images/img_3.jpeg'
import darkImg from '../images/my_dark.jpeg'
import clinic from '../images/clinic.PNG'
import product from '../images/product.PNG'
import youtub from '../images/youtub.PNG'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <main>
      <div className='w-full p-5 md:p-15 mt-10 flex flex-col md:flex-row justify-around'>
        <section className='introduction w-full md:max-w-[50%] flex flex-wrap justify-center items-stretch flex-col gap-2'>
          <p className='text-[14px] md:text-[22px] text-[#4e525a]'>Hey, I'm Ataullah ARABZAI</p>
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

      <section className="projects w-full p-5 md:p-15 flex justify-center items-start flex-col">
        <p className='text-[30px] sm:text-[50px] font-bold'>Projects<span className='font-bold text-3xl md:text-7xl text-[#6e06f2]'>.</span></p>
        <div className="project-section mt-5 flex flex-col justify-cente items-center lg:flex-row gap-3">

          <a href='https://ataullaharabzai.github.io/Dental-Clinic/' className='p-6 bg-gray-300 rounded-2xl w-full max-w-100 cursor-pointer'>
            <div className='w-85 h-50 rounded-xl'>
              <img
                src={clinic}
                alt="Dental clinic"
                className='object-fill w-full h-full rounded-xl'
              />
            </div>
            <p className='font-semibold sm:text-[20px] mt-2 mb-2'>Dental clicni</p>
            <p className='text-[12px] sm:text-[14px] text-[#4e525a]'>Professional dental clinic web application with user Auth and responsive layout.</p>
          </a>

          <a href='https://github.com/ataullaharabzai/Amazon-React' className='p-6 bg-gray-300 rounded-2xl w-full max-w-100 cursor-pointer'>
            <div className='w-85 h-50 rounded-xl'>
              <img
                src={product}
                alt="Dental clinic"
                className='object-fill w-full h-full rounded-xl'
              />
            </div>
            <p className='font-semibold sm:text-[20px] mt-2 mb-2'>Shopping Store</p>
            <p className='text-[12px] sm:text-[14px] text-[#4e525a]'>Porduct listing with API handling and modren layout.</p>
          </a>

          <a href='https:github.com/ataullaharabzai' className='p-6 bg-gray-300 rounded-2xl w-full max-w-100 cursor-pointer'>
            <div className='w-85 h-50 rounded-xl'>
              <img
                src={youtub}
                alt="Dental clinic"
                className='object-fill w-full h-full rounded-xl'
              />
            </div>
            <p className='font-semibold sm:text-[20px] mt-2 mb-2'>YouTube Clone</p>
            <p className='text-[12px] sm:text-[14px] text-[#4e525a]'>A YouTube clone with basic DOM manipulation and clean layout.</p>
          </a>

        </div>
      </section>

      
    </main>
  )
}

export default Home