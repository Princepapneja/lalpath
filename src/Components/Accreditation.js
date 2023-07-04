import React from 'react'

import {AccreditationData} from '../Assets/data'

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const Accreditation = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
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
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };

  return (
    <>
      <section className="  my-3 sm:p-8 lg:px-14">
        <section className="bg-white h-auto max-w-[1480px] w-full p-7 shadow-lg mx-auto pb-10 sm:rounded-xl lg:rounded-2xl">
          <h1 className="text-xl lg:text-2xl mb-2 font-semibold">Accreditation</h1>
            <Slider {...settings}>
            {AccreditationData.map((i) => (
              <div key={i.id} className="h-24 mt-3 w-full ">
                <div className='flex items-center justify-between'>
                    <img className='w-full h-36 object-contain' src={i.img} alt="/" />
                </div>
              </div>
            ))}
              </Slider>
        </section>
      </section>
    </>
  )
}

export default Accreditation
