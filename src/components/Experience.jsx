import React from "react";
import { experiences } from "../../constant";
import Reveal from "./Reveal";

const Experience = () => {
  return (
    <Reveal>
      <section
      id="experience"
      className="py-24 pb-24 px-[10vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom2"
    >
      <div className="text-center mb-16">
        <h2 className="border-b-4 border-purple-700 pb-3 text-white text-4xl font-bold ">
          Experience
        </h2>
        <p className="text-gray-400 text-lg mt-4 font-semibold ">
          This is the collection of my work experince and the roles that i have
          taken .
        </p>
      </div>

      {/* experience timeline */}
      <div className="relative">
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2  w-1 bg-white h-full"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row mb-20 relative ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/*timeline circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/*content section*/}
            <div
              className={`w-full sm:max-w-md sm:p-8 rounded-2xl border border-white bg-gray-900 p-4 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-[55%]" : "sm:mr-[55%]"
              } ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/*flex container for image and text */}

              <div className=" flex items-center space-x-6">
                {/*company logo */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/*role company name and date */}
                <div className="flex flex-col justify-center">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-blue-100">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300 ">
                      {experience.company}
                    </h4>
                  </div>

                  {/*date*/}
                  <p className="text-sm text-gray-500 mt-2">
                    {experience.date}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 ">{experience.desc}</p>
              <div className="mt-4">
                {" "}
                <h5 className="font-medium text-white ">Skills :</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#a68cd7] font-semibold px-4 py-1 text-xs sm:text-sm rounded-lg border border-gray-400 mr-2 mb-2 not-first:  "
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </Reveal>
  );
};

export default Experience;
