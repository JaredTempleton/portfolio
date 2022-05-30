import React from "react";

function Header () {
    return (
        <div id="Header">
            <div>
                <p>Hi, my name is </p>
                <h1>Jared Templeton</h1>
            </div>
            <button>
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