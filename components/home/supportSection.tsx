"use client";

import "../../styles/home.css";
import Chip from "../shared/chip";
import ColoredSpan from "../shared/coloredSpan";
import HeadingDescription from "../shared/headingDescription";
import SectionTitle from "../shared/sectionTitle";
import SupportBox from "./supportBox";
("../../libs/styles/home.css");

const SupportSection = () => {
  return (
    <section id="support" className="relative" style={{ backgroundImage: `url('/images/noise.png')` }}
    >
      
      <Chip >Services</Chip>
      <SectionTitle className="w-[343px] laptop:w-[430px]">
        <ColoredSpan className="text-white" >How We</ColoredSpan>
        <ColoredSpan className="text-orange"> Support</ColoredSpan>
      </SectionTitle>

      <HeadingDescription className="w-full sm:w-[343px]  laptop:w-[474px] mb-[40px] text-[18px] laptop:text-[19px]">
        Empowering Entrepreneurs through Funding, Mentorship, and Global Growth
        Opportunities
      </HeadingDescription>

      <div className="max-w-7xl mx-auto relative grid sm:grid-cols-3 grid-cols-1  gap-[24px] laptop:gap-0 justify-center w-full">
      <SupportBox
          icon="/icons/card1.png"
          mobileicon="/icons/accessmobile.png"
          title="Market Access & "
          secondtitle="Growth"
          text="Gain the tools and connections to scale your business on a global stage"
        />
        <SupportBox
          icon="/icons/card3.png"
          mobileicon="/icons/investingmobile.png"
          title="Funding &  "
          secondtitle="Investment"
          text="We provide the capital you need to turn your dream into reality"
        />
        <SupportBox
          icon="/icons/card2.png"
          mobileicon="/icons/guidancemobile.png"
          title="Mentorship & "
          secondtitle="Guidance"
          text="Benefit from the expertise of seasoned entrepreneurs and industry leaders"
        />
        
      </div>
    </section>
  );
};

export default SupportSection;
