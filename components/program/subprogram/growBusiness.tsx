"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import HorizontalCardsPrograms from "@/components/shared/horizontalCardsPrograms";
import React, { useEffect, useState } from "react";
import AccordionPrograms from "./accordionPrograms";
import { FaCheck } from "react-icons/fa6";
import Checlistprograms from "./checlistprograms";
import ContainedButton from "@/components/shared/containedButton";
import Link from "next/link";

function GrowBusiness() {
  const [activeHeading, setActiveHeading] = useState<string | null>(null);
  useEffect(() => {
    let prevActiveHeading: string | null = null; // Track previously active heading

    const observer = new IntersectionObserver(
      (entries) => {
        let hasActive = false;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            prevActiveHeading = activeHeading; // Store current heading as previous
            setActiveHeading(entry.target.id);
            hasActive = true;
          }
        });
        if (!hasActive && prevActiveHeading) {
          setActiveHeading(null); // Reset activeHeading if no section is active
          prevActiveHeading = null; // Reset previous active heading
        }
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll(".sectionss");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [activeHeading]); // Include activeHeading in the dependency array

  return (
    <div className="max-w-7xl xlaptop:py-28  w-full xlaptop:grid 
    xlaptop:grid-cols-3 grid-cols-1 items-start gap-16">
      <div className="xlaptop:sticky  top-3 flex flex-col gap-3">
        <div className="xlaptop:col-span-1 border border-gray/20 bg-purple px-5 py-3 rounded-2xl">
          <div className="flex flex-col justify-center text-white/90 text-[16px]">
            <div
              className={`flex items-center ${
                activeHeading === "intros" ? "text-orange" : ""
              }`}
            >
              <div
                className={`p-[4px] flex justify-center items-center  
              rounded-full ${
                activeHeading === "intros" ? "bg-orange" : "bg-white/80"
              }`}
              >
                <FaCheck
                  className={`text-sm ${
                    activeHeading === "intros" ? "text-white" : ""
                  }`}
                />
              </div>
              <p
                className={`ml-5 ${
                  activeHeading === "intros" ? "text-orange" : ""
                }`}
              >
                Intro
              </p>
            </div>
            <div
              className={`border-l-2 h-[1.2rem] flex items-center  translate-x-[10px] ${
                activeHeading === "intros" ? "border-orange" : "border-gray/20"
              }`}
            ></div>

            <div
              className={`flex items-center ${
                activeHeading === "acheieve" ? "text-orange" : ""
              }`}
            >
              <div
                className={`p-[4px] flex justify-center items-center  
              rounded-full ${
                activeHeading === "acheieve" ? "bg-orange" : "bg-white/80"
              }`}
              >
                <FaCheck
                  className={`text-sm ${
                    activeHeading === "acheieve" ? "text-white" : ""
                  }`}
                />
              </div>
              <p
                className={`ml-5 ${
                  activeHeading === "acheieve" ? "text-orange" : ""
                }`}
              >
                What You'll Achieve
              </p>
            </div>
            <div
              className={`border-l-2 h-[1.2rem] flex items-center  translate-x-[10px] ${
                activeHeading === "acheieve"
                  ? "border-orange"
                  : "border-gray/20"
              }`}
            ></div>
            <div
              className={`flex items-center ${
                activeHeading === "benefits" ? "text-orange" : ""
              }`}
            >
              <div
                className={`p-[4px] flex justify-center items-center  
              rounded-full ${
                activeHeading === "benefits" ? "bg-orange" : "bg-white/80"
              }`}
              >
                <FaCheck
                  className={`text-sm ${
                    activeHeading === "benefits" ? "text-white" : ""
                  }`}
                />
              </div>
              <p
                className={`ml-5 ${
                  activeHeading === "benefits" ? "text-orange" : ""
                }`}
              >
                Benefits of Joining{" "}
              </p>
            </div>
            <div
              className={`border-l-2 h-[1.2rem] flex items-center  translate-x-[10px] ${
                activeHeading === "benefits"
                  ? "border-orange"
                  : "border-gray/20"
              }`}
            ></div>
            <div
              className={`flex items-center ${
                activeHeading === "phases" ? "text-orange" : ""
              }`}
            >
              <div
                className={`p-[4px] flex justify-center items-center  
              rounded-full ${
                activeHeading === "phases" ? "bg-orange" : "bg-white/80"
              }`}
              >
                <FaCheck
                  className={`text-sm ${
                    activeHeading === "phases" ? "text-white" : ""
                  }`}
                />
              </div>
              <p
                className={`ml-5 ${
                  activeHeading === "phases" ? "text-orange" : ""
                }`}
              >
                Program Phases
              </p>
            </div>
            <div
              className={`border-l-2 h-[1.2rem] flex items-center  translate-x-[10px] ${
                activeHeading === "phases" ? "border-orange" : "border-gray/20"
              }`}
            ></div>
            <div
              className={`flex items-center ${
                activeHeading === "selection" ? "text-orange" : ""
              }`}
            >
              <div
                className={`p-[4px] flex justify-center items-center  
              rounded-full ${
                activeHeading === "selection" ? "bg-orange" : "bg-white/80"
              }`}
              >
                <FaCheck
                  className={`text-sm ${
                    activeHeading === "selection" ? "text-white" : ""
                  }`}
                />
              </div>
              <p
                className={`ml-5 ${
                  activeHeading === "selection" ? "text-orange" : ""
                }`}
              >
                Selection Process
              </p>
            </div>
            <div
              className={`border-l-2 h-[1.2rem] flex items-center  translate-x-[10px] ${
                activeHeading === "selection"
                  ? "border-orange"
                  : "border-gray/20"
              }`}
            ></div>
            <div
              className={`flex items-center ${
                activeHeading === "faqs" ? "text-orange" : ""
              }`}
            >
              <div
                className={`p-[4px] flex justify-center items-center  
              rounded-full ${
                activeHeading === "faqs" ? "bg-orange" : "bg-white/80"
              }`}
              >
                <FaCheck
                  className={`text-base ${
                    activeHeading === "faqs" ? "text-white" : ""
                  }`}
                />
              </div>
              <p
                className={`ml-5 ${
                  activeHeading === "faqs" ? "text-orange" : ""
                }`}
              >
                Faqs
              </p>
            </div>
          </div>
        </div>
        <div className="border border-gray/20 px-5 py-3 rounded-2xl bg-purple">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="text-white flex flex-col gap-5 text-[15px] font-light"
              >
                <div className="flex justify-between items-center mb-3">
                  <p className="flex gap-2 items-center text-orange font-light">
                    <img src={item.imgscr} alt="" />
                    {item.content}
                  </p>
                  <p className="text-end">{item.status}</p>
                </div>
              </div>
            );
          })}
          <div className="sticky top-0">
          <ContainedButton className="xlaptop:w-full tracking-wide text-white font-normal w-full">
            <Link
              href="https://docs.google.com/forms/d/1TM4wNrq0yJ-CQdUJR7dMxwbJ0M0v2x9oO3exbV1TbWs/edit?usp=drivesdk"
              target="blank"
            >
              Apply Now
            </Link>
          </ContainedButton>

          </div>
        </div>
      </div>
      <div className="col-span-2 xlaptop:py-0 py-16 text-white">
        <div className="sectionss" id="intros">
          <div className="flex flex-col gap-4">
            <p className="xlaptop:text-3xl text-xl text-orange">Intro</p>
            <p className="font-light">
              Take your MENA startup to the next level and unlock the potential
              of the Saudi market.
            </p>
            <p>
              E3.Ventures' <strong>Startup Acceleration Program </strong> is a comprehensive
              level-up program designed to empower ambitious startups to
              successfully expand into Saudi Arabia.
            </p>
          </div>
        </div>
        <div className="sectionss" id="acheieve">
          <div className="flex flex-col gap-7 mt-12">
            <p className="xlaptop:text-3xl text-xl text-orange">
              What You'll Achieve
            </p>
            <div className="border border-t-0 border-gray/20 py-5 px-7 bg-purple rounded-2xl text-sm shadow-2xl ">
              <ul className="list-disc flex flex-col gap-3 text-sm font-light">
                <li>Validate your product-market fit for Saudi Arabia.</li>
                <li>Develop a winning go-to-market strategy. </li>
                <li>
                  Build a network of valuable connections in the Saudi market.{" "}
                </li>
                <li>Secure a functional business setup in Saudi Arabia. </li>
                <li>
                  Launch a successful social media campaign for brand awareness.{" "}
                </li>
                <li>Attract potential investors and partners.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sectionss" id="benefits">
          <div className="flex flex-col gap-7 mt-12">
            <p className="xlaptop:text-3xl text-xl text-orange">
              Benefits of Joining Startup Acceleration
            </p>
            <div className="border border-t-0 border-gray/20 py-5 px-7 bg-purple rounded-2xl text-sm ">
              <ul className="list-disc flex flex-col gap-5">
                <li>Expert Mentorship & Guidance:</li>
                <p className="-mt-5">
                  Benefit from ongoing support from experienced mentors and
                  industry leaders.
                </p>
                <li>Network & Partner Matching:</li>
                <p className="-mt-5">
                  Connect with potential partners, distributors, and investors.
                </p>
                <li>Market Activation Support:</li>
                <p className="-mt-5">
                  Leverage E3.Ventures' expertise in navigating marketing and
                  sales activities.
                </p>
                <li> Accommodation & Workspace: </li>
                <p className="-mt-5">
                  Enjoy comfortable accommodation and a dedicated workspace for
                  your team.
                </p>

                <li> Legal Support:</li>
                <p className="-mt-5">
                  Enjoy comfortable accommodation and a dedicated workspace for
                  your team.
                </p>
              </ul>
            </div>
          </div>
        </div>
        <div className="sectionss" id="phases">
          <div className="flex flex-col mt-12">
            <p className="xlaptop:text-3xl text-xl text-orange mb-10">
              Program Phases
            </p>
            {data.map((item, index) => (
              <HorizontalCardsPrograms
                key={index} // It's recommended to use a unique key
                publish={item.publish}
                firstList={item.firstList}
                secondlist={item.secondlist}
                thirdlist={item.thirdlist}
                fourthList={item.fourthList}
                list1={item.list1}
                desc1={item.desc1}
                list2={item.list2}
                desc2={item.desc2}
                list3={item.list3}
                desc3={item.desc3}
                list4={item.list4}
                desc4={item.desc4}
                list5={item.list5}
                desc5={item.desc5}
                list6={item.list6}
                desc6={item.desc6}
                list7={item.list7}
                desc7={item.desc7}
                list8={item.list8}
                desc8={item.desc8}
                list9={item.list9}
                desc9={item.desc9}
                list10={item.list10}
                desc10={item.desc10}
                list11={item.list11}
                desc11={item.desc11}
              />
            ))}
          </div>
        </div>
        <div className="sectionss" id="selection">
          <div className="mt-12">
            <p className="xlaptop:text-3xl text-xl text-orange mb-8">
              Selection Process
            </p>
            <p className="text-lg font-light text-white">
              Our Startup Acceleration Program is designed to select the most
              promising startups with the potential to thrive in the Saudi
              market. Here's an overview of the selection process
            </p>
            <Checlistprograms />
          </div>
        </div>
        <div className="sectionss" id="faqs">
          <div className="flex flex-col mt-2">
            <p className="xlaptop:text-3xl text-xl text-orange mb-10">
              Frequently Asked Questions
            </p>
            <AccordionPrograms />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GrowBusiness;

