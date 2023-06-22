import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";
import About from "../about/About";
import Experience from "../experience/Experience";
import Projects from "../project/Projects";
import Skill from "../skill/Skill";
import Contact from "../contact/Contact";

const Navbar = () => {
  const [text] = useTypewriter({
    words: ["Front-End Developer.", "UX/UI Designer."],
    loop: false,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="flex h-full px-[120px] pb-[30px] bg-gray-900 sticky top-0 ">
      {/* Navbar */}
      <div className="w-1/2 h-full bg-gray-900 text-white pl-[96px] pt-[95px] sticky top-0 ">
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
          <ul className="pt-[50px]">
            {navLinksdata.map(({ _id, title, link }) => (
              <li key={_id} className="pl-9 pt-3">
                <span className="w-[10px] text-xs font-bold relative hover:text-designColor duration-100 group cursor-pointer font-bodyFont">
                  <Link
                    activeClass="active"
                    to={link}
                    spy={true}
                    offset={-70}
                    duration={500}
                    className="uppercase tracking-[0.2em] transition-all duration-100 group-hover:pl-6"
                  >
                    {title}
                  </Link>
                  <span className="w-[30px] h-[3px] bg-designColor rounded-xl inline-flex absolute -left-10 bottom-1.5 group-hover:translate-x-0 group-hover:w-[60px] transition-all duration-100"></span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-[16px] bg-gray-900 "></div>

      {/* Content */}
      <div className="w-1/2 bg-gray-900 pt-[91px] pr-[90px] text-white">
        {/* Content section */}
        <div>
          <About />
          <Experience />
          <Projects />
          <Skill />
          <Contact />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Nulla ac purus sit amet nisi tincidunt vestibulum.</p>
          <p>
            Sed efficitur neque a leo fermentum, nec feugiat elit dignissim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
