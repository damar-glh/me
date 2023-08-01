import React from 'react'
import "./skills.css";
import Frontend from './Frontend';
import Framework from './Framework';
import Lecskills from './Lecskills'

const Skills = ({isDarkMode}) => {
  return (
    <section className={`skills section ${isDarkMode ? "dark-mode" : "light-mode"}`} id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My stack level</span>
        <div className="skills__container container grid">
            <Frontend />
            <Framework />
            <Lecskills />
        </div>
    </section>
  )
}

export default Skills