/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import "../../styles/home.css";
import Chip from "../shared/chip";
import ColoredSpan from "../shared/coloredSpan";
import HeadingDescription from "../shared/headingDescription";
import HeadingTitle from "../shared/headingTitle";
import SectionTitle from "../shared/sectionTitle";
import CardSection from "./CardSection";
import Link from "next/link";

interface BoxProps {
  title: string;
  subtitle: string;
  order: boolean;
}

interface CircleProps {
  icon: string;
  order: boolean;
}

const WhatWeDoSection = () => {
  const boxes = [
    {
      title: "Discovery",
      icon: "/icons/whatWeDo-icon1.png",
      order: 0,
      subtitle:
        "Let's work together to understand your vision, identify challenges, and define your roadmap to success.",
    },
    {
      title: "circle",
      icon: "/icons/whatWeDo-icon1.png",
      order: 0,
      subtitle:
        "Let's work together to understand your vision, identify challenges, and define your roadmap to success.",
    },
    {
      title: "Building",
      icon: "/icons/whatWeDo-icon2.png",
      order: 1,
      subtitle:
        "Craft a winning business plan, develop a minimum viable product (MVP), and validate your concept.",
    },
    {
      title: "circle",
      icon: "/icons/whatWeDo-icon2.png",
      order: 1,
      subtitle:
        "Let's work together to understand your vision, identify challenges, and define your roadmap to success.",
    },
    {
      title: "Launch",
      icon: "/icons/whatWeDo-icon3.png",
      order: 2,
      subtitle:
        "Go to market with a strategic plan, achieve product-market fit, and make a splash",
    },
    {
      title: "circle",
      icon: "/icons/whatWeDo-icon3.png",
      order: 2,
      subtitle:
        "Let's work together to understand your vision, identify challenges, and define your roadmap to success.",
    },
    {
      title: "Scale & Growth",
      icon: "/icons/whatWeDo-icon4.png",
      order: 3,
      subtitle:
        "Optimize your operations, refine your strategy, and propel your business towards sustainable growth.",
    },
  ];

  return (
    <section className="relative" style={{ backgroundImage: `url('/images/noise.png')` }}
    >
      <Chip>Process</Chip>

      <SectionTitle className="w-[343px] laptop:w-[430px]">
        <ColoredSpan className="text-white">What We</ColoredSpan>
        <ColoredSpan className="text-orange"> Do</ColoredSpan>
      </SectionTitle>

      <HeadingDescription className="w-[343px] laptop:w-[474px] mb-[40px] laptop:pb-32 text-[18px] laptop:text-[19px]">
        From Discovery to Scale, Guiding You Through Every Stage of
        Entrepreneurial Success
      </HeadingDescription>

      <div className="relative flex flex-col items-center laptop:gap-32 max-w-7xl">
        <div
          className="absolute inset-[-112px]  
        mix-blend-color-dodge bg-no-repeat bg-contain laptop:block hidden
        "
          style={{
            backgroundImage: `url('/images/large-gradient.png')`,
            backgroundPosition: "50%",
            height: "54%",
          }}
        ></div>
        <div
          className="absolute inset-[153px]  
        mix-blend-color-dodge bg-no-repeat bg-contain 
        laptop:block hidden
        "
          style={{
            backgroundImage: `url('/images/large-gradient.png')`,
            backgroundPosition: "bottom",
            height: "104%",
          }}
        ></div>
        <div className="laptop:block hidden h-[85%] w-[4px] bg-white/10 absolute left-1/2 -translate-x-1/2 top-[2px]" />
        {boxes.map(({ icon, subtitle, title, order }, index) => {
          const left = [0, 4, 5, 7].includes(index);
          return title !== "circle" ? (
            <div
              key={index}
              className={`laptop:grid grid-cols-10  laptop:items-start  flex-col-reverse flex items-center`}
            >
              <div
                className={`relative laptop:border-t-0 border-[1px] rounded-[20px] bg-purple/20 shadow-2xl border-gray/20 ${
                  left
                    ? "laptop:order-3 laptop:border-b-[1px] laptop:border-l-[1px] laptop:border-r-0"
                    : "laptop:border-b-[1px] laptop:border-r-[1px] laptop:border-l-0"
                } col-span-4`}
              >
                <CardSection title={title} subtitle={subtitle} />
              </div>
              <div
                className={`flex laptop:items-start laptop:flex-row flex-col col-span-2 laptop:pt-3  ${
                  left && "laptop:order-2"
                }`}
              >
                <div
                  className="laptop:h-[3px] h-[4.5rem] laptop:w-[1px] 
                        w-[2px] laptop:flex-auto bg-white/15"
                />
                <div
                  className={`relative rounded-full  z-10 laptop:block hidden h-6 aspect-square 
                        border-[3px] border-white/10 -translate-y-1/2 ${left ? "bg-purple":"bg-purple"}`}
                />
                <div
                  className="laptop:h-[3px] h-[4.5rem] laptop:w-[1px] w-[2px] laptop:flex-1
                         bg-white/10"
                />
              </div>
              <div
                className={`flex relative col-span-4 mt-3 ${
                  left && "laptop:order-1 justify-end"
                }`}
              >
                <div
                  className={`relative flex items-center justify-center w-[153px] rounded-full
                         border-gray/20 border aspect-square bg-white/10  laptop:-translate-y-1/2 `}
                >
                  <img
                    src={icon}
                    alt="icon"
                    className={` col-span-1 ${
                      left ? "left-[-70%]" : "right-[-70%]"
                    }`}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div
              key={index}
              className={`laptop:hidden grid-cols-3 laptop:items-start  flex-col-reverse flex items-center`}
            >
              <div
                className={`flex laptop:items-start laptop:flex-row flex-col col-span-1 laptop:pt-3 items-center ${
                  left && "laptop:order-2"
                }`}
              >
                <div className="laptop:h-[2px] h-[4.5rem] laptop:w-auto w-[2px] laptop:flex-1 bg-white/20" />
                <div className="rounded-full   h-5 aspect-square border-2 border-white/20 translate-x-[0px]" />
                <div className="laptop:h-[2px] mb-[-13px] h-[4.5rem] laptop:w-auto w-[2px] laptop:flex-1 bg-white/20" />
              </div>
            </div>
          );
        })}
      </div>
      <Link href='/process' >
      <div className="relative  border-0 bg-[#fe9602] hover:bg-lightYellow rounded-lg mt-9
       px-[15px] py-[5px] text-[14px] text-[#ffffffdd]">
        Explore Our Process
      </div>
      </Link>
    </section>
  );
};

export default WhatWeDoSection;