const data = [
  {
    publish: "Phase 1: The Preparing Phase (2 Weeks) - Egypt",
    firstList: "Refine your business plan for the Saudi market. (2 Days)",
    secondlist: "Deep dive into product management processes. (3 Days)",
    thirdlist: "Develop a tailored go-to-market strategy. (7 Days)",
    list1: "Refine your business plan for the Saudi market. (2 Days)",
    desc1:
      "We'll work with you to ensure your business plan is tailored to the specific needs and opportunities of the Saudi market. This includes analyzing competitor strategies, identifying potential customer segments, and adapting your value proposition for local audiences. Expect workshops on market research techniques, customer persona development, and financial projections specific to Saudi Arabia.",
    list2: "Deep dive into product management processes. (3 Days)",
    desc2:
      "Our team will assess your current product management processes and identify areas for improvement. We'll introduce you to agile methodologies (like sprints and feature prioritization) to ensure efficient product development and iteration for the Saudi market. Workshops will cover user story creation, backlog management, and product roadmap development.",
    list3: "Develop a tailored go-to-market strategy. (7 Days)",
    desc3:
      "Through interactive workshops, we'll guide you in creating a comprehensive go-to-market strategy specifically for Saudi Arabia. This will involve defining your target market channels, crafting compelling messaging, and developing a detailed launch roadmap with clear milestones and success metrics.",
    list4: "Deliverables",
    list5: "Saudi-specific business plan:",
    desc5:
      "A revised business plan outlining your strategy for success in the Saudi market.",
    list6: "Go-to-market strategy:",
    desc6:
      "A comprehensive strategy for launching your product or service in Saudi Arabia, including target markets, marketing channels, and launch timeline.",
    list7: "Roadmap:",
    desc7:
      "A detailed roadmap outlining key milestones and activities for your go-to-market strategy.",
  },
  {
    publish:
      "Phase 2: Travel Preparation & Startup Readiness (2 Weeks) - Egypt",
    firstList: "Secure travel visas and permits.",
    secondlist: "Develop social media marketing for startups in Saudi Arabia.",
    thirdlist: "Refine your Investor pitch deck for startups.",
    fourthList: "Identify and research potential partners.",
    list1: "Secure travel visas and permits.",
    desc1:
      "Our team will assist you with obtaining the necessary visas and permits to travel and work in Saudi Arabia for the program duration.",
    list2: "Develop social media marketing for startups in Saudi Arabia.",
    desc2:
      "We'll guide you in creating a targeted social media campaign to generate brand awareness and interest in your product or service among Saudi audiences. Workshops will cover platform selection, content creation strategies, and campaign management best practices specifically for Saudi Arabia.",
    list3: "Refine your Investor pitch deck for startups.",
    desc3:
      "Receive expert feedback and guidance on refining your investor pitch deck to resonate with potential Saudi investors. This includes tailoring your message to highlight the unique value proposition and growth potential of your business in the Saudi market.",
    list4: "Identify and research potential partners. ",
    desc4:
      "We'll help you identify and research potential strategic partners in Saudi Arabia who can complement your business and accelerate your growth. Expect guidance on due diligence, partnership structuring, and initial outreach strategies.",
  },
  {
    publish: "Phase 3: Implementation Saudi Arabia (4 Weeks)",
    firstList: "Launch your business with a smooth office setup.",
    secondlist: "Gain support with legal and regulatory compliance.",
    thirdlist: "Execute your Startup go-to-market strategy.",
    fourthList: "Connect with potential investors and partners.",
    list1: "Launch your business with a smooth office setup.",
    desc1:
      "E3.Ventures will provide a fully equipped office space to serve as your base of operations in Saudi Arabia. We'll assist with logistics and setup to ensure a smooth transition for your team.",
    list2: "Gain support with legal and regulatory compliance.",
    desc2:
      "Our network of legal partners will guide you through the process of company registration, licensing, and ensuring compliance with all relevant Saudi Arabian laws and regulations.",
    list3: "Execute your Startup go-to-market strategy. ",
    desc3:
      "Leverage E3.Ventures' expertise and network to execute your go-to-market strategy. This might involve connecting you with potential customers and distributors, facilitating industry events participation, and providing ongoing support with marketing and sales activities.",
    list4: "Connect with potential investors and partners.",
    desc4:
      "We'll organize meetings and introductions with potential investors and strategic partners in Saudi Arabia based on your company's needs and industry focus. You'll receive guidance on effective communication, negotiation strategies, and building strong relationships with potential investors and partners.",
    list5: "Monitor performance and optimize your strategy.",
    desc5:
      "We'll provide ongoing support with monitoring the performance of your go-to-market strategy. This includes analyzing key metrics like website traffic, lead generation, and customer acquisition. Based on the data, you'll receive guidance on optimizing your strategy for continuous improvement and growth in the Saudi market.",
    list6: "Deliverables:",
    list7: "Functional business setup in Saudi Arabia:",
    desc7:
      "A fully equipped office space and established legal framework for your business operations in Saudi Arabia.",
    list8: "Launched social media campaign: ",
    desc8:
      "A live and ongoing social media campaign generating brand awareness and engagement among your target audience in Saudi Arabia.",
    list9: "Established sales pipeline: ",
    desc9:
      "Initial leads and potential customers identified through your go-to-market efforts.",
    list10: "Secured investments/partnerships (potential): ",
    desc10:
      "Meetings and introductions with potential investors and partners, with the possibility of securing investment or establishing strategic partnerships.",
    list11: "Sustainable business plan: ",
    desc11:
      "A revised business plan outlining a sustainable growth strategy for your business in the Saudi Arabian market.",
  },
  {
    publish: "Phase 4: After Implementation Saudi Arabia (4 Weeks)",
    firstList: "Marketing & Sales Support.",
    secondlist: "Operations Management Assistance.",
    thirdlist: "Expert Consultations on Demand.",
    fourthList: "Accommodation & Workspace.",
    list1: "Secure travel visas and permits.",
    desc1:
      "Our team will assist you with obtaining the necessary visas and permits to travel and work in Saudi Arabia for the program duration.",
    list2: "Develop social media marketing for startups in Saudi Arabia.",
    desc2:
      "We'll guide you in creating a targeted social media campaign to generate brand awareness and interest in your product or service among Saudi audiences. Workshops will cover platform selection, content creation strategies, and campaign management best practices specifically for Saudi Arabia.",
    list3: "Refine your Investor pitch deck for startups.",
    desc3:
      "Receive expert feedback and guidance on refining your investor pitch deck to resonate with potential Saudi investors. This includes tailoring your message to highlight the unique value proposition and growth potential of your business in the Saudi market.",
    list4: "Identify and research potential partners. ",
    desc4:
      "We'll help you identify and research potential strategic partners in Saudi Arabia who can complement your business and accelerate your growth. Expect guidance on due diligence, partnership structuring, and initial outreach strategies.",
  },
];

const items = [
  {
    imgscr: "/icons/task-daily-01.svg",
    content: "Enrollment Status",
    status: "Open",
  },
  {
    imgscr: "/icons/folder-open.svg",
    content: "Applications Open",
    status: "May 1, 2024",
  },
  {
    imgscr: "/icons/folder-locked.svg",
    content: "Applications Close",
    status: "June 15, 2024",
  },
  {
    imgscr: "/icons/location-user-02.svg",
    content: "Program Format",
    status: "Onsite",
  },
  {
    imgscr: "/icons/location-03.svg",
    content: "Location",
    status: "Cairo & Riyadh",
  },
  {
    imgscr: "/icons/clock-01.svg",
    content: "Program Start/End Date",
    status: "June - August 2024",
  },
  {
    imgscr: "/icons/information-diamond.svg",
    content: "Ideal Applicants",
    status: "Seed & Series A Stages",
  },
];
