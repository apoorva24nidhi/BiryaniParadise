import React from 'react'
import logo from '../assets/Logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact' className='justify-center text-center md:p-10 p-2'>
      <div className="flex w-full items-center justify-center fontlogo font-semibold underline md:p-4 p-1">
              <p className="md:text-5xl text-xl">Contact Details</p>
          </div>
          <div className=' md:flex-col flex-col'>
          <p className="md:h-[68px] h-[50px] flex items-center justify-center">
              <img src={logo} alt="logo" className='md:w-20 w-10'/>
              <p className='md:text-4xl text-lg font-semibold text-rose-800 fontlogo p-4'>Biryani Paradise</p>
              </p>
              <p className='md:flex-col flex items-center justify-center md:text-base text-xs'>
          <p className='md:p-4  p-2 font-semibold'>You Can Reach Us At</p>
              <p className='md:text-3xl text-base md:p-4  p-2 text-rose-800'>+91-9632836687
              </p>
              </p>
        <p className='md:flex-col flex justify-center md:text-base text-xs'>
          <p className='md:p-4  p-2 font-semibold '>Mail us on </p>
              <p className='md:p-4  p-2 text-rose-800'>
                  <a href='gmail'>
                      biriyaniparadise99@gmail.com
                      </a>
              </p>
                 
                  </p>
        <p className='md:flex-col flex justify-center md:text-base text-xs'>
          <p className='md:p-4  p-2 font-semibold'>Address </p>
              <p className='md:p-4  p-2 text-rose-800'>
                  Biryani Paradise<br />
                  KRS Road, pumphouse<br />
                  Mysuru, Karnataka - 571606<br />
                  India<br />
              </p>
                 
              </p>
           <p className='md:flex-col flex justify-center md:text-base text-xs'> 
          <p className='md:p-4  p-2 font-semibold'>Opening Hours</p>
              <p className='md:p-4  p-2 text-rose-800'>
                  All Days - 11.30 AM to 11.00 PM
              </p>
              </p>
          <p className='flex justify-center text-center md:text-base text-xs'>
              <p className='p-3'><FaFacebook /></p>
              <p className='p-3'><FaInstagram /></p>
              </p>
              </div>
    </div>
  )
}

export default Contact
