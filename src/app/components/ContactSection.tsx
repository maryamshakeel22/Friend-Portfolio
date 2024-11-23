"use client";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import React, { useRef } from "react";
import Link from "next/link";
import { FaBehance, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const EmailSection = () => {
  const notify = () => toast("Message send successfully! ✅");
  const form = useRef<HTMLFormElement | null >(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        'service_671kt4p',  
        'template_6elhx65', 
        form.current,
        'tNFjWCLIq7ERpyJam' 
      ).then(() => {
        notify();
      }).catch((error) => {
        console.error("Error sending email:", error);
      });
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col ">
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 px-8 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p><br />
        <div className="pb-10 text-white">
        <span className="bold"><p><MdEmail size={26} />Email: fatimaaparveen985@gmail.com</p> <br /></span>
        <span className="bold"><FaPhone size={26} />Phone no:</span> 0327 1733985
        </div>
        <div className="flex justify-center ml-26">
            <button className="inline-flex text-white bg-blue-600 border-1 py-2 px-4 focus:outline-none hover:bg-blue-400 text-lg rounded-full animate-bounce">
              <Link href="https://www.behance.net/fatimaparveen1"> 
                <FaBehance size={26} />
              </Link>
            </button>
            <button className="ml-4 inline-flex text-white bg-blue-600 border-1 py-2 px-4 focus:outline-none hover:bg-blue-400 text-lg rounded-full animate-bounce">
              <Link href="https://www.linkedin.com/in/fatima-malik-bba915335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <FaLinkedin size={26} />
              </Link>
            </button> 
          </div>
      </div>
      <div>
          {/* <form ref={form} onSubmit={sendEmail} className="flex flex-col "> */}
            <div className="mb-6">
              <label
                htmlFor=""
                className="text-white block mb-2 text-sm font-medium"
              >
                Your Name
              </label>
              <input
                name="name"
                type="text"
                id="example"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block text-sm mb-2 font-medium"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                id="exampleInput91"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="abc@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
            {/* <ToastContainer />
          </form> */}
      </div>
    </section>
    <ToastContainer />
    </form>
  );
};

export default EmailSection;
