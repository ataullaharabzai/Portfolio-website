import React from "react";
import { NavLink } from "react-router-dom";
import { MessageCircle, Phone } from "react-feather";

function Navebar() {
  return (
    <header className="w-full flex justify-around items-stretch sm:items-center md:gap-50 p-3 text-[#4e525a]">
      <NavLink
        to="/"
        className="font-bold w-full text-[12px] flex justify-center items-center sm:text-[16px] sm:w-42.5 mr-2 sm:mr-0"
      >
        Arabzai DEV<span className="font-bold text-3xl text-[#6e06f2]">.</span>
      </NavLink>
      <nav className="list-none w-full text-[11px] sm:text-[16px] max-w-60 flex justify-center sm:justify-around gap-3 sm:gap-0 items-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#6e06f2] font-semibold"
                : "hover:text-[#6e06f2] font-semibold"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-[#6e06f2] font-semibold"
                : "hover:text-[#6e06f2] font-semibold"
            }
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#6e06f2] font-semibold"
                : "hover:text-[#6e06f2] font-semibold"
            }
          >
            About
          </NavLink>
        </li>
      </nav>
      <NavLink
        to="/contact"
        className={`border border-white hover:border-[#6e06f2] p-1 ml-5 sm:ml-0 sm:p-2 rounded-full`}
      >
        <MessageCircle className=" w-4 sm:w-8 sm:h-8" />
      </NavLink>
    </header>
  );
}

export default Navebar;
