import React from 'react'

const Subscribe = () => {
  return (
    <>
      <section className=" h-auto my-4 sm:p-8 lg:px-14">
        <section className="w-full max-w-[1480px] h-auto p-5 px-6 mx-auto sm:rounded-xl bg-white shadow-md ">
            <div className='w-full h-full p-2 flex flex-col items-center space-y-5 lg:space-y-7'>
              <h2 className='text-[#0047AE] text-xl lg:text-2xl capitalize font-semibold lg:font-bold'>Subscribe to our blogs</h2>
              <input className='p-2 mx-2 w-full max-w-5xl outline-none border-2 rounded-full placeholder:text-center text-gray-300 capitalize text-lg' type="email" placeholder='your email id' />
              <button className='text-black w-32 lg:w-40 outline-none border-none py-2 primary-bg-color font-semibold rounded-2xl hover:bg-yellow-400' type='submit'>Submit</button>
            </div>
        </section>
      </section>
    </>
  )
}

export default Subscribe
