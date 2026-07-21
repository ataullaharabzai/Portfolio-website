import React from "react";
import { NavLink } from "react-router-dom";
import { MessageCircle, Phone, Moon, Sun } from "react-feather";
import { useTheme } from "../contexts/ThemeProvider";

function Navebar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="dark:text-gray-300 w-full flex justify-around items-stretch sm:items-center md:gap-50 p-3 text-[#4e525a]">
      <NavLink
        to="/"
        className="font-bold w-full text-[12px] flex justify-center items-center md:text-[20px] sm:w-42.5 mr-2 sm:mr-0"
      >
        Arabzai DEV
        <span className="font-bold text-3xl text-[#6e06f2] dark:text-orange-600">
          .
        </span>
      </NavLink>
      <nav className="list-none w-full text-[11px] md:text-[20px] max-w-70 flex justify-center sm:justify-around gap-3 items-center">
        <li>
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
        </li>

        <li>
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
        </li>

        <li>
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
        </li>
      </nav>
      {/* <NavLink
        to="/contact"
        className={`border border-white hover:border-[#6e06f2] p-1 ml-5 sm:ml-0 sm:p-2 rounded-full`}
      >
        <MessageCircle className=" w-4 sm:w-8 sm:h-8" />
      </NavLink> */}
      <button
        onClick={toggleTheme}
        className="cursor-pointer group w-12 h-12 rounded-full border border-gray-300 bg-gray-900 text-white dark:bg-gray-300 dark:text-gray-800 shadow shadow-gray-400 transition-all duration-300 flex items-center justify-center"
      >
        {darkMode ? <Sun /> : <Moon />}
      </button>
    </header>
  );
}

export default Navebar;
