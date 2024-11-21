"use client";
import Image from "next/image";
import Link from "next/link";
import HeroArt from "@/img/hero.png";
import CountUp from "react-countup";
import AboutUs from "@/img/about.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pbrand from "@/img/wallet-01.png";
import Pbrand2 from "@/img/wallet-02.png";
import Pbrand3 from "@/img/wallet-03.png";
import Pbrand4 from "@/img/wallet-04.png";
import Pbrand5 from "@/img/wallet-05.png";
import Divider from "@/img/divider.png";
import Collections from "@/components/collections/Collections";
import TrendingCollection from "@/components/collections/TrendingCollection";
import TrendingCollectionrtl from "@/components/collections/TrendingCollectionrtl";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Home() {
  const settingsForBrand = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 100,
    cssEase: "linear",
  };

  return (
    <main>
      <section className="py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 px-4 items-center gap-10">
          <div>
            <h1 className="text-4xl font-bold md:text-6xl md:leading-[1.2]">
              High Quality NFT Collection
            </h1>
            <p className="text-xl font-thin max-w-sm leading-relaxed mb-10">
              A 890 piece custom Nerko&rsquo;s collection is joining the NFT
              space on Opensea.
            </p>
            <Link
              className="relative overflow-hidden inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-4 hover:bg-gradient-to-l duration-500 text-lg"
              href="/"
            >
              View in OPENSEA
              <span
                className="w-0 h-0 
                      border-t-[20px] border-t-transparent
                      border-l-[20px] border-l-gray-900
                      border-b-[20px] border-b-transparent -rotate-45 -right-2 -top-[15px] absolute"
              ></span>
            </Link>
            <div className="grid grid-cols-3 gap-10 mt-10">
              <div
                className="relative border border-gray-800 text-center p-4 
                          pt-8 bg-gray-900 shadow-md before:w-1/2 before:h-4 before:border
                        before:bg-gray-900 before:border-t-gray-900 before:border-r-gray-900
                          before:border-b-gray-800 before:border-l-transparent before:absolute 
                          before:-right-[1px] before:-top-[1px]"
              >
                <span className="w-5 h-5 bg-gray-900 border-l border-gray-800 left-1/2 -translate-x-1/2 absolute -top-[10px] -rotate-45"></span>
                <CountUp
                  className="text-3xl mb-2 inline-block"
                  start={0}
                  end={25}
                  duration={2.75}
                  suffix="k"
                />
                <span className="block text-xl font-normal">Our Client</span>
              </div>
              <div
                className="relative border border-gray-800 text-center p-4 
                          pt-8 bg-gray-900 shadow-md before:w-1/2 before:h-4 before:border
                        before:bg-gray-900 before:border-t-gray-900 before:border-r-gray-900
                          before:border-b-gray-800 before:border-l-transparent before:absolute 
                          before:-right-[1px] before:-top-[1px]"
              >
                <span className="w-5 h-5 bg-gray-900 border-l border-gray-800 left-1/2 -translate-x-1/2 absolute -top-[10px] -rotate-45"></span>
                <CountUp
                  className="text-3xl mb-2 inline-block"
                  start={0}
                  end={100}
                  duration={2.75}
                  suffix="k"
                />
                <span className="block text-xl font-normal">Subscriber</span>
              </div>
              <div
                className="relative border border-gray-700 text-center p-4 
                          pt-8 bg-gray-900 shadow-md before:w-1/2 before:h-4 before:border
                        before:bg-gray-900 before:border-t-gray-900 before:border-r-gray-900
                          before:border-b-gray-700 before:border-l-transparent before:absolute 
                          before:-right-[1px] before:-top-[1px]"
              >
                <span className="w-5 h-5 bg-gray-900 border-l border-gray-700 left-1/2 -translate-x-1/2 absolute -top-[10px] -rotate-45"></span>
                <CountUp
                  className="text-3xl mb-2 inline-block"
                  start={0}
                  end={10}
                  duration={2.75}
                  suffix="K"
                />
                <span className="block text-xl font-normal">Charecter</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <DotLottieReact
              className="absolute w-[400px] top-0 right-0"
              src="https://lottie.host/d2a97f71-4af7-48f3-a63f-dbf525ef31ab/jXE3gp74pP.lottie"
              loop
              autoplay
            />
            <Image
              className="max-w-[615px] ml-auto h-auto"
              src={HeroArt}
              priority={true}
              alt="High Quality NFT Collection"
            />
          </div>
        </div>
      </section>

      <section className="pb-24 relative">
        <div className="max-w-5xl mx-auto">
          <Slider {...settingsForBrand}>
            <div>
              <Image
                className="w-auto h-auto"
                src={Pbrand}
                alt="Patner Brand"
              />
            </div>
            <div>
              <Image
                className="w-auto h-auto"
                src={Pbrand2}
                alt="Patner Brand"
              />
            </div>
            <div>
              <Image
                className="w-auto h-auto"
                src={Pbrand3}
                alt="Patner Brand"
              />
            </div>
            <div>
              <Image
                className="w-auto h-auto"
                src={Pbrand4}
                alt="Patner Brand"
              />
            </div>
            <div>
              <Image
                className="w-auto h-auto"
                src={Pbrand5}
                alt="Patner Brand"
              />
            </div>
          </Slider>
        </div>
        <Image
          className="w-auto h-auto absolute bottom-0 left-1/2 -translate-x-1/2"
          src={Divider}
          alt="Patner Brand"
        />
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-bold text-white capitalize">
              Nfthub&apos;s
              <span className="ml-2 bg-gradient-to-r from-blue-600 to-blue-200 bg-clip-text text-transparent">
                Collection
              </span>
            </h2>
          </div>
          <Collections />
        </div>
      </section>

      <section className="py-24 w-full">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-10 items-center">
          <div>
            <Image
              className="w-full h-auto"
              src={AboutUs}
              alt="Why Choose Us"
            />
          </div>
          <div>
            <h2 className="text-5xl mb-5 font-bold">Why choose us ?</h2>
            <p className="text-lg font-thin mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              suscipit, vero enim atque id exercitationem officiis quod
              similique vel adipisci veritatis voluptatibus provident nihil
              fugit, sapiente in consectetur dolor a.
            </p>
            <p className="text-lg font-thin mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              suscipit, vero enim atque id exercitationem officiis quod
              similique vel adipisci veritatis voluptatibus provident nihil
              fugit, sapiente in consectetur dolor a.
            </p>
            <Link
              className="relative overflow-hidden inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-4 hover:bg-gradient-to-l duration-500 text-lg"
              href="/"
            >
              Connect Wallet
              <span
                className="w-0 h-0 
                      border-t-[20px] border-t-transparent
                      border-l-[20px] border-l-gray-900
                      border-b-[20px] border-b-transparent -rotate-45 -right-2 -top-[15px] absolute"
              ></span>
            </Link>
          </div>
        </div>
      </section>
      <section className="pb-24 overflow-x-hidden max-w-[95%] mx-auto -rotate-2">
        <div className="mb-12 ml-auto max-w-xl">
          <span className="text-sm text-white capitalize font-thin mb-5 inline-block">
            most loved NFTs of the time
          </span>
          <h2 className="text-6xl font-bold text-white capitalize">
            <span className="mr-2 bg-gradient-to-r from-blue-600 to-blue-200 bg-clip-text text-transparent">
              Hot trending
            </span>
            nFTs
          </h2>
        </div>
        <TrendingCollection />
        <TrendingCollectionrtl />
      </section>
    </main>
  );
}
