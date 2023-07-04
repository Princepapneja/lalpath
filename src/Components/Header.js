import React from "react";
import MobileNavbar from "./MobileNavbar";
import NavbarHeader1 from "./NavbarHeader1";
import NavbarHeader2 from "./NavbarHeader2";

const Header = () => {
  return (
    <>
      <NavbarHeader1 />
      <NavbarHeader2 
        lists={{ 
          list1: "Book a Test",
          list2: "Nearest center", 
          list3: "Download Report", 
          list4: "Special Programs", 
          list5: "Promotions & Discounts", 
           }} />
      <MobileNavbar />
    </>
  );
};

export default Header;
