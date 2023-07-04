import React from 'react'
import BlueImg1 from '../Assets/BlueImg1.png'
import BlueImg2 from '../Assets/BlueImg2.png'
import BlueImg3 from '../Assets/BlueImg3.png'
import BlueImg4 from '../Assets/BlueImg4.png'

const BlueCardData = [
  {
    id:1,
    img:BlueImg1,
    text:"Nearest Center"
  },
  {
    id:2,
    img:BlueImg2,
    text:"Book a Test"
  },
  {
    id:3,
    img:BlueImg3,
    text:" Prescription"
  },
  {
    id:4,
    img:BlueImg4,
    text:"Report"
  }
]

const BlueTopSection = () => {
  return (
    <>
      <section className=' bg-[#0047AF] w-full p-8 mt-1 md:mt-0 py-16 flex items-center justify-center space-x-7 md:space-x-12'>
          {BlueCardData.map((i)=>(
            <div key={i.id} className='w-fit h-full flex flex-col items-center justify-around '>
                <img className='w-20 md:w-24 hover:scale-110 transition-all duration-200 md:mx-9' src={i.img} alt="/" />
                <p className='py-1 text-white font-semibold md:text-lg'>{i.text}</p>
            </div>
          ))}
      </section>
    </>
  )
}

export default BlueTopSection
