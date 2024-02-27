"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-9">
        <h5 className="text-xl font-bold text-white my-2">Get In Touch</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Whether you have a question or just want to say hi, I&apos;ll try my
          best to get back to you!
        </p>
        <div className="socials flex flex-row gap-4">
          <Link href="https://github.com/trishateh/" target="_blank">
            <FaGithub className="h-10 w-10 text-[#ADB7BE] hover:text-white" />
          </Link>
          <Link href="https://linkedin.com/in/trishateh/" target="_blank">
            <FaLinkedin className="h-10 w-10 text-[#ADB7BE] hover:text-white" />
          </Link>
        </div>
      </div>
      <div>
        <form
          className="flex flex-col"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="example@email.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
