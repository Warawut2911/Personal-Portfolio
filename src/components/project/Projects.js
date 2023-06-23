import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineLink } from "react-icons/ai";
import faceverification from "../../assets/images/face-verification.png";
import g1 from "../../assets/images/g1.png";

const Projects = () => {
  return (
    <section id="projects" className="w-full h-[800px]">
      <div className="font-bodyFont">
        {/* project1 */}
        <div className="flex group rounded-lg p-3 hover:bg-white hover:bg-opacity-5 cursor-pointer my-2">
          <p className="font-bodyFont text-gray-300 text-md w-full">
            <img
              src={faceverification}
              alt="faceverification"
              className="w-[80%] rounded-lg mt-1"
            />
          </p>
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
            </div>
            <div className="flex mt-2 justify-end">
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
        {/* project2 */}
        <div className="flex group rounded-lg p-3 hover:bg-white hover:bg-opacity-5 cursor-pointer">
          <p className="font-bodyFont text-gray-300 text-md w-full">
            <img src={g1} alt="g1" className="rounded-md mt-1 w-full" />
          </p>
          <div className=" text-gray-400 font-light">
            <div className="mx-5">
              <p className="font-medium text-gray-300 flex  group-hover:text-designColor">
                Web Application for Anarahoo Homestay
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
            </div>

            <div className="flex mt-2 ml-4">
              <div className="bg-designColor bg-opacity-20 rounded-full py-0.5 px-1 mr-1">
                <span className=" text-designColor font-medium text-xs">
                  React
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
              <div className="bg-designColor bg-opacity-20 rounded-full py-0.2 px-2 mr-1">
                <span className=" text-designColor font-medium text-xs">
                  MySQL
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
