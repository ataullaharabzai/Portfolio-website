import React from "react";
import { NavLink } from "react-router-dom";
import { Linkedin, GitHub } from "react-feather";

function Footer() {
  return (
    <footer className="p-5 md:p-10">
      <div className="w-full flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center flex-wrap">
        <div className="w-full max-w-[640px] flex justify-center gap-5 md:gap-0 md:justify-between items-center text-[#4e525a] dark:text-gray-300 text-[11px] sm:text-[17px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#6e06f2] dark:text-orange-600 font-semibold"
                : "hover:text-[#6e06f2] dark:hover:text-orange-600 font-semibold"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-[#6e06f2] dark:text-orange-600 font-semibold"
                : "hover:text-[#6e06f2] dark:hover:text-orange-600 font-semibold"
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#6e06f2] dark:text-orange-600 font-semibold"
                : "hover:text-[#6e06f2] dark:hover:text-orange-600 font-semibold"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[#6e06f2] dark:text-orange-600 font-semibold"
                : "hover:text-[#6e06f2] dark:hover:text-orange-600 font-semibold"
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="text-[#4e525a] dark:text-gray-300 w-full max-w-[320px] flex justify-around items-center">
          <a href="https://linkedin.com/in/ataullah-dev">
            <Linkedin className="hover:fill-[#4e525a]" />
          </a>
          <a href="https://github.com/ataullaharabzai">
            <GitHub className="hover:fill-[#4e525a]" />
          </a>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center md:mt-10 mt-5 gap-5 md:gap-0">
        <div className="w-full max-w-[640px] p-2 flex justify-center items-center flex-col md:gap-5">
          <p className="text-[#4e525a] dark:text-gray-300 font-semibold text-[14px] md:text-[22px]">
            Interested in working together
            <span className="text-[#6e06f2] dark:text-orange-600">?</span>
          </p>
          <div className="text-[14px] md:text-[16px] w-full lg:w-[320px] flex justify-center lg:justify-start items-center mt-5 gap-4 lg:gap-2 sm:mt-0">
            <NavLink
              to="/contact"
              className="border border-[#6c06f2] dark:bg-orange-600 dark:border-orange-600 rounded-lg font-medium px-2.5 py-2 text-white bg-[#6c06f2] cursor-pointer hover:bg-[#6c06f2c5] transition-all"
            >
              Get In Touch
            </NavLink>
            <NavLink
              to="/projects"
              className="border rounded-lg font-medium px-2.5 py-2 cursor-pointer hover:bg-black hover:text-white transition-all dark:hover:bg-transparent"
            >
              Browse Projects
            </NavLink>
          </div>
        </div>
        <div className="text-[#4e525a] w-full max-w-[640px] text-[12px] md:text-[16px] md:text-right text-center dark:text-gray-300">
          <p>©2026 All Rights Reserved.</p>
          <p>Made with 💜 by Ataullah ARABZAI</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
