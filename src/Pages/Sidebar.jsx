import { React, useState } from "react";

const Sidebar = () => {
    const [showWeb, SetShowWebList] = useState(true);
    const [showProjects, SetShowProjectsList] = useState(true);

    const Menu = () => (
        <div>
            <a href="/">
                <div>
                    <img
                        src={ }
                        alt="JavaScript Icon"
                    />
                    <p>RefreshR</p>
                </div>
            </a>
            <a href="/">
                <div>
                    <img
                        src={ }
                        alt="JavaScript Icon"
                    />
                    <p>MacroMatics</p>
                </div>
            </a>
            <a href="/">
                <div>
                    <img
                        src={ }
                        alt="JavaScript Icon"
                    />
                    <p>Third Project</p>
                </div>
            </a>
            <a href="/">
                <div>
                    <img
                        src={ }
                        alt="JavaScript Icon"
                    />
                    <p>Fourth Project</p>
                </div>
            </a>
        </div>
    );

    return (
        <></>
    );
};