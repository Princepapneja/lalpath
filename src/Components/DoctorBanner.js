import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

//banner Images
import doctorbanner1 from '../Assets/doctorbanner1.webp'
import doctorbanner2 from '../Assets/doctorbanner2.webp'
import doctorbanner3 from '../Assets/doctorbanner3.webp'

//banner data
const Doctorbannerdata= [
    {
        id:1,
        img:doctorbanner1
    },
    {
        id:2,
        img:doctorbanner2
    },
    {
        id:3,
        img:doctorbanner3
    }
]


const DoctorBanner = () => {
  return (
    <>
      <Carousel autoPlay infiniteLoop interval={3000} showStatus={false} showThumbs={false} showArrows={false} transitionTime={2000} >
            {Doctorbannerdata.map((item, index) =>(
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

export default DoctorBanner
