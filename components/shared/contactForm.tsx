import React from "react";
import SectionTitle from "./sectionTitle";
import ColoredSpan from "./coloredSpan";
import HeadingDescription from "./headingDescription";

function ContactForm() {
  return (
    <div className="grid grid-cols-1 gap-5 place-content-center h-full lg:px-16 px-3">
      <SectionTitle className="lg:text-start text-center">
        <ColoredSpan className="text-white laptop:text-5xl text-3xl">
          Let’s level up your brand, together
        </ColoredSpan>
      </SectionTitle>
      <HeadingDescription className="text-[16px] lg:text-start text-center mt-[-28px]">
        You can reach us anytime via{" "}
        <span className="text-orange">info@e3.ventures</span>
      </HeadingDescription>
      
      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="flex gap-7 flex-col">
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </p>
        <p>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}

export default ContactForm;
