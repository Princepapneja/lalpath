import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import doctorfeature1 from '../Assets/doctorfeature1.png'
import doctorfeature2 from '../Assets/doctorfeature2.png'
import doctorfeature3 from '../Assets/doctorfeature3.png'
import doctorfeature4 from '../Assets/doctorfeature4.png'
import doctorfeature5 from '../Assets/doctorfeature5.png'

const Doctorfeatureddata = [
    {
        id:1,
        img:doctorfeature1,
        text:"PRECISION ONCONGENOMICS- EMERGING ROLE AND LATEST TRENDS"
    },
    {
        id:2,
        img:doctorfeature2,
        text:"COMPREHENSIVE TUMOR PROFILING FOR PRECISION MEDICINE"
    },
    {
        id:3,
        img:doctorfeature3,
        text:" Oncopro Focus Fusion Panel for Solid Tumors"
    },
    {
        id:4,
        img:doctorfeature4,
        text:" Liquid Biopsy cfDNA, EGFR"
    },
    {
        id:5,
        img:doctorfeature5,
        text:"An Overview of Multiple Myeloma Test"
    },
    
]

const DoctorFeaturedBlog = () => {

    const settings = {
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
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
      <section className=" h-auto sm:p-8 lg:px-14 mx-auto">
       <section className="bg-white h-auto p-8 shadow-md max-w-[1480px] lg:rounded-2xl mx-auto  ">
        <h2 className='text-lg sm:text-xl lg:text-2xl mb-4 font-semibold'> Featured Blog & Articles </h2>
        
            <Slider {...settings}>
            {
                Doctorfeatureddata.map((i)=>(
                    <div key={i.id} className='w-full h-72 lg:h-full px-4 '>
                        <img className='w-full h-full object-contain  rounded-xl mb-2 ' src={i.img} alt="/" />
                        <span className='p-1'>14 jan 2021</span>
                        <p className='p-1 '>{i.text}</p>
                    </div>
                ))
            }          
            </Slider>
      </section>
    </section>
    </>
  )
}

export default DoctorFeaturedBlog
