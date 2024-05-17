/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MdArrowOutward } from "react-icons/md";

interface CardWithImageProps {
  image: any;
  title: string;
  publish: string;
  desc: string;
}

function CardWithImage({ image, title, publish, desc }: CardWithImageProps) {
  return (
    <div className="flex flex-col gap-3 max-w-full bg-purple rounded-2xl border border-gray/20 p-4">
      <a href="#">
        <img className="object-cover w-full" src={image} alt="cardsimage" />
      </a>
      <div className="flex flex-col gap-2">
        <p className=" text-lg  text-orange">
          {publish}
        </p>
        <div className="flex justify-between">
        <p className="font-light text-normal text-white">
          {title}
        </p>
        <MdArrowOutward className="text-white text-normal"/>
        </div>
        <p className=" font-normal text-gray-700 dark:text-gray-400">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default CardWithImage;
