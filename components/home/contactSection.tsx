/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import "../../styles/home.css";
import ColoredSpan from "../shared/coloredSpan";
import ContainedButton from "../shared/containedButton";
import HeadingDescription from "../shared/headingDescription";
import SectionTitle from "../shared/sectionTitle";

const ContactSection = () => {
  return (
    <section className="relative flex flex-col items-center gap-9 justify-center" style={{ backgroundImage: `url('/images/noise.png')` }}>
      <div
        className="absolute inset-0 z-5 mix-blend-color-dodge bg-no-repeat bg-contain bg-center"
        style={{ backgroundImage: `url('/images/large-gradient.png')` }}
      ></div>

      <img
        src="/images/home-contact-pattern.png"
        alt="gradient"
        className="absolute z-[-1] object-contain h-full w-full"
      />
      <div className="flex sm:gap-7 gap-9 flex-col mt-16">
        <SectionTitle className="w-[343px] laptop:w-[430px] leading-10 mx-auto">
          <ColoredSpan className="text-white sm:text-[56px]">
            {" "}
            Have an idea?
          </ColoredSpan>
          <br />
          <ColoredSpan className="with-underlines text-orange">
            {" "}
            Let&rsquo;s talk
          </ColoredSpan>
        </SectionTitle>

        <HeadingDescription className="sm:w-[66.43%] w-full mx-auto text-[18px] px-6 laptop:text-[16px] font-[300!important]">
          Join our vibrant community and let&apos;s turn your innovative ideas
          into the next generation of groundbreaking startups
        </HeadingDescription>
          <Link href='/contact' >
        <ContainedButton className="relative w-full laptop:w-fit m-auto mb-[113px] flex items-center justify-center laptop:mb-[187.5px] sm:w-fit tracking-wide text-white font-normal">
          Get Started{" "}
        </ContainedButton>
          </Link>
      </div>
    </section>
  );
};

export default ContactSection;
