import React, { useState } from 'react'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'


// labs and center images
import faq1 from '../Assets/faq1.jpg'
import faq2 from '../Assets/faq2.jpg'
import faq3 from '../Assets/faq3.jpg'
import faq4 from '../Assets/faq4.jpg'
import faq5 from '../Assets/faq5.jpg'
import faq6 from '../Assets/faq6.jpg'


// report images
import report1 from '../Assets/report1.jpg'
import report2 from '../Assets/report2.jpg'
import report3 from '../Assets/report3.jpg'


// Test Booking images
import Booking1 from '../Assets/Booking1.jpg'
import Booking2 from '../Assets/Booking2.jpg'
import Booking3 from '../Assets/Booking3.jpg'
import Booking4 from '../Assets/Booking4.jpg'
import Booking5 from '../Assets/Booking5.jpg'
import Booking6 from '../Assets/Booking6.jpg'

const FAQ = () => {
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  return (
    <>
       <section className="bg-white h-auto p-8 my-6 shadow-md max-w-[1240px] lg:rounded-2xl mx-auto ">
        <h2 className='text-lg sm:text-xl lg:text-2xl mb-4 md:mb-7 font-semibold'> Frequently Asked Questions</h2>

            <div className='flex items-center flex-nowrap space-x-4 whitespace-nowrap overflow-x-auto w-full pb-3 md:pb-0'>
                <button className='p-1.5 font-semibold px-5 w-48 rounded-3xl transition-all primary-bg-color'>Labs and Center</button>
                <button className='p-1.5 font-semibold px-4 w-36 rounded-3xl bg-gray-300 transition-all hover:primary-bg-color'>Reports </button>
                <button className='p-1.5 font-semibold px-4 w-36 rounded-3xl bg-gray-300 transition-all hover:primary-bg-color'>Test Booking</button>
                <button className='p-1.5 font-semibold px-5 w-48 rounded-3xl bg-gray-300 transition-all hover:primary-bg-color'>Wellness Packages</button>
            </div>
            

            {/* First  lab FAQ Question */}
            <div className='border-orange-200 border-2 p-2.5 my-2'>
              <div className='flex items-center space-x-2'>
                {!show ? <IoIosArrowDown size={22} onClick={()=>{setShow(!show)}}/>:<IoIosArrowUp size={22} onClick={()=>{setShow(!show)}}/>}
                <p className='text-[#5247AE] sm:text-lg lg:text-xl'>Q. How many labs and center does LPL have at present</p>
              </div>
              
              {show && 
              <div className='my-1 px-9 md:text-lg '>
                <p>you can find labs and center using this link</p>
                <a href="https://www.lalpathlabs.com/lab/visit/"><li className='list-none text-blue-500 hover:text-blue-700 mt-0.5'>https://www.lalpathlabs.com/lab/visit/</li></a>
              </div>}
            </div>

            {/* lab second FAQ Question */}
            <div className='border-orange-200 border-2 p-2.5 my-2'>
              <div className='flex items-start space-x-2'>
                {!show1 ? <IoIosArrowDown size={22} onClick={()=>{setShow1(!show1)}}/>:<IoIosArrowUp size={22} onClick={()=>{setShow1(!show1)}}/>}
                <p className='text-[#5247AE] sm:text-lg lg:text-xl'>Q. How can I find out information regarding a particular lab/center?</p>
              </div>
              
              {show1 && 
              <div className='my-3 px-9 md:text-lg '>
              <p>Please follow the steps below to find information related to any LPL lab/center.</p>
              <ol className='space-y-4 list-decimal list-inside mt-2'>
                <li>You need to log onto www.lalpathlabs.com and click on 'Find a Lab' tab on the website home page</li>
                <img src={faq1} alt="/" />
                <li>In this case, let's say that you wanted to locate a lab in Gurgaon. Hence, you chose the option 'Pan India Network' and were re-directed to the below page.</li>
                <img src={faq2} alt="/" />
                <li>In the next step you need to select 'Delhi NCR' from the states dropdown and 'Gurgaon' from the city dropdown and then click on 'Submit'.</li>
                <img src={faq3} alt="/" />
                <li>Once the above steps have been done, system shows all the lab/centres in the Gurgaon city of Delhi NCR region. On this page, you can filter down on the basis of
                  <ol className='list-roman list-inside'>
                    <li>Lab</li>
                    <li>Collection Centre</li>
                    <li>Labs with Radiology facility</li>
                  </ol>
                </li>
                <img src={faq4} alt="/" />
                <li>Let's say we are looking at a lab with radiology facility and once these filters are chosen, only those options are shown which fulfill this criterion.</li>
                <img src={faq5} alt="/" />
                <li>You now need to click on the lab name to get to the lab details page. We chose sector 14 as the lab for which details are sought.</li>
                <img src={faq6} alt="/" />
                <li>On this page, you can not only see the details pertaining to that particular lab but also
                <ol className='list-roman list-inside'>
                  <li>See the lab photos</li>
                  <li>See the complete list of pathology tests offered</li>
                  <li>See the complete list of radiology tests offered</li>
                  <li>Write a review</li>
                  <li>Seek directions from the lab to desired destination</li>
                  <li>See centres nearby</li>
                </ol>
                </li>
              </ol>
              </div>}
            </div>


            {/* Report acccordian */}
            <div className='border-orange-200 border-2 p-2.5 my-2'>
              <div className='flex items-start space-x-2'>
                {!show2 ? <IoIosArrowDown size={22} onClick={()=>{setShow2(!show2)}}/>:<IoIosArrowUp size={22} onClick={()=>{setShow2(!show2)}}/>}
                <p className='text-[#5247AE] sm:text-lg lg:text-xl'>Q. Linking report(s) not showing in My Reports section:</p>
              </div>
              
              {show2 && 
              <div className='my-3 px-9 md:text-lg '>
              <p>There could be an instance wherein you might have changed you mobile number which was given at the time of registration and have currently signed up on the LPL website with a different mobile number and want the previous reports to show under this. Not to worry, we will help you in getting the same if you follow the instructions given below.</p>
                    <ol className='space-y-4 list-decimal list-inside mt-2'>
                      <li>The first and the most important pre-requisite for this is that you must have all the previous lab numbers/password with you to be able to link them to your new number.</li>
                      <li>You now need to login to www.lalpathlabs.com with new mobile number and password to be able to access ‘My Reports’ section.</li>
                      <li>Once you have successfully logged in, and see the page with all the reports, scroll to the end of the page where you will see the ‘Missing Reports? Click here to link’ text. Click on the same to proceed</li>
                      <img src={report1} alt="/" />
                      <li>On the next page, you will be required to enter the lab number and the corresponding password to let our system search this particular record for you.</li>
                      <img src={report2} alt="/" />
                      <li>Once the record has been found, you will see two options namely: to LINK the report or to CANCEL and go back to the report listing page.</li>
                      <img src={report3} alt="/" />
                      <li>If you click on LINK, the above record will be added to your account and you will be re-directed to the report listing page. Points 4,5 need to repeated each time to add all the previous lab numbers one-by-one.</li>
                    </ol>
              </div>}
            </div>


            {/* Test Booking acccordian */}
            <div className='border-orange-200 border-2 p-2.5 my-2'>
              <div className='flex items-start space-x-2'>
                {!show3 ? <IoIosArrowDown size={22} onClick={()=>{setShow3(!show3)}}/>:<IoIosArrowUp size={22} onClick={()=>{setShow3(!show3)}}/>}
                <p className='text-[#5247AE] sm:text-lg lg:text-xl'>Q. How can I find out information regarding a particular lab/center?</p>
              </div>
              
              {show3 && 
              <div className='my-3 px-9 md:text-lg '>
              <p>Please follow the steps below to find information related to any LPL lab/center</p>
                    <ol className='space-y-4 list-decimal list-inside mt-2'>
                      <li>You need to log onto www.lalpathlabs.com and click on ‘Find a Lab’ tab on the website home page</li>
                      <img src={Booking1} alt="/" />
                      <li>In this case, let’s say that you wanted to locate a lab in Gurgaon. Hence, you chose the option ‘Pan India Network’ and were re-directed to the below page.</li>
                      <img src={Booking2} alt="/" />
                      <li>In the next step you need to select ‘Delhi NCR’ from the states dropdown and ‘Gurgaon’ from the city dropdown and then click on ‘Submit’.</li>
                      <img src={Booking3} alt="/" />
                      <li>Once the above steps have been done, system shows all the lab/centres in the Gurgaon city of Delhi NCR region. On this page, you can filter down on the basis of
                        <ol className='list-roman list-inside'>
                            <li>lab</li>
                            <li>Collection Centre</li>
                            <li>Labs with Radiology facility</li>
                        </ol>
                      </li>
                      <img src={Booking4} alt="/" />
                      <li>Let’s say we are looking at a lab with radiology facility and once these filters are chosen, only those options are shown which fulfill this criterion.</li>
                      <img src={Booking5} alt="/" />
                      <li>You now need to click on the lab name to get to the lab details page. We chose sector 14 as the lab for which details are sought.</li>
                      <img src={Booking6} alt="/" />
                      <li>On this page, you can not only see the details pertaining to that particular lab but also
                        <ol className='list-roman list-inside'>
                          <li>See the lab photos</li>
                          <li>See the complete list of pathology tests offered</li>
                          <li>See the complete list of radiology tests offered</li>
                          <li>Write a review</li>
                          <li>Seek directions from the lab to desired destination</li>
                          <li>See centres nearby</li>
                        </ol>
                      </li>
                    </ol>
              </div>}
            </div>


      </section>
    </>
  )
}


export default FAQ
