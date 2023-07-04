import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import specialImg1 from '../Assets/special-img1.png'
import specialImg2 from '../Assets/special-img2.png'
import specialImg3 from '../Assets/special-img3.png'
import specialImg4 from '../Assets/special-img4.png'
import specialImg5 from '../Assets/special-img5.png'
import specialImg6 from '../Assets/special-img6.png'


const SpecialImgData = [
    {
        id:1,
        img: specialImg1,
        title:"Diabtic car program"
    },
    {
        id:2,
        img: specialImg2,
        title:"Diabtic car "
    },
    {
        id:3,
        img: specialImg3,
        title:"Diabtic program"
    },
    {
        id:4,
        img: specialImg4,
        title:"Diabtic "
    },
    {
        id:5,
        img: specialImg5,
        title:"program"
    },
    {
        id:6,
        img: specialImg6,
        title:"program"
    }
]



const SpecialPrograms = () => {

    const settings = {
      dots: true,
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
      <section id='specialprogram' className="bg-white h-auto p-8 shadow-lg sm:mx-9 lg:mx-14 sm:rounded-xl lg:rounded-2xl lg:px-14 mt-[-2.5rem]">
          <h1 className="text-xl lg:text-2xl mb-9 font-semibold">Special Program</h1>
          <Slider {...settings}>
          {SpecialImgData.map((i) => (
            <div key={i.id} className="h-24 mt-3 ">
            <div className='flex flex-col items-center border-x-2 border-gray-100'>
                <img className='w-[4rem] h-[3.5rem] object-contain' src={i.img} alt="/" />
                    <p className='font-semibold py-1'>{i.title}</p>
                </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  )
}

export default SpecialPrograms
