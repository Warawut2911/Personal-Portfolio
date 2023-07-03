import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";
import About from "../about/About";
import Experience from "../experience/Experience";
import Projects from "../project/Projects";
import Skill from "../skill/Skill";
import Contact from "../contact/Contact";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

const Navbar = () => {
  const [text] = useTypewriter({
    words: ["Front-End Developer.", "UX/UI Designer."],
    loop: false,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="xl:flex w-full h-full xl:px-[120px] pb-[30px] bg-gray-900 ">
      {/* Navbar */}
      <nav className="xl:w-1/2 w-3/4 h-full bg-gray-900 text-white xl:pl-[96px] pl-[80px] pt-[95px] xl:sticky top-0 ">
        <h1 className="text-5xl font-bold text-gray-300 font-bodyFont">
          Warawut Suriyachareon{" "}
          {/* <span className="text-designColor capitalize">Warawut Suriyachareon</span> */}
        </h1>
        <h2 className="text-xl font-bodyFont text-gray-400 mt-10">
          Wanna be a{" "}
          <span className="text-designColor font-bodyFont">{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>

        <div>
          {/* Navbar content */}
          <ul className="pt-[50px] hidden xl:block">
            {navLinksdata.map(({ _id, title, link }) => (
              <li key={_id} className=" pt-3">
                <span className="w-[10px] text-xs font-bold relative hover:text-designColor duration-100 group cursor-pointer font-bodyFont">
                  <Link
                    activeClass="active"
                    smooth={true}
                    to={link}
                    spy={true}
                    offset={-70}
                    duration={500}
                    className="uppercase tracking-[0.2em] transition-all duration-100 group-hover:pl-6"
                  >
                    {title}
                  </Link>
                  {/* <span className="w-[30px] h-[3px] bg-designColor rounded-xl inline-flex absolute -left-10 bottom-1.5 group-hover:translate-x-0 group-hover:w-[60px] transition-all duration-100"></span> */}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="group flex gap-3 my-9 cursor-pointer">
          <div className="hover:text-designColor text-opacity-0">
            <a
              className="text-2xl"
              href="https://github.com/Warawut2911"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
          </div>
          <div className="hover:text-designColor">
            <a
              className="text-2xl"
              href="https://www.linkedin.com/in/warawut-suriyachareon-849474280/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="hover:text-designColor">
            <a
              className="text-2xl"
              href="https://www.facebook.com/Warawut.su"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="xl:w-1/2 w-3/4 h-full xl:pt-[95px] pr-[10px] text-white pl-[80px]">
        {/* Content section */}
        <div>
          <About />
          <Experience />
          <Projects />
          <Skill />
          <Contact />
          <p className="text-center text-gray-400">
            © 2023. All rights reserved by Warawut_s
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
