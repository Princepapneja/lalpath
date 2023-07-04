import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Accreditation from "../Components/Accreditation";
import Banner from "../Components/Banner";
import BlueTopSection from "../Components/BlueTopSection";
import CorporateCards from "../Components/CorporateCards";
import Download from "../Components/Download";
import ExploreMore from "../Components/ExploreMore";
import FAQ from "../Components/FAQ";
import Featuredblog from "../Components/Featuredblog";
import PopularTests from "../Components/PopularTests";
import Promotions from "../Components/Promotions";
import Quality from "../Components/Quality";
import SearchTest from "../Components/SearchTest";
import SpecialPrograms from "../Components/SpecialPrograms";
import WhyDrLalpath from "../Components/WhyDrLalpath";
import BookingModal from "../Modals/BookingModal";
import LetsChat from "../Modals/LetsChat";

const Home = () => {
  // UseState For logIn Modal
  const [showPopup, setShowPopup] = useState(false);
  // UseState For popup button
  const [showButtonPopup, setShowButtonPopup] = useState(false);

  // useEffect For logIn Modal
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  // useEffect For popup button
  useEffect(() => {
    const buttontimeout = setTimeout(() => {
      setShowButtonPopup(true);
    }, 20000);
    return () => clearTimeout(buttontimeout);
  }, []);

  return (
    <>
      <main className="bg-[#F1F1F1] w-[100%] h-auto">
        {showPopup && <BookingModal closeModal={setShowPopup} />}
        <Header />
        <Banner />
        <BlueTopSection />
        <SpecialPrograms />
        <PopularTests />
        <SearchTest />
        <WhyDrLalpath />
        <Promotions />
        <ExploreMore />
        <CorporateCards />
        <Quality />
        <Accreditation />
        <Download />
        <Featuredblog />
        <FAQ />

        {showButtonPopup && <LetsChat closeModal={setShowButtonPopup} />}
      </main>
    </>
  );
};

export default Home;
