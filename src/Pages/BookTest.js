import React from "react";
import BookCardSection from "../Components/BookCardSection";
import BookDownloadApp from "../Components/BookDownloadApp";
import BookHeader1 from "../Components/BookHeader1";
import BookHeader2 from "../Components/BookHeader2";
import BookPromotion from "../Components/BookPromotion";
import MobileNavbar from "../Components/MobileNavbar";
const BookTest = () => {
  return (
    <>
    <div className="w-full h-full drop-shadow-sm sticky z-50 top-0">
      <BookHeader1 />
      <BookHeader2 />
    </div>
      <MobileNavbar />
      <BookCardSection />
      <BookPromotion />
      <BookDownloadApp />
    </>
  );
};

export default BookTest;
