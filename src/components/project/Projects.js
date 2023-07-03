import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineLink } from "react-icons/ai";
import faceverification from "../../assets/images/face-verification.png";
import g1 from "../../assets/images/g1.png";

const Projects = () => {
  return (
    <section id="projects" className="">
      <div className="font-bodyFont h-full xl:h-[800px]">
        <p className="xl:hidden text-xl">Project</p>
        {/* project1 */}
        <div className="xl:flex group rounded-lg p-3 hover:bg-white hover:bg-opacity-5 cursor-pointer">
          <p className="w-full mt-7">
            <img
              src={faceverification}
              alt="faceverification"
              className="rounded-lg max-h-[200px] "
            />
          </p>
          <div className=" text-gray-400 font-light">
            <div className="xl:pl-[40px]">
              <p className="font-medium text-gray-300 flex items-end group-hover:text-designColor my-5">
                Mobile Application · Front-End{" "}
                <span className="group-hover:-translate-y-1 group-hover:translate-x-0.5 hidden xl:block">
                  <FiArrowUpRight />
                </span>
              </p>
              <p>
                It is an internship project undertaken at the company Icute
                thinkbeyond with a focus on developing a mobile application
                designed to enable face scanning for the purpose of face
                verification for attendance.
              </p>
              <a
                href="https://github.com/Warawut2911/FaceVerification"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm my-5 font-medium"
              >
                <span>
                  <AiOutlineLink />
                </span>
                <span className="mx-0.5">Source Code</span>
              </a>
              <div className="flex group gap-1">
                <span className=" text-designColor font-medium text-xs bg-designColor bg-opacity-20 rounded-full p-1 ">
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
        {/* project2 */}
        <div className="xl:flex group rounded-lg p-3 hover:bg-white hover:bg-opacity-5 cursor-pointer my-9 ">
          <p className="w-full mt-7">
            <img src={g1} alt="g1" className="rounded-lg max-h-[200px] " />
          </p>
          <div className=" text-gray-400 font-light ">
            <div className="xl:pl-[40px]">
              <p className="font-medium text-gray-300 flex  group-hover:text-designColor my-5">
                Web Application for Anarahoo Homestay
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

              <a
                href="https://github.com/Warawut2911/Project499"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm my-5 font-medium"
              >
                <span>
                  <AiOutlineLink />
                </span>
                <span className="mx-0.5">Source Code</span>
              </a>
              <div className="flex group gap-1">
                <span className=" text-designColor font-medium text-xs bg-designColor bg-opacity-20 rounded-full p-1 ">
                  React
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
                <span className=" text-designColor font-medium text-xs bg-designColor bg-opacity-20 rounded-full p-1 ">
                  MySQL
                </span>
                <span className=" text-designColor font-medium text-xs bg-designColor bg-opacity-20 rounded-full p-1 ">
                  NodeJS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
