import React from "react";
import Header from "@/components/base/header";
import AllBlogPosts from "@/components/blog/AllBlogPosts";
import RecentBlogsection from "@/components/blog/RecentBlogsection";
import ColoredSpan from "@/components/shared/coloredSpan";
import ContainedButton from "@/components/shared/containedButton";
import HeadingDescription from "@/components/shared/headingDescription";
import SectionTitle from "@/components/shared/sectionTitle";
import Footer from "@/components/base/footer";
import Link from "next/link";

function Blog() {
  return (
    <div className="relative" style={{ backgroundImage: `url('/images/noise.png')` }}>
    <main className="text-white  lg:max-w-7xl xl:px-0 px-5 mx-auto">
      <div className="mb-10">
        <Header />
      </div>
      <SectionTitle className="text-center">
        <ColoredSpan className="text-white">Title Here</ColoredSpan>
      </SectionTitle>
      <HeadingDescription className="laptop:w-[75%] mx-auto text-[16px] pb-12">
        Subscribe to learn about new product features, the latest in technology,{" "}
        <br /> solutions, and updates.
      </HeadingDescription>
      <form className="mb-20">
        <div className="flex sm:flex-row flex-col gap-3 justify-center items-start ">
          <div className="mb-6 xl:w-[25%] lg:w-[35%] sm:w-[45%] w-full">
            <input
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-gray-700 block w-full p-[11.1px]"
              placeholder="Enter your email"
              required
            />
            <div>
              <p className="text-sm mt-1">
                We care about your data in our{" "}
                <span className="border-b">
                  <Link href="/privacypolicy">privacy policy</Link>
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center sm:w-fit w-full">
            <ContainedButton className="mb-[39px] laptop:mb-[30px] laptop:w-fit tracking-wide text-white font-normal w-full ">
              Subscribe{" "}
            </ContainedButton>
          </div>
        </div>
      </form>
      <div>
        {/* <RecentBlogsection /> */}
        {/* <AllBlogPosts/> */}
      </div>
      <Footer/>
    </main>

    </div>
  );
}

export default Blog;
