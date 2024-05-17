import IntroSection from "@/components/program/introSection";
import GrowBusiness from "@/components/program/subprogram/growBusiness";
import QuestionPrograms from "@/components/program/subprogram/questionPrograms";
import ContainedButton from "@/components/shared/containedButton";
import Link from "next/link";
import React from "react";
import Footer from "@/components/base/footer";
import Head from "next/head";

function SubProgram() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start lg:max-w-7xl xl:px-0 px-5 mx-auto">
      <Head>
        <title>
          Startup Acceleration Program in Saudi Market | Accelerators in KSA |
          E3.Ventures
        </title>
        <meta
          name="description"
          content="Expand your startup in Saudi market with our 3-month acceleration program. E3 Ventures supports MENA entrepreneurs with essential resources. Apply to join our ecosystem now!"
        />
      </Head>
      <IntroSection
        buttonText="Apply Now"
        linkHref="https://docs.google.com/forms/d/1TM4wNrq0yJ-CQdUJR7dMxwbJ0M0v2x9oO3exbV1TbWs/edit?usp=drivesdk"
        targetblank="blank"
      />
      <div>
        <div className="sticky xlaptop:hidden z-10 top-[86%] pb-8 h-full bg-darkBlue w-full">
          <ContainedButton className="xlaptop:w-fit tracking-wide text-white font-normal w-full mt-10">
            <Link
              href="https://docs.google.com/forms/d/1TM4wNrq0yJ-CQdUJR7dMxwbJ0M0v2x9oO3exbV1TbWs/edit?usp=drivesdk"
              target="blank"
            >
              Apply Now
            </Link>
          </ContainedButton>
        </div>
        <GrowBusiness />
        <QuestionPrograms />
        <Footer />
      </div>
    </main>
  );
}

export default SubProgram;
