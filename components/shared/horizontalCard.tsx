/* eslint-disable @next/next/no-img-element */
import React from "react";

interface HorizontalCardProps {
  image: any;
  title: string;
  publish: string;
  desc: string;
}

function HorizontalCard({ image, title, publish, desc }: HorizontalCardProps) {
  return (
    <a
      href="#"
      className="flex flex-1 flex-row bg-purple rounded-lg border border-gray/20 p-4"
    >
        <div className="flex-1 rounded-lg overflow-hidden" >
      <img
        className="object-cover w-full h-full"
        src={image}
        alt=""
      />

        </div>
      <div className="flex flex-1  text-[11px] flex-col gap-2 justify-between px-2 leading-normal">
        <p className="lg:text-base   text-orange">
          {publish}{" "}
        </p>
        <p className="xl:text-lg lg:text-base md:text-[13px]">
          {title}
        </p>
        <p className="font-light xl:text-lg lg:text-base md:text-[13px]">
          {desc}
        </p>
      </div>
    </a>
  );
}

export default HorizontalCard;
