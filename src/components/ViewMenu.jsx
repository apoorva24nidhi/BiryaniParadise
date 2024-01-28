import React, { useState } from 'react';
import VM from '../assets/ViewMenu.jpg';

const ViewMenu = () => {
  const [Menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!Menu);
  };

  return (
    <div>
      <p className='items-center text-center w-full md:p-5 p-5'>
        <a href='#fullmenu' className="underline md:text-lg text-[10px] items-center" onClick={toggleMenu}>
          VIEW MENU
        </a>
      </p>
      <div className={`md:p-10 p-5 ${Menu ? '' : 'hidden'}`}>
        <img src={VM} alt="VM" className='h-full w-full' />
      </div>
    </div>
  );
};

export default ViewMenu;
