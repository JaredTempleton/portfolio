import React from "react";

function Header () {
    return (
        <div id="Header">
            <div>
                <code>Hi, my name is </code>
                <code>Jared Templeton</code>
            </div>
            <button>
            <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/JaredTempleton"
                    alt="Link to my github">
                <code>Check out my Github</code>
            </a>
            </button>
        </div>
    )
}

export default Header;