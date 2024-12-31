import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const HotCollection = (props: {
  HotCollectionTitle: string;
  CharImg: string | StaticImport;
  CharAlt: string;
  AvrSrc: string | StaticImport;
  AvrAlt: string;
  FireIcon: string | StaticImport;
  EthereumImg: string | StaticImport;
  ETHNum: number;
  HotCollectionPrice: number;
  CreatorName: string;
  saleTitle: string;
}) => {
  return (
    <div className="bg-slate-950">
      <Image
        priority={true}
        width={500}
        className="w- h-auto px-4 pt-4"
        src={props.CharImg}
        alt={props.CharAlt}
      />
      <div className="px-4 pt-4 pb-6">
        <div className="flex gap-2 items-start mb-2">
          <Image
            className="w-5 h-5 rounded-full mt-1"
            src={props.AvrSrc}
            alt={props.AvrAlt}
          />
          <div>
            <h4 className="text-base font-normal">
              {props.HotCollectionTitle}
            </h4>
            <p className="text-sm font-thin">{props.CreatorName}</p>
          </div>
        </div>
        <div className="flex items-start justify-between gap-1">
          <div className="flex items-center gap-2">
            <Image
              className="w-5 h-5 rounded-full"
              src={props.FireIcon}
              alt="Fire Icon"
            />
            <p className="text-sm font-thin">{props.saleTitle}</p>
          </div>
          <div className="flex items-start gap-2">
            <Image
              className="w-5 h-5 rounded-full"
              src={props.EthereumImg}
              alt="Ethereum"
            />
            <div>
              <p className="text-sm font-thin">{props.ETHNum} ETH</p>
              <p className="text-sm font-thin">${props.HotCollectionPrice}</p>
            </div>
          </div>
        </div>
        <Link
          className="relative mt-4 overflow-hidden block bg-gradient-to-r max-w-52 mx-auto text-center from-indigo-500 via-purple-500 to-pink-500 px-5 py-2 hover:bg-gradient-to-l duration-500 text-base"
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
  );
};

export default HotCollection;
