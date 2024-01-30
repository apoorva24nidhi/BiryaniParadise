import React from 'react'
import { IoMdStar } from "react-icons/io";

const Testimonials = () => {
  return (
    <div id='test' className="items-center w-full relative p-2 md:p-10 ">
      <div className="flex w-full items-center justify-center fontlogo md:p-4 p-2 font-semibold underline">
              <p className="md:text-5xl text-lg">Testimonials</p>
      </div>
      <div className='md:p-10 p-2 justify-between'>
        <div className='md:p-4 p-1 md:flex'>

          <div className="md:p-4 p-1 rounded text-black md:w-[600px] w-[320px]">
            <div className='bg-pink-100 md:h-[240px] h-[200px]'>
              <div className='flex relative'>
              <p className='md:p-4 pt-4 pl-4 text-yellow-500 md:text-2xl text:-lg flex'>
                <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar />
              </p>
              <p className='absolute md:p-6 p-2 md:text-xs text-[10px] top-2 right-2'>2 month ago</p>
              </div>
              <p className='md:p-4 p-2 md:text-sm text-xs'>
                "Perfect location for a stop whilst visiting Mysore! 👌🏽👌🏽
                Firstly, the view and cool terrace atmosphere makes Biryani Paradise the ideal place to relax.
                The food also tasted fresh and seasoned perfectly.
                The Mutton Biryani and Lemon Chicken is a must try!"<br/>
                - Dina D</p>
            </div>
          </div>

          <div className="md:p-4 p-1 rounded text-black md:w-[600px] w-[320px]">
            <div className='bg-pink-100 md:h-[240px] h-[200px]'>
              <div className='flex relative'>
              <p className='md:p-4 pt-4 pl-4 text-yellow-500 md:text-2xl text:-lg flex'>
                <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar />
              </p>
              <p className='absolute md:p-6 p-2 md:text-xs text-[10px] top-2 right-2'>2 month ago</p>
              </div>
              <p className='md:p-4 p-2 md:text-sm text-xs'>
                "Amazing food with great taste and fresh food Courteous and patient service.
                The best part is the price... Extremely affordable.. Loved it.. Recommended"<br/>
                - Mohammed Imran</p>
            </div>
          </div>

          <div className="md:p-4 p-1 rounded text-black md:w-[600px] w-[320px]">
            <div className='bg-pink-100 md:h-[240px] h-[200px]'>
              <div className='flex relative'>
              <p className='md:p-4 pt-4 pl-4 text-yellow-500 md:text-2xl text:-lg flex'>
                <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar />
              </p>
              <p className='absolute md:p-6 p-2 md:text-xs text-[10px] top-2 right-2'>3 month ago</p>
              </div>
              <p className='md:p-4 p-2 md:text-sm text-xs'>
                Tasty and spicy food. You can enjoy it with your family. Great ambience.
                Good service. Should try veg kohlapuri with parota<br/>
                - Rajinikanth U</p>
            </div>
          </div>
        

       
          </div>
      </div>
      
      </div>
  )
}

export default Testimonials
