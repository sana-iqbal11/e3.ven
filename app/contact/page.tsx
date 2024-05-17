/* eslint-disable @next/next/no-img-element */
import Header from "@/components/base/header";
import ContactUs from "@/components/contact/ContactUs";
import ContactForm from "@/components/shared/contactForm";
import React from "react";
import Footer from "@/components/base/footer";

function page() {
  return (
    <div
      className="relative"
      style={{ backgroundImage: `url('/images/noise.png')` }}
    >
      <main className="text-white  lg:max-w-7xl xl:px-0 px-5 mx-auto">
        <div className="mb-10">
          <Header />
        </div>
         <ContactUs/>
         <Footer/>
      </main>
    </div>
  );
}

export default page;
