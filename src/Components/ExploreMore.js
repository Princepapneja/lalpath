import React from "react";
import { ExploreMoreData } from "../Assets/data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ExploreMore = () => {
  return (
    <>
      <section className=" hidden md:block h-auto p-8 lg:px-14">
        <div className="border-2 shadow-md mx-auto bg-white p-8 rounded-lg">
            <Carousel autoPlay infiniteLoop interval={5000} showStatus={false} showThumbs={false} showArrows={false} transitionTime={2000}>
                {ExploreMoreData.map((item, index) =>(
                <div key={index} className="w-full h-24 sm:h-32 md:h-52 lg:h-80 ">
                    <div className="w-full absolute ">
                        <img className=" w-full h-24 sm:h-32 md:h-52 lg:h-full  object-contain md:object-fit lg:object-cover xl:object-fill mix-blend-overlay " src={item.img} alt="ExploreImages" />
                    </div>
                </div>
                ))}
            </Carousel>
        </div>
      </section>
    </>
  );
};

export default ExploreMore;
