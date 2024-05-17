/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Header from "@/components/base/header";
import ColoredSpan from "@/components/shared/coloredSpan";
import HeadingDescription from "@/components/shared/headingDescription";
import SectionTitle from "@/components/shared/sectionTitle";
import Footer from "@/components/base/footer";

function Process() {
  return (
    <main className="text-white  lg:max-w-7xl xl:px-0 px-5 mx-auto min-h-screen">
      <div className="mb-10">
      <Header />
      </div>
      <SectionTitle className="text-center">
        <ColoredSpan className="text-white">From Vision to Success</ColoredSpan>
      </SectionTitle>
      <HeadingDescription className="laptop:w-[75%] mx-auto text-[18px] pb-12">
        Launching a business is an exciting yet challenging journey. At E3.
        Ventures, we understand the complexities involved and are here to
        support you every step of the way. Our startup development process
        consists of four phases designed to help you refine your idea, build a
        winning business, achieve a successful launch, and propel your startup
        towards sustainable growth. Let's delve into each stage and discover how
        we can help you turn your vision into a thriving reality.
      </HeadingDescription>
      <div className="min-h-screen">
        {items.map((item, index) => {
          const left = [1].includes(index);
          const right = [2].includes(index);
          return (
            <div key={index} className="mb-12">
              <div
                className={`grid laptop:grid-cols-3 grid-cols-1 xl:gap-x-36 lg:gap-x-24 laptop:gap-x-2 items-center laptop:justify-between justify-center lg:px-12 ${
                  left && "flex-row-reverse"
                }`}
              >
                <p
                  className={`col-span-2 lg:text-xl  md:text-sm text-lg font-[300] laptop:my-0 my-8 text-center laptop:text-start ${
                    (left && "order-2") || "laptop:order-none order-2"
                  }`}
                >
                  {item.text}
                </p>
                <div
                  className={`flex col-span-1  ${
                    left ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className="border border-gray/20 rounded-2xl bg-purple 
                  xl:px-5 pb-10 pt-12 w-full h-auto laptop:h-[238px]">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        key={index}
                        src={item.image}
                        alt={`Image ${index + 1}`}
                        className={`object-contain w-[50%] h-[40%] mb-5 laptop:block hidden ${
                          right && "mt-[-15px]"
                        } ${left && "mt-[-9px]"}`}
                      />
                      <img
                        key={index}
                        src={item.mobileicon}
                        alt={`Image ${index + 1}`}
                        className={`object-contain w-[30%] h-[30%] laptop:hidden block mb-5 ${
                          right && "mt-[-15px]"
                        } ${left && "mt-[-9px]"}`}
                      />
                      <p className={`text-xl text-center `}>{item.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer/>
    </main>
  );
}

export default Process;

const items = [
  {
    text:
      "We believe in the power of your vision, and we're here to help you turn it into reality. E3.Ventures provides pre-seed funding and investment opportunities for startups at the early stages. Our investment criteria focus on identifying high-potential startups with innovative ideas, strong leadership teams, and a clear path to market dominance. Secure the financial backing you need to bring your startup to life.",
    image: "/icons/investing.png",
    mobileicon: "/icons/investingmobile.png",
    title: "Funding & Investment",
    order: 1,
  },
  {
    text:
      "You won't be navigating the startup journey alone. Our team of experienced entrepreneurs and industry leaders is here to act as your personal advisors. We offer a range of mentorship programs, from one-on-one coaching sessions to specialized workshops, equipping you with the knowledge and expertise you need to overcome challenges and achieve success. Benefit from the wisdom and guidance of seasoned professionals.",
    image: "/icons/guidance.png",
    mobileicon: "/icons/guidancemobile.png",
    title: "Mentorship & Guidance",
    order: 2,
  },
  {
    text:
      "The global marketplace is your oyster. E3.Ventures leverages its extensive network to provide you with market access strategies for international growth. We connect you with key industry players, potential partners, and investors who can fuel your startup's expansion. Our team of market experts will help you identify and seize opportunities in untapped markets, ensuring your startup reaches its full potential.",
    image: "/icons/access.png",
    mobileicon: "/icons/accessmobile.png",
    title: "Market Access & Growth",
    order: 3,
  },
];
