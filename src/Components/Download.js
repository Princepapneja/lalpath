import React from 'react'
import downloadappbg from '../Assets/Download-App.png'
import googleplay from '../Assets/google-play-button.png'
import appstore from '../Assets/app-store-button.png'

const Download = () => {
  return (
    <>
      <section className=" h-auto my-8 sm:p-8 lg:px-14">
      {/* Main div */}
        <div className="border-2 shadow-md mx-auto max-w-[1480px] bg-white p-8 sm:rounded-2xl relative">
           <img className='w-full h-40 md:h-full object-cover' src={downloadappbg} alt="downloadappbg" />
            {/* left section */}
           <div className=' p-2 pl-8 absolute top-12 md:top-16 md:left-16 lg:top-20 xl:top-28 lg:left-32 xl:left-48'>
                <h2 className='font-bold text-md sm:text-lg md:text-xl xl:text-2xl md:pb-2 xl:pb-5'>Download Patient App:</h2>
                {/* links */}
                <div className='flex flex-col items-start justify-between md:mt-[-0.4rem] lg:mt-[-10px]'>
                    <a className='w-28 sm:w-32 md:w-24 lg:w-32 xl:w-44 mt-1' href="https://play.google.com/store/apps/details?id=pathlabs.com.pathlabs&hl=en_IN&gl=US" target="_blank" rel="noopener noreferrer"><img src={googleplay} alt="" /></a>
                    <a className='w-28 sm:w-32 md:w-24 lg:w-32  xl:w-44 mt-2 lg:mt-4' href="https://apps.apple.com/in/app/dr-lal-pathlabs/id1111250276" target="_blank" rel="noopener noreferrer"><img src={appstore} alt="" /></a>
                </div>
           </div>

        </div>
      </section>
    </>
  )
}

export default Download
