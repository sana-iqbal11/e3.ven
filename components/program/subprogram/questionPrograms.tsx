/* eslint-disable @next/next/no-img-element */
import ContainedButton from "@/components/shared/containedButton";
import Link from "next/link";
import React from "react";

function QuestionPrograms() {
  return (
    <div className="border w-full max-w-7xl mx-auto rounded-2xl border-gray/20 xlaptop:p-10 p-7 bg-linear mb-20">
      <div className="flex -space-x-4 rtl:space-x-reverse justify-center mb-10">
        <img
        className="object-contain"
          src="/icons/Avatar.png"
          alt=""
        />
        <img
          className="relative object-contain"
          src="/icons/Avatar1.png"
          alt="/icons/Avatar1.png"
        />
        <img
        className="object-contain"
          src="/icons/Avatar2.png"
          alt="/icons/Avatar2.png"
        />
        
      </div>
      <div className="flex flex-col justify-center text-center items-center  text-white">

      <p className="text-xl mb-5">Still have questions?</p>
      <p className="text-lg font-light">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
      <ContainedButton className="sm:w-fit tracking-wide text-white font-normal w-full xlaptop:w-fit mt-10">
     <Link href="/contact">
      Get in touch
     </Link>
      </ContainedButton>
      </div>
    </div>
  );
}

export default QuestionPrograms;
