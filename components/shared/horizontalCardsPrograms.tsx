/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { IoChevronUp } from "react-icons/io5";

interface HorizontalCardProps {
  publish: string;
  firstList: string;
  secondlist: string;
  thirdlist: string;
  fourthList?: string;
  list1?: string;
  desc1?: string;
  list2?: string;
  desc2?: string;
  list3?: string;
  desc3?: string;
  list4?: string;
  desc4?: string;
  list5?: string;
  desc5?: string;
  list6?: string;
  desc6?: string;
  list7?: string;
  desc7?: string;
  list8?: string;
  desc8?: string;
  list9?: string;
  desc9?: string;
  list10?: string;
  desc10?: string;
  list11?: string;
  desc11?: string;
}
function HorizontalCardsPrograms({
  publish,
  firstList,
  secondlist,
  thirdlist,
  fourthList,
  list1,
  desc1,
  list2,
  desc2,
  list3,
  desc3,
  list4,
  desc4,
  list5,
  desc5,
  list6,
  desc6,
  list7,
  desc7,
  list8,
  desc8,
  list9,
  desc9,
  list10,
  desc10,
  list11,
  desc11,
}: HorizontalCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
    <a
      href="#"
      className="bg-purple rounded-[19px] mb-8 
      border border-b-0 shadow-2xl border-gray/20 pt-4 xlaptop:pl-4 relative"
    >
      <p className="text-sm text-orange mb-4 mx-2">{publish} </p>
      <ul className="list-disc flex flex-col  text-sm font-light px-7 mb-4">
        <li>{firstList}</li>
        <li>{secondlist}</li>
        <li>{thirdlist}</li>
        {fourthList && <li>{fourthList}</li>}
      </ul>
      <div className="flex justify-end">
        <button
          onClick={toggleDetails}
          className={`text-sm bg-[orange] hover:bg-lightOrange 
            rounded-br-[19px] xlaptop:rounded-bl-[0px] rounded-bl-[19px] xlaptop:rounded-tl-[8px] rounded-tl-[0px] xlaptop:w-fit w-full border-none p-[9px_20px]`}
        >
          {showDetails ? (
            <p className="flex gap-2 text-center items-center justify-center">
              Read Less <IoChevronUp />
            </p>
          ) : (
            <p className="flex gap-2 text-center items-center justify-center">
              Read more <FaChevronDown />
            </p>
          )}
        </button>
      </div>
    </a>
      {showDetails && (
        <div className="px-[2.8rem] bg-gray-100 border border-gray/20 
        rounded-b-[19px] mb-8 bg-purple -mt-12 pt-12 pb-6">
          <ul className="list-disc flex flex-col gap-5 text-xs font-light">
             { list1 && <li className="font-bold">{list1}</li>}
              <p className="-mt-5">
                {desc1}
              </p>
              <li className="font-bold">{list2}</li>
              <p className="-mt-5">
                {desc2}
              </p>
              
              <li className="font-bold">{list3}</li>
              <p className="-mt-5">
                {desc3}
              </p>
              <li className="font-bold">{list4}</li>
             {desc4 && <p className="-mt-5">
                {desc4}
              </p>}
              
             {list5 && <li className="font-bold">{list5}</li>}
              {desc5 && <p className="-mt-5">
                {desc5}
              </p>}
              {list6 && <li className="font-bold">{list6}</li>}
              {desc6 && <p className="-mt-5">
                {desc6}
              </p>}
              {list7 && <li className="font-bold">{list7}</li>}
              {desc7 && <p className="-mt-5">
                {desc7}
              </p>
              }
              {list8 && <li className="font-bold">{list8}</li>}
              {desc8 && <p className="-mt-5">
                {desc8}
              </p>}
              {list9 && <li className="font-bold">{list9}</li>}
              {desc9 &&<p className="-mt-5">
                {desc9}
              </p>}
              {list10 && <li className="font-bold">{list10}</li>}
              {desc10 && <p className="-mt-5">
                {desc10}
              </p>}
             {list11 &&  <li className="font-bold">{list11}</li>}
              {desc11 && <p className="-mt-5">
                {desc11}
              </p>}
              
            </ul>
        </div>
      )}
    </>
  );
}

export default HorizontalCardsPrograms;
