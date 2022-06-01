import React from "react";
import { PaperClipIcon } from "@heroicons/react/outline"

const Resume = () => {
    return (
        <div id="Resume" className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto">
            <div>
                <div className="table">
                <PaperClipIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
                    <pre className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
                        Resume
                    </pre>
                    <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full">
                    </div>
                </div>
            </div>
            <div className="text-[#a2aabc] text-lg mt-5">
                <div className="flex flex-row">
                    <div className="w-1/4">
                        <pre className="text-yellow_vs">Education</pre>
                    </div>
                    <div className="w-3/4">
                        <pre className="text-blue_vs">Universty of Central Florida</pre>
                        <pre className="italic text-sm text-lightblue_vs">Full Stack Web Development Boot Camp</pre>
                        <pre className="text-xs text-brown_vs">(December 2021 - June 2022)</pre>
                    </div>
                </div>
                <div className="flex flex-row pt-10">
                    <div className="w-1/4">
                        <pre className="text-yellow_vs">Work</pre>
                    </div>
                    <div className="w-3/4">
                        <pre className="text-blue_vs">Shift Leader</pre>
                        <pre className="italic text-sm text-lightblue_vs">Chili's Grill and Bar - Trinity, Florida</pre>
                        <pre className="text-xs text-brown_vs">June 2015 - Present</pre>
                        <pre className="text-sm">What I did there</pre>
                        <pre className="text-sm">What I did there</pre>
                        <pre className="text-sm">What I did there</pre>
                        <pre className="text-sm">What I did there</pre>
                    </div>
                </div>
                <div className="flex flex-row pt-10 flex-wrap">
                    <div className="w-1/4">
                        <pre className="text-yellow_vs">Skills</pre>
                    </div>
                    <div className="w-3/4">
                        <pre className="text-sm">My skills</pre>
                        <pre className="text-sm">My skills</pre>
                        <pre className="text-sm">My skills</pre>
                        <pre className="text-sm">My skills</pre>
                        <pre className="text-sm">My skills</pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;