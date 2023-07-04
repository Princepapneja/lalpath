import React from "react";
import { AiFillYoutube, AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <FooterTopSection />
      <FooterBottomSection />
    </>
  );
};

// top section
const FooterTopSection = () => {
  return (
    <>
      <section className="primary-bg-color hidden lg:block">
        <div className="container">
          <div className="py-6 text-black  ">
            <div className=" lg:flex gap-5 items-start justify-around ">
              <div className=" ">
                <h1 className="py-2 mb-2 text-lg font-semibold ">PATIENTS</h1>
                <ul className="list-none space-y-1 text-md cursor-pointer ">
                  <li>
                    <Link to="/">Book a Test</Link>
                  </li>
                  <li>
                    <Link to="/">Nearest Centre</Link>
                  </li>
                  <li>
                    <Link to="/">Download Report</Link>
                  </li>
                  <li>
                    <Link to="/">Special Programs</Link>
                  </li>
                  <li>
                    <Link to="/">service</Link>
                  </li>
                  <li>
                    <Link to="/">Download App</Link>
                  </li>
                  <li>
                    <Link to="/">Promotions & Discounts</Link>
                  </li>
                </ul>
              </div>

              <div className="">
                <h1 className="py-2 mb-2 text-lg font-semibold ">DOCTORS</h1>
                <ul className="list-none text-black space-y-1 text-md cursor-pointer ">
                  <li>
                    <Link to="/">Test Menu</Link>
                  </li>
                  <li>
                    <Link to="/">Our Labs</Link>
                  </li>
                  <li>
                    <Link to="/">Events</Link>
                  </li>
                  <li>
                    <Link to="/">Quality</Link>
                  </li>
                  <li>
                    <Link to="/">Resource Center</Link>
                  </li>
                  <li>
                    <Link to="/">Our Departments</Link>
                  </li>
                  <li>
                    <Link to="/">Test Clinical Forms</Link>
                  </li>
                </ul>
              </div>

              <div className=" ">
                <h1 className="py-2 mb-2 text-lg font-semibold ">
                  BUSINESS PARTNERSHIP
                </h1>
                <ul className="list-none text-black space-y-1 text-md cursor-pointer ">
                  <li>
                    <Link to="/">Partner With Us</Link>
                  </li>
                  <li>
                    <Link to="/">Become a Vendor</Link>
                  </li>
                  <li>
                    <Link to="/">Corporate Tie-up</Link>
                  </li>
                  <li>
                    <Link to="/">International Partnership</Link>
                  </li>
                  <li>
                    <Link to="/">Corporate Covid Testing</Link>
                  </li>
                  <li>
                    <Link to="/">Courses</Link>
                  </li>
                </ul>
              </div>

              <div className="">
                <h1 className="py-2 mb-2 text-lg font-semibold ">ABOUT US</h1>
                <ul className="list-none text-black space-y-1 text-md cursor-pointer ">
                  <li>
                    <Link to="/">Our Journey</Link>
                  </li>
                  <li>
                    <Link to="/">Vision, Mission & Values</Link>
                  </li>
                  <li>
                    <Link to="/">Our Team</Link>
                  </li>
                  <li>
                    <Link to="/">Our Network</Link>
                  </li>
                  <li>
                    <Link to="/">Logistics Strength</Link>
                  </li>
                  <li>
                    <Link to="/">CSR</Link>
                  </li>
                  <li>
                    <Link to="/">Career</Link>
                  </li>
                </ul>
              </div>

              <div className="">
                <h1 className="py-2 mb-2 text-lg font-semibold ">INVESTORS</h1>
                <ul className="list-none text-black space-y-1 text-md cursor-pointer ">
                  <li>
                    <Link to="/">Financials</Link>
                  </li>
                  <li>
                    <Link to="/">Investors Information</Link>
                  </li>
                  <li>
                    <Link to="/">Corporate Governance</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// bottom section
const FooterBottomSection = () => {
  return (
    <>
      <section className="bg-[#0047AE]">
        {/* left section */}
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between py-6">
            <div className=" text-white lg:text-lg space-y-3 max-w-4xl">
              <p>2023 © LalPathLabs.com. All rights reserved.</p>
              <p>
                Blog | CSR | Terms of Use | Privacy Policy | Cookie Policy |
                Statutory Compliance | Sitemap
              </p>
              <p>
                Only Pathology reports available online. For X-Ray, Ultrasound,
                ECG, TMT, Echo, PFT, Uroflowmetry reports, please visit the
                concerned center where test has been conducted.
              </p>
            </div>
            {/* icons */}
            <div className=" text-white space-y-3">
              <p className="lg:text-lg">Follow us on:</p>
              <div className="flex items-center space-x-2">
                <FaFacebook
                  size={31}
                  className="fill-[#FDCC4E] mr-0.5 cursor-pointer "
                />
                <AiFillYoutube
                  size={32}
                  className=" text-blue-600 primary-bg-color rounded-full p-1 cursor-pointer"
                />
                <AiFillTwitterCircle
                  size={35}
                  className="fill-[#FDCC4E]  cursor-pointer"
                />
                <TiSocialLinkedinCircular
                  size={33}
                  className="text-blue-600 primary-bg-color rounded-full cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
