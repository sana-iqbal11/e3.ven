/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

interface AccordionItem {
  id: string;
  title: string;
  content?: string;
  firstList?: string;
  link?: string;
  secondlist?: string;
  thirdlist?: string;
  fourthList?: string;
  fifthList?: string;
  sixList?: string;
}

const Accordion = ({ items }: { items: AccordionItem[] }) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div
      id="accordion-collapse"
      data-accordion="collapse"
      className="w-full mx-auto"
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="mb-7 bg-purple border border-gray/20 rounded-xl"
        >
          <p id={`accordion-collapse-heading-${item.id}`}>
            <button
              type="button"
              className="flex xlaptop:items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 gap-3"
              onClick={() => toggleAccordion(item.id)}
              aria-expanded={openAccordion === item.id}
              aria-controls={`accordion-collapse-body-${item.id}`}
            >
              <span className="text-sm font-medium text-start">
                {item.title}
              </span>
              {openAccordion === item.id ? (
                <img src="/icons/minus-circle.svg" alt="" />
              ) : (
                <img src="/icons/plus-circle.svg" alt="" />
              )}
            </button>
          </p>
          <div
            id={`accordion-collapse-body-${item.id}`}
            className={`px-5 pb-5  ${
              openAccordion === item.id ? "" : "hidden"
            }`}
            aria-labelledby={`accordion-collapse-heading-${item.id}`}
          >
            <div className="text-[13px] font-light">
              {item.content && <p>{item.content}</p>}
            </div>
            <ul className="list-disc flex flex-col mb-1 text-[13px] font-light px-7">
              {item.firstList || item.link ? (
                <li className="list-disc">
                  {item.firstList}
                  <Link
                    target="_blank"
                    href="https://docs.google.com/forms/d/1TM4wNrq0yJ-CQdUJR7dMxwbJ0M0v2x9oO3exbV1TbWs/viewform?edit_requested=true"
                  >
                    <span className="text-orange">{item.link}</span>
                  </Link>
                </li>
              ) : null}

              {item.secondlist && <li>{item.secondlist}</li>}
              {item.thirdlist && <li>{item.thirdlist}</li>}
              {item.fourthList && <li>{item.fourthList}</li>}
              {item.fifthList && <li>{item.fifthList}</li>}
              {item.sixList && <li>{item.sixList}</li>}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
