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
                        <br />
                        <code className="italic text-sm text-lightblue_vs">Full Stack Web Development Boot Camp</code>
                        <br />
                        <code className="text-xs text-brown_vs">(December 2021 - June 2022)</code>
                    </div>
                </div>
                <div className="flex flex-row pt-10">
                    <div className="w-1/4">
                        <code className="text-yellow_vs">Work</code>
                    </div>
                    <div className="w-3/4">
                        <code className="text-blue_vs">Shift Leader</code>
                        <br />
                        <code className="italic text-sm text-lightblue_vs">Chili's Grill and Bar - Trinity, Florida</code>
                        <br />
                        <code className="text-xs text-brown_vs">June 2015 - Present</code>
                        <br />
                        <code className="text-sm">
                        <br />• Exhibited exceptional customer service skills by being friendly, knowledgeable, and accommodating
                        <br />• Helped handle customer conflict resolution in a professional and timely manner while keeping it beneficial for the company
                        <br />• High proficiency in multitasking displayed to maintain a high standard, professional, and timely dining service
                        <br />• Fast decision making, high attention to detail, resourcefulness, and interpersonal skills were strengthened immensely with this job
                        </code>
                    </div>
                </div>
                <div className="flex flex-row pt-10 flex-wrap">
                    <div className="w-1/4">
                        <code className="text-yellow_vs">Skills</code>
                    </div>
                    <div className="w-3/4">
                        <code className="text-sm">
                            <br />• Organization
                            <br />• Communication
                            <br />• Teamwork
                            <br />• Problem solving
                            <br />• Creative thinking
                            <br />• Decision making
                        </code>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;