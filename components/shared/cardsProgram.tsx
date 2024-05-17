/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MdArrowOutward } from "react-icons/md";

interface CardWithImageProps {
  image: any;
  title: string;
  publish: string;
  desc: string;
  time: string;
  lang: string;
  loca: string;

}

function CardsProgram({ image, title, publish, desc,time,lang,loca }: CardWithImageProps) {
  return (
    <div className="flex flex-col gap-3 max-w-full bg-purple rounded-2xl border border-gray/20 p-4 text-white/80">
      <a href="#">
        <img className="object-cover w-full" src={image} alt="cardsimage" />
      </a>
      <div className="flex flex-col gap-2">
        <p className=" md:text-base text-sm text-orange">{publish}</p>
        <div className="flex justify-between">
          <p className="font-light md:text-sm text-sm text-white">{title}</p>
          <MdArrowOutward className="text-white text-base" />
        </div>
        <p className="flex gap-2 items-center lg:font-normal text-sm  text-gray-700 dark:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M1.33398 1.3335H10.6673C11.9244 1.3335 12.5529 1.3335 12.9435 1.72402C13.334 2.11454 13.334 2.74308 13.334 4.00016V8.00016C13.334 9.25724 13.334 9.88578 12.9435 10.2763C12.5529 10.6668 11.9244 10.6668 10.6673 10.6668H6.00065"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66699 4.3335H10.667"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.33398 11.3335V8.66683C1.33398 8.03829 1.33398 7.72402 1.52925 7.52876C1.72451 7.3335 2.03878 7.3335 2.66732 7.3335H4.00065M1.33398 11.3335H4.00065M1.33398 11.3335V14.6668M4.00065 11.3335V7.3335M4.00065 11.3335V14.6668M4.00065 7.3335H6.00065H8.00065"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.00065 4.33358C4.00065 5.06996 3.4037 5.66691 2.66732 5.66691C1.93094 5.66691 1.33398 5.06996 1.33398 4.33358C1.33398 3.5972 1.93094 3.00024 2.66732 3.00024C3.4037 3.00024 4.00065 3.5972 4.00065 4.33358Z"
              stroke="white"
            />
          </svg>
          {desc}
        </p>
        <p className="flex gap-2 items-center lg:font-normal text-sm  text-gray-700 dark:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clip-path="url(#clip0_860_3132)">
              <circle cx="8.00065" cy="8.00016" r="6.66667" stroke="white" />
              <path
                d="M8.00098 5.3335V8.00016L9.33431 9.3335"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_860_3132">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {time}
        </p>
        <p className="flex gap-2 items-center lg:font-normal text-sm  text-gray-700 dark:text-gray-400">
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
          {lang}
        </p>
        <p className="flex gap-2 items-center lg:font-normal text-sm  text-gray-700 dark:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M9.66634 5.99992C9.66634 6.92039 8.92015 7.66659 7.99967 7.66659C7.0792 7.66659 6.33301 6.92039 6.33301 5.99992C6.33301 5.07944 7.0792 4.33325 7.99967 4.33325C8.92015 4.33325 9.66634 5.07944 9.66634 5.99992Z"
              stroke="white"
            />
            <path
              d="M12.1475 11.3333C13.0772 12.6589 13.5219 13.3649 13.257 13.9332C13.2304 13.9902 13.1993 14.0452 13.1639 14.0977C12.7809 14.6666 11.791 14.6666 9.8112 14.6666H6.1875C4.20769 14.6666 3.21778 14.6666 2.83476 14.0977C2.79938 14.0452 2.76828 13.9902 2.74171 13.9332C2.47681 13.3649 2.92152 12.6589 3.8512 11.3333"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.83794 11.6623C8.61309 11.8789 8.31255 11.9999 7.99978 11.9999C7.687 11.9999 7.38646 11.8789 7.16161 11.6623C5.10254 9.66711 2.34313 7.43828 3.68881 4.20241C4.41641 2.4528 6.16297 1.33325 7.99978 1.33325C9.83658 1.33325 11.5831 2.4528 12.3107 4.20241C13.6547 7.4342 10.9021 9.67398 8.83794 11.6623Z"
              stroke="white"
            />
          </svg>
          {loca}
        </p>
      </div>
    </div>
  );
}

export default CardsProgram;
