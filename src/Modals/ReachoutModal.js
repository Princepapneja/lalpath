import React from "react";
import axios from "axios";

function sendOtp(e) {
    e.preventDefault();
    const mobile = document.getElementById("Mobile").value;
    const email = document.getElementById("Email").value;
    const formData = {
      mobile: mobile,
      email: email
    };
    axios
      .post("http://localhost:5000/sendOTP", formData)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  }

function sendData(e) {
  e.preventDefault();
  const name = document.getElementById("Name").value;
  const email = document.getElementById("Email").value;
  const mobile = document.getElementById("Mobile").value;
  const otp = document.getElementById("otp").value;
  const discription = document.getElementById("discription").value;

  const formData = {
    name: name,
    email: email,
    mobile: mobile,
    otp: otp,
    discription: discription,
  };
  axios
    .post("http://localhost:5000/reach-out-to-us", formData)
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));
}

const ReachoutModal = ({ closeModal }) => {
  return (
    <>
      <section className="w-full h-screen bg-black/60 fixed top-0 left-0 grid place-items-center">
        <div className="w-[27rem] lg:w-[55rem] h-auto py-3 px-6 lg:p-16  bg-white rounded-xl relative">
          {/* close button */}
          <div className="absolute top-3 right-4 font-bold ">
            <button
              className="text-white border-2 rounded-full px-3 py-1 secondry-bg-color"
              onClick={() => {
                closeModal(false);
              }}
            >
              X Close
            </button>
          </div>

          {/* heading */}
          <h2 className="capitalize sm:text-lg font-semibold">
            reach out to us
          </h2>
          <form className="my-4">
            <div className="flex flex-col lg:flex-row item-center justify-between ">
              {/* input fields */}
              <div className="space-y-4 mb-4">
                <div className="w-56 lg:w-60 rounded-md hover:border-blue-400">
                  <label className="p-1" htmlFor="">
                    Name
                  </label>
                  <input
                    className="w-full h-full p-2 mt-1 outline-none border-2 rounded-md hover:border-blue-400"
                    id="Name"
                    type="text"
                    placeholder="Name"
                  />
                </div>

                <div className="w-56 lg:w-60 rounded-md hover:border-blue-400">
                  <label className="p-1" htmlFor="">
                    Email
                  </label>
                  <input
                    className="w-full h-full p-2 mt-1 outline-none border-2 rounded-md hover:border-blue-400"
                    id="Email"
                    type="text"
                    placeholder="abc@gmail.com"
                  />
                </div>

                <div className="w-56 lg:w-60 rounded-md hover:border-blue-400">
                  <label className="p-1" htmlFor="">
                    Mobile No.
                  </label>
                  <input
                    className="w-full h-full p-2 mt-1 outline-none border-2 rounded-md hover:border-blue-400"
                    id="Mobile"
                    type="tel"
                    placeholder="1234567890"
                  />
                </div>

                <div className="w-56 lg:w-60 p-2 text-center primary-bg-color rounded-md cursor-pointer">
                  <button
                    className="w-full min-h-full capitalize font-semibold  hover:bg-yellow-400 cursor-pointer"
                    onClick={(e) => {
                        sendOtp(e);
                      }}>
                    get otp
                  </button>
                </div>

                <div className="w-56 h-auto rounded-md hover:border-blue-400">
                  <label className="p-1" htmlFor="">
                    OTP
                  </label>
                  <input
                    className="w-full h-full p-2 mt-1 outline-none border-2 rounded-md hover:border-blue-400"
                    id="otp"
                    type="text"
                    placeholder="OTP"
                  />
                </div>
              </div>
              {/* discription */}
              <div>
                <div className="w-full lg:w-80 h-auto rounded-md hover:border-blue-400">
                  <label className="p-1" htmlFor="">
                    Discription
                  </label>
                  <textarea
                    rows={5}
                    className="w-full h-full p-2 mt-1 outline-none border-2 rounded-md hover:border-blue-400"
                    id="discription"
                    type="text"
                    placeholder="type here..."
                  />
                </div>
              </div>
            </div>
            <div className="w-56 lg:w-60 p-2 text-center mx-auto primary-bg-color rounded-md cursor-pointer hover:bg-yellow-400 mt-2">
              <button
                type="submit"
                className=" capitalize font-semibold cursor-pointer"
                onClick={(e) => {
                  sendData(e);
                  closeModal(false);
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ReachoutModal;
