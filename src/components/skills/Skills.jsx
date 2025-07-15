import React from 'react'
import "./skills.css";
import Frontend from './Frontend';
import Framework from './Framework';
import Lecskills from './Lecskills';

const Skills = ({isDarkMode}) => {
    return (
        <section
            className={`skills section ${isDarkMode ? "dark-mode" : "light-mode"}`}
            id="skills"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-easing="linear"
            data-aos-duration="2000"
        >
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My stack level</span>
            <div className="skills__marquee-wrapper">
                <div className="skills__marquee container">
                    <div className="marquee-row row-1"><Frontend/></div>
                    <div className="marquee-row row-2"><Framework/></div>
                    <div className="marquee-row row-3"><Lecskills/></div>
                </div>
            </div>
        </section>
    )
}

export default Skills;
