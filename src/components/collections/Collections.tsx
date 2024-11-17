import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Collection1 from "@/img/collection1.png";
import Collection2 from "@/img/collection2.png";
import Collection3 from "@/img/collection3.png";
import Collection4 from "@/img/collection4.png";
import Collection5 from "@/img/collection5.png";
import Collection6 from "@/img/collection6.png";

const Collections = () => {
  const settings = {
    arrows: false,
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className="relative ml-4 mr-4">
            <div className="bg-gradient-to-r from-slate-800 to-blue-950 absolute w-full h-[70%] left-0 bottom-0 -z-10"></div>
            <Image
              className="w-full max-h-[500px] object-cover object-top"
              src={Collection1}
              alt="Nft Collection"
            />
          </div>
          <div className="ml-4 mr-4 mt-5">
            <h4 className="text-lg font-medium text-white">
              Our Nft Collection
            </h4>
          </div>
        </div>
        <div>
          <div className="relative ml-4 mr-4">
            <div className="bg-gradient-to-r from-slate-800 to-blue-950 absolute w-full h-[70%] left-0 bottom-0 -z-10"></div>
            <Image
              className="w-full max-h-[500px] object-cover object-top"
              src={Collection2}
              alt="Nft Collection"
            />
          </div>
          <div className="ml-4 mr-4 mt-4">
            <h4 className="text-lg font-medium text-white">
              Our Nft Collection
            </h4>
          </div>
        </div>
        <div>
          <div className="relative ml-4 mr-4">
            <div className="bg-gradient-to-r from-slate-800 to-blue-950 absolute w-full h-[70%] left-0 bottom-0 -z-10"></div>
            <Image
              className="w-full max-h-[500px] object-cover object-top"
              src={Collection3}
              alt="Nft Collection"
            />
          </div>
          <div className="ml-4 mr-4 mt-4">
            <h4 className="text-lg font-medium text-white">
              Our Nft Collection
            </h4>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Collections;
