import React from "react";

function Header () {
    return (
        <div id="Header" className="mx-12 lg:mx-60 pt-60 items-center justify-center lg:w-1/2 text-justify">
            <div className="flex flex-col">
                <p className="text-lightblue_vs">Hi, my name is </p>
                <h1 className="text-[#e6f1ff] text-7xl mt-5">Jared Templeton</h1>
            </div>
            <button className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2">
            <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/JaredTempleton"
                    alt="Link to my github">
                Check out my Github
            </a>
            </button>
        </div>
    )
}

export default Header;