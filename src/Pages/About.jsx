import React from "react";
import { UserCircleIcon } from "@heroicons/react/solid";

import JavaScript from "../assets/icons/JSLogo.png";
import MongoDB from "../assets/icons/MongoDBLogo.png";
import NodeJS from "../assets/icons/NodeJSLogo.png";
import Python from "../assets/icons/PythonLogo.png";
import ReactLogo from "../assets/icons/ReactLogo.png";
import Sql from "../assets/icons/SqlLogo.png";
import Styled from "../assets/icons/StyledComponentsLogo.png";
import Tailwind from "../assets/icons/TailwindLogo.png";

const About = () => {
    return (
        <div id="About"
            className="mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-lg text-justify">
            <div>
                <div className="table">
                <UserCircleIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
                    <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
                        About Me
                    </code>
                    <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
                </div>
                <div className="text-brown_vs text-lg mt-5">
                    <code>
                        Hello! My name is Jared Templeton. Looking for career change I found web development.
                        After enlisting in the University of Central Florida's Full Stack boot camp I knew this was the career for me.
                        Now hoping for a chance to step into the development world and make some extraordinary responsive web apps.
                        While no where near an expert, I'm passionate about this field and strive to learn and educate myself more everyday so I can get started with a company soon.
                    </code>
                    <br />
                    <br />
                    <code>Here are some technologies I currently work with: </code>
                    <div className="grid grid-cols-4 gap-2 text-sm mt-5 text-brown_vs">
                        <div className="flex flex-row  mb-3">
                            <img
                                src={JavaScript}
                                alt=""
                                className="h-5 w-5 ml-3 mr-4 text-yellow_vs" />
                            <code>JavaScript</code>
                        </div>
                        <div className="flex flex-row  mb-3">
                            <img
                                src={ReactLogo}
                                alt=""
                                className="h-5 w-5 ml-3 mr-4 text-yellow_vs" />
                            <code>React</code>
                        </div>
                        <div className="flex flex-row  mb-3">
                            <img
                                src={NodeJS}
                                alt=""
                                className="h-5 w-5 ml-3 mr-4 text-yellow_vs" />
                            <code>NodeJS</code>
                        </div>
                        <div className="flex flex-row  mb-3">
                            <img
                                src={Sql}
                                alt=""
                                className="h-5 w-5 ml-3 mr-4 text-yellow_vs" />
                            <code>SQL</code>
                        </div>
                        <div className="flex flex-row  mb-3">
                            <img
                                src={MongoDB}
                                alt=""
                                className="h-5 w-5 ml-3 mr-4 text-yellow_vs" />
                            <code>MongoDB</code>
                        </div>
                        <div className="flex flex-row  mb-3">
                            <img
                                src={Tailwind}
                                alt=""
                                className="h-5 w-5 ml-3 mr-4 text-yellow_vs" />
                            <code>TailwindCSS</code>
                        </div>
                        <div className="flex flex-row  mb-3">
                            <img
                                src={Styled}
                                alt=""
                                className="h-5 w-5 ml-3 mr-4 text-yellow_vs" />
                            <code>Styled Components</code>
                        </div>
                        <div className="flex flex-row  mb-3">
                            <img
                                src={Python}
                                alt=""
                                className="h-5 w-5 ml-3 mr-4 text-yellow_vs" />
                            <code>Python</code>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;