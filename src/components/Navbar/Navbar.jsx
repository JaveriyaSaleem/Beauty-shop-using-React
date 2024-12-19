import React from "react";
import "./navbar.css"

const Navbar = () => {
  return (
    <>
    <header className="py-4 px-4 md:py-4 md:px-4 md:container flex sm:flex-row flex-col items-center sm:justify-between md:items-center sm:items-end">
      <div><h1 className="text-[16px] md:text-[22px] fontroman">GOOD4ME</h1></div>
      
      <div><ul className="flex gap-3 md:gap-[1.9rem] sm:gap-4 justify-between items-center">
        <li ><a href="#" className="font-bold text-[#F6623E] poppins-reg text-[12px] md:text-[15px]">HOME</a></li> 
        <li><a href="" className="font-bold hover:text-[#F6623E] poppins-reg text-[12px] md:text-[15px]">SHOP</a></li>
        <li><a href="" className="font-bold hover:text-[#F6623E] poppins-reg text-[12px] md:text-[15px]">FAQ'S</a></li>
        <li><a href="" className="font-bold hover:text-[#F6623E] poppins-reg text-[12px] md:text-[15px] hidden sm:block">STOCKISTS</a></li>
        <li><a href="" className="font-bold hover:text-[#F6623E] poppins-reg text-[12px] md:text-[15px]">WHOLESALE</a></li>
        <li><a href="" className="font-bold hover:text-[#F6623E] poppins-reg text-[12px] md:text-[15px]">CONTACT</a></li>
      </ul></div>

      <div className="text-[12px] md:text-[15px] items-start pb-1 md:pb-0 hidden sm:block"><div className="flex gap-4"><i className="fa-solid fa-magnifying-glass hover:text-[#F6623E] cursor-pointer"></i><i className="fa-solid fa-cart-shopping hover:text-[#F6623E] cursor-pointer"></i></div></div>
    </header>

    </>
  );
};

export default Navbar;