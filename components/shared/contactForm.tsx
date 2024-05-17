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
      
      <form name="contact" method="POST" data-netlify="true" className="flex gap-7 flex-col">
      <input type="hidden" name="form-name" value="contact" />

      <p>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
      </p>
      <p>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message"></textarea>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>

    </div>
  );
}

export default ContactForm;

const TextField = ({
  title,
  placeholder,
  type,
  name,
}: {
  title: string;
  placeholder: string;
  type: string;
  name:string
}) => {
  return (
    <div className="flex flex-col col-span-1 gap-5">
      <p className="text-themeDarkGreen text-sm font-semibold mb-[-9px]">
        {title}
      </p>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="border-b border-themeDarkGreen outline-none rounded-lg text-black text-sm focus:border-0"
      />
    </div>
  );
};

const PhoneField = ({
  title,
  placeholder,
  name,

}: {
  title: string;
  placeholder: string;
  name: string;
}) => {
  // Sample country codes list, you can replace it with your own list
  const countryCodes = [
    { code: "+966" },
    { code: "+20" },
    // Add more country codes as needed
  ];

  return (
    <div className="flex flex-col col-span-1 gap-5">
      <p className="text-themeDarkGreen text-sm font-semibold mb-[-9px]">
        {title}
      </p>
      <div className="flex items-center rounded-lg bg-white">
        <select className="border-0 bg-transparent  border-themeDarkGreen outline-none rounded-l-lg text-black text-sm">
          {countryCodes.map((country, index) => (
            <option key={index} value={country.code}>
              ({country.code})
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          className="border-none bg-transparent border-themeDarkGreen outline-none focus:outline-none rounded-r-lg text-black text-sm focus:border-0"
        />
      </div>
    </div>
  );
};
