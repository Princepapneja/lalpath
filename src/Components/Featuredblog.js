import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import feature1 from '../Assets/feature1.png'
import feature2 from '../Assets/feature2.png'
import feature3 from '../Assets/feature3.png'
import feature4 from '../Assets/feature4.png'
import feature5 from '../Assets/feature5.png'

const Featureddata = [
    {
        id:1,
        img:feature1,
        text:"Cold and Flu: Symptoms, Causes, Treatments and Prevention"
    },
    {
        id:2,
        img:feature2,
        text:"An Overview of Heart Disease- Its Symptoms, Diagnosis and Risk Factors"
    },
    {
        id:3,
        img:feature3,
        text:"What is Lung Cancer and What are its Effects?"
    },
    {
        id:4,
        img:feature4,
        text:" Exercise During Pregnancy - Benefits, Recommendations, and Precautions"
    },
    {
        id:5,
        img:feature5,
        text:"Fatty Liver: Signs, Symptoms, and Diagnosis"
    },
    
]

const Featuredblog = () => {

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
       <section className="bg-white h-auto p-8 my-6 shadow-md  lg:mx-14 lg:rounded-2xl lg:px-14  ">
        <h2 className='text-lg sm:text-xl lg:text-2xl mb-4 font-semibold'> Featured Blog & Articles </h2>
        
            <Slider {...settings}>
            {
                Featureddata.map((i)=>(
                    <div key={i.id} className='w-full h-72 lg:h-full px-4 '>
                        <img className='w-full h-full object-cover rounded-xl mb-2 ' src={i.img} alt="/" />
                        <span className='p-1'>14 jan 2021</span>
                        <p className='p-1 '>{i.text}</p>
                    </div>
                ))
            }          
            </Slider>
      </section>
    </>
  )
}

export default Featuredblog
