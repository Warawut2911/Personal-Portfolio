import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { BsPersonWorkspace } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience" className="">
      <div className="font-bodyFont h-full xl:h-[800px]">
        <p className="xl:hidden my-5 flex items-center gap-1 font-medium">
          <p className="text-xl">
            <BsPersonWorkspace />
          </p>
          Experience
        </p>
        <div className="xl:flex group rounded-lg  hover:bg-white hover:bg-opacity-5 cursor-pointer p-3">
          <p className="font-bodyFont text-gray-300 text-md w-full">2 months</p>
          <div className=" text-gray-400 font-light">
            <div className="xl:pl-[40px]">
              <p className="font-medium text-gray-300 flex items-end group-hover:text-designColor mb-5">
                Mobile Application · Front-End{" "}
                <span className="group-hover:-translate-y-1 group-hover:translate-x-0.5 hidden xl:block ">
                  <FiArrowUpRight />
                </span>
              </p>
              <p>
                It is an internship project undertaken at the company Icute
                thinkbeyond with a focus on developing a mobile application
                designed to enable face scanning for the purpose of face
                verification for attendance.
              </p>
              <div className="flex group gap-1 mt-5 xl:">
                <span className=" text-designColor font-medium text-xs bg-designColor bg-opacity-20 rounded-full p-1">
                  React
                </span>
                <span className=" text-designColor font-medium text-xs bg-designColor bg-opacity-20 rounded-full p-1 ">
                  React Native
                </span>
                <span className=" text-designColor font-medium text-xs bg-designColor bg-opacity-20 rounded-full p-1 ">
                  JavaScript
                </span>
                <span className=" text-designColor font-medium text-xs bg-designColor bg-opacity-20 rounded-full p-1 ">
                  HTML
                </span>
                <span className=" text-designColor font-medium text-xs bg-designColor bg-opacity-20 rounded-full p-1 ">
                  CSS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
