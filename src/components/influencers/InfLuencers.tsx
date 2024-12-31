import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdVerified } from "react-icons/md";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

const InfLuencers = (props:{
  infImage: string | StaticImport;
  InfAvt: string | StaticImport;
  InfAvtName: string;
  InfAvtUser: string;
}) => {
  return (
    <div className="bg-slate-950">
    <div className="p-4">
      <Image src={props.infImage} alt="Our influencers" />
      <Image
        className="w-16 h-16 mx-auto -mt-8"
        src={props.InfAvt}
        alt="Our influencers"
      />
    </div>
    <div className="grid grid-cols-2 gap-2 p-4 items-center">
      <div>
        <h4 className="text-base font-normal flex items-center gap-2">
          {props.InfAvtName}
          <span>
            <MdVerified className="text-blue-600" />
          </span>
        </h4>
        <p className="text-sm font-thin">{props.InfAvtUser}</p>
      </div>
      <Link
        className="relative overflow-hidden w-full block bg-gradient-to-r text-center from-indigo-500 via-purple-500 to-pink-500 py-2 hover:bg-gradient-to-l duration-500 text-sm"
        href="/"
      >
        Follow now
        <span
          className="w-0 h-0 
              border-t-[15px] border-t-transparent
              border-l-[15px] border-l-gray-950
              border-b-[15px] border-b-transparent -rotate-45 -right-2 -top-[15px] absolute">

        </span>
      </Link>
    </div>
  </div>
  )
}

export default InfLuencers;