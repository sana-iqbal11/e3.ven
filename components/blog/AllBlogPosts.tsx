"use client";
import React, { useState } from "react";
import SectionTitle from "../shared/sectionTitle";
import ColoredSpan from "../shared/coloredSpan";
import { RiArrowRightFill } from "react-icons/ri";
import { RiArrowLeftFill } from "react-icons/ri";
import Cards from "../shared/cards";

const blogPosts = [
  {
    image: "/icons/blogpost.png",
    publish: "Abdallah Adel • 03 April 2024",
    title: "Bill Walsh leadership lessons",
    desc:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
  },
  {
    image: "/icons/blogpost.png",
    publish: "Abdallah Adel • 03 April 2024",
    title: "Bill Walsh leadership lessons",
    desc:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
  },
  {
    image: "/icons/blogpost.png",
    publish: "Abdallah Adel • 03 April 2024",
    title: "Bill Walsh leadership lessons",
    desc:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
  },
  {
    image: "/icons/blogpost.png",
    publish: "Abdallah Adel • 03 April 2024",
    title: "Bill Walsh leadership lessons",
    desc:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
  },
  {
    image: "/icons/blogpost.png",
    publish: "Abdallah Adel • 03 April 2024",
    title: "Bill Walsh leadership lessons",
    desc:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
  },
  {
    image: "/icons/blogpost.png",
    publish: "Abdallah Adel • 03 April 2024",
    title: "Bill Walsh leadership lessons",
    desc:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
  },
  {
    image: "/icons/blogpost.png",
    publish: "Abdallah Adel • 03 April 2024",
    title: "Bill Walsh leadership lessons",
    desc:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
  },
];

function AllBlogPosts() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total number of pages dynamically
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const handlePageClick = (pageNumber: number, event: any) => {
    event.preventDefault(); // Prevent default behavior of anchor tag
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mb-9 mt-12">
      <SectionTitle className="text-start">
        <ColoredSpan className="text-white text-2xl">
          All blog posts{" "}
        </ColoredSpan>
      </SectionTitle>
      <div className="grid laptop:grid-cols-3 grid-cols-1 gap-8">
        {currentPosts.map((post, index) => (
          <Cards
            key={index}
            image={post.image}
            title={post.title}
            publish={post.publish}
            desc={post.desc}
          />
        ))}
      </div>
      <hr className="mt-12 mb-5 border-[0.2px] border-t-0 text-white/20" />
      <nav>
        <ul className="grid laptop:grid-cols-7 grid-cols-3 pb-32 items-center justify-between w-full text-sm bg-transparent">
          <li className="laptop:col-span-3 text-orange">
            <a
              href="#"
              onClick={(event) => handlePageClick(currentPage - 1, event)}
              className={`bg-transparent ${
                currentPage === 1 ? "pointer-events-none" : ""
              }`}
            >
              <p className="flex items-center text-lg gap-3">
                <RiArrowLeftFill />
                <span className="laptop:flex hidden text-lg  flex-row items-center">
                  Previous
                </span>
              </p>
            </a>
          </li>
          <div className="flex justify-center px-2 laptop:col-span-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <li key={pageNumber}>
                  <a
                    href="#"
                    onClick={(event) => handlePageClick(pageNumber, event)}
                    className={`laptop:flex hidden items-center justify-center py-2 px-4 
                    ${
                      currentPage === pageNumber ? "bg-orange rounded-lg" : ""
                    }`}
                  >
                    {pageNumber}
                  </a>
                </li>
              )
            )}
            <p className="text-orange laptop:hidden flex">
              Page {currentPage} of {totalPages}
            </p>
          </div>
          <li className=" text-orange laptop:col-span-3">
            <a
              href="#"
              onClick={(event) => handlePageClick(currentPage + 1, event)}
              className={`flex flex-row justify-end bg-transparent ${
                currentPage === totalPages ? "pointer-events-none" : ""
              }`}
            >
              <p className="flex items-center  text-lg gap-3">
                <span className="laptop:flex hidden text-lg  flex-row items-center">
                  Next
                </span>

                <RiArrowRightFill />
              </p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AllBlogPosts;
