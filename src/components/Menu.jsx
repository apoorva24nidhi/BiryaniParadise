import React from 'react'
import menu_img1 from '../assets/menu_img1.jpg'
import menu_img2 from '../assets/menu_img2.jpg'
import menu_img3 from '../assets/menu_img3.jpg'
import menu_img4 from '../assets/menu_img4.jpg'


const Menu = () => {
  return (
    <div id='menu' className="items-center w-full md:p-20 poppins">
      <div className="items-center">
              <div className="w-full text-center">
                  <h1 className="md:text-6xl text-lg mx-auto my-auto md:p-4 p-1 fontlogo font-semibold underline">
                      Have A Quick Look At Our Menus
                  </h1>
                  <p className="w-[70%] md:text-2xl text-xs mx-auto my-auto md:p-4 p-1">
                      We serve Veg and Non-Veg multi cuisines like Biryani, Sea Food,
                      North Indian, South Indian, Chinese, Kerala, and Tandoori.
                  </p>
              </div>
              {/* Veg */}

                  <div className='md:flex w-full md:h-[600px] h-[300px] justify-evenly items-center p-6'>
                      <div className="bg-white flex md:h-[450px] h-[250px] md:w-[600px] w-full top-[15%] relative items-center justify-center">
                          <img className="top-[-10%] md:h-[150px] h-[60px] md:w-[150px] w-[60px] rounded-full absolute"
                              src={menu_img2} alt="img"></img>
                          <div className=' md:p-7 p-3 md:pt-28 pt-12'>
                              <p className="md:text-[40px] text-sm md:pb-6 p-2">
                                  Vegetarian Dishes
                              </p>
                              <p className="md:text-[25px] text-[15px] italic text-slate-600 md:pt-4 pt-2">
                                  Mushroom Manchurian ------ 139/-
                              </p>
                              <p className="md:text-[25px] text-[15px] italic text-slate-600 md:pt-4 pt-2">
                                  Capsicum Masala --------- 149/-
                              </p>
                              <p className="md:text-[25px] text-[15px] italic text-slate-600 md:pt-4 pt-2 md:pb-2 pb-1">
                                  Veg Biryani ------------- 169/-
                              </p>                              
                          </div>
                      </div>
                          <div className="justify-center md:visible hidden">
                              <img className="w-[600px] h-[600px]" src={menu_img1} alt='img'></img>
                          </div>
              </div>
                  <div className='md:flex w-full md:h-[600px] h-[300px] justify-evenly p-6'>
                  <div className="justify-center  md:visible hidden">
                              <img className="w-[600px] h-[600px]" src={menu_img3} alt='img'></img>
                          </div>
                      <div className="bg-white flex md:h-[450px] h-[250px] md:w-[600px] w-full top-[15%] relative items-center justify-center">
                          <img className="top-[-10%] md:h-[150px] h-[60px] md:w-[150px] w-[60px] rounded-full absolute"
                              src={menu_img4} alt="img"></img>
                          <div className=' md:p-7 p-3 md:pt-28 pt-12'>
                              <p className="md:text-[40px] text-sm md:pb-6 p-2">
                                  Non-Vegetarian Dishes
                              </p>
                              <p className="md:text-[25px] text-[15px] italic text-slate-600 md:pt-4 pt-2">
                                  Chicken Biryani ------ 199/-
                              </p>
                              <p className="md:text-[25px] text-[15px] italic text-slate-600 md:pt-4 pt-2">
                                  Mutton Biryani ------ 249/-
                              </p>
                              <p className="md:text-[25px] text-[15px] italic text-slate-600 md:pt-4 pt-2 md:pb-2 pb-1">
                                  Fish Kabab ------------- 229/-
                              </p>                              
                          </div>
                      </div>
                      <div>
                          
                  </div>
              </div>



                  
                  {/* <div className="flex-1 w-full relative">
                      
                      <div className="bg-white flex bottom-[75px] flex-col h-[450px] w-[590px] absolute">
                          <img className="absolute hidden top-[-50px] h-[150px] w-[150px] rounded-full left-[40%]"
                              src={menu_img2} alt="img"></img>
                          <div className=' p-10 pt-28'>
                              <p className="text-[40px] pb-6">
                                  Vegetarian Dishes
                              </p>
                              <p className="text-[25px] italic text-slate-600 pt-4">
                                  Mushroom Manchurian ------ 139/-
                              </p>
                              <p className="text-[25px] italic text-slate-600 pt-4">
                                  Capsicum Masala --------- 149/-
                              </p>
                              <p className="text-[25px] italic text-slate-600 pt-4 pb-2">
                                  Veg Biryani ------------- 169/-
                              </p>                              
                          </div>
                      </div>
                  </div>

                  <div className="flex-1 justify-center">
                      <img className="w-[650px] h-[600px]" src={menu_img1} alt='img'></img>
                  </div>
              </div>

              {/* Non-Veg */}
              {/* <div className="flex p-5">
                  <div className="flex-1 justify-center">
                      <img className="w-[650px] h-[600px]" src={menu_img3} alt='img'></img>
                  </div>
                  <div className="flex-1 w-full relative">
                      <div className="bg-white flex bottom-[75px] flex-col h-[450px] w-[590px] absolute">
                          <img className="absolute sm:hidden top-[-50px] h-[150px] w-[150px] rounded-full left-[40%]"
                              src={menu_img4} alt="img"></img>
                          <div className=' p-10 pt-28'>
                            <p className="text-[40px] pb-6">
                                  Non-Vegetarian Dishes
                              </p>
                              <p className="text-[25px] italic text-slate-600 pt-4">
                                  Chicken Biryani ------ 199/-
                              </p>
                              <p className="text-[25px] italic text-slate-600 pt-4">
                                  Mutton Biryani --------- 249/-
                              </p>
                              <p className="text-[25px] italic text-slate-600 pt-4 pb-2">
                                  Fish Kabab ------------- 229/-
                              </p>
                          </div>
                      </div>
                  </div> 
                  
              </div> */}
    
      </div>
      </div>
      
  )
}

export default Menu
