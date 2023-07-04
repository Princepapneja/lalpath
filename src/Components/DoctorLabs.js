import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import doctorlabs1 from '../Assets/doctorlabs1.png'
import doctorlabs2 from '../Assets/doctorlabs2.png'
import doctorlabs3 from '../Assets/doctorlabs3.png'


const Doctorlabsdata = [
    {
        id:1,
        img:doctorlabs1,
        text:"Kolkata Reference Laboratory"
    },
    {
        id:2,
        img:doctorlabs2,
        text:"National Reference Labority"
    },
    {
        id:3,
        img:doctorlabs3,
        text:"Satellite Reference Laboratory"
    },
    {
        id:4,
        img:doctorlabs1,
        text:"Kolkata Reference Laboratory"
    },
    {
        id:5,
        img:doctorlabs2,
        text:"National Reference Labority"
    },
    {
        id:6,
        img:doctorlabs1,
        text:"Kolkata Reference Laboratory"
        
    },
]

const DoctorLabs = () => {
    const settings = {
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
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
      <section className="my-3 sm:p-8 lg:px-14">
        <section className="bg-white h-auto max-w-[1480px] w-full p-6 shadow-md mx-auto sm:rounded-2xl lg:px-14  ">
        <h2 className='text-md sm:text-xl lg:text-2xl mb-4 font-semibold pl-2 '> Our labs </h2>
        
          <Slider {...settings}>
          {
              Doctorlabsdata.map((i)=>(
                  <div key={i.id} className='w-72 h-auto lg:h-full px-2'>
                      <div className='border-2 p-6 rounded-xl '>
                          <img className='w-full h-full object-cover rounded-xl ' src={i.img} alt="/" />
                          <p className=' bg-white p-1 px-3 '>{i.text}</p>
                      </div>
                  </div>
              ))
          }          
          </Slider>
        </section>
      </section>
    </>
  )
}

export default DoctorLabs
