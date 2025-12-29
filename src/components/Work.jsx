import React from "react";
import { projects } from "../../constant";
import Reveal from "./Reveal";

const Work = () => {
  const handleClick = () => {
    <a
      href="https://newstoday-rho.vercel.app/"
      rel="noopener noreferrer"
      target="_blank"
    />;
  };

  return (
    <Reveal>
      <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative clip-path-custom2"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold border-b-4 border-purple-500 pb-3 text-white">Projects</h2>
        
        <p className="text-gray-400 mt-4 text-lg font-semibold ">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>
      {/*Project Grid */}
      <div className="grid gap-12 grid-col-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 hover:scale-110 transition-transform duration-300"
          >
            <div className="p-4">
              <a
                href={project.webapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </a>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-5 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs  font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </Reveal>
  );
};

export default Work;
