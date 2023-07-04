import React from 'react'

const RecordModel = ({closeModal}) => {
  return (
    <section className='w-full h-screen bg-black/60 fixed top-0 left-0 grid place-items-center'>
            <div className='w-2/3 md:w-2/4 lg:w-1/3 bg-white p-6 pb-2 rounded-xl relative'>
               {/* close button */}
                <div className='absolute top-3 right-4 font-bold '>
                    <button className='text-white border-2 rounded-full px-3 py-1 secondry-bg-color'  
                    onClick={()=>{closeModal(false)}}
                    >X Close</button>
                </div>
                
                <form className='my-8 p-2 px-4 space-y-5'>
                    <div className='w-full rounded-md hover:border-blue-400'>
                        <label className='p-1' htmlFor="">Name</label>
                        <input className='w-full h-full p-2 mt-1 outline-none border-2 rounded-md hover:border-blue-400' type="text" placeholder='Name'/>
                    </div>

                    <div className='w-full rounded-md hover:border-blue-400'>
                        <label className='p-1' htmlFor="">Mobile No.</label>
                        <input className='w-full h-full p-2 mt-1 outline-none border-2 rounded-md hover:border-blue-400' type="tel" placeholder='+911234567890'/>
                    </div>

                    <div className='w-full rounded-md hover:border-blue-400'>
                        <label className='p-1' htmlFor="">Speciality</label>
                        <input className='w-full h-full p-2 mt-1 outline-none border-2 rounded-md hover:border-blue-400' type="text" placeholder='Speciality'/>
                    </div>

                    <div className='w-full p-2 text-center mx-auto primary-bg-color rounded-md cursor-pointer hover:bg-yellow-400 '>
                        <button type='submit' className=' capitalize font-semibold cursor-pointer'>Submit</button>
                    </div> 
                </form>

            </div>
      </section>
  )
}

export default RecordModel
