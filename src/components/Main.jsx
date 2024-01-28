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
      <div className="absolute md:top-[40%] top-[20%] md:p-4 p-2 text-center justify-center left-[25%] right-[25%] h-full">
        <p className="text-sm font-bold md:text-5xl">Eating is a Neccessity but Cooking is an Art</p>
        <p className='md:text-lg text-xs md:pt-4 pt-2 md:pb-4 pb-2'>Multi Cuisine Family Restaurant.</p>
        <div className="md:my-4 my-1">
          <a href='#reserve'
            className="rounded border border-gray-300 bg-gray-300 
            text-black md:py-2 py-0 md:px-5 px-1 md:text-lg text-xs">
            Reservation
          </a>
        </div>
        
      </div>
    </div>

    
   
  )
}

export default Main
