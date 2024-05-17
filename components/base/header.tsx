"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "../svg/logo";
import { FaTimes } from "react-icons/fa";
import ContainedButton from "../shared/containedButton";
import ImageButton from "../shared/imageButton";
import TextButton from "../shared/textButton";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className="
      relative h-[72px] laptop:h-[88px] w-full max-w-7xl mx-auto top-[0px] left-[0px] 
      flex justify-between items-center z-[100] text-white
    "
    >
      <div className="flex items-center">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div
        className={`flex items-center gap-[24px] ${
          isMenuOpen ? "" : "hidden"
        } xlaptop:flex`}
      >
        <Link href="/process">
          <TextButton className={path === "/process" ? "text-orange" : ""}>
            Process
          </TextButton>
        </Link>
        <Link href="/about">
          <TextButton className={path === "/about" ? "text-orange" : ""}>
            About Us
          </TextButton>
        </Link>
        <Link href="/blog">
          <TextButton className={path === "/blog" ? "text-orange" : ""}>
            Blog
          </TextButton>
        </Link>{" "}
        <Link href="/programs">
          <TextButton className={path === "/programs" ? "text-orange" : ""}>
            Programs
          </TextButton>
        </Link>{" "}
      </div>
      <Link href="/contact">
        <ContainedButton
          className={`hidden xlaptop:block ${isMenuOpen ? "block" : "hidden"}`}
        >
          Contact Us
        </ContainedButton>
      </Link>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 z-[200]">
          <div className="overlay-container">
            <div className="bg-darkBlue p-4 h-[100vh] w-full rounded shadow-lg menu-content">
              <div className="flex justify-between items-center mb-12">
                <Logo />
                <FaTimes
                  className="cursor-pointer text-white xlaptop:hidden"
                  onClick={closeMenu}
                />
              </div>
              <div className="flex flex-col gap-12">
                <Link href="/process">
                  <TextButton
                    className={path === "/process" ? "text-orange" : ""}
                  >
                    Process
                  </TextButton>
                </Link>
                <Link href="/about">
                  <TextButton
                    className={path === "/about" ? "text-orange" : ""}
                  >
                    About us
                  </TextButton>
                </Link>
                <Link href="/blog">
                  <TextButton className={path === "/blog" ? "text-orange" : ""}>
                    Blog
                  </TextButton>
                </Link>
                <Link href="/programs">
                  <TextButton className={path === "/programs" ? "text-orange" : ""}>
                    Programs
                  </TextButton>
                </Link>
                <Link href="/contact" className="relative" >
                  <ContainedButton>Contact Us</ContainedButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <ImageButton
        src="/icons/menu-icon.png"
        alt="menu"
        className="xlaptop:hidden w-[40px] aspect-square p-[8px]"
        onClick={toggleMenu}
      />
    </header>
  );
};

export default Header;
