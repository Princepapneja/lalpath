import React, { useState } from 'react'
// slider
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// images
import {BsSearch} from 'react-icons/bs'
import life1 from '../Assets/life1.png'
import life2 from '../Assets/life2.png'
import life3 from '../Assets/life3.png'
import life4 from '../Assets/life4.png'
import life5 from '../Assets/life5.png'
import life6 from '../Assets/life6.png'
import life7 from '../Assets/life7.png'
import life8 from '../Assets/life8.png'
import life9 from '../Assets/life9.png'
// images
import Condition1 from '../Assets/Condition1.png'
import Condition2 from '../Assets/Condition2.png'
import Condition3 from '../Assets/Condition3.png'
import Condition4 from '../Assets/Condition4.png'
import Condition5 from '../Assets/Condition5.png'
import Condition6 from '../Assets/Condition6.png'
import Condition7 from '../Assets/Condition7.png'
import Condition8 from '../Assets/Condition8.png'
import Condition9 from '../Assets/Condition9.png'
import Alphabet from '../Modals/Alphabet';


const LifestyleData = [
    {
        id:1,
        img: life1,
        title:"Infertility"
    },
    {
        id:2,
        img: life2,
        title:"Allergy "
    },
    {
        id:3,
        img: life3,
        title:"Liver"
    },
    {
        id:4,
        img: life4,
        title:"Heart "
    },
    {
        id:5,
        img: life5,
        title:"Lungs"
    },
    {
        id:6,
        img: life6,
        title:"Kidney"
    },
    {
        id:7,
        img: life7,
        title:"CBC"
    },
    {
        id:8,
        img: life8,
        title:"Thyroid"
    },
    {
        id:9,
        img: life9,
        title:"Vitamin D"
    },
]

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


const SearchTest = () => {

  const [showLifeSlider, setShowLifeSlider] = useState(true)
  const [showConditionSlider, setShowConditionSlider] = useState(false)
  // modal usestate
  const [showAlphabet, setShowAlphabet] = useState(false)

  const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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
       <section className="bg-white h-auto p-8 my-6 shadow-md sm:mx-9 sm:rounded-xl lg:mx-14 lg:rounded-2xl lg:px-14  ">
        <h2 className='text-lg sm:text-xl lg:text-2xl mb-7 font-semibold'> Search Test and Packages</h2>

        <div className='flex flex-col md:flex-row items-start md:item-center justify-between w-full '>
            <div className='flex items-center space-x-4 overflow-x-auto whitespace-nowrap w-full pb-4 md:pb-0'>
                <button onClick={()=>{setShowLifeSlider(true); setShowConditionSlider(false) }} 
                className='p-1.5 font-semibold px-5 w-48 rounded-3xl transition-all primary-bg-color'>Lifestyle Disorder</button>

                <button onClick={()=>{setShowLifeSlider(false); setShowConditionSlider(true) }} 
                className='p-1.5 font-semibold px-4 w-36 rounded-3xl bg-gray-300 transition-all hover:primary-bg-color active:primary-bg-color'>Condition</button>

                <button onClick={()=>{setShowAlphabet(true)}} 
                className='p-1.5 font-semibold px-4 w-36 rounded-3xl bg-gray-300 transition-all hover:primary-bg-color active:primary-bg-color'>alphabet</button>
                { showAlphabet && <Alphabet  closeModal={setShowAlphabet}/>}
            </div>
            <div className='flex items-center justify-center'>
                  <input className='p-1.5 w-52 border-b-blue-500 border-2 border-gray-200 rounded-md outline-none rounded-r-none ' type="search" placeholder='search test '/>
                  <BsSearch size={20} className='w-9 h-[2.45rem] p-2 bg-blue-500 text-white border-b-blue-500 border-2 border-l-0 rounded-md rounded-l-none outline-none cursor-pointer border-gray-200'/>
            </div>
        </div>
        
        {/* Lifestyle disorder mapping */}
        {showLifeSlider && 
        <Slider {...settings}>
          {LifestyleData.map((i) => (
            <div key={i.id} className="h-24 mt-10 ">
            <div className='flex flex-col items-center border-x-2 border-gray-100'>
                <img className='w-[4rem] h-[3.5rem] object-contain hover:scale-125 duration-300' src={i.img} alt="/" />
                    <p className='font-semibold py-2'>{i.title}</p>
                </div>
            </div>
          ))}
        </Slider>}

        {/* condition slider */}
        {showConditionSlider && 
        <Slider {...settings}>
          {ConditionData.map((i) => (
            <div key={i.id} className="h-24 mt-10 ">
            <div className='flex flex-col items-center border-x-2 border-gray-100'>
                <img className='w-[4rem] h-[3.5rem] object-contain hover:scale-125 duration-300' src={i.img} alt="/" />
                    <p className='font-semibold py-2'>{i.title}</p>
                </div>
            </div>
          ))}
        </Slider>}
            
      </section>
    </>
  )
}

export default SearchTest
