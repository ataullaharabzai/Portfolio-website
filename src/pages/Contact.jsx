import React from "react";
import { NavLink } from "react-router-dom";
import darkImg from "../images/my_dark.jpeg";
import { Mail, Phone } from "react-feather";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <main>
      <div className="w-full p-5 md:p-10 mt-10 flex flex-col md:flex-row justify-around">
        <section className="introduction w-full md:max-w-[50%] flex flex-wrap justify-center items-stretch flex-col gap-2">
          <div
            data-aos="fade-right"
            className="leading-12 w-full md:w-1/2 lg:leading-24"
          >
            <h1 className="text-[30px] lg:text-[60px] font-bold">
              Get In Touch
              <span className="text-[#6e06f2] text-3xl sm:text-8xl dark:text-orange-600">
                .
              </span>
            </h1>
          </div>
          <p
            data-aos="fade-left"
            className="text-[14px] md:text-[22px] dark:text-gray-300 text-[#4e525a] md:leading-8 leading-6"
          >
            Have a project in mind
            <span className="text-[#6e06f2] dark:text-orange-600">?</span>
          </p>
          <p
            data-aos="fade-left"
            className="text-[14px] md:text-[22px] text-[#4e525a] md:leading-8 leading-6 dark:text-gray-300"
          >
            Let’s connect through the form and I’ll get back to you shortly.
          </p>
          <div className="text-[14px] md:text-[16px] w-full lg:w-[320px] flex flex-col justify-center lg:justify-start items-start mt-5 gap-4 lg:gap-2">
            <div>
              <div className="flex gap-5">
                <Mail className="cursor-pointer hover:text-[#6e06f2] dark:hover:text-orange-600" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=developer.ataullah@gmail.com&su=Project%20Inquiry&body=Hi%20Ataullah,%0A%0AI%20am%20contacting%20you%20regarding%20a%20project.%20Please%20share%20more%20details.%0A%0AThanks"
                  className="hover:text-[#6e06f2] dark:hover:text-orange-600"
                >
                  developer.ataullah@gmail.com
                </a>
              </div>

              <div className="flex gap-5 mt-3">
                <Phone className="cursor-pointer hover:text-[#6e06f2] dark:hover:text-orange-600" />
                <a
                  href="https://wa.me/93704071798"
                  className="hover:text-[#6e06f2] dark:hover:text-orange-600"
                >
                  +93 704 071 798
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="myImage w-full mb-10">
          <div className="circle-img lg:w-full flex justify-center items-center mt-10 md:mt-0">
            <div className="lg:w-[380px] lg:h-[380px] w-[260px] h-[260px] rounded-full p-10 border border-[#6e06f2] dark:border-orange-600">
              <img
                data-aos="zoom-out"
                className="object-cover w-full h-full rounded-full"
                src={darkImg}
                alt="Developer Image"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Contact;
