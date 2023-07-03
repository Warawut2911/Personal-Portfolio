import React from "react";
import { MdOutgoingMail, MdContactEmergency } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact" className="h-full xl:h-[800px] pt-[100px] xl:py-0">
      <div>
        <p className="font-bodyFont  font-medium flex text-white gap-1">
          <p className="text-white text-xl">
            <MdContactEmergency />
          </p>
          Contact Me
        </p>
        <p className="font-bodyFont text-gray-400 text-xs">Get in touch</p>
        <div className="py-7 text-sm flex flex-row xl:flex-col gap-2 ">
          <div className="flex items-center gap-2 group hover:text-designColor mb-3">
            <a href="mailto:warawut.suriyachareon@gmail.com">
              <MdOutgoingMail size={25} />
            </a>
            <a
              className="hidden xl:block"
              href="mailto:warawut.suriyachareon@gmail.com"
            >
              warawut.suriyachareon@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 group hover:text-designColor mb-3">
            <a
              href="https://github.com/Warawut2911"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub size={25} />
            </a>
            <a
              href="https://github.com/Warawut2911"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:block"
            >
              https://github.com/Warawut2911
            </a>
          </div>
          <div className="flex items-center gap-2 group hover:text-designColor mb-3">
            <a
              href="https://www.linkedin.com/in/warawut-suriyachareon-849474280/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size={25} />
            </a>
            <a
              className="hidden xl:block"
              href="https://www.linkedin.com/in/warawut-suriyachareon-849474280/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/warawut-suriyachareon-849474280/
            </a>
          </div>
          <div className="flex items-center gap-2 group hover:text-designColor mb-3">
            <a href="mailto:warawut.suriyachareon@gmail.com">
              <IoLogoWhatsapp size={25} />
            </a>
            <a
              href="mailto:warawut.suriyachareon@gmail.com"
              className="hidden xl:block"
            >
              +66 090 671 3422
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
