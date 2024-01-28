import React from 'react'
import bgimg from '../assets/Images/image4.jpg'

const Reservations = () => {
  return (
      <div id='reserve' className=" w-full relative md:h-[700px] h-[300px] text-white poppins">
          <div className="w-full h-full">
              <div className="absolute w-full md:h-[700px] h-[300px] bg-black/80"></div>
              <img className="w-full h-full object-cover" src={bgimg} alt='bgimg'></img>
          </div>
      <div className="absolute md:top-[20%] top-[15%] md:p-8 text-center justify-center 
          md:left-[30%] md:right-[30%] left-[10%] right-[10%]">
              
              
            <h1 className='md:text-3xl text-lg font-bold'>Reservations</h1>
            <form className='w-full flex flex-col md:py-4 py-2'>
              <input
                className='p-2 md:p-3 md:my-2 my-1 bg-gray-700 rounded md:text-base text-xs md:rounded-xl'
                type='name'
                placeholder='Enter Your Name'
                autoComplete='name'
              />
              <input
                className='p-2 md:p-3 md:my-2 my-1 bg-gray-700 rounded md:text-base text-xs md:rounded-xl'
                type='number'
                placeholder='Enter Number of Person'
                autoComplete='number'
                  />
                  <input
                className='p-2 md:p-3 md:my-2 my-1 bg-gray-700 rounded md:text-base text-xs md:rounded-xl'
                type='tel'
                placeholder='Enter Contact Number'
                autoComplete='number'
                  />
                  
              <button className='bg-rose-800 md:py-3 py-1 md:my-6 my-3 md:rounded-xl md:text-base text-xs rounded font-bold'>
                Submit
              </button>
      
              
            </form>       
        
      </div>
      </div>
      
  )
}

export default Reservations
