import React, { useState } from 'react'
import { BsCartPlus, BsSearch } from 'react-icons/bs'
import { FaAngleDown, FaMapMarkerAlt } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FiPhoneCall } from 'react-icons/fi'
import logo from '../Assets/logo-header-2.png'
import { MdCancel } from 'react-icons/md'

// sidenvbar images
import sidenavbar0 from '../Assets/sideNavbar0.png'
import sidenavbar1 from '../Assets/sideNavbar1.png'
import sidenavbar2 from '../Assets/sideNavbar2.png'
import sidenavbar3 from '../Assets/sideNavbar3.png'
import sidenavbar4 from '../Assets/sideNavbar4.png'
import sidenavbar5 from '../Assets/sideNavbar5.png'
import sidenavbar6 from '../Assets/sideNavbar6.png'
import sidenavbar7 from '../Assets/sideNavbar7.png'
import sidenavbar8 from '../Assets/sideNavbar8.png'
import sidenavbar9 from '../Assets/sideNavbar9.png'
import sidenavbar10 from '../Assets/sideNavbar10.png'
import sidenavbar11 from '../Assets/sideNavbar11.png'
import sidenavbar12 from '../Assets/sideNavbar12.png'
import { Link } from 'react-router-dom'




const MobileNavbar = () => {

const [openNavbar, setOpenNavbar] = useState(false)
  return (
    <>
      
      <section className='w-full lg:hidden py-5 bg-[#F5F5F5] border-2 drop-shadow-2xl shadow-black space-y-4 relative'>

            {/* fisrt Navbar */}
            <div className='flex items-center justify-around '>
                <img className='cursor-pointer w-40 md:w-48' src={logo} alt="logo" />

                <div className='flex items-center space-x-2'>
                  <FaMapMarkerAlt className='hidden sm:block cursor-pointer' size={25} fill='blue'/>
                  <input className='w-36 p-1.5 border-b-blue-500 border-2 border-gray-200 rounded-md outline-none' type="search" placeholder='search location'/>
              </div>

              <div className="p-2 relative">
                  <BsCartPlus className='cursor-pointer' fill='blue' size={28} />
                  <p className='bg-blue-600 px-1.5 text-sm rounded-full text-white absolute top-0 right-0'>0</p>
              </div>
            </div>


            {/* second Navbar */}
            <div className='flex items-center justify-around '>
                <RxHamburgerMenu onClick={()=>{setOpenNavbar(true)}} size="25" className='text-blue-700 cursor-pointer'/>
                
                <div className='flex items-center justify-center'>
                  <input className='p-1.5 w-60 border-b-blue-500 border-2 border-gray-200 rounded-md outline-none rounded-r-none ' type="search" placeholder='search test & packages'/>
                  <BsSearch size={20} className='w-9 h-[2.4rem] p-2 bg-white border-b-blue-500 border-2 border-l-0 rounded-md rounded-l-none outline-none cursor-pointer border-gray-200'/>
                </div>
                <FiPhoneCall size="25" className='text-blue-700 cursor-pointer'/>
            </div>
      </section>
      
      {openNavbar && <SideNavbar closeNavbar={setOpenNavbar}/>}
      
    </>
  )
}




const SideNavbar = ({closeNavbar}) =>{
    return(
        <>
            <section className='top-0 left-0 fixed bg-black/50 h-full w-full z-10 transition-all duration-300 ease-in-out'>
            <div className='w-[28rem] h-full bg-white p-6  '>

            {/* welcome */}
                <div className='flex items-center justify-between'>
                {/* guest user */}
                    <div className='flex items-center  font-semibold text-blue-600 justify-start space-x-2 relative'>
                        <img className='cursor-pointer w-5 mr-1' src={sidenavbar0} alt="/" />
                        <p>Welcome Guest User</p>
                        <FaAngleDown className='mb-[-4px] cursor-pointer transition-all '/>
                    </div>
                {/* cancel button */}
                <MdCancel onClick={()=>{closeNavbar(false)}} className='bg-yellow-400 text-blue-800 rounded-full cursor-pointer' size={25}/>
                </div>
                
                {/* list item */}
                <ul className='mt-6 cursor-pointer'>
                    <div className='flex items-center space-x-4 py-5 border-b-2'>
                        <img className='w-7' src={sidenavbar1} alt="PATIENTS" />
                        <li>PATIENTS</li>
                    </div>
                    <div className='flex items-center space-x-4 py-5 border-b-2 '>
                        <img className='w-7' src={sidenavbar2} alt="DOCTORS" />
                        <Link to="/doctors"><li>DOCTORS</li></Link>
                    </div>
                    <div className='flex items-center space-x-4 py-5 border-b-2'>
                        <img className='w-7' src={sidenavbar6} alt="BOOK A TEST" />
                        <Link to="/book-a-test"><li>BOOK A TEST</li></Link>
                    </div>
                    <div className='flex items-center space-x-4 py-5 border-b-2'>
                        <img className='w-7' src={sidenavbar3} alt="BUSINESS PARTNERSHIP" />
                        <Link to="/business-partnership"><li>BUSINESS PARTNERSHIP</li></Link>

                    </div>
                    <div className='flex items-center space-x-4 py-5 border-b-2'>
                        <img className='w-7' src={sidenavbar4} alt=" ABOUT US" />
                        <Link to="/"><li>ABOUT US</li></Link>
                    </div>
                    {/* <div className='flex items-center space-x-4 py-5 border-b-2'>
                        <img className='w-7' src={sidenavbar5} alt="INVESTORS" />
                        <li>INVESTORS</li>
                    </div> */}
                    <div className='flex items-center space-x-4 py-5 border-b-2'>
                        <img className='w-7' src={sidenavbar6} alt="CONTACT US" />
                        <Link to="contactus"><li>CONTACT US</li></Link>
                    </div>
                </ul>

                {/* blog and vlog */}
                <ul className='flex items-center justify-start space-x-3 py-4 border-b-2'>
                    <li>BLOGS</li>
                    <span>|</span>
                    <li>FAQS</li>
                </ul>

                {/* Download App */}
                <div className='flex items-center justify-start space-x-5 py-3 border-b-2 pb-3'>
                    <p>Download App:</p>
                    <img className='cursor-pointer' src={sidenavbar7} alt="/" />
                    <span> | </span>
                    <img className='cursor-pointer' src={sidenavbar8} alt="/" />
                </div>

                {/* social icon */}
                <div className='flex items-center justify-start space-x-4 py-5 border-b-2'>
                    <p>Follow us on: </p>
                    <img className='cursor-pointer' src={sidenavbar9} alt="/" />
                    <img className='cursor-pointer' src={sidenavbar10} alt="/" />
                    <img className='cursor-pointer' src={sidenavbar11} alt="/" />
                    <img className='cursor-pointer' src={sidenavbar12} alt="/" />
                </div>
            </div>
      </section>
        </>
    )
}


export default MobileNavbar

