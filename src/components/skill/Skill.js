import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { MdDesignServices } from "react-icons/md";

const Skill = () => {
  return (
    <section id="skill" className="h-full xl:h-[800px] pt-[100px] xl:py-0">
      <div className="font-bodyFont">
        <div className="group rounded-lg p-3 hover:bg-white hover:bg-opacity-5 cursor-pointer">
          <div className="mb-10 group-hover:text-designColor">
            <span className="font-medium font-bodyFont flex gap-1 items-center text-xl">
              <span>
                <CgWebsite />
              </span>
              Front-End Skill
            </span>
          </div>
          <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="">
              <div className="flex items-center gap-1">
                <span>
                  <BsFillCheckCircleFill />
                </span>
                <span>React</span>
              </div>
              <span className="text-xs ml-5 text-gray-400">Basic</span>
            </div>
            <div className="">
              <div className="flex items-center gap-1">
                <span>
                  <BsFillCheckCircleFill />
                </span>
                <span>HTML</span>
              </div>
              <span className="text-xs ml-5 text-gray-400">Basic</span>
            </div>
            <div className="">
              <div className="flex items-center gap-1">
                <span>
                  <BsFillCheckCircleFill />
                </span>
                <span>CSS</span>
              </div>
              <span className="text-xs ml-5 text-gray-400">Basic</span>
            </div>
            <div className="">
              <div className="flex items-center gap-1">
                <span>
                  <BsFillCheckCircleFill />
                </span>
                <span>JavaScript</span>
              </div>
              <span className="text-xs ml-5 text-gray-400">Basic</span>
            </div>
            <div className="">
              <div className="flex items-center gap-1">
                <span>
                  <BsFillCheckCircleFill />
                </span>
                <span>Tailwind CSS</span>
              </div>
              <span className="text-xs ml-5 text-gray-400">Basic</span>
            </div>
            <div className="">
              <div className="flex items-center gap-1">
                <span>
                  <BsFillCheckCircleFill />
                </span>
                <span>Git</span>
              </div>
              <span className="text-xs ml-5 text-gray-400">Basic</span>
            </div>
          </div>
        </div>

        <div className="mt-10 group rounded-lg p-3 hover:bg-white hover:bg-opacity-5 cursor-pointer ">
          <div className="mb-10 group-hover:text-designColor">
            <span className="font-medium font-bodyFont flex gap-1 items-center text-xl">
              <span>
                <MdDesignServices />
              </span>
              Design Skill
            </span>
          </div>
          <div className="grid grid-rows-2 grid-flow-col gap-4 ">
            <div className="">
              <div className="flex items-center gap-1">
                <span>
                  <BsFillCheckCircleFill />
                </span>
                <span>Figma</span>
              </div>
              <span className="text-xs ml-5 text-gray-400">Basic</span>
            </div>
            <div className="">
              <div className="flex items-center gap-1">
                <span>
                  <BsFillCheckCircleFill />
                </span>
                <span>Adobe Photoshop</span>
              </div>
              <span className="text-xs ml-5 text-gray-400">Basic</span>
            </div>
            <div className="">
              <div className="flex items-center gap-1">
                <span>
                  <BsFillCheckCircleFill />
                </span>
                <span>Adobe Illustrator</span>
              </div>
              <span className="text-xs ml-5 text-gray-400">Basic</span>
            </div>
            <div className="">
              <div className="flex items-center gap-1">
                <span>
                  <BsFillCheckCircleFill />
                </span>
                <span>Adobe XD</span>
              </div>
              <span className="text-xs ml-5 text-gray-400">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
