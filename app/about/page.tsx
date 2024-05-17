/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Header from "@/components/base/header";
import ColoredSpan from "@/components/shared/coloredSpan";
import ContainedButton from "@/components/shared/containedButton";
import HeadingDescription from "@/components/shared/headingDescription";
import SectionTitle from "@/components/shared/sectionTitle";
import Link from "next/link";
import Footer from "@/components/base/footer";

function About() {
  return (
    <main className="text-white  lg:max-w-7xl xl:px-0 px-5 mx-auto">
      <div className="mb-10">
        <Header />
      </div>
      <SectionTitle className="text-center">
        <ColoredSpan className="text-white text-md">
          Fueling Innovation Through <br />
          Collaboration and Empowerment
        </ColoredSpan>
      </SectionTitle>
      <HeadingDescription className="laptop:w-[75%] mx-auto text-[18px] pb-10">
        At E3. Ventures, we're more than just a startup accelerator; we're a
        catalyst for innovation. We thrive on the power of collaborative startup
        partnerships, fostering a supportive community where entrepreneurs can
        tap into a network of experienced mentors, industry leaders, and fellow
        innovators. We believe that the best startup ideas flourish when minds
        come together, fostering an environment where creative collisions spark
        groundbreaking solutions.
      </HeadingDescription>
        <Link href="/contact" className="flex justify-center " >
      <div className="laptop:w-fit w-full">
        <ContainedButton className="mb-[39px] laptop:mb-[30px]  tracking-wide text-white font-normal w-full">
          Join Us
        </ContainedButton>
      </div>
        </Link>

      <div>
        {items.map((item, index) => {
          const left = [1].includes(index);
          const right = [0].includes(index);

          return (
            <div key={index} className="laptop:mb-16 mb-10">
              <div
                className={`grid laptop:grid-cols-3 grid-cols-1 xl:gap-x-36 lg:gap-x-24 laptop:gap-x-16 items-center laptop:justify-between justify-center lg:px-12 ${
                  left && "flex-row-reverse"
                }`}
              >
                <p
                  className={`col-span-2 lg:text-xl  md:text-sm text-lg font-[300] laptop:my-0 mt-10 text-center laptop:text-start ${
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
                  px-5 pt-5 pb-10 w-full h-auto laptop:h-[238px]">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        key={index}
                        src={item.image}
                        alt={`Image ${index + 1}`}
                        className={`object-contain  ${
                          right ? "mt-[-65px]" : "mt-[-25px]"
                        } `}
                      />
                      <p
                        className={`text-xl text-center ${
                          right ? "mt-[-9px]" : "mt-[-29px]"
                        }`}
                      >
                        {item.title}
                      </p>
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

export default About;

const items = [
  {
    text:
      "Disruptive thinking is the lifeblood of our startup ecosystem. We encourage boldness, pushing boundaries, and challenging the status quo. We empower our startup partners, the next generation of innovators, to bring their wildest dreams to life. Through a combination of startup resources, mentorship, and unwavering confidence, we equip you with the tools you need to transform your startup vision into a thriving reality.",
    image: "/icons/value.svg",
    title: "Our Values",
    order: 1,
  },
  {
    text:
      "Our philosophy extends beyond our startup accelerator as we champion the principles of open innovation, collaborating with a network of industry leaders and investors dedicated to fostering a global ecosystem for startup success. Our carefully curated startup ecosystem partners provide invaluable resources and expertise, from funding opportunities to market access strategies. These strategic startup partnerships create a powerful synergy, fostering a collaborative environment where your startup can flourish on a global stage.",
    image: "/icons/philosphy.svg",
    title: "Our Philosophy",
    order: 2,
  },
];
