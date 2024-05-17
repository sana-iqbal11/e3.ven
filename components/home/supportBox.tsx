/* eslint-disable @next/next/no-img-element */
"use client";

import ImageBox from "../shared/imageBox";
import SupportBoxSVG from "../svg/supportBoxSVG";
import card from "../../public/images/card1.png"
import Image from "next/image";
interface Props {
  icon: string;
  title: string;
  text: string;
  secondtitle: string;
  number?: number;
  mobileicon: string;
}

const SupportBox = ({ icon, title, text, secondtitle, mobileicon }: Props) => {
  return (
    <>
      <div className="relative w-full">
        <div
          className="absolute inset-0 card  border-0 border-gray/20 rounded-2xl hello"
          id="svgs"
        ></div>

        <div
          className="absolute card inset-[-10px] mix-blend-color-dodge bg-no-repeat bg-contain bg-right"
          style={{ backgroundImage: `url('/images/large-gradient.png')` }}
        ></div>
        <img src={icon} alt="card" className="laptop:scale-100 scale-105 w-full h-full 
         laptop:translate-x-0 translate-x-3" />

        <div className={`relative card z-50 row-span-2`}>
          <img
            src={icon}
            alt="icon"
            className="max-w-full object-contain w-[20%]"
          />
        </div>
        <p className="xl:text-3xl card lg:text-lg text-base xl:mb-4 lg:mb-2 relative z-50 laptop:text-normal row-span-1  text-white">
          {title} <br /> {secondtitle}{" "}
        </p>
        <p className="xl:text-xl  card lg:text-sm text-sm font-light opacity-[0.8] text-white row-span-2">
          {text}
        </p>

        
      </div>
    </>
  );
};

export default SupportBox;
