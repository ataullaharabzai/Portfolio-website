import React from 'react'
import clinic from '../images/clinic.PNG'
import youtube from '../images/youtub.PNG'
import product from '../images/product.PNG'


function Projects() {
  return (
    <main className='p-5 md:p-15 mt-5'>
      <div>
        <p className='text-3xl md:text-7xl font-bold'>My <span className='text-[#6e06f2]'>Best</span> Creations<span className='font-bold text-3xl md:text-8xl text-[#6e06f2]'>.</span></p>
        <p className='text-[#4e525a] text-[16px] md:text-[24px] mt-5'>Designing and developing modern web applications that combine creativity,</p>
        <p className='text-[#4e525a] text-[16px] md:text-[24px]'>performance, and exceptional user experiences.</p>
      </div>

      <section className='projects p-5 overflow-visible'>
        <div className="project1 mt-10 sticky top-5 z-10 bg-white rounded-2xl">
          <div className=' w-full bg-gray-400 p-5 flex justify-center items-center rounded-2xl'>
            <a href="https://ataullaharabzai.github.io/Dental-Clinic/" className=''>
              <div>
                <img
                  src={clinic}
                  alt="Dental Clinic"
                  className='sm:w-180 sm:h-90 object-top rounded-xl'
                />
              </div>
            </a>
          </div>
          <p className='text-2xl md:text-5xl mt-3 font-semibold'>Dental Clinic</p>
          <p className='md:text-[22px] text-[#4e525a]'>Professional dental clinic web application with user Auth and responsive layout.</p>
          <p className='md:text-[22px] text-[#4e525a]'>Build with HTML5, CSS3 and JavaScript.</p>
        </div>

        <div className="project2 mt-20 sticky top-5 z-20 bg-white rounded-2xl">
          <div className='w-full bg-gray-400 p-5 flex justify-center items-center rounded-2xl'>
            <a href="https://github.com/ataullaharabzai" className=''>
              <div>
                <img
                  src={product}
                  alt="Dental Clinic"
                  className='sm:w-180 sm:h-90 object-top rounded-xl'
                />
              </div>
            </a>
          </div>
          <p className='text-2xl md:text-5xl mt-3 font-semibold'>Shpooing Store</p>
          <p className='md:text-[22px] text-[#4e525a]'>Porduct listing with API handling and modren layout.</p>
          <p className='md:text-[22px] text-[#4e525a]'>Build with ReactJS and TailwindCSS.</p>
        </div>

        <div className="project3 mt-20 sticky top-5 z-30 bg-white rounded-2xl">
          <div className='w-full bg-gray-400 p-5 flex justify-center items-center rounded-2xl'>
            <a href="https://github.com/ataullaharabzai" className=''>
              <div>
                <img
                  src={youtube}
                  alt="Dental Clinic"
                  className='sm:w-180 sm:h-90 object-top rounded-xl'
                />
              </div>
            </a>
          </div>
          <p className='text-2xl md:text-5xl mt-3 font-semibold'>YouTube Clone</p>
          <p className='md:text-[22px] text-[#4e525a]'>A YouTube clone with three pages and basic DOM manipulation and clean layout.</p>
          <p className='md:text-[22px] text-[#4e525a]'>Build with HTML5, CSS3 and JavaScript.</p>
        </div>

      </section>

    </main>
  )
}

export default Projects