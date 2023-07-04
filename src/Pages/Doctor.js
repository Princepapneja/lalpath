import React from "react";
import DocResourceandNews from "../Components/DocResourceandNews";
import DoctorBanner from "../Components/DoctorBanner";
import DoctorDepartment from "../Components/DoctorDepartment";
import DoctorEvents from "../Components/DoctorEvents";
import DoctorFeaturedBlog from "../Components/DoctorFeatureBlog";
import DoctorLabs from "../Components/DoctorLabs";
import DoctorTestMenu from "../Components/DoctorTestMenu";
import Download from "../Components/Download";
import FAQ from "../Components/FAQ";
import Header from "../Components/Header";
import Quality from "../Components/Quality";
import Reachout from "../Components/Reachout";
import Subscribe from "../Components/Subscribe";

const Doctor = () => {
  return (
    <>
      <main className="w-full h-fit bg-[#F1F1F1]">
        <Header />
        <DoctorBanner />
        <DoctorTestMenu />
        <DoctorLabs />
        <DoctorEvents />
        <Quality />
        <DocResourceandNews />
        <DoctorDepartment />
        <Download />
        <DoctorFeaturedBlog />
        <Subscribe />
        <FAQ />
        <Reachout />
      </main>
    </>
  );
};

export default Doctor;
