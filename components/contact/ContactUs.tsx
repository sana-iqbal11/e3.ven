/* eslint-disable @next/next/no-img-element */
import React from 'react'
import ContactForm from '../shared/contactForm'

function ContactUs() {
  return (
    <div className='pb-10 min-h-screen' >
    <div className="grid lg:grid-cols-5 grid-cols-1 h-auto border bg-purple border-white/20 rounded-lg max-w-[70rem] mx-auto gap-10">
      <div className="col-span-2 lg:block hidden">
        <img
          src="/icons/contact.jpg"
          alt="contact"
          className="rounded-l-lg object-cover w-full h-full"
        />
      </div>
      <div className="col-span-3 py-10">
        <ContactForm />
      </div>
    </div>
  </div>  )
}

export default ContactUs