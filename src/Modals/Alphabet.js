import React from 'react'

const alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const Alphabet = ({closeModal}) => {
  return (
    <>
      <section className='w-full h-full fixed top-0 left-0 bg-black/80 z-20 flex items-center justify-center'>

      {/* modal */}
        <div className='w-96 sm:w-[30rem] lg:w-[70%] h-[27rem] lg:h-72 bg-white shadow-md rounded-sm p-8 flex flex-wrap gap-x-4 lg:gap-x-9 items-center justify-evenly relative'>
            {/* close Button */}
            <div className='absolute top-3 right-3 font-bold flex items-center space-x-10 mt-1'>
                <h1>Choose An Alphabet</h1>
                <button onClick={()=>{closeModal(false)}} className='text-white border-2 rounded-full font-normal pb-0.5 secondry-bg-color px-2.5'>X Close</button>
            </div>

            {alphabets.map((i,index)=>(
                <div key={index}>
                      <p className='px-3.5 py-2 mt-5 font-semibold hover:primary-bg-color rounded-full'>{i}</p>
                </div>
            ))}
        </div>
      </section>
    </>
  )
}

export default Alphabet
