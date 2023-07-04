import React from "react";
import { Link } from "react-router-dom";


const BookHeader1 = () => {
  return (
    <>
      <div className="hidden lg:flex items-center justify-evenly w-full h-12 primary-bg-color  ">
        <ul className="h-full flex items-center justify-center lg:space-x-5 xl:space-x-8 font-semibold text-sm xl:text-[1rem] cursor-pointer">
          <li className="font-bold underline text-xs text-blue-700">PATIENTS</li>
          <Link to="/doctors"><li className="text-xs">DOCTORS</li></Link>
          <Link to="/business-partnership"><li className="text-xs">BUSINESS PARTNERSHIP</li></Link>
          <li className="text-xs">ABOUT US</li>
          <li className="text-xs">INVESTORS</li>
          <Link to='/contactus'><li className='text-xs'>CONTACT US</li></Link>
        </ul>

        <ul className="flex items-center justify-between space-x-2 font-medium cursor-pointer">
          <li className="text-xs">BLOGS</li>
          <span>|</span>
          <li className="text-xs">FAQS</li>
        </ul>
      </div>
    </>
  );
};

export default BookHeader1;
