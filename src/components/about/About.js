import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full h-[800px]">
      <div>
        <p className="text-lg leading-relaxed text-gray-400">
          I aspire to become a{" "}
          <span className="text-white no-underline hover:underline decoration-[#ff014f]">
            Front-End Developer
          </span>
          , aiming to acquire the necessary experience in website development
          with a particular emphasis on creating user-centered experiences and
          ensuring responsiveness.{" "}
        </p>
        <p className="mt-[30px] text-gray-400 text-lg leading-relaxed">
          Furthermore, I am eager to expand my knowledge in the areas of
          developing scalable distribution systems, design principles, and
          prioritizing the creation and maintenance of well-structured and
          sustainable code.
        </p>
      </div>
    </section>
  );
};

export default About;
