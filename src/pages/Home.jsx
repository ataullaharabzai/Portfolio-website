import myImage from "../images/img_3.jpeg";
import darkImg from "../images/my_dark.jpeg";
import clinic from "../images/clinic.PNG";
import product from "../images/product.PNG";
import youtube from "../images/youtub.PNG";
import { NavLink } from "react-router-dom";
import devhire from '../images/devhire.PNG'
import cv from '../files/Ataullah CV PDF.pdf'
import {Download} from 'react-feather'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    })
  }, [])

  return (
    <main className="dark:bg-gray-800 dark:text-white">
      <div className="w-full p-5 md:p-15 mt-10 flex flex-col md:flex-row justify-around">
        <section data-aos='fade-left' className="introduction w-full md:max-w-[50%] flex flex-wrap justify-center items-stretch flex-col gap-2">
          <p className="text-[14px] md:text-[22px] text-[#4e525a]">
            Hey, I'm Ataullah ARABZAI
          </p>
          <div className="leading-12 w-full md:w1/2 lg:leading-24">
            <h1 className="text-[50px] lg:text-[90px] font-bold">
              <span className="text-[#6e06f2]">Front</span>end
            </h1>
            <h1 className="text-[50px] lg:text-[90px] font-bold">Developer</h1>
          </div>
          <p className="text-[14px] md:text-[22px] text-[#4e525a] md:leading-8 leading-6">
            I'm a frontend developer based in Afghanistan, I'll help you build
            beautiful websites and web applications your users will love.
          </p>
          <div className="text-[14px] md:text-[16px] w-full lg:w-115 flex justify-center lg:justify-start items-center mt-5 gap-4 lg:gap-2 sm:mt-0">
            <NavLink
              to="/contact"
              className="border rounded-lg font-medium px-2.5 py-3 text-white bg-[#6c06f2] cursor-pointer hover:bg-[#6c06f2c5] transition-all"
            >
              Get In Touch
            </NavLink>
            <NavLink
              to="/projects"
              className="border rounded-lg font-medium px-2.5 py-3 cursor-pointer hover:bg-black hover:text-white transition-all"
            >
              Browse Projects
            </NavLink>
            <a className="border rounded-lg font-medium flex gap-1 px-2.5 py-3 cursor-pointer hover:bg-black hover:text-white transition-all" href="" download={cv}>Download CV <Download/></a>
          </div>
        </section>
        <section data-aos='fade-right' className="myImage w-full">
          <div className="circle-img lg:w-full flex justify-center items-center mt-10 md:mt-0">
            <div className="lg:w-95 lg:h-95 w-65 h-65 rounded-full p-10 border border-[#6e06f2]">
              <img
                className="object-cover w-full h-full rounded-full"
                src={darkImg}
                alt="Developer Image"
              />
            </div>
          </div>
        </section>
      </div>

      <section className="projects w-full p-5 lg:p-15 flex justify-center items-center lg:items-start flex-col">
        <p className="text-[30px] w-full text-left sm:text-[50px] font-bold">
          Projects
          <span className="font-bold text-3xl md:text-7xl text-[#6e06f2]">
            .
          </span>
        </p>
        <div data-aos='fade-up'  className="project-section mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          <a
            href="https://ataullaharabzai.github.io/Dental-Clinic/"
            className=" p-6 bg-gray-200 rounded-2xl w-full cursor-pointer"
          >
            <div className="w-full h-52 sm:h-60 rounded-xl overflow-hidden">
              <img
                src={clinic}
                alt="Dental clinic"
                className="object-fill w-full h-full rounded-xl"
              />
            </div>
            <p className="font-semibold sm:text-[20px] mt-2 mb-2">
              Dental clinic
            </p>
            <p className="text-[12px] sm:text-[14px] text-[#4e525a]">
              Professional dental clinic web application with user Auth and
              responsive layout.
            </p>
          </a>

          <a
            href="https://dev-hire-jobs.vercel.app"
            className="p-6 bg-gray-200 rounded-2xl w-full cursor-pointer"
          >
            <div className="w-full h-52 sm:h-60 overflow-hidden rounded-xl">
              <img
                src={devhire}
                alt="DevHire jobs"
                className="object-fill w-full h-full rounded-xl"
              />
            </div>
            <p className="font-semibold sm:text-[20px] mt-2 mb-2">
              Job Board
            </p>
            <p className="text-[12px] sm:text-[14px] text-[#4e525a]">
              Job board for developers, designers and tech users.
            </p>
          </a>

          <a
            href="https://github.com/ataullaharabzai/Amazon-React"
            className="p-6 bg-gray-200 rounded-2xl w-full cursor-pointer"
          >
            <div className="w-full h-52 sm:h-60 overflow-hidden rounded-xl">
              <img
                src={product}
                alt="Dental clinic"
                className="object-fill w-full h-full rounded-xl"
              />
            </div>
            <p className="font-semibold sm:text-[20px] mt-2 mb-2">
              Shopping Store
            </p>
            <p className="text-[12px] sm:text-[14px] text-[#4e525a]">
              Product listing with API handling and modern layout.
            </p>
          </a>

          <a
            href="https:github.com/ataullaharabzai"
            className="p-6 bg-gray-200 rounded-2xl w-full cursor-pointer"
          >
            <div className="w-full h-52 sm:h-60 rounded-xl overflow-hidden">
              <img
                src={youtube}
                alt="Dental clinic"
                className="object-fill w-full h-full rounded-xl"
              />
            </div>
            <p className="font-semibold sm:text-[20px] mt-2 mb-2">
              YouTube Clone
            </p>
            <p className="text-[12px] sm:text-[14px] text-[#4e525a]">
              A YouTube clone with basic DOM manipulation and clean layout.
            </p>
          </a>
        </div>
      </section>

      <section className="experiance w-full p-5 md:p-15">
        <p className="text-[30px] sm:text-[50px] font-bold">
          Experience
          <span className="font-bold text-3xl md:text-6xl text-[#6e06f2]">
            .
          </span>
        </p>
        <p className="text-[13px] md:text-[18px] text-[#4e525a]">
          I <span className="text-[#6e06f2]">started</span> learning web
          development in <span className="text-[#6e06f2]">2025</span> and have
          been building projects to improve my skills ever since. Although I
          don't have professional industry experience yet, I enjoy creating
          responsive and user-friendly web applications and learning{" "}
          <span className="text-[#6e06f2]">new technologies</span>. I'm
          currently working toward becoming a{" "}
          <span className="text-[#6e06f2]">full-stack developer</span> and i am
          excited to contribute, learn, and grow when given the{" "}
          <span className="text-[#6e06f2]">opportunity</span>.
        </p>
        <p className="text-[13px] md:text-[18px] text-[#4e525a]">
          And you know what? I Love what i do! 💜
        </p>
      </section>

      <section className="skills w-full p-5 md:p-15">
        <p className="text-[30px] sm:text-[50px] font-bold">
          Skills
          <span className="font-bold text-3xl md:text-6xl text-[#6e06f2]">
            .
          </span>
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-5">
          <div>
            <p className="text-[20px] md:text-[22px] font-semibold leading-10 md:leading-15">
              Web Design
            </p>
            <div className="text-[14px] md:text-[18px] text-[#4e525a]">
              <p>Responsive Design</p>
              <p>User Research</p>
            </div>
          </div>

          <div>
            <p className="text-[20px] md:text-[22px] font-semibold leading-10 md:leading-15">
              Frontend
            </p>
            <div className="text-[14px] md:text-[18px] text-[#4e525a]">
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>ReactJS</p>
              <p>TailwindCSS</p>
            </div>
          </div>

          <div>
            <p className="text-[20px] md:text-[22px] font-semibold leading-10 md:leading-15">{`Backend "Learning"`}</p>
            <div className="text-[14px] md:text-[18px] text-[#4e525a]">
              <p>PHP</p>
              <p>Laravel</p>
              <p>MySQL</p>
            </div>
          </div>

          <div>
            <p className="text-[20px] md:text-[22px] font-semibold leading-10 md:leading-15">
              Soft Skills
            </p>
            <div className="text-[14px] md:text-[18px] text-[#4e525a]">
              <p>Effective Communication</p>
              <p>Collaboration</p>
              <p>Growth Mindset</p>
              <p>Continuous Learning</p>
            </div>
          </div>
        </div>
      </section>

      <section className="myStory w-full p-5 md:p-15">
        <p className="text-[30px] sm:text-[50px] font-bold">
          My Story
          <span className="font-bold text-3xl md:text-6xl text-[#6e06f2]">
            .
          </span>
        </p>
        <p className="text-[13px] md:text-[18px] text-[#4e525a]">
          My journey into web development started with curiosity and a desire to
          create things on the internet. What began with learning HTML and CSS
          gradually grew into a passion for building interactive and responsive
          websites. Since then, I have continued learning new technologies,
          working on personal projects, and challenging myself to improve every
          day. My goal is to become a skilled full-stack developer and use
          technology to build useful solutions that make a difference.
        </p>
      </section>
    </main>
  );
}

export default Home;
