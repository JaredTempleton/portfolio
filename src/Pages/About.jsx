import React from "react";

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
        <div id="About" className="mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify">
            <div>
                <div className="table">
                    <pre className="mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify">
                        About Me
                    </pre>
                    <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
                </div>
            </div>
            <div className="text-[#b9bca2] text-lg mt-5">
                <pre>
                    Hello! My name is Jared Templeton. Looking for career change I found web development.
                    After enlisting in the Universty of Central Florida's Full Stack boot camp I knew this was the line of work I wanted to execute.
                    Now hoping for a chance to step into the development world and make some extraordinary responsive web apps.
                    While no where near an expert, I strive to learn and educate myself more everyday and hope to get started with a company soon.
                </pre>
                <pre>Here are some technologies I currently work with: </pre>
                <div className="grid grid-cols-3 gap-2 text-sm mt-5 text-brown_vs">
                    <div className="flex flex-row  mb-3">
                        <img
                            src={JavaScript}
                            alt=""
                            className="h-5 w-5 ml-3 mr-4 text-yellow_vs" />
                            <pre>JavaScript</pre>
                    </div>
                    <div className="flex flex-row  mb-3">
                        <img
                            src={ReactLogo}
                            alt=""
                            className="h-5 w-5 ml-3 mr-4 text-yellow_vs" />
                            <pre>React</pre>
                    </div>
                    <div className="flex flex-row  mb-3">
                        <img
                            src={NodeJS}
                            alt=""
                            className="h-5 w-5 ml-3 mr-4 text-yellow_vs" />
                            <pre>NodeJS</pre>
                    </div>
                    <div className="flex flex-row  mb-3">
                        <img
                            src={Sql}
                            alt=""
                            className="h-5 w-5 ml-3 mr-4 text-yellow_vs" />
                            <pre>SQL</pre>
                    </div>
                    <div className="flex flex-row  mb-3">
                        <img
                            src={MongoDB}
                            alt=""
                            className="h-5 w-5 ml-3 mr-4 text-yellow_vs" />
                            <pre>MongoDB</pre>
                    </div>
                    <div className="flex flex-row  mb-3">
                        <img
                            src={Tailwind}
                            alt=""
                            className="h-5 w-5 ml-3 mr-4 text-yellow_vs" />
                            <pre>TailwindCSS</pre>
                    </div>
                    <div className="flex flex-row  mb-3">
                        <img
                            src={Styled}
                            alt=""
                            className="h-5 w-5 ml-3 mr-4 text-yellow_vs" />
                            <pre>Styled Components</pre>
                    </div>
                    <div className="flex flex-row  mb-3">
                        <img
                            src={Python}
                            alt=""
                            className="h-5 w-5 ml-3 mr-4 text-yellow_vs" />
                            <pre>Python</pre>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;