import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { navLinksdata } from '../../constants';

const Navbar = () => {

    const [text] = useTypewriter({
    words: ["Front-End Developer.", "UX/UI Designer."],
    loop: false,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="flex h-screen px-[120px] bg-gray-900">
      {/* Navbar */}
      <div className="w-1/2 bg-gray-900 text-white pl-[96px] pt-[95px]">
        <h1 className="text-6xl font-bold text-white">
            Hi, i'm{" "}
            <span className="text-designColor capitalize">Warawut Suriyachareon</span>
          </h1>
          <h2 className="text-3xl font-bodyFont text-white mt-10">
            Wanna be a <span className='text-designColor'>{text}</span>
            <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#ff014f"
            />
          </h2>

        <div>
            {/* Navbar content */}
            <ul className='pt-[50px]'>
                {navLinksdata.map(({_id, title, link}) => (
                    <li key={_id}>
                        <span className="w-[30px] text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                            {title}
                            <span className="w-[30px] h-[3px] bg-designColor inline-flex absolute -left-10 bottom-2  group-hover:translate-x-0 transition-transform duration-300">
                            </span>
                        </span>
                    </li>
                    
                ))}
            </ul>
        </div>
      </div>

      <div className='px-[16px] bg-gray-900 '></div>

      {/* Content */}
      <div className="w-1/2 bg-gray-900 pt-[91px] text-white">
        <h1 className="text-2xl font-bold p-4">Content</h1>
        {/* Content section */}
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Nulla ac purus sit amet nisi tincidunt vestibulum.</p>
          <p>Sed efficitur neque a leo fermentum, nec feugiat elit dignissim.</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
