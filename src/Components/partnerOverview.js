import React from "react";
import partnerBanner from "../Assets/partnership-banner.webp";
import img1 from "../Assets/introductory-heading-icon-1.png";
import img2 from "../Assets/introductory-heading-icon-2.png";
import img3 from "../Assets/introductory-heading-icon-3.png";
import img4 from "../Assets/introductory-heading-icon-4.png";
import PImg1 from "../Assets/partner-img1.png";
import PImg2 from "../Assets/partner-img2.png";
import PImg3 from "../Assets/partner-img3.png";
import VendorBanner from "../Assets/become-a-vendor.png";
import Wanttodo from "../Assets/want-to-do.png";
import CovidImg from "../Assets/covid.png";
import PickUpImg from "../Assets/Pick-up-Point.png";
import IndependentPhelboImg from "../Assets/Independent-Phlebo.png";
import { Link } from "react-router-dom";

const PartnerOverview = () => {
  return (
    <>
      <section>
        <div
          style={{
            backgroundImage: `url(${partnerBanner})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
          className="mb-5 p-5 h-56 flex items-center "
        >
          <h1 className=" max-w-[150px] inline md:max-w-none w-full  text-zinc-50 text-3xl font-bold">
            Business Partnership
          </h1>
        </div>

        <div className=" container">
          <div className="bg-white flex flex-col m-auto rounded-2xl mb-5">
            <div className="p-2 md:p-8">
              <h1 className="mb-4 text-2xl font-semibold font-sans	">
                Overview
              </h1>
              <p>
                Dr Lal PathLabs is always seeking out for partners, supporters
                with aligned business goals and ideas to bring about a
                meaningful change in healthcare. We invite people to experience
                and learn from our diverse network and know more about our
                expertise, knowledge and legacy that comes with years of
                customer trust and dependence. If you think you can join us and
                help us in our purpose of enabling healthier lives, then here’s
                your chance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="flex p-2 md:p-8 gap-3">
                <img
                  alt=""
                  className="hover:scale-110 duration-300"
                  src={img1}
                ></img>
                <div>
                  <p className="text-3xl font-medium">80+</p>
                  <p>Line Haul Network</p>
                </div>
              </div>
              <div className="flex p-2 md:p-8 gap-3">
                <img
                  alt=""
                  className="hover:scale-110 duration-300"
                  src={img2}
                ></img>
                <div>
                  <p className="text-3xl font-medium">981+</p>
                  <p>on ground field resources</p>
                </div>
              </div>
              <div className="flex p-5 md:p-10 gap-3">
                <img
                  alt=""
                  className="hover:scale-110 duration-300"
                  src={img3}
                ></img>
                <div>
                  <p className="text-3xl font-medium">231</p>
                  <p>Labs supported by logistic operations</p>
                </div>
              </div>
              <div className="flex p-5 md:p-10 gap-3">
                <img
                  alt=""
                  className=" hover:scale-110 duration-300"
                  src={img4}
                ></img>
                <div>
                  <p className="text-3xl font-medium">25</p>
                  <p>Airport locations covered</p>
                </div>
              </div>
            </div>
          </div>

          <div className="partner-overview ">
            <div className="bg-white flex flex-col rounded-2xl p-2 md:p-8 mb-5">
              <div className="">
                <h1 className="mb-4 text-2xl font-semibold font-sans	">
                  Partner With Us
                </h1>
              </div>

              <div className="flex gap-4 justify-between">
                <div className="">
                  <Link to={""} className="cursor-pointer	">
                    <img alt="" src={PImg1}></img>
                  </Link>
                  <p className="text-center mt-2">Become a Franchise</p>
                </div>
                <div className="">
                  <Link to={""} className=" cursor-pointer	">
                    <img alt="" src={PImg2}></img>
                  </Link>
                  <p className="mt-2 text-center">International Partnership</p>
                </div>
                <div className="">
                  <Link to={""} className=" cursor-pointer	">
                    <img alt="" src={PImg3}></img>
                  </Link>
                  <p className="mt-2 text-center">Corporate Tie Up</p>
                </div>
              </div>
            </div>
            <div className="bg-white flex flex-col rounded-2xl p-2 md:p-8 mb-5">
              <img alt="" className="" src={VendorBanner}></img>
              <div className="">
                <p className=" text-black	 text-2xl my-3"> Become a Vendor</p>
                <Link
                  to={""}
                  className=" rounded-md	border-white	font-bold	 border"
                >
                  Read More
                </Link>
              </div>
            </div>

            <div className="bg-white flex flex-col md:flex-row justify-between gap-4 rounded-2xl p-2 md:p-8 mb-5">
              <Link
                to={""}
                className=" p-3 cursor-pointer	 rounded-2xl"
                style={{ boxShadow: "0 0 5px 0 rgb(125 121 121 / 40%)" }}
              >
                <img
                  alt=""
                  className="w-full md:w-[unset]"
                  src={IndependentPhelboImg}
                ></img>
                <p className="text-center">Independent Phlebo</p>
              </Link>
              <Link
                to={""}
                className="p-3 cursor-pointer rounded-2xl"
                style={{ boxShadow: "0 0 5px 0 rgb(125 121 121 / 40%)" }}
              >
                <img
                  alt=""
                  className="w-full md:w-[unset]"
                  src={PickUpImg}
                ></img>
                <p className="text-center">Pick up Point</p>
              </Link>

              <Link
                to={""}
                className="p-3 cursor-pointer	rounded-2xl"
                style={{ boxShadow: "0 0 5px 0 rgb(125 121 121 / 40%)" }}
              >
                <img
                  alt=""
                  className="w-full md:w-[unset]"
                  src={CovidImg}
                ></img>

                <p className="text-center">Corporate Covid Testing</p>
              </Link>
            </div>
          </div>

          <div className="bg-white m-auto rounded-2xl p-2 md:p-8 block mb-5">
            <img alt="" className="" src={Wanttodo}></img>
            <div className="">
              <p className=" text-black	my-2 text-2xl">
                Want To Do Course With Us
              </p>
              <Link to={""} className=" rounded-md	border-white	font-bold	 border">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerOverview;
