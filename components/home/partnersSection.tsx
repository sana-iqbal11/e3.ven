"use client"
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import "../../styles/home.css";
import Chip from "../shared/chip";
import ColoredSpan from "../shared/coloredSpan";
import SectionTitle from "../shared/sectionTitle";

const PartnersSection = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 975);
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const partnersArray = [
        // { icon: "/icons/partner3-icon.png", vertical: false },
        { icon: "/icons/partner1-icon.png", vertical: false },
        // { icon: "/icons/partner2-icon.png", vertical: true },
    ];

    const PartnerBox = ({ icon, vertical, orderClass }: { icon: string; vertical: boolean; orderClass: any }) => (
        <div
            className={`flex justify-center items-center  h-[100px] border-gray border-[1px] rounded-[15px] ${orderClass}`}
        >
            <img src={icon} alt="icon" className="w-[80%] object-contain h-[53%]" />
        </div>
    );

    return (
        <section className="relative" style={{ backgroundImage: `url('/images/noise.png')` }} >
            <Chip>Partners</Chip>
            <SectionTitle className="w-[343px] laptop:w-[430px]">
                <ColoredSpan className="text-white">Success</ColoredSpan>
                <ColoredSpan className="text-orange"> Partners</ColoredSpan>
            </SectionTitle>

            <div className="grid laptop:grid-cols-1 justify-center grid-cols-1  items-center gap-[50px] mt-[30px]">
                {partnersArray.map(({ icon, vertical }, index) => {
                    const orderClass = isSmallScreen && (index === 0 ? "order-last" : index === 2 ? "order-first" : "");
                    return <PartnerBox vertical={vertical} icon={icon} orderClass={orderClass} key={index} />;
                })}
            </div>
        </section>
    );
};

export default PartnersSection;
