import React from "react";

import Header from "./Header"
import About from "./About"
import Contact from "./Contact"

const Home = () => {
    return (
        <>
           <Header id="Header" />
           <About id="About" />
           <Contact />
        </>
    )
}

export default Home;