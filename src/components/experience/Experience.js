import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Experience = () => {
  return (
    <section id="experience" className="w-full h-[800px]">
      <div className="font-bodyFont">
        <div className="flex group rounded-lg p-3 hover:bg-white hover:bg-opacity-5 cursor-pointer">
          <p className="font-bodyFont text-gray-300 text-md w-full">2 months</p>
          <div className=" text-gray-400 font-light">
            <div className="mx-5">
              <p className="font-medium text-gray-300 flex items-end group-hover:text-designColor">
                Mobile Application · Front-End{" "}
                <span className="group-hover:-translate-y-1 group-hover:translate-x-0.5 ">
                  <FiArrowUpRight />
                </span>
              </p>
              <p>
                It is an internship project undertaken at the company Icute
                thinkbeyond with a focus on developing a mobile application
                designed to enable face scanning for the purpose of face
                verification for attendance.
              </p>
            </div>
            <div className="flex mt-5 justify-end">
              <div className="bg-designColor bg-opacity-20 rounded-full py-0.5 px-1 mr-1">
                <span className=" text-designColor font-medium text-xs">
                  React
                </span>
              </div>
              <div className="bg-designColor bg-opacity-20 rounded-full py-0.5 px-2 mr-1">
                <span className=" text-designColor font-medium text-xs">
                  React Native
                </span>
              </div>
              <div className="bg-designColor bg-opacity-20 rounded-full py-0.5 px-2 mr-1">
                <span className=" text-designColor font-medium text-xs">
                  JavaScript
                </span>
              </div>
              <div className="bg-designColor bg-opacity-20 rounded-full py-0.5 px-2 mr-1">
                <span className=" text-designColor font-medium text-xs">
                  HTML
                </span>
              </div>
              <div className="bg-designColor bg-opacity-20 rounded-full py-0.2 px-2 mr-1">
                <span className=" text-designColor font-medium text-xs">
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
