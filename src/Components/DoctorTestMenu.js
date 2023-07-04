import React, { useState } from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Condition1 from '../Assets/Condition1.png'
import Condition2 from '../Assets/Condition2.png'
import Condition3 from '../Assets/Condition3.png'
import Condition4 from '../Assets/Condition4.png'
import Condition5 from '../Assets/Condition5.png'
import Condition6 from '../Assets/Condition6.png'
import Condition7 from '../Assets/Condition7.png'
import Condition8 from '../Assets/Condition8.png'
import Condition9 from '../Assets/Condition9.png'

import testmenu1 from '../Assets/testmenu1.png'
import testmenu2 from '../Assets/testmenu2.png'
import testmenu3 from '../Assets/testmenu3.png'
import testmenu4 from '../Assets/testmenu4.png'
import testmenu5 from '../Assets/testmenu5.png'
import testmenu6 from '../Assets/testmenu6.png'
import testmenu7 from '../Assets/testmenu7.png'
import testmenu8 from '../Assets/testmenu8.png'
import testmenu9 from '../Assets/testmenu9.png'
import testmenu10 from '../Assets/testmenu10.png'
import testmenu11 from '../Assets/testmenu11.png'
import testmenu12 from '../Assets/testmenu12.png'
import testmenu13 from '../Assets/testmenu13.png'
import testmenu14 from '../Assets/testmenu14.png'
import testmenu15 from '../Assets/testmenu15.png'
import testmenu16 from '../Assets/testmenu16.png'



import Alphabet from '../Modals/Alphabet';
import { BsSearch } from 'react-icons/bs';

// firsst slider data
const ConditionData = [
    {
        id:1,
        img: Condition1,
        title:"Absortion"
    },
    {
        id:2,
        img: Condition2,
        title:"Acid Base Imbalance "
    },
    {
        id:3,
        img: Condition3,
        title:"Allergy"
    },
    {
        id:4,
        img: Condition4,
        title:"Diabetes "
    },
    {
        id:5,
        img: Condition5,
        title:"AIDS"
    },
    {
        id:6,
        img: Condition6,
        title:"Arthritis"
    },
    {
        id:7,
        img: Condition7,
        title:"Athletic Performance"
    },
    {
        id:8,
        img: Condition8,
        title:"Blood Disorder"
    },
    {
        id:9,
        img: Condition9,
        title:"Bone Marrow Transplantation"
    },
]

// second slider data 
const Testmenuspecialitydata = [
    {
        id:1,
        img: testmenu1,
        title:"Dermatologist"
    },
    {
        id:2,
        img: testmenu2,
        title:"Cardiologist"
    },
    {
        id:3,
        img: testmenu3,
        title:"Diabetologist"
    },
    {
        id:4,
        img: testmenu4,
        title:"Gastroenterologist "
    },
    {
        id:5,
        img: testmenu5,
        title:"Gynecologist"
    },
    {
        id:6,
        img: testmenu6,
        title:"Neurologist"
    },
    {
        id:7,
        img: testmenu7,
        title:"Pediatrician"
    },
    {
        id:8,
        img: testmenu8,
        title:"Endocrinologist"
    },
    {
        id:9,
        img: testmenu9,
        title:"Hematologist "
    },
    {
        id:10,
        img: testmenu10,
        title:"Infectious Disease"
    },
    {
        id:11,
        img: testmenu11,
        title:"Nephrologist"
    },
    {
        id:12,
        img: testmenu12,
        title:"Oncologist"
    },
    {
        id:13,
        img: testmenu13,
        title:"Physician"
    },
    {
        id:14,
        img: testmenu14,
        title:"Psychiatrist"
    },
    {
        id:15,
        img: testmenu15,
        title:" Rheumatologist"
    },
    {
        id:16,
        img: testmenu16,
        title:"Surgeon"
    },
    
]

// main function 
const DoctorTestMenu = () => {

    const [showConditionSlider, setShowConditionSlider] = useState(true)
    const [showTestSlider, setShowTestSlider] = useState(false)
    // state for modal  
    const [showAlphabet, setShowAlphabet] = useState(false)
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
  return (
    <>
      <section className="  my-3 sm:p-8 lg:px-14">
        <section className="bg-white h-auto max-w-[1480px] w-full p-8 shadow-lg mx-auto pb-12 sm:rounded-xl lg:rounded-2xl lg:px-14 ">
            <h1 className="text-xl lg:text-2xl mb-5 font-semibold">Test Menu</h1>

            {/* buttons and search bar */}
            <div className='flex flex-col md:flex-row items-start md:item-center justify-between w-full mb-3'>
                <div className='flex items-center space-x-4 overflow-x-auto whitespace-nowrap w-full pb-4 md:pb-0'>
                    <button 
                    onClick={()=>{setShowConditionSlider(true); setShowTestSlider(false) }} 
                    className='p-1.5 font-semibold px-5 w-48 rounded-3xl bg-gray-300 transition-all hover:primary-bg-color active:primary-bg-color'>Condition</button>

                    <button 
                    onClick={()=>{setShowConditionSlider(false); setShowTestSlider(true) }} 
                    className='p-1.5 font-semibold px-4 w-36 rounded-3xl bg-gray-300 transition-all hover:primary-bg-color active:primary-bg-color'>Speciality</button>
                
                    <button 
                    className='p-1.5 font-semibold px-4 w-36 rounded-3xl bg-gray-300 transition-all hover:primary-bg-color active:primary-bg-color'>All Test</button>

                    <button onClick={()=>{setShowAlphabet(true)}} 
                    className='p-1.5 font-semibold px-4 w-36 rounded-3xl bg-gray-300 transition-all hover:primary-bg-color active:primary-bg-color'>alphabet</button>
                    { showAlphabet && <Alphabet  closeModal={setShowAlphabet}/>}
                </div>
                <div className='flex items-center justify-center'>
                    <input className='p-1.5 w-52 border-b-blue-500 border-2 border-gray-200 rounded-md outline-none rounded-r-none ' type="search" placeholder='search test '/>
                    <BsSearch size={20} className='w-9 h-[2.45rem] p-2 bg-blue-500 text-white border-b-blue-500 border-2 border-l-0 rounded-md rounded-l-none outline-none cursor-pointer border-gray-200'/>
                </div>
            </div>

            {/* mapping of condition slider */}
            {showConditionSlider &&
            <Slider {...settings}>
            {ConditionData.map((i) => (
            <div key={i.id} className="h-28 mt-6 ">
            <div className='flex flex-col items-center border-x-2 border-gray-100 cursor-pointer'>
                <img className='w-[4rem] h-[3.5rem] object-contain' src={i.img} alt="/" />
                    <p className='font-semibold py-1 text-center'>{i.title}</p>
                </div>
            </div>
            ))}
        </Slider>}


            {/* mapping of speciality sliders */}
            {showTestSlider &&
            <Slider {...settings}>
                {Testmenuspecialitydata.map((i) => (
                <div key={i.id} className="h-24 mt-6 ">
                <div className='flex flex-col items-center border-x-2 border-gray-100 cursor-pointer'>
                    <img className='w-[4rem] h-[3.5rem] object-contain' src={i.img} alt="/" />
                        <p className='font-semibold py-1 text-center'>{i.title}</p>
                    </div>
                </div>
                ))}
            </Slider>}
        </section>
    </section>
  </>
  )
}


export default DoctorTestMenu
