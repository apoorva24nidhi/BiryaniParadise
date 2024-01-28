import React from 'react';
import aboutimg from '../assets/about.jpg'

const About = () => {
  return (
    <div id='aboutUs' className="items-center w-full md:p-20 p-10 poppins">
      <div className="items-center md:p-5 p-2">
          <div className="flex w-full items-center justify-center md:p-4 p-2">
          <img src={aboutimg} alt='aboutimg'
            className='md:h-[200px] h-[100px] md:w-[200px] w-[100px] rounded-full object-cover items-center' />
</div>
              <div className="w-full text-center">
                  
                  <h1 className="md:text-6xl text-lg mx-auto my-auto md:p-4 p-2 fontlogo font-semibold underline">
                      A Few Words About Our Restaurant
                  </h1>
              <p className="w-full mx-auto my-auto md:p-4 p-2 md:text-2xl text-xs">
                      Biryani Paradise multicuisine family restaurant is well known for
                      its great service and friendly staff, that is always ready to help you.
                      A lot of guests note that prices are low for what you get.
                      As a number of reviewers notice, the atmosphere is lovely.
                  </p>
          </div>
      </div>
      </div>
  )
}

export default About


// import React from 'react';
// import aboutimg from '../assets/about.jpg';

// const About = () => {
//   return (
//     <div id='aboutUs' className="flex flex-col items-center p-5 sm:p-10 lg:p-20 font-poppins">
//       <div className="flex flex-col items-center">
//         <img src={aboutimg} alt='aboutimg' className='h-40 w-40 md:h-64 md:w-64 lg:h-80 lg:w-80 rounded-full object-cover mb-4' />

//         <div className="text-center">
//           <h1 className="text-3xl md:text-4xl lg:text-6xl mb-4 font-semibold underline">
//             A Few Words About Our Restaurant
//           </h1>
//           <p className="text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-8">
//             Biryani Paradise multicuisine family restaurant is well known for its great service and friendly staff, that is always ready to help you. A lot of guests note that prices are low for what you get. As a number of reviewers notice, the atmosphere is lovely.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
