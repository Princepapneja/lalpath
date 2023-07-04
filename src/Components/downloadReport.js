import React from "react";
import EmailR from "../Assets/email-r.png";
import ReportBanner from '../Assets/download-report-banner.jpg'

const DownloadReport = () => {
  return (
    <section className="py-12">
      <div className="download-report ">
        <div className="max-w-6xl w-[100%] bg-[#fff] py-5 mb-6 m-[auto] rounded-2xl">
          <div className="grid grid-cols-3 gap-4">
            <div className="p-2">
              <div
                className="transition-all duration-150 ease"
                style={{
                  boxShadow: "0 0 5px 0 rgb(125 121 121 / 40%)",
                  padding: "15px 26px",
                  borderRadius: "15px",
                }}
              >
                <p className="text-2xl font-bold">View All Your Test Reports</p>
                <div className="w-[100px] align-center my-0 mx-auto">
                  <img src={EmailR} />
                </div>
                <form>
                  <div class="mb-6">
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Enter Lab/Visit Id
                    </label>
                    <input
                      type="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Lab/Visit Id"
                      required
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Password"
                      required
                    />
                  </div>
                  <div className="bg-[#fecc4e] w-[100%] my-[20px] p-2 text-center rounded-xl">

                  <button type='submit'>Submit</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-span-2 p-2">
                <img className="rounded-2xl" src={ReportBanner} alt='report-banner'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadReport;
