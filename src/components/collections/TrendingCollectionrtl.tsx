import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import TredingImage1 from "@/img/tc1.jpg";
import TredingImage2 from "@/img/tc2.jpg";
import TredingImage3 from "@/img/tc3.jpg";
import TredingImage4 from "@/img/tc4.jpg";
import TredingImage5 from "@/img/tc5.jpg";
import TredingImage6 from "@/img/tc6.jpg";
import TredingImage7 from "@/img/tc7.jpg";
import TredingImage8 from "@/img/tc8.jpg";
import avatar from "@/img/icons8-avatar.gif";
import fire from "@/img/icons8-fire.gif";
import Ethereum from "@/img/icons8-ethereum.svg";

const TrendingCollectionrtl = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 100,
    cssEase: "linear",
    rtl: true,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="bg-slate-950 mr-5">
            <Image className="w- h-auto" src={TredingImage1} alt="" />
            <div className="p-4">
              <div className="flex gap-2 items-start mb-2">
                <Image
                  className="w-6 h-6 rounded-full"
                  src={avatar}
                  alt="Avatar"
                />
                <div>
                  <h4 className="text-base font-normal">Monkey ape </h4>
                  <p className="text-sm font-thin">By @JSmith</p>
                </div>
              </div>
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    className="w-6 h-6 rounded-full"
                    src={fire}
                    alt="on sale"
                  />
                  <p className="text-base">on sale</p>
                </div>
                <div className="flex items-start gap-2">
                  <Image
                    className="w-6 h-6 rounded-full"
                    src={Ethereum}
                    alt="Ethereum"
                  />
                  <div>
                    <p className="text-base font-normal">4.89 ETH</p>
                    <p className="text-sm font-thin">($ 654,874.86)</p>
                  </div>
                </div>
              </div>
              <Link
                className="relative mt-2 overflow-hidden block bg-gradient-to-r max-w-52 mx-auto text-center from-indigo-500 via-purple-500 to-pink-500 px-5 py-1 hover:bg-gradient-to-l duration-500 text-base"
                href="/"
              >
                Buy now
                <span
                  className="w-0 h-0 
                      border-t-[15px] border-t-transparent
                      border-l-[15px] border-l-gray-950
                      border-b-[15px] border-b-transparent -rotate-45 -right-2 -top-[15px] absolute"
                ></span>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-black mr-5">
            <Image className="w- h-auto" src={TredingImage2} alt="" />
            <div className="p-4">
              <div className="flex gap-2 items-start mb-2">
                <Image
                  className="w-6 h-6 rounded-full"
                  src={avatar}
                  alt="Avatar"
                />
                <div>
                  <h4 className="text-base font-normal">Monkey ape </h4>
                  <p className="text-sm font-thin">By @JSmith</p>
                </div>
              </div>
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    className="w-6 h-6 rounded-full"
                    src={fire}
                    alt="on sale"
                  />
                  <p className="text-base">on sale</p>
                </div>
                <div className="flex items-start gap-2">
                  <Image
                    className="w-6 h-6 rounded-full"
                    src={Ethereum}
                    alt="Ethereum"
                  />
                  <div>
                    <p className="text-base font-normal">4.89 ETH</p>
                    <p className="text-sm font-thin">($ 654,874.86)</p>
                  </div>
                </div>
              </div>
              <Link
                className="relative mt-2 overflow-hidden block bg-gradient-to-r max-w-52 mx-auto text-center from-indigo-500 via-purple-500 to-pink-500 px-5 py-1 hover:bg-gradient-to-l duration-500 text-base"
                href="/"
              >
                Buy now
                <span
                  className="w-0 h-0 
                      border-t-[15px] border-t-transparent
                      border-l-[15px] border-l-gray-950
                      border-b-[15px] border-b-transparent -rotate-45 -right-2 -top-[15px] absolute"
                ></span>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-black mr-5">
            <Image className="w- h-auto" src={TredingImage3} alt="" />
            <div className="p-4">
              <div className="flex gap-2 items-start mb-2">
                <Image
                  className="w-6 h-6 rounded-full"
                  src={avatar}
                  alt="Avatar"
                />
                <div>
                  <h4 className="text-base font-normal">Monkey ape </h4>
                  <p className="text-sm font-thin">By @JSmith</p>
                </div>
              </div>
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    className="w-6 h-6 rounded-full"
                    src={fire}
                    alt="on sale"
                  />
                  <p className="text-base">on sale</p>
                </div>
                <div className="flex items-start gap-2">
                  <Image
                    className="w-6 h-6 rounded-full"
                    src={Ethereum}
                    alt="Ethereum"
                  />
                  <div>
                    <p className="text-base font-normal">4.89 ETH</p>
                    <p className="text-sm font-thin">($ 654,874.86)</p>
                  </div>
                </div>
              </div>
              <Link
                className="relative mt-2 overflow-hidden block bg-gradient-to-r max-w-52 mx-auto text-center from-indigo-500 via-purple-500 to-pink-500 px-5 py-1 hover:bg-gradient-to-l duration-500 text-base"
                href="/"
              >
                Buy now
                <span
                  className="w-0 h-0 
                      border-t-[15px] border-t-transparent
                      border-l-[15px] border-l-gray-950
                      border-b-[15px] border-b-transparent -rotate-45 -right-2 -top-[15px] absolute"
                ></span>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-black mr-5">
            <Image className="w- h-auto" src={TredingImage4} alt="" />
            <div className="p-4">
              <div className="flex gap-2 items-start mb-2">
                <Image
                  className="w-6 h-6 rounded-full"
                  src={avatar}
                  alt="Avatar"
                />
                <div>
                  <h4 className="text-base font-normal">Monkey ape </h4>
                  <p className="text-sm font-thin">By @JSmith</p>
                </div>
              </div>
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    className="w-6 h-6 rounded-full"
                    src={fire}
                    alt="on sale"
                  />
                  <p className="text-base">on sale</p>
                </div>
                <div className="flex items-start gap-2">
                  <Image
                    className="w-6 h-6 rounded-full"
                    src={Ethereum}
                    alt="Ethereum"
                  />
                  <div>
                    <p className="text-base font-normal">4.89 ETH</p>
                    <p className="text-sm font-thin">($ 654,874.86)</p>
                  </div>
                </div>
              </div>
              <Link
                className="relative mt-2 overflow-hidden block bg-gradient-to-r max-w-52 mx-auto text-center from-indigo-500 via-purple-500 to-pink-500 px-5 py-1 hover:bg-gradient-to-l duration-500 text-base"
                href="/"
              >
                Buy now
                <span
                  className="w-0 h-0 
                      border-t-[15px] border-t-transparent
                      border-l-[15px] border-l-gray-950
                      border-b-[15px] border-b-transparent -rotate-45 -right-2 -top-[15px] absolute"
                ></span>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-black mr-5">
            <Image className="w- h-auto" src={TredingImage5} alt="" />
            <div className="p-4">
              <div className="flex gap-2 items-start mb-2">
                <Image
                  className="w-6 h-6 rounded-full"
                  src={avatar}
                  alt="Avatar"
                />
                <div>
                  <h4 className="text-base font-normal">Monkey ape </h4>
                  <p className="text-sm font-thin">By @JSmith</p>
                </div>
              </div>
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    className="w-6 h-6 rounded-full"
                    src={fire}
                    alt="on sale"
                  />
                  <p className="text-base">on sale</p>
                </div>
                <div className="flex items-start gap-2">
                  <Image
                    className="w-6 h-6 rounded-full"
                    src={Ethereum}
                    alt="Ethereum"
                  />
                  <div>
                    <p className="text-base font-normal">4.89 ETH</p>
                    <p className="text-sm font-thin">($ 654,874.86)</p>
                  </div>
                </div>
              </div>
              <Link
                className="relative mt-2 overflow-hidden block bg-gradient-to-r max-w-52 mx-auto text-center from-indigo-500 via-purple-500 to-pink-500 px-5 py-1 hover:bg-gradient-to-l duration-500 text-base"
                href="/"
              >
                Buy now
                <span
                  className="w-0 h-0 
                      border-t-[15px] border-t-transparent
                      border-l-[15px] border-l-gray-950
                      border-b-[15px] border-b-transparent -rotate-45 -right-2 -top-[15px] absolute"
                ></span>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-black mr-5">
            <Image className="w- h-auto" src={TredingImage6} alt="" />
            <div className="p-4">
              <div className="flex gap-2 items-start mb-2">
                <Image
                  className="w-6 h-6 rounded-full"
                  src={avatar}
                  alt="Avatar"
                />
                <div>
                  <h4 className="text-base font-normal">Monkey ape </h4>
                  <p className="text-sm font-thin">By @JSmith</p>
                </div>
              </div>
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    className="w-6 h-6 rounded-full"
                    src={fire}
                    alt="on sale"
                  />
                  <p className="text-base">on sale</p>
                </div>
                <div className="flex items-start gap-2">
                  <Image
                    className="w-6 h-6 rounded-full"
                    src={Ethereum}
                    alt="Ethereum"
                  />
                  <div>
                    <p className="text-base font-normal">4.89 ETH</p>
                    <p className="text-sm font-thin">($ 654,874.86)</p>
                  </div>
                </div>
              </div>
              <Link
                className="relative mt-2 overflow-hidden block bg-gradient-to-r max-w-52 mx-auto text-center from-indigo-500 via-purple-500 to-pink-500 px-5 py-1 hover:bg-gradient-to-l duration-500 text-base"
                href="/"
              >
                Buy now
                <span
                  className="w-0 h-0 
                      border-t-[15px] border-t-transparent
                      border-l-[15px] border-l-gray-950
                      border-b-[15px] border-b-transparent -rotate-45 -right-2 -top-[15px] absolute"
                ></span>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-black mr-4">
            <Image className="w- h-auto" src={TredingImage7} alt="" />
            <div className="p-4">
              <div className="flex gap-2 items-start mb-2">
                <Image
                  className="w-6 h-6 rounded-full"
                  src={avatar}
                  alt="Avatar"
                />
                <div>
                  <h4 className="text-base font-normal">Monkey ape </h4>
                  <p className="text-sm font-thin">By @JSmith</p>
                </div>
              </div>
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    className="w-6 h-6 rounded-full"
                    src={fire}
                    alt="on sale"
                  />
                  <p className="text-base">on sale</p>
                </div>
                <div className="flex items-start gap-2">
                  <Image
                    className="w-6 h-6 rounded-full"
                    src={Ethereum}
                    alt="Ethereum"
                  />
                  <div>
                    <p className="text-base font-normal">4.89 ETH</p>
                    <p className="text-sm font-thin">($ 654,874.86)</p>
                  </div>
                </div>
              </div>
              <Link
                className="relative mt-2 overflow-hidden block bg-gradient-to-r max-w-52 mx-auto text-center from-indigo-500 via-purple-500 to-pink-500 px-5 py-1 hover:bg-gradient-to-l duration-500 text-base"
                href="/"
              >
                Buy now
                <span
                  className="w-0 h-0 
                      border-t-[15px] border-t-transparent
                      border-l-[15px] border-l-gray-950
                      border-b-[15px] border-b-transparent -rotate-45 -right-2 -top-[15px] absolute"
                ></span>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-black mr-4">
            <Image className="w- h-auto" src={TredingImage8} alt="" />
            <div className="p-4">
              <div className="flex gap-2 items-start mb-2">
                <Image
                  className="w-6 h-6 rounded-full"
                  src={avatar}
                  alt="Avatar"
                />
                <div>
                  <h4 className="text-base font-normal">Monkey ape </h4>
                  <p className="text-sm font-thin">By @JSmith</p>
                </div>
              </div>
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    className="w-6 h-6 rounded-full"
                    src={fire}
                    alt="on sale"
                  />
                  <p className="text-base">on sale</p>
                </div>
                <div className="flex items-start gap-2">
                  <Image
                    className="w-6 h-6 rounded-full"
                    src={Ethereum}
                    alt="Ethereum"
                  />
                  <div>
                    <p className="text-base font-normal">4.89 ETH</p>
                    <p className="text-sm font-thin">($ 654,874.86)</p>
                  </div>
                </div>
              </div>
              <Link
                className="relative mt-2 overflow-hidden block bg-gradient-to-r max-w-52 mx-auto text-center from-indigo-500 via-purple-500 to-pink-500 px-5 py-1 hover:bg-gradient-to-l duration-500 text-base"
                href="/"
              >
                Buy now
                <span
                  className="w-0 h-0 
                      border-t-[15px] border-t-transparent
                      border-l-[15px] border-l-gray-950
                      border-b-[15px] border-b-transparent -rotate-45 -right-2 -top-[15px] absolute"
                ></span>
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default TrendingCollectionrtl;
