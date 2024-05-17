import AllBlogPosts from "@/components/program/AllBlogPosts";
import IntroSection from "@/components/program/introSection";
import React from "react";
import Footer from "@/components/base/footer";

function Program() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start lg:max-w-7xl xl:px-0 px-5 mx-auto">
<IntroSection buttonText="Learn More" linkHref="/programs/acceleration-program" targetblank="_self"/>
    {/* <AllBlogPosts/> */}
    <Footer/>
</main>
  );
}

export default Program;
