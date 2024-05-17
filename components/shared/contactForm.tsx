// components/ContactForm.tsx
"use client"
import React from 'react';

const ContactForm: React.FC = () => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });
      alert('Form successfully submitted');
    } catch (error) {
      alert('Form submission error');
    }
  };

  return (
    // <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
    //   <input type="hidden" name="form-name" value="contact" />
    //   <p hidden>
    //     <label>Don’t fill this out: <input name="bot-field" /></label>
    //   </p>
    //   <p>
    //     <label>Name: <input type="text" name="name" required /></label>
    //   </p>
    //   <p>
    //     <label>Email: <input type="email" name="email" required /></label>
    //   </p>
    //   <p>
    //     <label>Message: <textarea name="message" required></textarea></label>
    //   </p>
    //   <p>
    //     <button type="submit">Send</button>
    //   </p>
    // </form>
    <></>
  );
};

export default ContactForm;
