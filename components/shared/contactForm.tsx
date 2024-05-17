"use client"
import React, { useState } from "react";
import SectionTitle from "./sectionTitle";
import ColoredSpan from "./coloredSpan";
import HeadingDescription from "./headingDescription";

function ContactForm() {
    const [status, setStatus] = useState("");
    const [error, setError] = useState("");

    const handleFormSubmit = async (event : any) => {
        event.preventDefault();
        try {
            setStatus('pending');
            setError("error");
            const myForm = event.target;
            const formData = new FormData(myForm);
            const res = await fetch('/public/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData.toString())
            });
            if (res.status === 200) {
                setStatus('ok');
            } else {
                setStatus('error');
                setError(`${res.status} ${res.statusText}`);
            }
        } catch (e) {
            setStatus('error');
            setError(`${e}`);
        }
    };

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

      <form
                    name="contact"
                    method="POST" data-netlify="true"
                    onSubmit={handleFormSubmit}
                    className="text-black flex flex-col gap-3 align-center"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <input name="name" type="text" placeholder="Name" required className="input input-bordered" />
                    <input name="email" type="text" placeholder="Email (optional)" className="input input-bordered" />
                    <input name="message" type="text" placeholder="Message" required className="input input-bordered" />
                    <button className="btn btn-primary" type="submit" disabled={status === 'pending'}>
                        Submit
                    </button>
                    {status === 'ok' && (
                        <div className="alert alert-success">
                            Submitted!
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="alert alert-error">
                            {error}
                        </div>
                    )}
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
  name: string;
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
