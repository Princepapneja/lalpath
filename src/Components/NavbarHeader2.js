import React from 'react'
// import { Link } from 'react-router-dom'
import { BsCartPlus, BsSearch } from 'react-icons/bs' 
import {FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo-header-2.png'

const NavbarHeader2 = ({lists}) => {
  return (
    <>
      <section className='hidden lg:block w-full pb-5 bg-white drop-shadow-2xl shadow-black'>
          <div className='flex items-center md:max-w-[1140px] md:w-full m-auto justify-evenly'>
            {/* logo */}
            <img className='hidden md:flex lg:w-36 xl:w-52 m-4' src={logo} alt="logo" />
            {/* list */}
            <ul className='hidden lg:flex lg:space-x-0 xl:space-x-3 '>
            <a href="/book-a-test"><li className='w-fit text-xs'>{lists.list1}</li></a>
            <a href="/"><li className='w-fit text-xs'>{lists.list2}</li></a>
            <a href="/"><li className='w-fit text-xs'>{lists.list3}</li></a>
            <a href="#specialprogram"><li className='w-fit text-xs'>{lists.list4}</li></a>
            <a href="/"><li className='w-fit text-xs'>{lists.list5}</li></a>
            </ul>

            <div className='flex items-center lg:space-x-1 xl:space-x-4'>
              <div className='flex items-center space-x-2'>
                  <FaMapMarkerAlt size={25} fill='blue'/>
                  <input className='w-32 xl:w-36 p-1.5 border-b-blue-500 border-2 border-gray-200 rounded-md outline-none' type="search" placeholder='search location'/>
              </div>
              
              <div className='flex items-center relative'>
                  <input className='p-1.5 w-52 xl:w-60 border-b-blue-500 border-2 border-gray-200 rounded-md outline-none' type="search" placeholder='search test & packages'/>
                  <BsSearch className='absolute top-3 right-3'/>
                </div>

              <div className="p-2 relative">
                  <BsCartPlus size={25} />
                  <p className='bg-blue-600 px-1.5 text-sm rounded-full text-white absolute top-0 right-0'>0</p>
              </div>
                  
            </div>
          </div>
      </section>
    </>
  )
}

export default NavbarHeader2
