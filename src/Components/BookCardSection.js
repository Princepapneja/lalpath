import React, {useState} from 'react'
import ReactPaginate from 'react-paginate';
import {SidebarData} from '../Assets/BookTestdata'
import {CardData} from '../Assets/BookTestdata'
import {BiLeftArrow,BiRightArrow} from 'react-icons/bi'


// MAIN COMPONENT
const BookCardSection = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 48;
    const pageCount = Math.ceil(CardData.length / itemsPerPage);
    const offset = currentPage * itemsPerPage;
    const [show,setShow] = useState(false)

  return (
    <>
      <main className='w-full h-full block bg-white p-8 px-12'>
        <section className='w-full h-full'>
            {/* COUNT */}
            <div className='p-4 flex items-center justify-between px-3'>
                <p>Showing {currentPage*itemsPerPage} to {(currentPage+1)*48} of {pageCount*itemsPerPage} Result</p>
                <p>Health package</p>
            </div>

            {/*CATEGORY AND CARD SECTION*/}
            <div className='w-full h-full flex items-start'>
            {/* CATEGORY SECTION section */}
                <div className='w-[12rem] xl:w-1/6 border-2  px-4 rounded-xl p-3 hidden lg:block '>
                    <h2 className='text-gray-500 p-2'>Show All Category</h2>
                    <div className='hidden  md:flex flex-col w-full h-full  max-h-[400px] overflow-hidden overflow-y-auto' >
                        {SidebarData.map((i,index) => (
                            <p className='font-semibold p-2' key={index}>{i}</p>
                        ))}
                    </div>
                </div>
                <div className=" flex my-5 md:hidden">
              <button className="flex-end absolute right-0 px-8"
                onClick={() => {
                  setShow(!show);
                }}
              >
                Filter{" "}
              </button>
              {show && (
                <div className="flex flex-col w-full h-full  max-h-[400px] overflow-hidden overflow-y-auto">
                  {SidebarData.map((i, index) => (
                    <p className="font-semibold px-7" key={index}>
                      {i}
                    </p>
                  ))}
                <div className='w-[12rem] xl:w-1/6 border-2  px-4 rounded-xl p-3 hidden lg:block '>
                    <h2 className='text-gray-500 p-2'>Show All Category</h2>
                    <div className='hidden  md:flex flex-col w-full h-full  max-h-[400px] overflow-hidden overflow-y-auto' >
                        {SidebarData.map((i,index) => (
                            <p className='font-semibold p-2' key={index}>{i}</p>
                        ))}
                    </div>
                </div>
                {/* CRDA SECTION*/}
                <div className='w-full h-full'>
                    <div className='w-full h-full  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-3 gap-10'>
                    {/* CARD */}
                    {CardData.slice(offset, offset + itemsPerPage).map((i,index) => (
                        <BookTestCard key={index} testName={i.testName} testPrice={i.testPrice}/>
                        ))}
                    </div>
                    <div className='border-2 w-[20rem] mx-auto mt-8'>
                    <ReactPaginate className='flex items-center justify-around p-4 font-semibold text-lg'
                        previousLabel={BiLeftArrow}
                        nextLabel={BiRightArrow}
                        pageCount={pageCount}
                        onPageChange={data => {
                            setCurrentPage(data.selected);
                        }}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                        // renderOnZeroPageCount={null}
                        />
                    </div>
                </div>
                </div>
              )}
            </div>
                {/* CRDA SECTION*/}
                <div className='w-full h-full'>
                    <div className='w-full h-full  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-3 gap-10'>
                    {/* CARD */}
                    {CardData.slice(offset, offset + itemsPerPage).map((i,index) => (
                        <BookTestCard key={index} testName={i.testName} testPrice={i.testPrice}/>
                        ))}
                    </div>
                    <div className='border-2 w-[20rem] mx-auto mt-8'>
                    <ReactPaginate className='flex items-center justify-around p-4 font-semibold text-lg'
                        previousLabel={BiLeftArrow}
                        nextLabel={BiRightArrow}
                        pageCount={pageCount}
                        onPageChange={data => {
                            setCurrentPage(data.selected);
                        }}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                        // renderOnZeroPageCount={null}
                        />
                    </div>
                </div>
            </div>
        </section>
      </main>
    </>
  )
}



const BookTestCard = ({testName, testPrice}) => {
    const [count, setCount] = useState(0);

    const addToCart = () => {
        setCount(count + 1);
    }
    return (
        <>
            <div className='w-[20rem] min-h-[190px] px-4 py-2 capitalize space-y-1.5 shadow-xl flex flex-col justify-between'>
                            <h2 className='font-semibold'>{testName}</h2>
                            <p className='text-sm'>53 Parameter(s) covered</p>
                            <div><span className='text-black font-semibold text-lg'>Rs {testPrice}</span> </div>
                            {/* GREEN TEXT */}
                            <div className='flex items-center justify-between text-sm text-green-600'>
                                <div className='flex items-center '>
                                    <p>✅</p>
                                    <p>Home collection</p>
                                </div>
                                <div className='flex items-center'>
                                    <p>✅</p>
                                    <p>Lab Visit</p>
                                </div>
                            </div>
                            {/* ADD TO CART,CHECKBOX AND KNOW MORE */}
                            <div className="flex items-center justify-between ">
                                <button className='px-2 p-1.5 secondry-bg-color rounded-lg text-white text-sm' onClick={addToCart}>Add to cart</button>
                                <div className='space-x-1 text-sm flex item-center font-semibold'>
                                    <input type="checkbox" name="compare" id="compare" />
                                    <label for="compare">compare</label>
                                </div>
                                <p className='text-sm text-blue-800 font-semibold'>know more</p>
                            </div>
                        </div>
        </>
    )
}
export default BookCardSection
