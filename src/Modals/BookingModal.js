import React from "react";
import { Options } from "../Assets/data";
import axios from 'axios';

function sendData(){
  const name = document.getElementById('Name').value;
  const mobile = document.getElementById('MobileNo').value;
  const city = document.getElementById('City').value;
  console.log(name, mobile, city);
  const formData = {
    name: name,
    mobile: mobile,
    city: city
  };
  axios.post('http://localhost:5000/book-lab-test', formData)
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
}

const BookingModal = ({ closeModal }) => {
  
  
  return (
    <>
      <section className="w-full h-full fixed top-0 left-0 bg-black/80 z-20 flex items-center justify-center">
        {/* modal */}
        <div className="w-80 sm:w-96 h-80 bg-gradient-to-r from-yellow-300 to-blue-300 shadow-md rounded-sm p-3 flex flex-col items-center justify-evenly relative">
          {/* close Button */}
          <div className="absolute top-2.5 right-3 font-bold ">
            <button
              className="text-black border-2 rounded-full px-1.5"
              onClick={() => {
                closeModal(false);
              }}
            >
              X
            </button>
          </div>

          {/* heading */}
          <h1 className="font-semibold sm:font-bold text-black text-lg sm:text-xl mt-3">
            Need Help in Booking a Lab Test
          </h1>
          <h2 className="text-sm  ">
            Drop Your Details Here, We Will Call You{" "}
          </h2>

          {/* form */}
          <form className="w-64 h-32 space-y-3 my-2">
            {/* name */}
            <div className="flex flex-col">
              <label htmlFor="Name"></label>
              <input
                className="border-2 border-gray-400 hover:border-gray-600 focus:border-black w-full py-[0.35rem] outline-none placeholder:pl-2 text-sm hover:tracking-wide rounded-t-md "
                name="Name"
                id="Name"
                type="text"
                placeholder="Name"
              />
            </div>

            {/* Mobile Number */}
            <div className="flex flex-col">
              <label htmlFor="MobileNo"></label>
              <input
                className="border-2 border-gray-400 hover:border-gray-600 focus:border-black w-full py-[0.35rem] outline-none placeholder:pl-2 text-sm hover:tracking-wide rounded-t-md "
                name="MobileNo"
                id="MobileNo"
                type="tel"
                placeholder="Mobile No"
              />
            </div>

            {/* city */}
            <div className="flex flex-col">
              <label htmlFor="City"></label>
              <select
                className="border-2 border-gray-400 hover:border-gray-600 focus:border-black w-full py-[0.35rem] outline-none placeholder:pl-2 text-sm hover:tracking-wide rounded-t-md "
                name="City"
                id="City"
                type="text"
                placeholder="details"
              >
                {Options.map((i) => (
                  <option value={i.value}>{i.label}</option>
                ))}
              </select>
            </div>
          </form>

          {/* Book Now button */}
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-1.5 text-white font-semibold rounded-sm shadow-md rounded-t-md" 
          onClick={() => {
            sendData();
            closeModal(false);
          }}>
            Book Now
          </button>
        </div>
      </section>
    </>
  );
};

export default BookingModal;
