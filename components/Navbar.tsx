import React, { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="flex relative ml-9 mt-5">
      <div>
        <h1 className="text-white text-2xl font-semibold m-6 ml-44 mb-1 p-2 bg-pink-200 shadow-lg hover:shadow-pink-500 ">
          Azka Rehman
        </h1>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          onClick={toggleMenu}
          className="w-[60px] h-[60px]  cursor-pointer size-[70px] absolute top-3 right-7 text-white  font-bold bg-blue-300 rounded-full p-2 px-4 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        
      </div>
      <div className={`absolute -mt-10 left-[1005px] bg-blue-200 w-[400px] h-[500px]  rounded-bl-full flex flex-col justify-center items-center shadow-lg transition-opacity duration-500 ${menuOpen ? 'opacity-100' : 'opacity-0'} z-10`}>
        <button
            onClick={toggleMenu}
            className="w-[60px] h-[60px] absolute top-12 right-6 mr-2 text-white text-4xl font-bold rounded-full p-2 px-4"
         > ×
         </button>
          <ul className="text-white text-2xl space-y-6  ">
            <li>
              <Link href="/" className='hover:underline decoration-wavy' >Home</Link>
            </li>
            <li>
              <Link href="/education" className='hover:underline decoration-wavy'>Education</Link>
            </li>
            <li>
              <Link href="/skills" className='hover:underline decoration-wavy'>Skill</Link>
            </li>
            <li>
              <Link href="/contactme" className='hover:underline decoration-wavy'>Contact Me</Link>
            </li>
          </ul>
        </div>
        </div>

  );
}

export default Navbar;



