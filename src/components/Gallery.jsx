import React from 'react'
import img1 from '../assets/Images/image1.jpg'
import img2 from '../assets/Images/image2.jpg'
import img3 from '../assets/Images/image3.jpg'
import img4 from '../assets/Images/image4.jpg'
import img5 from '../assets/Images/image5.jpg'
import img6 from '../assets/Images/image6.jpg'

const Gallery = () => {
  return (
    <div id='gallery' className="items-center w-full relative md:p-10 p-2">
      <div className="flex w-full items-center justify-center fontlogo md:p-4 p-2 font-semibold underline">
              <p className="md:text-5xl text-lg">Gallery</p>
          </div>
          <div className='flex-col p-10 justify-evenly w-full'>
              <div className='md:flex'>
                  <div className='md:w-[400px] md:p-4 w-[300px] p-2'>
                  <img src={img1} alt="img1" className='object-cover'/>
                  </div>
                  <div className='md:w-[400px] md:p-4 w-[300px] p-2'>
                      <img src={img2} alt="img2" className='object-cover'/>
                  </div>
                  <div className='md:w-[400px] md:p-4 w-[300px] p-2'>
                  <img src={img3} alt="img3" className='object-cover'/>
                  </div>
              </div>
              <div className='md:flex'>
                  <div className='md:w-[400px] md:p-4 w-[300px] p-2'>
                  <img src={img4} alt="img4" className='object-cover'/>
                  </div>
                  <div className='md:w-[400px] md:p-4 w-[300px] p-2'>
                  <img src={img5} alt="img5" className='object-cover'/>
                  </div>
                  <div className='md:w-[400px] md:p-4 w-[300px] p-2'>
                  <img src={img6} alt="img6" className='object-cover'/>
              </div>
              </div>
                  
          </div>
          </div>
  )
}



export default Gallery
