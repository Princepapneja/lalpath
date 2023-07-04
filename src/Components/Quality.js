import React from 'react'
import { QualityData } from '../Assets/data'

 
const Quality = () => {
  return (
    <>
    <section className=" sm:p-8 lg:px-14">
      <section className="bg-white h-auto p-8 max-w-[1480px] w-full space-y-5 shadow-lg mx-auto sm:rounded-xl lg:rounded-2xl lg:space-y-0 ">
      <h1 className="text-xl lg:text-2xl mb-2 font-semibold">Quality</h1>
          <div className='flex item-center justify-between gap-y-4 md:justify-around flex-wrap '>
              {QualityData.map((i)=>(
                  <div className='flex item-center basis-1/2 lg:basis-1/3' key={i.id}>
                    <img className='w-28 lg:w-32 p-4 hover:scale-125 transition-all duration-400' src={i.img} alt="q7" />
                    <div className='flex flex-col item-start justify-center space-y-1 w-40'>
                      <p className='text-xl font-semibold lg:text-3xl text-[#0B51B3]'>{i.count}</p>
                      <p className='text-sm'>{i.text}</p>
                    </div>
                  </div>
              ))}
          </div>
      </section>
    </section>
    </>
  )
}

export default Quality