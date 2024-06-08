import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="group relative flex cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          <div className="relative w-24 h-24 xl:w-32 xl:h-32">
            <img
              src={technology.icon}
              alt={technology.name}
              className="absolute inset-0 w-full h-full object-cover rounded-full border border-gray-500 transition duration-300 ease-in-out hover:brightness-70"
            />
          </div>
          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 text-white">
            <div className="bg-black bg-opacity-50 rounded-lg p-2 backdrop-blur-sm">
              {technology.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
