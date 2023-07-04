import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// resource images
import resourcecenter1 from '../Assets/resourcecenter1.png'
import resourcecenter2 from '../Assets/resourcecenter2.png'
import resourcecenter3 from '../Assets/resourcecenter3.png'
import resourcecenter4 from '../Assets/resourcecenter4.png'

// whats news images
import whatsnews1 from '../Assets/whatsnews1.webp'
import whatsnews2 from '../Assets/whatsnews2.webp'
import whatsnews3 from '../Assets/whatsnews3.webp'
import whatsnews4 from '../Assets/whatsnews4.webp'

// main Component
const DocResourceandNews = () => {
  return (
    <>
      <section className="my-3 sm:p-8 lg:px-14">
          <section className="bg-white h-auto max-w-[1480px] w-full p-6 shadow-md mx-auto lg:rounded-2xl   ">
            <div className='flex flex-col xl:justify-evenly space-y-4 xl:flex-row xl:space-y-0 xl:space-x-5'>
                <div className='flex flex-col'>
                    <h1 className='capitalize text-lg sm:text-xl md:text-2xl mb-3 px-1 font-semibold'>Resource center</h1>
                    <DocResourceCenter/>
                </div>

                <div className='flex flex-col'>
                    <h1 className='capitalize text-lg sm:text-xl md:text-2xl mb-3 px-1 font-semibold'>Whats News</h1>
                    <DocWhatsNews/>
                </div>
            </div>
          </section>
      </section>
    </>
  )
}



// resource Component
const DocResourceCenter = () => {

  const DocResourceCenterData = [
    {
      id:1,
      img:resourcecenter1,
      text:"Newsletter"
    },
    {
      id:2,
      img: resourcecenter2,
      text:"Brochure"
    },
    {
      id:3,
      img: resourcecenter3,
      text:"publications"
    },
    {
      id:4,
      img: resourcecenter4,
      text:"videos"
    }
  ]

  return(
    <>
      <section className='w-full max-w-xl mx-auto h-96 border-2 p-4 flex items-center flex-wrap justify-around gap-16'>
        {DocResourceCenterData.map((i) => (
          <div key={i.id} className=" p-3 basis-40" >
              <img src={i.img} alt="/" />
            <p>{i.text}</p>
          </div>
        ))}
      </section>
    </>
  )
}



// whats News Component
const DocWhatsNews = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
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

  const DocWhatsNewsData = [
    {
      id:1,
      img:whatsnews1,
    },
    {
      id:2,
      img: whatsnews2,
    },
    {
      id:3,
      img: whatsnews3,
    },
    {
      id:4,
      img: whatsnews4,
    }
  ]

  return(
    <>
      <section className='w-full max-w-xl mx-auto h-96 border-2 p-2 '>
        <Slider {...settings}>
        {DocWhatsNewsData.map((i) => (
          <div key={i.id}>
            <img src={i.img} alt="/" />
          </div>
        ))}
        </Slider>
      </section>
    </>
  )
}
export default DocResourceandNews
