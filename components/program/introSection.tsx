/* eslint-disable @next/next/no-img-element */
"use client";
import "../../styles/home.css";
import React from "react";
import ContainedButton from "../shared/containedButton";
import HeadingTitle from "../shared/headingTitle";
import HeadingDescription from "../shared/headingDescription";
import ColoredSpan from "../shared/coloredSpan";
import Header from "../base/header";
import Link from "next/link";
interface IntroSectionProps {
  buttonText: string;
  linkHref: string;
  targetblank: string;
}

const IntroSection: React.FC<IntroSectionProps> = ({
  buttonText,
  linkHref,
  targetblank,
}) => {
  return (
    <section
      id="program-intro"
      className="pt-[0px] pb-[0px] mb-[60px] xlaptop:mb-[0px] xl:px-0 px-5 "
    >
      <Header />

      <HeadingDescription className=" mt-[100px] xlaptop:mt-[100px] flex items-center gap-2 w-full text-white/90 max-w-7xl text-start mb-[32px] xlaptop:mb-[22px] text-[18px] xlaptop:text-[19px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M11.999 1.3335V2.66683M3.99902 1.3335V2.66683"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.99668 8.66699H8.00267M7.99668 11.3337H8.00267M10.6604 8.66699H10.6663M5.33301 8.66699H5.33899M5.33301 11.3337H5.33899"
            stroke="white"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.33301 5.3335H13.6663"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.66602 8.16216C1.66602 5.25729 1.66602 3.80486 2.50076 2.90243C3.33551 2 4.67901 2 7.36602 2H8.63268C11.3197 2 12.6632 2 13.4979 2.90243C14.3327 3.80486 14.3327 5.25729 14.3327 8.16216V8.5045C14.3327 11.4094 14.3327 12.8618 13.4979 13.7642C12.6632 14.6667 11.3197 14.6667 8.63268 14.6667H7.36602C4.67901 14.6667 3.33551 14.6667 2.50076 13.7642C1.66602 12.8618 1.66602 11.4094 1.66602 8.5045V8.16216Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.99902 5.3335H13.999"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Applications closing on 15th June
      </HeadingDescription>
      <HeadingTitle
        className="
                    w-full mb-[40px] xlaptop:mb-[24px] text-start max-w-7xl leading-[45px]"
      >
        <ColoredSpan className="text-white text-[44px]">
          Startup Acceleration <br></br>{" "}
        </ColoredSpan>
        <ColoredSpan className=" text-white text-[44px]">Program</ColoredSpan>
      </HeadingTitle>

      <HeadingDescription className="w-full text-white/90 max-w-7xl -mt-3 text-start mb-[32px] xlaptop:mb-[22px] text-[18px] xlaptop:text-[19px]">
        Launch and Grow Your Business in Saudi Arabia
      </HeadingDescription>
      <div className="md:flex hidden justify-start flex-col w-full max-w-7xl mb-7">
        <div className="flex w-[65%] xl:w-[49%] lg:w-[55%] justify-between bg-purple/70 border border-gray/20 p-6 rounded-lg">
          <p className="flex items-center gap-2 text-white/70 font-light text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M9.66634 5.99967C9.66634 6.92015 8.92015 7.66634 7.99967 7.66634C7.0792 7.66634 6.33301 6.92015 6.33301 5.99967C6.33301 5.0792 7.0792 4.33301 7.99967 4.33301C8.92015 4.33301 9.66634 5.0792 9.66634 5.99967Z"
                stroke="white"
              />
              <path
                d="M12.1475 11.333C13.0772 12.6586 13.5219 13.3646 13.257 13.933C13.2304 13.99 13.1993 14.045 13.1639 14.0975C12.7809 14.6663 11.791 14.6663 9.8112 14.6663H6.1875C4.20769 14.6663 3.21778 14.6663 2.83476 14.0975C2.79938 14.045 2.76828 13.99 2.74171 13.933C2.47681 13.3646 2.92152 12.6586 3.8512 11.333"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.83794 11.6621C8.61309 11.8786 8.31255 11.9997 7.99978 11.9997C7.687 11.9997 7.38646 11.8786 7.16161 11.6621C5.10254 9.66686 2.34313 7.43803 3.68881 4.20216C4.41641 2.45256 6.16297 1.33301 7.99978 1.33301C9.83658 1.33301 11.5831 2.45256 12.3107 4.20216C13.6547 7.43395 10.9021 9.67374 8.83794 11.6621Z"
                stroke="white"
              />
            </svg>
            Cairo & Riyadh
          </p>
          <p className="flex items-center gap-2 text-white/70 font-light text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_872_7762)">
                <circle cx="8.00065" cy="8.00016" r="6.66667" stroke="white" />
                <path
                  d="M8.00098 5.3335V8.00016L9.33431 9.3335"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_872_7762">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            01 May
          </p>
          <p className="flex items-center gap-2 text-white/70 font-light text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4.66602 5.58604H7.66602M11.3327 5.58604H9.66602M7.66602 5.58604H9.66602M7.66602 5.58604V4.6665M9.66602 5.58604C9.31436 6.84358 8.57796 8.03232 7.73744 9.07701M5.59459 11.3332C6.27405 10.7084 7.04144 9.94208 7.73744 9.07701M7.73744 9.07701C7.30887 8.57455 6.70887 7.76159 6.53744 7.39378M7.73744 9.07701L9.02316 10.4136"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.66602 7.99984C1.66602 5.01428 1.66602 3.52149 2.59351 2.594C3.52101 1.6665 5.01379 1.6665 7.99935 1.6665C10.9849 1.6665 12.4777 1.6665 13.4052 2.594C14.3327 3.52149 14.3327 5.01428 14.3327 7.99984C14.3327 10.9854 14.3327 12.4782 13.4052 13.4057C12.4777 14.3332 10.9849 14.3332 7.99935 14.3332C5.01379 14.3332 3.52101 14.3332 2.59351 13.4057C1.66602 12.4782 1.66602 10.9854 1.66602 7.99984Z"
                stroke="white"
              />
            </svg>
            Arabic
          </p>
          <p className="flex items-center gap-2 text-white/70 font-light text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8.66573 4.66699H7.33492C5.42163 4.66699 4.13167 6.71305 4.88535 8.55234C4.99033 8.80856 5.23121 8.97468 5.49774 8.97468H5.96639C6.12436 8.97468 6.26205 9.08713 6.30036 9.24741L6.90369 11.7715C7.0295 12.2978 7.48163 12.667 8.00033 12.667C8.51902 12.667 8.97115 12.2978 9.09696 11.7715L9.70029 9.24741C9.7386 9.08713 9.87629 8.97468 10.0343 8.97468H10.5029C10.7694 8.97468 11.0103 8.80856 11.1153 8.55234C11.869 6.71305 10.579 4.66699 8.66573 4.66699Z"
                stroke="white"
              />
              <path
                d="M9.66732 3.00016C9.66732 3.92064 8.92113 4.66683 8.00065 4.66683C7.08018 4.66683 6.33398 3.92064 6.33398 3.00016C6.33398 2.07969 7.08018 1.3335 8.00065 1.3335C8.92113 1.3335 9.66732 2.07969 9.66732 3.00016Z"
                stroke="white"
              />
              <path
                d="M12.6673 12.667C12.6673 13.7716 10.578 14.667 8.00065 14.667C5.42332 14.667 3.33398 13.7716 3.33398 12.667"
                stroke="white"
                stroke-linecap="round"
              />
            </svg>
            Onsite
          </p>
        </div>
      </div>
      <Link href={linkHref} target={targetblank} className="max-w-7xl justify-start flex w-full">
        <ContainedButton className="mb-[113px] xlaptop:mb-[187.5px] sm:w-fit 
        tracking-wide text-white font-normal w-full xlaptop:w-fit">
          {buttonText}
        </ContainedButton>
      </Link>
    </section>
  );
};

export default IntroSection;
