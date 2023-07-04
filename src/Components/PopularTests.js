import React from 'react'
import {BiRupee} from 'react-icons/bi'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import sugaradvance1 from '../Assets/sugaradvance1.png'
import sugaradvance2 from '../Assets/sugaradvance2.png'
import sugaradvance3 from '../Assets/sugaradvance3.png'

const PopularTests = () => {
    function SampleNextArrow(props) { 
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "grid",placeItems:"center", background: "#FDC34E" , width:"2.2rem" , height:"2.2rem", borderRadius:"50%", paddingTop:"4px"}}
            onClick={onClick}
          />
        );
      }

      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "grid",placeItems:"center", background: "#FDC34E" , width:"2.2rem" , height:"2.2rem", borderRadius:"50%" ,zIndex:"20", paddingTop:"4px" }}
            onClick={onClick}
          />
        );
      }

    var settings = {
        dots: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        infinite: true,
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

  return (
    <>
      <div className="bg-white h-auto p-8  my-8 shadow-lg sm:mx-9 lg:mx-14 sm:rounded-xl lg:rounded-2xl lg:px-14 pl-16 ">
        <h2 className='text-lg md:text-xl lg:text-2xl font-semibold mb-4'> Popular Tests / Packages </h2>
        
        <Slider {...settings}>
          <div>
                <div className='border-2  w-full h-72 max-w-md px-3'>
            {/* title */}
                <h1 className='py-4 border-b-2 font-semibold'>SUGAR ADVANCE</h1>
                {/* lists */}
                <div className='flex flex-col justify-between'>
                <div className='my-4 space-y-4'>

                    <div className='flex items-center justify-start space-x-2 capitalize'>
                        <img className='w-4' src={sugaradvance1} alt="/" />
                        <p>minimum 12 hours fasting is mandatory</p>
                    </div>

                    <div className='flex items-center justify-start space-x-2 capitalize'>
                        <img className='w-4' src={sugaradvance2} alt="/" />
                        <p>daily</p>
                    </div>

                    <div className='flex items-start justify-start space-x-2 capitalize'>
                        <img className='w-5' src={sugaradvance3} alt="/" />
                        <p className='mt-[-3px]'>Lipid Profile Screen,KFT,HbA1c,Glucose Fasting/PP,Urine R/E,LFT,CBC,VITAMIN-D,URINE MAU,Diet Consultation</p>
                    </div>
                    </div>
                </div>

                <div className='w-full  primary-bg-color flex items-center justify-between rounded-md mt-[-3px]'>
                    <p className='flex items-center'><del className='px-1.5 flex items-center'><BiRupee/>5630</del><BiRupee/>2,999</p>
                    <button className='secondry-bg-color px-6 py-1.5 text-white font-semibold rounded-r-md hover:bg-blue-700'>Book Now</button>
                </div>   

                </div>
          </div>

          <div>
                <div className='border-2  w-full h-72 max-w-md px-3'>
                {/* title */}
                    <h1 className='py-4 border-b-2 font-semibold uppercase'>SUGAR CHECK COMPLETE</h1>
                    {/* lists */}
                    <div className='flex flex-col justify-between'>
                        <div className='my-4 space-y-4'>

                            <div className='flex items-center justify-start space-x-2 capitalize'>
                                <img className='w-4' src={sugaradvance1} alt="/" />
                                <p>Minimum 8 hours fasting is mandatory.</p>
                            </div>

                            <div className='flex items-center justify-start space-x-2 capitalize'>
                                <img className='w-4' src={sugaradvance2} alt="/" />
                                <p>daily</p>
                            </div>

                            <div className='flex items-start justify-start space-x-2 capitalize'>
                                <img className='w-5' src={sugaradvance3} alt="/" />
                                    <p className='mt-[-3px]'>Sugar F/PP ,Hba1c ,Diet Consultation</p>
                            </div>
                        </div>

                    <div className='w-full  primary-bg-color flex items-center justify-between rounded-md my-[2.8rem]'>
                        <p className='flex items-center'><BiRupee/>80</p>
                        <button className='secondry-bg-color px-6 py-1.5 text-white font-semibold rounded-r-md hover:bg-blue-700'>Book Now</button>
                    </div>    
                    </div>    
                </div>
          </div>

          <div>
                <div className='border-2  w-full h-72 max-w-md px-3'>
                {/* title */}
                    <h1 className='py-4 border-b-2 font-semibold uppercase'>SUGAR BASIC</h1>
                    {/* lists */}
                    <div className='my-4 space-y-4'>

                        <div className='flex items-center justify-start space-x-2 capitalize'>
                            <img className='w-4' src={sugaradvance1} alt="/" />
                            <p>Minimum 8 hours fasting is mandatory.</p>
                        </div>

                        <div className='flex items-center justify-start space-x-2 capitalize'>
                            <img className='w-4' src={sugaradvance2} alt="/" />
                            <p>daily</p>
                        </div>

                        <div className='flex items-start justify-start space-x-2 capitalize'>
                            <img className='w-5' src={sugaradvance3} alt="/" />
                                <p className='mt-[-3px]'>Lipid Profile Screen,KFT,HbA1c,Glucose Fasting/PP,Urine R/E,Diet Consultation</p>
                        </div>

                    </div>

                    <div className='w-full  primary-bg-color flex items-center justify-between rounded-md my-9'>
                    <p className='flex items-center'><BiRupee/>80</p>
                    <button className='secondry-bg-color px-6 py-1.5 text-white font-semibold rounded-r-md hover:bg-blue-700'>Book Now</button>
                    </div>   
                </div>
          </div>

          <div>
                <div className='border-2  w-full h-72 max-w-md px-3'>
                {/* title */}
                    <h1 className='py-4 border-b-2 font-semibold'>GLUCOSE, FASTING (F)</h1>
                    {/* lists */}
                    <div className='my-4 space-y-4'>

                        <div className='flex items-center justify-start space-x-2 capitalize'>
                            <img className='w-4' src={sugaradvance1} alt="/" />
                            <p>minimum 8 hours fasting is mandatory</p>
                        </div>

                        <div className='flex items-center justify-start space-x-2 capitalize'>
                            <img className='w-4' src={sugaradvance2} alt="/" />
                            <p>daily</p>
                        </div>

                    </div>
                    <div className='w-full  primary-bg-color flex items-center justify-between rounded-md my-24'>
                    <p className='flex items-center'><BiRupee/>80</p>
                    <button className='secondry-bg-color px-6 py-1.5 text-white font-semibold rounded-r-md hover:bg-blue-700'>Book Now</button>
                    </div>    
                </div>
          </div>

          <div>
                <div className='border-2  w-full h-72 max-w-md px-3'>
                {/* title */}
                    <h1 className='py-4 border-b-2 font-semibold'>HbA1c; GLYCOSYLATED HEMOGLOBIN</h1>
                    {/* lists */}
                    <div className='my-4 space-y-4'>

                        <div className='flex items-center justify-start space-x-2 capitalize'>
                            <img className='w-4' src={sugaradvance1} alt="/" />
                            <p>HbA1c; GLYCOSYLATED HEMOGLOBIN</p>
                        </div>

                        <div className='flex items-center justify-start space-x-2 capitalize'>
                            <img className='w-4' src={sugaradvance2} alt="/" />
                            <p>daily</p>
                        </div>

                        <div className='flex items-start justify-start space-x-2 capitalize'>
                            <img className='w-5' src={sugaradvance3} alt="/" />
                                <p className='mt-[-3px]'>*HbA1c *estimated Average Glucose (eAG)</p>
                        </div>
                        
                    </div>
                    <div className='w-full  primary-bg-color flex items-center justify-between rounded-md my-[3.5rem]'>
                        <p className='flex items-center'><BiRupee/>80</p>
                        <button className='secondry-bg-color px-6 py-1.5 text-white font-semibold rounded-r-md hover:bg-blue-700'>Book Now</button>
                    </div>    
                </div>
          </div>

        </Slider>
        
      </div>
    </>
  )
}

export default PopularTests
