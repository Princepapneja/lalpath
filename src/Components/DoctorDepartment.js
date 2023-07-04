import React from 'react'

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import docdepartment1 from '../Assets/docdepartment1.png'
import docdepartment2 from '../Assets/docdepartment2.png'
import docdepartment3 from '../Assets/docdepartment3.png'
import docdepartment4 from '../Assets/docdepartment4.png'
import docdepartment5 from '../Assets/docdepartment5.png'
import docdepartment6 from '../Assets/docdepartment6.png'


const DocDepartmentData = [
    {
        id:1,
        img: docdepartment1,
        title:"Clinical Cytogenetic"
    },
    {
        id:2,
        img: docdepartment2,
        title:"Flow Cytometry"
    },
    {
        id:3,
        img: docdepartment3,
        title:"Molecular Diagnostics"
    },
    {
        id:4,
        img: docdepartment4,
        title:"Haematology & Immunology"
    },
    {
        id:5,
        img: docdepartment5,
        title:"Renal Pathology &amp; Electron Microscopy"
    },
    {
        id:6,
        img: docdepartment6,
        title:"Histopathology & Cytopathology"
    }
]



const DoctorDepartment = () => {

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
      <section className="  my-3 sm:p-8 lg:px-14">
          <section className="bg-white h-auto max-w-[1480px] w-full p-7 shadow-lg mx-auto pb-12 sm:rounded-xl lg:rounded-2xl lg:px-14 ">
            <h1 className="text-xl lg:text-2xl mb-9 font-semibold">Our Department</h1>
            <Slider {...settings}>
            {DocDepartmentData.map((i) => (
              <div key={i.id} className="h-28 mt-3 ">
              <div className='flex flex-col items-center border-x-2 border-gray-100'>
                  <img className='w-[4rem] h-[3.5rem] object-contain' src={i.img} alt="/" />
                      <p className='font-semibold py-1 lg:px-6 text-center'>{i.title}</p>
                  </div>
              </div>
            ))}
            </Slider>
        </section>
      </section>
    </>
  )
}

export default DoctorDepartment
