/* eslint-disable @next/next/no-img-element */
"use client";

import { url } from "inspector";
import "../../styles/home.css";
import Chip from "../shared/chip";
import ColoredSpan from "../shared/coloredSpan";
import HeadingDescription from "../shared/headingDescription";
import HeadingTitle from "../shared/headingTitle";
import SectionTitle from "../shared/sectionTitle";

const WhySection = () => {
  const Tick = () => (
    <div className="flex items-center justify-center border-0 rounded-full p-1  bg-brown  mt-[5px]">
      <img
        src="/icons/tick.png"
        alt="tick"
        className="sm:w-[12px] sm:h-[12px] w-[14px] h-[14px]"
      />
    </div>
  );

  const Title = ({ text }: { text: string }) => (
    <p className="mr-auto text-xl ml-3 font-[300]">{text} </p>
  );
  const SubTitle = ({ text }: { text: string }) => (
    <p className="mr-auto text-sm font-[300] ml-3">{text}</p>
  );

  return (
    <section className="relative w-full" style={{ backgroundImage: `url('/images/noise.png')` }}>
       <div
          className="absolute laptop:inset-[-55px] inset-[-143px] z-[5] 
        mix-blend-color-dodge bg-no-repeat bg-contain bg-center laptop:block hidden"
          style={{ backgroundImage: `url('/images/large-gradient.png')` }}
        ></div>
      <Chip>Feature</Chip>
      <SectionTitle className="w-[343px] laptop:w-[430px]">
        <ColoredSpan className="text-white">Why</ColoredSpan>
        <ColoredSpan className="text-orange"> Choose </ColoredSpan>
        <ColoredSpan className="text-white">Us</ColoredSpan>
      </SectionTitle>

      <HeadingDescription className="w-full sm:w-[443px] laptop:w-[574px] mb-[40px] text-[18px] laptop:text-[19px]">
        Elevating Your Entrepreneurial Journey with a Proven Track Record,
        Experienced Team, and Supportive Ecosystem
      </HeadingDescription>
      <div
        className="relative border py-3  border-gray/20 shadow-md w-full rounded-[18px]
         pl-7 bg-no-repeat laptop:pr-0 pr-3   pb-4 max-w-7xl"
      >
       
        <div className="relative grid laptop:grid-cols-12 grid-cols-1 items-center z-10">
        <div
          className="absolute laptop:inset-[173px] inset-[-143px] z-[5] 
        mix-blend-color-dodge bg-no-repeat bg-contain bg-center laptop:hidden block"
          style={{ backgroundImage: `url('/images/large-gradient.png')` }}
        ></div>
          <div className="col-span-8 laptop:order-1 order-2">
            <div className="grid grid-cols-12 gap-y-8 text-white">
              <div className="col-span-1 laptop:w-5 sm:w-5 w-6">
                <Tick />
              </div>
              <div className="col-span-11 xl:ml-[-35px]">
                <Title text="Proven Track Record:" />
                <SubTitle text="We boast a history of empowering startups to achieve remarkable success." />
              </div>
              <div className="col-span-1 laptop:w-5 sm:w-5 w-6">
                <Tick />
              </div>
              <div className="col-span-11 xl:ml-[-35px]">
                <Title text="Experienced & Dedicated Team: " />
                <SubTitle text="Our team of passionate experts is dedicated to your entrepreneurial journey." />
              </div>

              <div className="col-span-1 laptop:w-5 sm:w-5 w-6">
                <Tick />
              </div>
              <div className="col-span-11 xl:ml-[-35px]">
                <Title text="Collaborative & Supportive Ecosystem:" />
                <SubTitle text="Join a vibrant network of mentors, investors, and fellow entrepreneurs." />
              </div>
            </div>
          </div>
          <div className="flex laptop:justify-start justify-center col-span-4 h-auto laptop:order-2 order-1">
            <img src="/icons/logo.png" alt="logo" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
