import React from "react";
import "./home.css"
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'
import Skills from "./Skills/Skills";

const Home = ({isDarkMode}) => {
    return (
        <>
            <section className={`home section ${isDarkMode ? "dark-mode" : "light-mode"}`} id="home" data-aos="fade-up"
                     data-aos-anchor-placement="center-bottom" data-aos-easing="linear" data-aos-duration="500">
                <div className="home__container container grid">
                    <div className="home__content grid">
                        <Social/>
                        <div className="home__img" data-aos="fade-left" data-aos-duration="3000"></div>
                        <Data/>
                    </div>
                    {/*<ScrollDown />*/}
                </div>
            </section>
            <Skills/>
        </>
    )
}

export default Home