'use client'
import MobileMenu from "./animated_menu";


export default function Navbar(){
    return(
        <div>
    <div className="">
 
 <ul className="hidden md:block  mx-auto md:flex cursor-pointer justify-between tracking-widest items-center font-satoshi text-gray-400 px-4 py-6 gap-6 opacity-100 bg-white border-[1px] ">
  <div className="flex text-[20px] font-bold font-serif text-black  justify-start">
   <h1>MANNAN&apos;S BLOG</h1>
  </div>

  <div className="flex space-x-6 font-serif tracking-widest items-center justify-center flex-grow ">
  <li className="hover:text-black ">Home</li>
   <li className="hover:text-black ">
     Categories
     
   </li>
   <li className="hover:text-black">
     Blogs
    
   </li>
  
   <li className="hover:text-black">Styles</li>
   <li className="hover:text-black">About</li>
   <li className="hover:text-black">Contact</li>
   </div>
   <div className="flex  font-bold font-serif text-black  justify-start">
   <h1>Search</h1>
   <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6 text-gray-500 hover:text-gray-800 transition-colors duration-300"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
  strokeWidth="2"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14zM20 20l-4-4"
  />
</svg>


  </div>
 </ul>
 
<div>
<ul className="md:hidden mx-auto flex cursor-pointer justify-between tracking-widest items-center font-satoshi text-gray-400 px-4 py-6 gap-6 opacity-100 bg-white border-[1px] ">
<MobileMenu/>
  
<div className="flex text-[14px] sm:text-[16px] items-center  font-bold font-serif text-black  justify-center text-center">
   <h1 className="text-center">MANNAN&apos;S BLOG</h1>
  </div>
  <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6 text-gray-500 hover:text-gray-800 transition-colors duration-300"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
  strokeWidth="2"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14zM20 20l-4-4"
  />
</svg>

  </ul>  
  
</div>


</div>
        </div>
    )
} 