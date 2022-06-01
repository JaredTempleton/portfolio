import React, { useState } from "react";

import Header from "./Header"
import About from "./About"
import Resume from "./Resume";
import Contact from "./Contact"

const Home = () => {
    const [showPage, setShowPage] = useState("home");

    return (
        <>
           <Header id="Header" />
           <About id="About" />
           <Resume id ="Resume"/>
           <Contact id="Contact"/>
        </>
    )
}

export default Home;