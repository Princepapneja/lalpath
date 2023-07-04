import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import promotion1 from '../Assets/promotion1.jpg' 
import promotion2 from '../Assets/promotion2.jpg' 
import promotion3 from '../Assets/promotion3.jpg' 


const promotiondata = [
    {
        id:1,
        img:promotion1,
        text:"Family Offer on Swasthfit Healthcare Packages"
    },
    {
        id:2,
        img:promotion2,
        text:"Family Offer on Swasthfit Healthcare Packages"
    },
    {
        id:3,
        img:promotion3,
        text:"Family Offer on Swasthfit Healthcare Packages"
    },
    {
        id:4,
        img:promotion1,
        text:"Family Offer on Swasthfit Healthcare Packages"
    },
    {
        id:5,
        img:promotion2,
        text:"Family Offer on Swasthfit Healthcare Packages"
    },
    {
        id:6,
        img:promotion3,
        text:"Family Offer on Swasthfit Healthcare Packages"
    },
]


const Promotions = () => {
    const settings = {
        dots: false,
        arrows: true,
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
              slidesToShow: 1,
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
       <section className="bg-white h-auto p-8 mt-8 shadow-md sm:mx-9 sm:rounded-xl  lg:mx-14 lg:rounded-2xl lg:px-14  ">
       <h2 className='text-md sm:text-xl lg:text-2xl mb-4 font-semibold '> Promotions & Discounts </h2>
       
        <Slider {...settings}>
        {
            promotiondata.map((i)=>(
                <div key={i.id} className='w-full h-72 lg:h-full px-4 relative'>
                    <img className='w-full h-full object-cover rounded-xl ' src={i.img} alt="/" />
                    <p className='absolute bottom-16 left-16 bg-white p-1 px-3 rounded-md shadow-lg '>{i.text}</p>
                </div>
            ))
        }          
        </Slider>
      </section>
    </>
  )
}

export default Promotions
