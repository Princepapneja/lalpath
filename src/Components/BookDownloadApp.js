import React from "react";
import bookdownload from "../Assets/bookdownload.svg";
import bookdownload1 from "../Assets/bookdownload1.svg";
import bookdownload2 from "../Assets/bookdownload2.svg";

const BookDownloadApp = () => {
  return (
    <>
      <section className="sm:p-8 lg:px-14">
      {/* all */}
        <div className="flex flex-col bg-white shadow-lg max-w-6xl mx-auto lg:rounded-2xl md:flex-row item-center justify-start p-8">
        {/* image */}
          <img className="w-80 lg:w-96 mx-auto my-2" src={bookdownload} alt="iphone" />
          {/* discription */}
          <div className="flex flex-col items-start justify-center space-y-4 w-full max-w-lg mx-auto">
            <h1 className="font-semibold font-serif text-3xl lg:text-4xl">Download our app now</h1>
            <p className="text-gray-500 italic">
              Dr Lal PathLabs one of the leading Pathology labs in India, as
              part of Digitilization have created apps for your convenience to
              book tests, view reports, search tests & packages and more with
              attractive offers. To enjoy these benefits use the links to
              download our apps and become members of our esteemed customers,
              Thank you for your interest in Dr Lal PathLabs.
            </p>
            {/* download button */}
            <div className="flex item-center justify-center space-x-3">
                <img src={bookdownload1} alt="apple-app-store" />
                <img src={bookdownload2} alt="google-play-store" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookDownloadApp;
