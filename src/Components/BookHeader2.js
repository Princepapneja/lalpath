import React from 'react'
import { BsCartFill, BsPersonCircle, BsSearch } from 'react-icons/bs' 
import {FaMapMarkerAlt } from 'react-icons/fa'
import logo from '../Assets/logo-header-2.png'

const BookHeader2 = () => {
  return (
    <>
      <section className='hidden lg:block w-full py-3 bg-white drop-shadow-2xl shadow-black'>
          <div className='flex items-center justify-start mx-24 space-x-32'>
            {/* LOGO */}
            <img className='hidden md:flex -mt-5 lg:w-36 xl:w-52' src={logo} alt="logo" />
            {/* LIST */}
            <div className='flex flex-col items-start justify-center'>
                <ul className='hidden lg:flex lg:space-x-0 xl:space-x-4 '>
                    <a href="/book-a-test"><li className='text-xs'>Book a test</li></a>
                    <a href="/"><li className='text-xs'>Nearest Center</li></a>
                    <a href="/"><li className='text-xs'>Download Report</li></a>
                    <a href="#specialprogram"><li className='text-xs'>Special program</li></a>
                    <a href="/"><li className='text-xs'>Promotions & Discounts</li></a>
                    <a href="/"><li className='text-xs'> Not Sure About Test</li></a>
                </ul>

                {/* BOTTOM SECTION */}
                <section className='flex items-center lg:space-x-1 xl:space-x-4 mt-5'>
                          <div className='bg-gray-100 w-36 h-8 border-b-blue-500 border-2 flex items-center justify-center rounded-md'>
                            <FaMapMarkerAlt size={15} fill='darkblue'/>
                            <span className='p-2 mx-1 text-gray-600 tracking-wide'>Mohali</span>
                          </div>
                
                      <div className='flex items-center relative'>
                          <input className='p-2 w-40 xl:w-52 border-b-blue-500 border-2 border-gray-200 rounded-md outline-none' type="search" placeholder='search test & packages'/>
                          <BsSearch className='absolute top-3 right-3'/>
                      </div>

                      <span>|</span>

                      <div className="p-2 relative">
                          <BsCartFill size={25} fill='darkblue'/>
                          <p className='bg-blue-900 border-2 border-white p-2 text-sm rounded-full text-white absolute top-0 right-0'></p>
                      </div>

                      <span className='text-lg px-2 hover:font-semibold'>cart</span>

                      <span>|</span>

                      <div className="p-2 flex items-center space-x-4 ">
                          <BsPersonCircle size={25} fill='darkblue'/>
                          <span className='text-lg hover:font-semibold'>Sign in</span>
                      </div>

                      <span>|</span>
                    
                </section>
            </div>
          </div>
      </section>
    </>
  )
}

export default BookHeader2
