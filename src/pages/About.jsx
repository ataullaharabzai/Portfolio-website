import React from "react";
import "../index.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <main>
      <section className="title p-5 md:p-10 mt-5">
        <div className="w-full">
          <p
            data-aos="fade-right"
            className="text-4xl font-semibold md:font-bold md:text-8xl"
          >
            About me
            <span className="font-bold text-3xl md:text-8xl text-[#6e06f2] dark:text-orange-600">
              .
            </span>
          </p>
          <p
            data-aos="fade-left"
            className="md:text-2xl text-[#4e525a] mt-5 sm:border-l-[20px] border-[#6e06f2] dark:border-orange-600 p-3"
          >
            Developing beautiful and functional websites is what I love doing,
            which is why I put my full effort into every project I work on. I
            enjoy solving problems, learning new technologies, and creating
            experiences that are both useful and enjoyable for users.
          </p>
        </div>
      </section>

      <section className="stacks">
        <div className="skills-box w-full">
          <div className="row row-right">
            <span>ReactJS</span>
            <span>TypeScript</span>
            <span>Continuous Learner</span>
            <span>Bootstrap</span>
            <span>HTML5</span>
            <span>CSS3</span>
          </div>

          <div className="row row-left">
            <span>Problem Solving</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>Responsive</span>
            <span>TypeScript</span>
            <span>ReactJS</span>
          </div>

          <div className="row row-right">
            <span>ReactJS</span>
            <span>Collaboration</span>
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>Attention to Details</span>
            <span>Responsive</span>
          </div>
        </div>
      </section>

      <section className="myStory w-full p-5 md:p-10">
        <p
          data-aos="fade-right"
          className="text-[30px] sm:text-[50px] font-bold"
        >
          My Story
          <span className="font-bold text-3xl md:text-6xl text-[#6e06f2] dark:text-orange-600">
            .
          </span>
        </p>
        <p
          data-aos="fade-left"
          className="text-[13px] md:text-[18px] text-[#4e525a] dark:text-gray-300"
        >
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

export default About;
