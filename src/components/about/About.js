import React from "react";
import { BiSolidGraduation } from "react-icons/bi";

const About = () => {
  return (
    <section id="about" className="w-full h-[800px]">
      <div className="font-bodyFont px-[15px]">
        <p className="text-md leading-relaxed text-gray-400">
          I aspire to become a{" "}
          <span className="text-white no-underline hover:underline decoration-[#ff014f] underline-offset-[6px]">
            Front-End Developer
          </span>
          , aiming to acquire the necessary experience in website development
          with a particular emphasis on creating user-centered experiences and
          ensuring responsiveness.{" "}
        </p>
        <p className="mt-[30px] text-gray-400 text-md leading-relaxed">
          Furthermore, I am eager to expand my knowledge in the areas of
          developing scalable distribution systems, design principles, and
          prioritizing the creation and maintenance of well-structured and
          sustainable code.
        </p>
        <div className="py-[30px]">
          <p className="text-2xl font-bold text-gray-300 font-bodyFont">
            Qualification
          </p>
          <p className="text-sm text-gray-400">My personal journey</p>
        </div>
        <div className="flex flex-row items-center">
          <span className="text-xl">
            <BiSolidGraduation />
          </span>
          <div>
            <p className="pl-1 font-medium font-bodyFont">Education</p>
          </div>
        </div>
        <div>
          <div className="flex mt-2.5">
            <p className="font-light font-bodyFont text-gray-300 text-md">
              2019 - 2022
            </p>
            <div className="pl-[60px] text-gray-400 font-light">
              <p className="font-medium text-gray-300">Chiang Mai University</p>
              <p>B.S. Computer Science</p>
              <p>Minor in Marketing</p>
            </div>
          </div>
        </div>
        <div className="py-[60px]">
          <button>Download Button</button>
        </div>
      </div>
    </section>
  );
};

export default About;
