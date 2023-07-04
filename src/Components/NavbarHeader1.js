import React, { useState } from 'react'
import {BiUser} from 'react-icons/bi'
import { FaAngleDown } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const NavbarHeader1 = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <>
      <div className='hidden lg:flex items-center gap-9 justify-center w-full h-12 primary-bg-color  '>
        <ul className='h-full flex items-center justify-center space-x-2 gap-4  font-semibold text-sm  cursor-pointer'>
            <NavLink to='/'><li className='text-xs'>PATIENTS</li></NavLink>
            <NavLink to='/doctors'><li className='text-xs'>DOCTORS</li></NavLink>
            <NavLink to='/business-partnership'><li className='text-xs'>BUSINESS PARTNERSHIP</li></NavLink>
            {/* <NavLink to='/aboutus'><li className='text-xs'>ABOUT US</li></NavLink> */}
            {/* <NavLink to='/investors'><li className='text-xs'>INVESTORS</li></NavLink> */}
            <NavLink to='/contactus'><li className='text-xs'>CONTACT US</li></NavLink>
        </ul>

        <ul className='flex items-center justify-between space-x-2 font-medium cursor-pointer'>
          <li className='text-xs'>BLOGS</li>
          <span>|</span>
          <li className='text-xs'>FAQS</li>
        </ul>

        <div className='flex items-center font-semibold text-blue-900 justify-between space-x-2 relative'>
          <BiUser size={22}/>
          <p className='text-xs'>Welcome Guest User</p>
          <FaAngleDown onMouseEnter={()=>{setOpenDropdown(true)}} onClick={()=>{setOpenDropdown(false)}} className='mb-[-4px] cursor-pointer transition-all '/>
        </div>
         {openDropdown && <DropDown/>}
        </div>
   

    </>
  );
};

// DropDown
const DropDown = () => {
  return (
    <>
      <div className="p-2 bg-white w-40 space-y-3 z-10 absolute top-9 right-20 border-yellow-400 border-2">
        <h1 className="font-semibold pt-1">ACCOUNT</h1>
        <p>Welcome Guest</p>
        <hr />
        <ul className="space-y-2">
          <li>My Order</li>
          <li>My Subscription</li>
          <li>Wallet Balance</li>
        </ul>
      </div>
    </>
  );
};

export default NavbarHeader1;
