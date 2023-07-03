import React from "react";
import { BiSolidGraduation } from "react-icons/bi";
import { TbSend } from "react-icons/tb";

const About = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Warawut-CV.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Warawut-CV.pdf";
        alink.click();
      });
    });
  };

  return (
    <section id="about" className="h-full xl:h-[750px]">
      <div className="font-bodyFont">
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
        {/* <div className="py-[30px]">
          <p className="text-2xl font-bold text-gray-300 font-bodyFont">
            Qualification
          </p>
          <p className="text-sm text-gray-400">My personal journey</p>
        </div> */}
        <div className="flex flex-row items-center py-[20px]">
          <span className="text-xl">
            <BiSolidGraduation />
          </span>
          <div>
            <p className="pl-1 font-medium font-bodyFont">Education</p>
          </div>
        </div>
        <div>
          <div className="xl:flex mt-2.5">
            <p className="font-light font-bodyFont text-gray-300 text-md xl:my-0 my-2">
              2019 - 2022
            </p>
            <div className="xl:pl-[60px] text-gray-400 font-light">
              <p className="font-medium text-gray-300">Chiang Mai University</p>
              <p>B.S. Computer Science</p>
              <p>Minor in Marketing</p>
            </div>
          </div>
        </div>
        <div className="my-[60px]">
          <button
            onClick={onButtonClick}
            className=" w-full flex justify-center items-center gap-2 h-12
            bg-white bg-opacity-10 rounded-lg text-base text-gray-400
            tracking-wide hover:text-white duration-300 "
          >
            {" "}
            Download CV{" "}
            <span>
              <TbSend />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
