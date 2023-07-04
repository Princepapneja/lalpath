import React from 'react'
import {QualityDataFirst} from '../Assets/data'


const WhyDrLalpath = () => {
  return (
    <>
      <section className="bg-white h-auto p-8 my-8 space-y-5 shadow-lg sm:mx-9 lg:mx-14 sm:rounded-xl lg:rounded-2xl lg:px-14  lg:space-y-0">
      <h1 className="text-xl lg:text-2xl mb-2 font-semibold">Why Dr. Lal PathLabs</h1>
          <div className='flex item-center justify-between gap-y-4 md:justify-around flex-wrap lg:gap-x-32'>
              {QualityDataFirst.map((i)=>(
                  <div className='flex item-center basis-1 md:basis-1/2 lg:basis-1/4' key={i.id}>
                    <img className='w-28 p-4 hover:scale-125 transition-all duration-400' src={i.img} alt="q7" />
                    <div className='flex flex-col item-start justify-center space-y-1 w-40'>
                      <p className='text-xl lg:text-2xl text-[#0B51B3] font-semibold'>{i.count}</p>
                      <p className='text-sm md:text-md'>{i.text}</p>
                    </div>
                  </div>
              ))}
          </div>
      </section>
    </>
  )
}

export default WhyDrLalpath
