import logo from '../assets/Logo.png'
import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";



const Navbar = () => {

     const [isMenuOpen, setMenuOpen] = useState(false);

  return (

  //   <nav className="bg-pink-100 dark:bg-gray-900">
  //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:p-4 p-2">
  //       <a href="home" className="flex items-center space-x-3 rtl:space-x-reverse">
  //         <img src={logo} className="md:w-20 w-10" alt="Logo" />
  //         <span
  //           className="self-center text-lg md:text-4xl font-semibold text-rose-800 fontlogo md:p-4 
  //           whitespace-nowrap dark:text-white">
  //           Biryani Paradise
  //         </span>
  //       </a>
  //       <button
  //         data-target="#navbar-default"
  //         data-toggle="collapse"
  //         type="button"
  //         className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm
  //         text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none
  //         focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700
  //         dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
  //       <span className="sr-only">Open main menu</span>
  //       <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
  //           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
  //             d="M1 1h15M1 7h15M1 13h15" />
  //       </svg>
  //   </button>
  //   <div className="hidden w-full md:block md:w-auto collapse" id="navbar-default">
  //         <ul className="font-medium flex flex-col p-4 md:p-0 mt-4
  //      md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0
  //       dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
  //       <li>
  //             <a href="#home" className="block md:text-lg py-2 px-3 text-slate-500 hover:text-rose-800 rounded 
  //             md:bg-transparent md:hover:text-rose-800 md:p-0 dark:text-white md:dark:text-white"
  //               aria-current="page">Home</a>
  //       </li>
  //       <li>
  //             <a href="#about" className="block md:text-lg py-2 px-3 text-slate-500 hover: hover:text-rose-800 rounded md:hover:bg-transparent
  //          md:border-0 md:hover:text-rose-800 md:p-0 dark:text-white md:dark:hover:text-rose-800
  //           dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
  //       </li>
  //       <li>
  //             <a href="#menu" className="block md:text-lg py-2 px-3 text-slate-500 hover: hover:text-rose-800 rounded  md:hover:bg-transparent
  //          md:border-0 md:hover:text-rose-800 md:p-0 dark:text-white md:dark:hover:text-rose-800
  //           dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Menu</a>
  //       </li>
  //       <li>
  //             <a href="#test" className="block md:text-lg py-2 px-3 text-slate-500 hover: hover:text-rose-800 rounded  md:hover:bg-transparent
  //          md:border-0 md:hover:text-rose-800 md:p-0 dark:text-white md:dark:hover:text-rose-800
  //           dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Testimonals</a>
  //           </li>
  //           <li>
  //             <a href="#gallery" className="block md:text-lg py-2 px-3 text-slate-500 hover: hover:text-rose-800 rounded md:hover:bg-transparent
  //          md:border-0 md:hover:text-rose-800 md:p-0 dark:text-white md:dark:hover:text-rose-800
  //           dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Gallery</a>
  //       </li>
  //       <li>
  //             <a href="#contact" className="block md:text-lg py-2 px-3  rounded text-slate-500 hover: hover:text-rose-800
  //          md:hover:bg-transparent md:border-0 md:hover:text-rose-800 md:p-0 dark:text-white
  //           md:dark:hover:text-rose-800 dark:hover:bg-gray-700 dark:hover:text-white
  //            md:dark:hover:bg-transparent">Contact</a>
  //       </li>
  //     </ul>
  //   </div>
  // </div>
  //   </nav>
    
  // Navbar.js


  
    <nav className="bg-pink-100 md:p-4 p-2">
      <div className="w-full mx-auto flex justify-between items-center">
        <a href="home" className="flex items-center space-x-3 no-underline rtl:space-x-reverse">
          <img src={logo} className="md:w-20 w-10" alt="Logo" />
          <span
            className="self-center text-lg md:text-4xl font-semibold text-rose-800 fontlogo md:p-4 
           whitespace-nowrap dark:text-white">
            Biryani Paradise
          </span>
        </a>
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="text-rose-800 focus:outline-none"
          >
            <CiMenuBurger className='text-2xl'/>
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center`}
        >
          <a href="#home" className="block font-semibold lg:inline-block md:pr-4 lg:mt-0 md:text-xl text-xs no-underline text-slate-500 hover:text-rose-800 rounded mr-4">
            Home
          </a>
          <a href="#about" className="block font-semibold  lg:inline-block md:pr-4 lg:mt-0 md:text-xl text-xs no-underline text-slate-500 hover:text-rose-800 mr-4">
            About
          </a>
          <a href="#menu" className="block font-semibold lg:inline-block md:pr-4 lg:mt-0 md:text-xl text-xs no-underline text-slate-500 hover:text-rose-800 mr-4">
            Menu
          </a>
          <a href="#test" className="block font-semibold lg:inline-block md:pr-4 lg:mt-0 md:text-xl text-xs no-underline text-slate-500 hover:text-rose-800 mr-4">
            Testimonials
          </a>
          <a href="#gallery" className="block  font-semibold lg:inline-block md:pr-4 lg:mt-0 md:text-xl text-xs no-underline text-slate-500 hover:text-rose-800 mr-4">
            Gallery
          </a>
          <a href="#contact" className="block font-semibold lg:inline-block md:pr-4 lg:mt-0 md:text-xl text-xs no-underline text-slate-500 hover:text-rose-800">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};


export default Navbar