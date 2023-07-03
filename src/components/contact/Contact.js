import React from "react";
import { MdOutgoingMail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact" className="">
      <div className="text-white h-full xl:h-[600px] ">
        <p className="font-bodyFont  font-medium">Contact Me</p>
        <p className="font-bodyFont text-gray-400">Get in touch</p>
        <div className="py-7 text-sm flex flex-row xl:flex-col gap-2 ">
          <div className="flex items-center gap-2 group hover:text-designColor mb-3">
            <p>
              <MdOutgoingMail size={25} />
            </p>
            <p className="hidden xl:block">warawut.suriyachareon@gmail.com</p>
          </div>
          <div className="flex items-center gap-2 group hover:text-designColor mb-3">
            <p>
              <AiFillGithub size={25} />
            </p>
            <p className="hidden xl:block">https://github.com/Warawut2911</p>
          </div>
          <div className="flex items-center gap-2 group hover:text-designColor mb-3">
            <p>
              <AiFillLinkedin size={25} />
            </p>
            <p className="hidden xl:block">
              https://www.linkedin.com/in/warawut-suriyachareon-849474280/
            </p>
          </div>
          <div className="flex items-center gap-2 group hover:text-designColor mb-3">
            <p>
              <IoLogoWhatsapp size={25} />
            </p>
            <p className="hidden xl:block">+66 090 671 3422</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
