import React from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

const Inicio = () => {
  const navLinks = [
    { name: "Registrarse", link: "/registro" },
    { name: "Login", link: "/login" },
  ];

  return (
    <nav className="bg-black border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between mx-20 p-4">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">
            CryptoDeveloper
          </span>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <Link
                to="/login"
                className="block py-2 pl-3 pr-4 text-xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/registrarse"
                className="block py-2 pl-3 pr-4 text-xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Registrarse
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Inicio;
