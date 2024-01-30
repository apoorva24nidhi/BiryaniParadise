import React, { useState } from 'react'
import main_img1 from '../assets/biryani.jpg'
import main_img2 from '../assets/image2.jpg'
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Main = () => {
  const images = [
    main_img1,
    main_img2,
  ];


  const [currentId, setCurrentId] = useState(0);
  
  const nextImg = () => {
    setCurrentId((prevId) => (prevId + 1) % images.length);
  };

  const prevImg = () => {
    setCurrentId((prevId) => (prevId - 1 + images.length) % images.length);
  };

  return (
   <div className="w-full md:h-[550px] h-[200px] text-white poppins relative">
      <div className="w-full h-full">
        <div className="absolute w-full md:h-[550px] h-[200px] bg-black/50"></div>
        <button className='absolute top-[50%] md:p-5 p-2' onClick={prevImg}><GrFormPrevious className='md:text-5xl text-xl' /></button>
        <button className='absolute right-0 top-[50%] md:p-5 p-2' onClick={nextImg}><GrFormNext className='md:text-5xl text-xl'/></button>
        <img
          className="w-full h-full object-fill"
          src={images[currentId]}
          alt={`Slide ${currentId + 1}`}
        />

      </div>
      <div className="absolute md:top-[30%] top-[15%] md:p-4 p-2 text-center justify-center left-[25%] right-[25%]">
        <p className="text-sm font-bold md:text-5xl">Eating is a Neccessity but Cooking is an Art</p>
        <p className='md:text-lg text-xs md:pt-4 pt-2 md:pb-5 pb-2'>Multi Cuisine Family Restaurant.</p>
        <div className="">
          <a href='#reserve'
            className="rounded bg-pink-100 text-rose-800  md:text-xl text-xs md:p-3 p-1">
            Reservation
          </a>
        </div>
        
      </div>
    </div>

    
   
  )
}

export default Main
