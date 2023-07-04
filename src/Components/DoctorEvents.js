import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import doctorevent1 from '../Assets/doctorevent1.png'
import doctorevent2 from '../Assets/doctorevent2.png'
import doctorevent3 from '../Assets/doctorevent3.png'
import RecordModel from '../Modals/RecordModel';


const DoctorEventsData = [
    {
        id:1,
        img:doctorevent1,
        text:"1st India Autoimmune eCME"
    },
    {
        id:2,
        img:doctorevent2,
        text:"2nd India Autoimmune eCME"
    },
    {
        id:3,
        img:doctorevent3,
        text:"3rd India Autoimmune eCME"
    },
    {
        id:4,
        img:doctorevent1,
        text:"1st India Autoimmune eCME"
    },
    {
        id:5,
        img:doctorevent2,
        text:"2nd India Autoimmune eCME"
    },
    {
        id:6,
        img:doctorevent3,
        text:"3rd India Autoimmune eCME"
    }
    
]

const DoctorEvents = () => {
  const [showRecordModal, setShowRecordModal] = useState(false);

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
        <h2 className='text-lg sm:text-xl lg:text-2xl mb-4 font-semibold'>Events</h2>

        <div className='flex items-center space-x-4 overflow-x-auto whitespace-nowrap w-full pb-4 md:pb-0 my-6'>
            <button className='p-1.5 font-semibold px-5 w-48 rounded-3xl bg-gray-300 transition-all hover:primary-bg-color active:primary-bg-color'>Upcoming(12)</button>
            <button 
            onClick={()=>{setShowRecordModal(true)}}
            className='p-1.5 font-semibold px-4 w-36 rounded-3xl bg-gray-300 transition-all hover:primary-bg-color active:primary-bg-color'>Recorded</button>
            { showRecordModal && <RecordModel  closeModal={setShowRecordModal}/>}
        </div>
        
            <Slider {...settings}>
            {
                DoctorEventsData.map((i)=>(
                    <div key={i.id} className='w-full h-72 lg:h-full px-4 '>
                        <img className='w-full h-full object-cover rounded-xl mb-2 ' src={i.img} alt="/" />
                        <span className='p-1'>eCME</span>
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

export default DoctorEvents
