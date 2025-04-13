'use client'
import Link from "next/link";
import { useState } from "react";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, ] = useState(true);

  const handleClick = () => {
    setIsOpen(false); 
    <Link href={"/"}></Link> 
  };
  

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex flex-col justify-center items-center w-10 h-10 "
      >
        <div
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2 " : ""
          } bg-gray-500 w-6 h-1 rounded `}
        ></div>
        <div
          className={`transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          } bg-gray-500 w-6 h-1 rounded my-1`}
        ></div>
        <div
          className={`transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          } bg-gray-500 w-6 h-1 rounded`}
        ></div>

      </button>
      {isOpen && (
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center  transition-opacity duration-700`}
        >
          <ul className="space-y-4 text-2xl font-semibold text-gray-500">
            { isClose && 
        <button onClick={handleClick}>
              <li className="hover:text-black cursor-pointer ml-12 mt-16">X</li>

        </button>
            }
          <li className="text-black text-[18px] font-serif  tracking-widest">NAVIGATE T0</li>

           </ul>
           <div className="flex flex-col justify-start items-start w-[280px] sm:ml-24 sm:w-[410px] border-[1px] mt-16  -ml-6  ">
        <hr />
      </div>

      <div className="flex flex-col sm:text-[20px] justify-start font-serif  items-start  mt-4 hover:text-black  -ml-64  ">
       <p>Home</p>
      </div>

      <div className="flex flex-col justify-start items-start w-[280px] border-[1px] mt-4 -ml-6 sm:ml-24 sm:w-[410px]">
        <hr />
      </div>


      <div className="flex flex-col sm:text-[20px] justify-start font-serif  items-start  mt-4 hover:text-black sm:-ml-[240px] -ml-64  ">
       <p>About</p>
      </div>


      <div className="flex flex-col justify-start items-start w-[280px] border-[1px] mt-4  -ml-6 sm:ml-24 sm:w-[410px]">
        <hr />
      </div>

      <div className="flex flex-col sm:text-[20px] justify-start font-serif  items-start  mt-4 hover:text-black sm:-ml-[220px]  -ml-60  ">
       <p>Contact</p>
      </div>

        </div>
        
      )}
     
    </div>
  );
}

export default MobileMenu;
