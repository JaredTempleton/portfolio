import React from "react";
import { PaperClipIcon } from "@heroicons/react/outline"

const Resume = () => {
    return (
        <div id="Resume" className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto">
            <div>
                <div className="table">
                    <PaperClipIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
                    <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
                        Resume
                    </code>
                    <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full">
                    </div>
                </div>
            </div>
            <div className="text-[#a2aabc] text-lg mt-5">
                <div className="flex flex-row">
                    <div className="w-1/4">
                        <code className="text-yellow_vs">Education</code>
                    </div>
                    <div className="w-3/4">
                        <code className="text-blue_vs">Universty of Central Florida</code>
                        <code className="italic text-sm text-lightblue_vs">Full Stack Web Development Boot Camp</code>
                        <code className="text-xs text-brown_vs">(December 2021 - June 2022)</code>
                    </div>
                </div>
                <div className="flex flex-row pt-10">
                    <div className="w-1/4">
                        <code className="text-yellow_vs">Work</code>
                    </div>
                    <div className="w-3/4">
                        <code className="text-blue_vs">Shift Leader</code>
                        <code className="italic text-sm text-lightblue_vs">Chili's Grill and Bar - Trinity, Florida</code>
                        <code className="text-xs text-brown_vs">June 2015 - codesent</code>
                        <code className="text-sm">What I did there</code>
                        <code className="text-sm">What I did there</code>
                        <code className="text-sm">What I did there</code>
                        <code className="text-sm">What I did there</code>
                    </div>
                </div>
                <div className="flex flex-row pt-10 flex-wrap">
                    <div className="w-1/4">
                        <code className="text-yellow_vs">Skills</code>
                    </div>
                    <div className="w-3/4">
                        <code className="text-sm">My skills</code>
                        <code className="text-sm">My skills</code>
                        <code className="text-sm">My skills</code>
                        <code className="text-sm">My skills</code>
                        <code className="text-sm">My skills</code>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;