import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import React from "react";

// Type assertions to ensure icons are treated as valid React components
const FaLinkedinInIcon = FaLinkedinIn as unknown as React.FC;
const FaGithubIcon = FaGithub as unknown as React.FC;

const LeftSide: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/hassan-iqbal-31b469328/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center 
          justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaLinkedinInIcon />
          </span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Hassands-ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center 
          justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaGithubIcon />
          </span>
        </a>
      </div>

      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;
