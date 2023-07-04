import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import bookpromotion1 from '../Assets/bookpromotion1.png' 
import bookpromotion2 from '../Assets/bookpromotion2.png' 


const Bookpromotiondata = [
    {
        id:1,
        img:bookpromotion1,
    },
    {
        id:2,
        img:bookpromotion2,
    }
]


const BookPromotion = () => {
    const settings = {
        dots: false,
        arrows: true,
        slidesToShow: 2,
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
      <section className="sm:p-8 lg:px-14">
        <section className="bg-white w-full max-w-6xl mx-auto h-auto p-8 shadow-md lg:rounded-2xl  ">
        <h2 className='text-lg sm:text-xl lg:text-2xl md:mb-4 font-semibold '> Promotions & Discounts </h2>
        
            <Slider {...settings}>
            {
                Bookpromotiondata.map((i)=>(
                    <div key={i.id} className='w-full h-72 lg:h-full px-2 rounded-xl '>
                        <img className='w-full h-full object-contain rounded-xl ' src={i.img} alt="/" />
                    </div>
                ))
            }          
            </Slider>
        </section>
      </section>
    </>
  )
}

export default BookPromotion
