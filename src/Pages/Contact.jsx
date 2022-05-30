import React from "react";

const Contact = () => {
    return (
        <div id="Contact" className="pb-72 mt-36">
            <div className="table mx-12 lg:mx-60">
                <h3 className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
                    Get In Touch with Me</h3>
            </div>
            <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full">
                <p className="text-[#a2aabc] text-lg mt-5 mx-12 lg:mx-60 flex flex-col items-center text-justify">
                    Currently looking for a new oppurtunitiy, feel free to contact me with the button below. I'll get back with you shortly.
                </p>
                <button className=" border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2">
                    <a href="mailto:jaredunicycles@gmail.com">
                        Contact Me
                    </a>
                </button>
            </div>
        </div>
    );
}
export default Contact;