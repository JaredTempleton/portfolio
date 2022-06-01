import { React, useState } from "react";

import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";
import JS from "../assets/icons/JS.png"

import Git from "../assets/icons/GitHubLogo.png"
import LinkedIn from "../assets/icons/LinkedInLogo.png"
import Mail from "../assets/icons/MailLogo.png"

const Sidebar = () => {
    const [showWeb, SetShowWeb] = useState(true);
    const [showProjects, SetShowProjects] = useState(true);

    const Menu = () => (
        <div>
            <a target="_blank" rel="noreferrer" href="https://macro-matics.herokuapp.com/">
                <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
                    <img
                        src={JS}
                        alt="JavaScript Icon"
                        className="w-7 mr-1  ml-5 text-yellow_vs"
                    />
                    <p>RefreshR</p>
                </div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://macro-matics.herokuapp.com/">
                <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
                    <img
                        src={JS}
                        alt="JavaScript Icon"
                        className="w-7 mr-1  ml-5 text-yellow_vs"
                    />
                    <p>MacroMatics</p>
                </div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://macro-matics.herokuapp.com/">
                <div>
                    <img
                        src={JS}
                        alt="JavaScript Icon"
                        className="w-7 mr-1  ml-5 text-yellow_vs"
                    />
                    <p>Third Project</p>
                </div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://macro-matics.herokuapp.com/">
                <div>
                    <img
                        src={JS}
                        alt="JavaScript Icon"
                        className="w-7 mr-1  ml-5 text-yellow_vs"
                    />
                    <p>Fourth Project</p>
                </div>
            </a>
        </div>
    );

    return (
        <div className="text-[#a2aabc] text-lg mt-5 flex bg-[#262526] h-full">
      <div>
        <div
          className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
          onClick={() => SetShowProjects(!showProjects)}
        >
          {showProjects ? (
            <ChevronDownIcon className="w-7 mr-1" />
          ) : (
            <ChevronRightIcon className="w-7 mr-1" />
          )}
          <p>Projects</p>
        </div>
        {showProjects ? (
          <>
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowWeb(!showWeb)}
            >
              {showWeb ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>Web</p>
            </div>
            {showWeb ? <Menu /> : null}
          </>
        ) : null}
        <div className="absolute inset-x-0 bottom-10 ">
          <div className="flex px-6 space-x-7">
            <a href="https://github.com/JaredTempleton" target="_blank" rel="noreferrer">
              <img
                src={Git}
                alt="GitHub"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a href="https://www.linkedin.com/in/jared-templeton-8629a9232/" target="_blank" rel="noreferrer">
              <img
                src={LinkedIn}
                alt="Linkedin"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a href="mailto:jaredunicycles@gmail.com">
              <img
                src={Mail}
                alt="Mail"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Sidebar