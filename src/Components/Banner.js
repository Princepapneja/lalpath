import React from 'react'
import { BannerData } from '../Assets/data'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
  return (
    <>
      <Carousel autoPlay infiniteLoop interval={5000} showStatus={false} showThumbs={false} showArrows={false} transitionTime={2000} >
            {BannerData.map((item, index) =>(
            <div key={index} className="w-full h-24 sm:h-32 md:h-52 lg:h-80 ">
                <div className="w-full absolute ">
                    <img className=" w-full h-24 sm:h-32 md:h-52 lg:h-full  object-contain md:object-fit lg:object-cover mix-blend-overlay " src={item.img} alt="BannerImage" />
                </div>
            </div>
            ))}
      </Carousel>
    </>
  )
}

export default Banner


