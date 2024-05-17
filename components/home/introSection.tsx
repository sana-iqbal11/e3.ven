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

const IntroSection = () => {
  const scrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="intro"
      className="h-[812px] xlaptop:h-[870px] pt-[0px] pb-[0px] mb-[60px] xlaptop:mb-[0px]"
    >
        <Header/>
      <HeadingTitle
        className="
                    w-full xlaptop:w-[936px] 
                    mt-[244px] xlaptop:mt-[183px] 
                    mb-[40px] xlaptop:mb-[24px]

                "
      >
        <ColoredSpan className="text-white text-start">
          Empowering the Next <br /> Generation of
        </ColoredSpan>
        <ColoredSpan className="with-underline text-[#fe9602]">
          {" "}
          Innovators
        </ColoredSpan>
      </HeadingTitle>

      <HeadingDescription className="w-full xlaptop:w-[807px] mb-[32px] xlaptop:mb-[62px] text-[18px] xlaptop:text-[19px]">
        We nurture promising startups from vision to success
      </HeadingDescription>
       <Link href='/contact' >
      <ContainedButton className="mb-[113px] xlaptop:mb-[187.5px] sm:w-fit tracking-wide text-white font-normal w-full xlaptop:w-fit">
        Build With Us
      </ContainedButton>
       </Link>

      <p className="text-[12px] font-[600] opacity-[0.74] mb-[15px] text-white">
        Discover more
      </p>

      <a
        href="#support"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("support");
        }}
      >
        <img
          src="/icons/mouse-icon.png"
          alt="mouse"
          className="w-[23px] h-[36px] animate-bounce"
        />
      </a>
    </section>
  );
};

export default IntroSection;
