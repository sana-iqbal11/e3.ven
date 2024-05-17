/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MdArrowOutward } from "react-icons/md";

interface CardWithImageProps {
  image: any;
  title: string;
  publish: string;
  desc: string;
}

function Cards({ image, title, publish, desc }: CardWithImageProps) {
  return (
    <div className="flex flex-col gap-3 max-w-full bg-purple rounded-2xl border border-gray/20 p-4">
      <a href="#">
        <img className="object-cover w-full" src={image} alt="cardsimage" />
      </a>
      <div className="flex flex-col gap-2">
        <p className=" md:text-lg text-sm text-orange">
          {publish}
        </p>
        <div className="flex justify-between">
        <p className="font-light md:text-base text-sm text-white">
          {title}
        </p>
        <MdArrowOutward className="text-white text-base"/>
        </div>
        <p className=" lg:font-normal md:text-base text-xs text-gray-700 dark:text-gray-400">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default Cards;
