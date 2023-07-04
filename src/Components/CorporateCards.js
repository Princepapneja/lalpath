import React from 'react'
import {corporatedata} from '../Assets/data'


const CorporateCards = () => {
  return (
    <>
    <section className=" sm:p-8 lg:px-14 ">
        <section className="bg-white h-auto mx-auto max-w-[1480px] w-full p-8 mt-8 space-y-5 shadow-md sm:rounded-xl  lg:rounded-2xl lg:space-y-0 lg:flex lg:item-center lg:justify-around">
        {/* mapping having two card */}
              {corporatedata.map((i)=>(
                  <div key={i.id}>
                      <h2 className='font-semibold text-lg sm:text-xl md:text-lg lg:text-xl mb-4 '>{i.title}</h2>
                      <div className="border-2 shadow-md mx-auto bg-white p-8 rounded-2xl relative">
                          <img className='w-full h-40 md:h-full object-cover' src={i.img} alt="downloadappbg" />
                          <p className='mb-[-1rem] mt-3'>{i.text}</p>
                      </div>
                  </div>
              ))}
        </section>
      </section>
    </>
  )
}



export default CorporateCards
